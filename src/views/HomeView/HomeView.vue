<template>
  <div class="home-view">
    <Search v-model="searchQuery" />

    <div v-if="!searchQuery">
      <RandomCard />
    </div>

    <div class="meals" v-if="searchQuery">
      <MealCard v-for="meal in meals" :key="meal.idMeal" :meal="meal" />
    </div>

    <div v-if="isLoading" class="loading">Loading...</div>
  </div>
</template>

<script lang="ts">
import { ref } from 'vue'
import MealCard from '@/components/MealCard/MealCard.vue'
import RandomCard from '@/components/RandomCard/RandomCard.vue'
import Search from '@/components/Search/Search.vue'
import type { Meal } from '@/types/types'

export default {
  components: {
    MealCard,
    RandomCard,
    Search
  },

  setup() {
    const meals = ref<Meal[]>([])
      const searchQuery = ref('')
    const isLoading = ref(false)

    return {
      meals,
      searchQuery,
      isLoading
    }
  }
}
</script>

<style scoped lang="scss">
@import './HomeViewStyles.scss';
</style>
