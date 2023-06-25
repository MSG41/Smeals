<template>
  <div class="search-container">
    <input class="search-input" v-model="searchQuery" placeholder="Search meals..." />
  </div>
</template>

<script lang="ts">
import { ref, watch, computed, onMounted } from 'vue'
import { useHomeStore } from '@/stores/store'

export default {
  setup() {
    const store = useHomeStore()
    const searchQuery = ref(store.currentQuery)

    watch(searchQuery, (newVal) => {
      store.searchMeals(newVal)
    })

    // update searchQuery when store's currentQuery changes
    watch(
      () => store.currentQuery,
      (newVal) => {
        searchQuery.value = newVal
      }
    )

    onMounted(() => {
      store.searchMeals(searchQuery.value)
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
