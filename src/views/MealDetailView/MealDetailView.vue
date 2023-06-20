<template>
  <!-- Only display the meal details if a meal has been fetched -->
  <div v-if="meal" class="meal-detail-view">
    <h1>{{ meal.strMeal }}</h1>
    <img :src="meal.strMealThumb" alt="" />
    <!-- If a YouTube link is available, embed the video -->
    <div v-if="meal.strYoutube" class="video">
      <iframe
        :src="meal.strYoutube.replace('watch?v=', 'embed/')"
        frameborder="0"
        allowfullscreen
      ></iframe>
    </div>
    <!-- List of ingredients and their measures -->
    <div class="ingredients">
      <h3>Ingredients:</h3>
      <ul>
        <li v-for="(ingredient, i) in ingredients" :key="i">{{ ingredient }}</li>
      </ul>
    </div>
    <!-- Preparation instructions -->
    <div class="instructions">
      <h3>Instructions:</h3>
      <p>{{ meal.strInstructions }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { onMounted, ref, computed } from 'vue'
import { useRoute } from 'vue-router'
import { fetchMealById } from '@/services/mealService'
import type { Meal } from '@/types/types'

export default {
  name: 'MealDetailView',

  setup() {
    // Initialize refs for meal and the current route
    const meal = ref<Meal | null>(null)
    const route = useRoute()

    // Computed property for listing the ingredients and measures
    const ingredients = computed(() => {
      const result = []
      if (meal.value) {
        for (let i = 1; i <= 20; i++) {
          const ingredient = meal.value[`strIngredient${i}`]
          const measure = meal.value[`strMeasure${i}`]
          if (ingredient && measure) {
            result.push(`${ingredient} - ${measure}`)
          }
        }
      }
      return result
    })

    // Fetch a meal based on the ID in the route params
    const fetchMeal = async () => {
      const id = route.params.id as string | string[] | undefined
      if (!id) {
        return
      }

      const mealId = Array.isArray(id) ? id[0] : id
      try {
        const fetchedMeal = await fetchMealById(mealId)
        meal.value = fetchedMeal ?? null
      } catch (error) {
        console.error(`Failed to fetch meal with ID ${mealId}:`, error)
        meal.value = null
      }
    }

    onMounted(fetchMeal)

    return { meal, ingredients }
  }
}
</script>

<style scoped lang="scss">
/* Import custom styles for this component */
@import './MealDetailViewStyles.scss';
</style>
