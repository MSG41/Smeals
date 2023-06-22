import axios from 'axios'

const baseURL = 'https://www.themealdb.com/api/json/v1/1'

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

export async function filterMeals(params: Record<string, string>) {
  try {
    const response = await axios.get(`${baseURL}/filter.php`, {
      params
    })
    const meals = response.data.meals || []
    return meals
  } catch (error) {
    console.error('Failed to fetch filtered meals:', error)
    throw new Error('Failed to fetch filtered meals')
  }
}

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

export async function fetchMealById(id: string) {
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

// Adding the lists for the areas and the ingredients (to populate the dropdowns).
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

// Filtering by area and ingredient.
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
