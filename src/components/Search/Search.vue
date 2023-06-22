<template>
  <div class="search-container">
    <input class="search-input" v-model="searchQuery" placeholder="Search meals..." />
    <div class="meals" v-if="hasMeals && !hasResults">
      <MealCard v-for="meal in meals" :key="meal.idMeal" :meal="meal" />
    </div>
    <div v-if="isLoading" class="loading">Loading...</div>
    <div v-if="hasResults && !hasMeals" class="no-results">No results found.</div>
  </div>
</template>

<script lang="ts">
import { ref, watch, computed } from 'vue'
import { searchMeal } from '@/services/mealService'
import MealCard from '@/components/MealCard/MealCard.vue'
import { useHomeStore } from '@/stores/store'
import type { Meal } from '@/types/types'

export default {
  components: {
    MealCard
  },

  setup() {
    const meals = ref<Meal[]>([])
    const isLoading = ref(false)
    const searchQuery = ref('')

    const store = useHomeStore()

    const fetchMeals = async () => {
      if (searchQuery.value.trim() === '') {
        meals.value = []
        store.fetchMeals()
        return
      }

      isLoading.value = true
      try {
        meals.value = await searchMeal(searchQuery.value)
        store.meals = meals.value
      } catch (error) {
        console.error('Failed to search meals:', error)
      } finally {
        isLoading.value = false
      }
    }

    watch(searchQuery, fetchMeals, { immediate: true })

    const hasMeals = computed(() => meals.value.length > 0)
    const hasResults = computed(() => {
      const hasMealsValue = hasMeals.value
      const hasSearchQuery = searchQuery.value.trim() !== ''
      return hasMealsValue || hasSearchQuery
    })

    return {
      searchQuery,
      meals,
      isLoading,
      hasMeals,
      hasResults
    }
  }
}
</script>

<style scoped lang="scss">
@import './SearchStyles.scss';
</style>
