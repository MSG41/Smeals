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

export async function getMealByName(name: string) {
  try {
    const meals = await searchMeal(name)
    if (meals.length > 0) {
      return meals[0]
    } else {
      throw new Error('No meals found with this name')
    }
  } catch (error) {
    console.error(`Failed to fetch meal with name ${name}:`, error)
    throw new Error(`Failed to fetch meal with name ${name}`)
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
