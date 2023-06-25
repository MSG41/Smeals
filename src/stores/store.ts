import { defineStore } from 'pinia'
import {
  getAreas,
  getCategories,
  filterMeals,
  getRandomMeal,
  searchMeal
} from '@/services/mealService'
import type { Meal } from '@/types/types'

export const useHomeStore = defineStore('home', {
  state: () => ({
    meals: [] as Meal[],
    isLoading: false,
    areas: [] as string[],
    categories: [] as string[],
    selectedArea: '',
    selectedCategory: '',
    mealCount: 0,
    statusMessage: '',
    currentQuery: ''
  }),
  actions: {
    // Fetches a random meal
    async fetchRandomMeal(): Promise<Meal | null> {
      this.isLoading = true
      try {
        const meal = await getRandomMeal()
        return meal ?? null
      } catch (error) {
        console.error('Failed to fetch random meal:', error)
        return null
      } finally {
        this.isLoading = false
      }
    },

    // Fetches all areas and categories
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

    // Fetches meals based on current state
    async fetchMeals() {
      this.isLoading = true
      try {
        const filter = {
          category: this.selectedCategory,
          area: this.selectedArea
        }

        // If a category or area is selected, apply filter
        let meals: Meal[] =
          this.selectedCategory || this.selectedArea ? await filterMeals(filter) : []

        // If a search query is present, apply search on top of filters
        if (this.currentQuery.trim() !== '') {
          const searchResult = await searchMeal(this.currentQuery)
          meals =
            meals.length > 0
              ? meals.filter((meal) => searchResult.some((m: Meal) => m.idMeal === meal.idMeal))
              : searchResult
        }

        this.meals = meals
        this.mealCount = meals.length
        this.updateStatusMessage()
      } catch (error) {
        console.error('Failed to fetch meals:', error)
      } finally {
        this.isLoading = false
      }
    },

    // Updates the current search query and fetches meals
    searchMeals(query: string) {
      this.currentQuery = query
      this.fetchMeals()
    },

    // Updates the selected area and fetches meals
    setSelectedArea(area: string) {
      this.selectedArea = area
      this.fetchMeals()
    },

    // Updates the selected category and fetches meals
    setSelectedCategory(category: string) {
      this.selectedCategory = category
      this.fetchMeals()
    },

    // Updates the status message based on current state
    updateStatusMessage() {
      if (this.currentQuery.trim() || this.selectedArea || this.selectedCategory) {
        this.statusMessage = this.mealCount > 0 ? `Found ${this.mealCount} meals` : 'No meals found'
      } else {
        this.statusMessage = 'Please select a filter or search for meals'
      }
    }
  },

  getters: {
    // Decides whether to show the random card based on current state
    showRandomCard(): boolean {
      return this.meals.length === 0 && !this.selectedArea && !this.selectedCategory
    }
  }
})
