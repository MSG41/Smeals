// checking if the meal title, meal details, and meal image are rendered correctly.

import { describe, it, expect } from 'vitest'
import { mount, VueWrapper } from '@vue/test-utils'
import MealCard from './MealCard.vue'
import axios from 'axios'

describe('MealCard', () => {
  let wrapper: VueWrapper<any>

  it('renders meal title correctly', async () => {
    // Fetch meal data from the API
    const response = await axios.get<any>(
      'https://www.themealdb.com/api/json/v1/1/lookup.php?i=52772'
    )
    const meal = response.data.meals[0]

    // Mount the component with the fetched meal data
    wrapper = mount(MealCard, {
      props: { meal }
    })

    // Check that the text of the h2 element contains the meal title
    const h2Element = wrapper.find('h2')
    expect(h2Element.exists()).toBe(true)
    expect(h2Element.text()).toContain(meal.strMeal)
  })

  it('renders meal details correctly', async () => {
    // Fetch meal data from the API
    const response = await axios.get<any>(
      'https://www.themealdb.com/api/json/v1/1/lookup.php?i=52772'
    )
    const meal = response.data.meals[0]

    // Mount the component with the fetched meal data
    wrapper = mount(MealCard, {
      props: { meal }
    })

    // Check that the meal details are rendered correctly
    const categoryPill = wrapper.find('.category-pill')
    const areaPill = wrapper.find('.area-pill')

    expect(categoryPill.exists()).toBe(true)
    expect(categoryPill.text()).toContain(meal.strCategory)

    expect(areaPill.exists()).toBe(true)
    expect(areaPill.text()).toContain(meal.strArea)
  })

  it('renders image correctly', async () => {
    // Fetch meal data from the API
    const response = await axios.get<any>(
      'https://www.themealdb.com/api/json/v1/1/lookup.php?i=52772'
    )
    const meal = response.data.meals[0]

    // Mount the component with the fetched meal data
    wrapper = mount(MealCard, {
      props: { meal }
    })

    // Check that the image is rendered correctly
    const image = wrapper.find('img')

    expect(image.exists()).toBe(true)
    expect(image.attributes('src')).toContain(meal.strMealThumb)
    expect(image.attributes('alt')).toContain(meal.strMeal)
  })
})
