<template>
  <!-- Container for displaying a meal card -->
  <div v-if="meal" class="card-container">
    <div class="card">
      <div class="meal-card">
        <!-- Link to the meal details page -->
        <router-link :to="`/meal/${meal.idMeal}`">
          <!-- Meal image -->
          <img :src="meal.strMealThumb" :alt="meal.strMeal" />
        </router-link>

        <!-- Meal details -->
        <div class="meal-details">
          <h2>{{ meal.strMeal }}</h2>
          <!-- Display meal category -->
          <div class="category-pill">{{ mealDetails.category }}</div>
          <!-- Display meal area -->
          <div class="area-pill">{{ mealDetails.area }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue'
import type { PropType } from 'vue'
import type { Meal } from '@/types/types'
import { getMealDetails } from '@/services/mealService'

// Explanation of the code below:
//  The code sets up a component called "MealCard" that expects a required prop named meal, which should be an object conforming to the Meal type. Inside the setup function, a reactive reference mealDetails is created to hold the category and area values of the meal prop.
export default defineComponent({
  name: 'MealCard',
  props: {
    meal: {
      type: Object as PropType<Meal>,
      required: true
    }
  },
  setup(props) {
    const mealDetails = ref({
      category: props.meal.strCategory || '',
      area: props.meal.strArea || ''
    })

    // Fetch meal details on component mount
    onMounted(async () => {
      try {
        if (!props.meal.strCategory || !props.meal.strArea) {
          const updatedMeal = await getMealDetails(props.meal.idMeal)
          mealDetails.value.category = updatedMeal.strCategory || ''
          mealDetails.value.area = updatedMeal.strArea || ''
        }
      } catch (error) {
        console.error('Failed to fetch meal details:', error)
      }
    })

    return {
      mealDetails
    }
  }
})
</script>

<style scoped lang="scss">
@import './MealCardStyles.scss';
</style>
