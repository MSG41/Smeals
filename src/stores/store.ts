import { defineStore } from 'pinia'
import { getAreas, getCategories, filterMeals } from '@/services/mealService'
import type { Meal } from '@/types/types'

export const useHomeStore = defineStore('home', {
  state: () => ({
    meals: [] as Meal[],
    isLoading: false,
    areas: [] as string[],
    categories: [] as string[],
    selectedArea: '',
    selectedCategory: ''
  }),
  actions: {
    async fetchData() {
      this.isLoading = true
      try {
        ;[this.areas, this.categories] = await Promise.all([getAreas(), getCategories()])
      } catch (error) {
        console.error('Failed to fetch areas and categories:', error)
      } finally {
        this.isLoading = false
      }
    },

    async fetchMeals() {
      this.isLoading = true
      try {
        const params: Record<string, string> = {}

        if (this.selectedCategory) {
          params.c = this.selectedCategory
        }

        if (this.selectedArea) {
          params.a = this.selectedArea
        }

        this.meals = await filterMeals(params)
      } catch (error) {
        console.error('Failed to fetch meals:', error)
      } finally {
        this.isLoading = false
      }
    },

    setSelectedArea(area: string) {
      this.selectedArea = area
      this.fetchMeals()
    },

    setSelectedCategory(category: string) {
      this.selectedCategory = category
      this.fetchMeals()
    }
  },
  getters: {
    showRandomCard(): boolean {
      return this.meals.length === 0 && !this.selectedArea && !this.selectedCategory
    }
  }
})
