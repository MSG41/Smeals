<template>
  <div class="search-container">
    <input class="search-input" v-model="searchQuery" placeholder="Search meals..." />
    <div class="meals" v-if="hasResults">
      <MealCard v-for="meal in filteredMeals" :key="meal.idMeal" :meal="meal" />
    </div>
    <div v-if="isLoading" class="loading">Loading...</div>
    <div v-if="!hasResults && !isLoading" class="no-results">No results found.</div>
  </div>
</template>

<script lang="ts">
import { ref, watch, computed } from 'vue'
import MealCard from '@/components/MealCard/MealCard.vue'
import { useHomeStore } from '@/stores/store'

export default {
  components: {
    MealCard
  },

  setup() {
    const searchQuery = ref('')

    const store = useHomeStore()

    watch(searchQuery, (newVal) => {
      store.searchMeals(newVal)
    })

    const filteredMeals = computed(() => store.meals)

    const hasResults = computed(() => filteredMeals.value.length > 0)

    return {
      searchQuery,
      filteredMeals,
      isLoading: computed(() => store.isLoading),
      hasResults
    }
  }
}
</script>

<style scoped lang="scss">
@import './SearchStyles.scss';
</style>
