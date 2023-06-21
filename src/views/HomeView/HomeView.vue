<template>
  <div class="home-view">
    <Search v-model="store.searchQuery" />

    <div class="filter-dropdowns">
      <FilterDropdowns />
    </div>

    <div v-if="!store.searchQuery && !hasFiltersSelected">
      <RandomCard />
    </div>

    <div class="meals" v-if="store.searchQuery || hasFiltersSelected">
      <MealCard
        v-for="meal in filteredMeals"
        :key="meal.idMeal"
        :meal="meal"
        :selectedArea="store.selectedArea"
        :selectedIngredient="store.selectedIngredient"
        :selectedCategory="store.selectedCategory"
      />
    </div>

    <div v-if="store.isLoading" class="loading">Loading...</div>
  </div>
</template>

<script lang="ts">
import { computed } from 'vue'
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
    FilterDropdowns,
  },
  setup() {
    const store = useHomeStore()

    const filteredMeals = computed(() => {
      if (store.searchQuery) {
        return store.meals.filter((meal) =>
          meal.name?.toLowerCase().includes(store.searchQuery.toLowerCase())
        )
      }
      return store.meals
    })

    const hasFiltersSelected = computed(() => {
      return store.selectedArea !== '' || store.selectedIngredient !== '' || store.selectedCategory !== ''
    })

    return {
      store,
      filteredMeals,
      hasFiltersSelected,
    }
  },
}
</script>

<style scoped lang="scss">
@import './HomeViewStyles.scss';
</style>
