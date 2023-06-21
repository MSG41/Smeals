import { defineStore } from 'pinia'
import { searchMeal, getAreas, getIngredients, getCategories, filterByArea, filterByIngredient, filterByCategory } from '@/services/mealService'
import type { Meal } from '@/types/types'

export const useHomeStore = defineStore('home', {
  state: (): {
    meals: Meal[]
    isLoading: boolean
    searchQuery: string
    areas: string[]
    ingredients: string[]
    categories: string[]
    selectedArea: string
    selectedIngredient: string
    selectedCategory: string
  } => ({
    meals: [],
    isLoading: false,
    searchQuery: '',
    areas: [],
    ingredients: [],
    categories: [],
    selectedArea: '',
    selectedIngredient: '',
    selectedCategory: '',
  }),
  actions: {
    async fetchAreas(): Promise<void> {
      try {
        const data = await getAreas()
        this.areas = data || []
      } catch (error) {
        console.error('Failed to fetch areas:', error)
      }
    },
    async fetchIngredients(): Promise<void> {
      try {
        const data = await getIngredients()
        this.ingredients = data || []
      } catch (error) {
        console.error('Failed to fetch ingredients:', error)
      }
    },
    async fetchCategories(): Promise<void> {
      try {
        const data = await getCategories()
        this.categories = data || []
      } catch (error) {
        console.error('Failed to fetch categories:', error)
      }
    },
    async fetchMeals(): Promise<void> {
      this.isLoading = true
      try {
        let meals
        const { selectedArea, selectedIngredient, selectedCategory, searchQuery } = this
        if (!searchQuery && (selectedArea || selectedIngredient || selectedCategory)) {
          if (selectedArea) {
            meals = await filterByArea(selectedArea)
          } else if (selectedIngredient) {
            meals = await filterByIngredient(selectedIngredient)
          } else if (selectedCategory) {
            meals = await filterByCategory(selectedCategory)
          }
        } else {
          meals = await searchMeal(searchQuery)
        }
        this.meals = meals || []
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
    setSelectedIngredient(ingredient: string) {
      this.selectedIngredient = ingredient
      this.fetchMeals()
    },
    setSelectedCategory(category: string) {
      this.selectedCategory = category
      this.fetchMeals()
    },
  },
  getters: {
    filteredMeals(state) {
      return state.meals.filter((meal) =>
        meal.name?.toLowerCase().includes(state.searchQuery.toLowerCase())
      )
    },
  },
})
