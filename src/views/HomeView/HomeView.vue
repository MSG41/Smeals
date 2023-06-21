<template>
  <div class="home-view">
    <Search v-model="searchQuery" />

    <div v-if="!searchQuery">
      <RandomCard />
    </div>

    <div class="meals" v-if="searchQuery">
      <MealCard v-for="meal in filteredMeals" :key="meal.idMeal" :meal="meal" />
    </div>

    <div v-if="isLoading" class="loading">Loading...</div>
  </div>
</template>

<script lang="ts">
import { computed } from 'vue'
import { useHomeStore } from '@/stores/store'
import MealCard from '@/components/MealCard/MealCard.vue'
import RandomCard from '@/components/RandomCard/RandomCard.vue'
import Search from '@/components/Search/Search.vue'

export default {
  components: {
    MealCard,
    RandomCard,
    Search
  },
  setup() {
    const store = useHomeStore()

    const filteredMeals = computed(() => {
      if (store.searchQuery) {
        return store.meals.filter((meal) =>
          meal.name?.toLowerCase().includes(store.searchQuery.toLowerCase())
        )
      }
      return store.meals
    })

    return {
      searchQuery: store.searchQuery,
      filteredMeals,
      isLoading: store.isLoading
    }
  }
}
</script>

<style scoped lang="scss">
@import './HomeViewStyles.scss';
</style>
