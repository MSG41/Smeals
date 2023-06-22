<!-- Search.vue -->
<template>
  <div class="search-container">
    <input class="search-input" v-model="searchQuery" placeholder="Search meals..." />
    <div v-if="isLoading" class="loading">Loading...</div>
  </div>
</template>

<script lang="ts">
import { ref, watch, computed } from 'vue'
import { useHomeStore } from '@/stores/store'

export default {
  setup() {
    const searchQuery = ref('')
    const store = useHomeStore()

    watch(searchQuery, (newVal) => {
      store.searchMeals(newVal)
    })

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
