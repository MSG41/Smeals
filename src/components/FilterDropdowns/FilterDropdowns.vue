<template>
  <div class="filter-dropdowns">
    FILTER BY:
    <div class="dropdown-wrapper">
      <div class="dropdown-header">
        <i class="dropdown-icon"></i>
      </div>
      <select :value="selectedArea" @change="updateArea">
        <option value="">AREA</option>
        <option v-for="area in areas" :key="area" :value="area">{{ area }}</option>
      </select>
    </div>
    <div class="dropdown-wrapper">
      <div class="dropdown-header">
        <i class="dropdown-icon"></i>
      </div>
      <select :value="selectedCategory" @change="updateCategory">
        <option value="">CATEGORY</option>
        <option v-for="category in categories" :key="category" :value="category">
          {{ category }}
        </option>
      </select>
    </div>
  </div>
</template>

<script lang="ts">
import { useHomeStore } from '@/stores/store'

export default {
  name: 'FilterDropdowns',
  props: ['selectedArea', 'selectedCategory'],
  emits: ['updateArea', 'updateCategory'],
  setup(props, { emit }) {
    const store = useHomeStore()

    const updateArea = (event: Event) => {
      const selectElement = event.target as HTMLSelectElement | null
      if (selectElement && selectElement.value !== props.selectedArea) {
        const selectedValue = selectElement.value
        store.setSelectedArea(selectedValue)
        emit('updateArea', selectedValue)
      }
    }

    const updateCategory = (event: Event) => {
      const selectElement = event.target as HTMLSelectElement | null
      if (selectElement && selectElement.value !== props.selectedCategory) {
        const selectedValue = selectElement.value
        store.setSelectedCategory(selectedValue)
        emit('updateCategory', selectedValue)
      }
    }

    return {
      areas: store.areas,
      categories: store.categories,
      updateArea,
      updateCategory
    }
  }
}
</script>

<style scoped lang="scss">
@import './FilterDropdownsStyles.scss';
</style>
