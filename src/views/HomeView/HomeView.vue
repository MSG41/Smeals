<template>
  <div class="home-view">
    <div class="header">
      <!-- Display the header banner image -->
      <img src="@/assets/banner.jpg" alt="Cooking Recipes" class="banner-image" />
      <!-- Display the status message -->
      <div>{{ store.statusMessage }}</div>

      <!-- Render the Search component for searching meals -->
      <Search class="search-bar" />

      <div class="filter-dropdowns" v-if="isDataLoaded">
        <!-- Render the FilterDropdowns component for selecting areas and categories -->
        <FilterDropdowns
          :selectedArea="store.selectedArea"
          :selectedCategory="store.selectedCategory"
          @updateArea="store.setSelectedArea"
          @updateCategory="store.setSelectedCategory"
        />
      </div>
    </div>

    <div class="meals-container" v-if="hasResults && !shouldShowRandomCard">
      <!-- Render the MealCard component for each meal in the store's meals array -->
      <MealCard
        v-for="meal in store.meals"
        :key="meal.idMeal"
        :meal="meal"
        :category="meal.strCategory"
        :area="meal.strArea"
      />
    </div>

    <div v-if="shouldShowRandomCard">
      <!-- Render the RandomCard component when there are no results and no area/category selected -->
      <RandomCard />
    </div>
  </div>
</template>

<script lang="ts">
import { computed, onMounted, ref } from 'vue'
import { useHomeStore } from '@/stores/store'
import MealCard from '@/components/MealCard/MealCard.vue'
import RandomCard from '@/components/RandomCard/RandomCard.vue'
import Search from '@/components/Search/Search.vue'
import FilterDropdowns from '@/components/FilterDropdowns/FilterDropdowns.vue'

export default {
  components: {
    MealCard,
    RandomCard,
    Search,
    FilterDropdowns
  },
  setup() {
    // Create a store instance to access its state, actions, and getters.
    const store = useHomeStore()

    // Compute whether there are any results in the store's meals array
    const hasResults = computed(() => {
      return store.meals.length > 0
    })

    // Create a ref to track whether data is loaded
    const isDataLoaded = ref(false)

    // Fetch data from the server when the component is mounted
    onMounted(async () => {
      await store.fetchData()
      isDataLoaded.value = true
    })

    // Compute whether the RandomCard component should be shown
    const shouldShowRandomCard = computed(() => {
      return (
        !hasResults.value ||
        (store.meals.length === 0 && store.selectedArea === '' && store.selectedCategory === '')
      )
    })

    return {
      store,
      hasResults,
      isDataLoaded,
      shouldShowRandomCard
    }
  }
}
</script>

<style scoped lang="scss">
@import './HomeViewStyles.scss';
</style>
