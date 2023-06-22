<template>
   <div v-if="randomMeal" class="card-container">
    <div class="card">
      <h1 class="title">Random meal</h1>
      <div v-if="randomMeal" class="meal-card">
        <router-link :to="`/meal/${randomMeal.idMeal}`">
          <img :src="randomMeal.strMealThumb" :alt="randomMeal.strMeal" />
        </router-link>
        <div class="meal-details">
          <h2>{{ randomMeal.strMeal }}</h2>
          <div class="category-pill">{{ randomMeal.strCategory }}</div>
          <div class="pill area-pill">{{ randomMeal.strArea }}</div>
        </div>
        <button class="fetch-button" @click="fetchRandomMeal">Fetch New Meal</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { onMounted, ref } from 'vue'
import { getRandomMeal } from '@/services/mealService'
import type { Meal } from '@/types/types'

export default {
  name: 'RandomCard',

  setup() {
    const randomMeal = ref<Meal | null>(null)

    const fetchRandomMeal = async () => {
      try {
        const meal = await getRandomMeal()
        console.log('Random meal:', meal)
        randomMeal.value = meal
      } catch (error) {
        console.error('Failed to fetch random meal:', error)
      }
    }

    onMounted(fetchRandomMeal)

    return { randomMeal, fetchRandomMeal }
  }
}
</script>

<style scoped lang="scss">
@import './RandomCardStyles.scss';
</style>
