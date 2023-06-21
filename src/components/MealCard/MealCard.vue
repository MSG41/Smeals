<template>
  <div class="card-container">
    <div class="card">
      <div v-if="meal" class="meal-card">
        <router-link :to="`/meal/${meal.idMeal}`">
          <img :src="meal.strMealThumb" :alt="meal.strMeal" />
        </router-link>

        <div class="meal-details">
          <h2>{{ meal.strMeal }}</h2>
          <div class="category-pill">{{meal.strCategory || selectedCategory }}</div>
          <div class="area-pill">{{ meal.strArea || selectedArea}}</div>
          <div class="ingredient-pill">{{ meal.strIngredient1 || selectedIngredient }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import type { PropType } from 'vue'
import type { Meal } from '@/types/types'


export default defineComponent({
  name: 'MealCard',
  props: {
    meal: {
      type: Object as PropType<Meal>,
      required: true
    },
    selectedArea: {
      type: String,
      required: true
    },
    selectedIngredient: {
      type: String,
      required: true
    },
    selectedCategory: {
      type: String,
      required: true
    } 
  }
})
</script>

<style scoped lang="scss">
@import './MealCardStyles.scss';
</style>
