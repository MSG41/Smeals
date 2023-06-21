import { defineStore } from 'pinia'
import { ref, type Ref } from 'vue'
import { searchMeal } from '@/services/mealService'
import type { Meal } from '@/types/types'

export const useHomeStore = defineStore('home', {
  state: (): {
    meals: Meal[];
    isLoading: boolean;
    searchQuery: string;
  } => ({
    meals: [],
    isLoading: false,
    searchQuery: '',
  }),
  actions: {
    async fetchMeals(): Promise<void> {
      if (this.searchQuery.trim() === '') {
        this.meals = []
        return
      }

      this.isLoading = true
      try {
        this.meals = await searchMeal(this.searchQuery)
      } catch (error) {
        console.error('Failed to search meals:', error)
      } finally {
        this.isLoading = false
      }
    },
  },
})
