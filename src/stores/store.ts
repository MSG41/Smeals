
// One consistent source of fetching data from the server. 

// This approach is more maintainable because it concentrates all the data-fetching logic in the store and uses the store as the single source of truth for data.


import { defineStore } from 'pinia'
import {
  getAreas,
  getCategories,
  filterMeals,
  filterByArea,
  filterByCategory
} from '@/services/mealService'
import { searchMeal } from '@/services/mealService'
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
        const meals: Meal[] = []

        if (this.selectedCategory && this.selectedArea) {
          // Fetch meals filtered by category
          const categoryMeals = await filterByCategory(this.selectedCategory)

          // Fetch meals filtered by area
          const areaMeals = await filterByArea(this.selectedArea)

          // Find the meals that match both category and area
          for (const meal of categoryMeals) {
            if (areaMeals.some((areaMeal: Meal) => areaMeal.idMeal === meal.idMeal)) {
              meals.push(meal)
            }
          }
        } else if (this.selectedCategory) {
          meals.push(...(await filterByCategory(this.selectedCategory)))
        } else if (this.selectedArea) {
          meals.push(...(await filterByArea(this.selectedArea)))
        } else {
          // No category or area selected, fetch all meals
          meals.push(...(await filterMeals({})))
        }

        this.meals = meals
      } catch (error) {
        console.error('Failed to fetch meals:', error)
      } finally {
        this.isLoading = false
      }
    },

    async searchMeals(query: string) {
      this.isLoading = true
      try {
        if (query.trim() === '') {
          this.fetchMeals()
          return
        }

        const meals = await searchMeal(query)
        this.meals = meals
      } catch (error) {
        console.error('Failed to search meals:', error)
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
