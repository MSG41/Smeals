<template>
  <!-- Container for the search input -->
  <div class="search-container">
    <!-- Search input field -->
    <input class="search-input" v-model="searchQuery" placeholder="Search meals..." />
  </div>
</template>

<script lang="ts">
import { ref, watch, computed } from 'vue'
import { useHomeStore } from '@/stores/store'

export default {
  setup() {
    // Reactive reference for the search query
    const searchQuery = ref('')

    // Access the home store
    const store = useHomeStore()

    // Watch for changes in the search query and trigger searchMeals in the store
    watch(searchQuery, (newVal) => {
      store.searchMeals(newVal)
    })

    // Return the reactive reference for the search query and a computed property for the loading state
    return {
      searchQuery,
      isLoading: computed(() => store.isLoading)
    }
  }
}
</script>

<style scoped lang="scss">
@import './SearchStyles.scss';
</style>
