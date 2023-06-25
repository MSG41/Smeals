// A set of functions that interact with an external API (The Meal DB API) to fetch meal-related data.
import axios from 'axios'
import { type Meal } from '@/types/types'

const baseURL = 'https://www.themealdb.com/api/json/v1/1'

// Fetches a random meal from the server
export async function getRandomMeal() {
  try {
    const response = await axios.get(`${baseURL}/random.php`)
    const meal = response.data.meals?.[0]
    if (meal) {
      return meal
    } else {
      throw new Error('No random meal found')
    }
  } catch (error) {
    console.error('Failed to fetch random meal:', error)
    throw new Error('Failed to fetch random meal')
  }
}

// Searches for meals based on a query
export async function searchMeal(query: string) {
  try {
    const response = await axios.get(`${baseURL}/search.php`, {
      params: {
        s: query
      }
    })
    const meals = response.data.meals
    return meals || []
  } catch (error) {
    console.error('Failed to search meals:', error)
    throw new Error('Failed to search meals')
  }
}

// Fetches meals based on filter parameters
export async function filterMeals({ area = '', category = '' }: Record<string, string>) {
  try {
    let meals: Meal[] = []
    let filteredMeals: Meal[] = []

    // Get meals by category
    if (category) {
      const responseCategory = await axios.get(`${baseURL}/filter.php`, {
        params: { c: category }
      })
      meals = responseCategory.data.meals || []
    }

    // If area is also provided, filter the meals by area
    if (area && meals.length > 0) {
      const responseArea = await axios.get(`${baseURL}/filter.php`, {
        params: { a: area }
      })
      const areaMeals = responseArea.data.meals || []
      filteredMeals = meals.filter((meal: Meal) =>
        areaMeals.find((m: Meal) => m.idMeal === meal.idMeal)
      )
    }

    // If there's no category, get meals by area
    if (!category && area) {
      const responseArea = await axios.get(`${baseURL}/filter.php`, {
        params: { a: area }
      })
      meals = responseArea.data.meals || []
    }

    return filteredMeals.length > 0 ? filteredMeals : meals
  } catch (err) {
    console.error('Failed to fetch meals:', err)
    throw err
  }
}

// Fetches details of a specific meal by ID
export async function getMealDetails(id: string) {
  try {
    const response = await axios.get(`${baseURL}/lookup.php`, {
      params: {
        i: id
      }
    })
    const meal = response.data.meals?.[0]
    if (meal) {
      return meal
    } else {
      throw new Error('No meal details found')
    }
  } catch (error) {
    console.error('Failed to fetch meal details:', error)
    throw new Error('Failed to fetch meal details')
  }
}

// Fetches the list of areas
export async function getAreas() {
  try {
    const response = await axios.get(`${baseURL}/list.php`, {
      params: {
        a: 'list'
      }
    })
    const areas = response.data.meals.map((meal: { strArea: string }) => meal.strArea)
    return areas || []
  } catch (error) {
    console.error('Failed to fetch areas:', error)
    throw new Error('Failed to fetch areas')
  }
}

// Fetches the list of categories
export async function getCategories() {
  try {
    const response = await axios.get(`${baseURL}/list.php`, {
      params: {
        c: 'list'
      }
    })
    const categories = response.data.meals.map((meal: { strCategory: string }) => meal.strCategory)
    return categories || []
  } catch (error) {
    console.error('Failed to fetch categories:', error)
    throw new Error('Failed to fetch categories')
  }
}

// Filters meals by area
export async function filterByArea(area: string) {
  try {
    const response = await axios.get(`${baseURL}/filter.php`, {
      params: {
        a: area
      }
    })
    const meals = response.data.meals || []
    return meals
  } catch (error) {
    console.error(`Failed to fetch meals from area ${area}:`, error)
    throw new Error(`Failed to fetch meals from area ${area}`)
  }
}

// Filters meals by category
export async function filterByCategory(category: string) {
  try {
    const response = await axios.get(`${baseURL}/filter.php`, {
      params: {
        c: category
      }
    })
    const meals = response.data.meals || []
    return meals
  } catch (error) {
    console.error(`Failed to fetch meals with category ${category}:`, error)
    throw new Error(`Failed to fetch meals with category ${category}`)
  }
}
