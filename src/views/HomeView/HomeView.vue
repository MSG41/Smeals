<template>
  <div class="home-view">
    <div class="header">
      <img src="@/assets/banner.jpg" alt="Cooking Recipes" class="banner-image" />
      <Search class="search-bar" />
      <div class="filter-dropdowns" v-if="isDataLoaded">
        <FilterDropdowns
          :selectedArea="store.selectedArea"
          :selectedCategory="store.selectedCategory"
          @updateArea="store.setSelectedArea"
          @updateCategory="store.setSelectedCategory"
        />
      </div>
    </div>

    <div class="meals-container" v-if="hasResults && !shouldShowRandomCard">
      <MealCard
        v-for="meal in store.meals"
        :key="meal.idMeal"
        :meal="meal"
        :category="meal.strCategory"
        :area="meal.strArea"
      />
    </div>

    <div v-if="shouldShowRandomCard">
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
    const store = useHomeStore()
    const hasResults = computed(() => {
      return store.meals.length > 0
    })

    const isDataLoaded = ref(false)

    onMounted(async () => {
      await store.fetchData()
      isDataLoaded.value = true
    })

    const shouldShowRandomCard = computed(() => {
      return (
        !hasResults.value &&
        isDataLoaded.value &&
        store.selectedArea === '' &&
        store.selectedCategory === ''
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
