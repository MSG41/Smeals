<template>
  <!-- Container for displaying a random meal -->
  <div v-if="randomMeal" class="card-container">
    <div class="card">
      <!-- No results message -->
      <div v-if="!randomMeal" class="no-results-message">{{ store.statusMessage }}</div>

      <!-- Title -->
      <h1 class="title">Random meal</h1>

      <!-- Meal card -->
      <div v-if="randomMeal" class="meal-card">
        <!-- Link to meal details page -->
        <router-link :to="`/meal/${randomMeal.idMeal}`">
          <!-- Meal image -->
          <img :src="randomMeal.strMealThumb" :alt="randomMeal.strMeal" />
        </router-link>

        <!-- Meal details -->
        <div class="meal-details">
          <h2>{{ randomMeal.strMeal }}</h2>
          <div class="category-pill">{{ randomMeal.strCategory }}</div>
          <div class="pill area-pill">{{ randomMeal.strArea }}</div>
        </div>

        <!-- Fetch new meal button -->
        <button class="fetch-button" @click="fetchRandomMeal">Fetch New Meal</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { onMounted, ref } from 'vue'
import { useHomeStore } from '@/stores/store'
import type { Meal } from '@/types/types'

export default {
  name: 'RandomCard',

  setup() {
    // Access the home store
    const store = useHomeStore()

    // Reactive reference for storing the random meal
    const randomMeal = ref<Meal | null>(null)

    // Fetches a random meal from the store
    const fetchRandomMeal = async () => {
      try {
        randomMeal.value = await store.fetchRandomMeal()
      } catch (error) {
        console.error('Failed to fetch random meal:', error)
      }
    }

    // Fetch the random meal when the component is mounted
    onMounted(fetchRandomMeal)

    // Return the reactive references and fetch function
    return { randomMeal, fetchRandomMeal, store }
  }
}
</script>

<style scoped lang="scss">
@import './RandomCardStyles.scss';
</style>
