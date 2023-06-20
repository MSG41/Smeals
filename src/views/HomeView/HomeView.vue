<template>
  <div class="home-view">
    <input v-model="searchQuery" placeholder="Search meals..." />

    <div v-if="!searchQuery">
      <RandomCard />
    </div>

    <div class="meals" v-if="searchQuery">
      <MealCard v-for="meal in meals" :key="meal.idMeal" :meal="meal" />
    </div>

    <div v-if="isLoading" class="loading">Loading...</div>
  </div>
</template>

<script lang="ts">
import { ref, watch } from 'vue'
import { searchMeal } from '@/services/mealService'
import MealCard from '@/components/MealCard/MealCard.vue'
import RandomCard from '@/components/RandomCard/RandomCard.vue'
import type { Meal } from '@/types/types'

export default {
  components: {
    MealCard,
    RandomCard
  },

  setup() {
    const meals = ref<Meal[]>([])
    const isLoading = ref(false)
    const searchQuery = ref('')

    const fetchMeals = async () => {
      if (searchQuery.value.trim() === '') return
      isLoading.value = true
      try {
        meals.value = await searchMeal(searchQuery.value)
      } catch (error) {
        console.error('Failed to fetch meals:', error)
      } finally {
        isLoading.value = false
      }
    }

    watch(searchQuery, fetchMeals, { immediate: true })

    return {
      meals,
      isLoading,
      searchQuery
    }
  }
}
</script>

<style scoped lang="scss">
@import './HomeViewStyles.scss';
</style>
