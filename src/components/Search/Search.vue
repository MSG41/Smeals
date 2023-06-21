<template>
    <div class="search-container">
      <input class="search-input" v-model="searchQuery" placeholder="Search meals..." />
      <div class="meals" v-if="meals.length > 0">
        <MealCard v-for="meal in meals" :key="meal.idMeal" :meal="meal" />
      </div>
      <div v-if="isLoading" class="loading">Loading...</div>
    </div>
  </template>
  
  <script lang="ts">
  import { ref, watch } from 'vue'
  import { searchMeal } from '@/services/mealService'
  import MealCard from '@/components/MealCard/MealCard.vue'
  import type { Meal } from '@/types/types'
  
  export default {
    components: {
      MealCard
    },
  
    setup() {
      const meals = ref<Meal[]>([])
      const isLoading = ref(false)
      const searchQuery = ref('')
  
      const fetchMeals = async () => {
        if (searchQuery.value.trim() === '') {
          meals.value = []
          return
        }
  
        isLoading.value = true
        try {
          meals.value = await searchMeal(searchQuery.value)
        } catch (error) {
          console.error('Failed to search meals:', error)
        } finally {
          isLoading.value = false
        }
      }
  
      watch(searchQuery, fetchMeals, { immediate: true })
  
      return {
        searchQuery,
        meals,
        isLoading
      }
    }
  }
  </script>
  
  <style scoped lang="scss">
  @import './SearchStyles.scss';
  </style>
  