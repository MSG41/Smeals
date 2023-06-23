<template>
  <!-- Dropdowns for filtering meals -->
  <div class="filter-dropdowns">
    FILTER BY:
    <!-- Dropdown for selecting area -->
    <div class="dropdown-wrapper">
      <div class="dropdown-header">
        <i class="dropdown-icon"></i>
      </div>
      <select :value="selectedArea" @change="updateArea">
        <option value="">AREA</option>
        <option v-for="area in areas" :key="area" :value="area">{{ area }}</option>
      </select>
    </div>
    <!-- Dropdown for selecting category -->
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

    // Updates the selected area based on user selection
    const updateArea = (event: Event) => {
      const selectElement = event.target as HTMLSelectElement | null
      if (selectElement && selectElement.value !== props.selectedArea) {
        const selectedValue = selectElement.value
        store.setSelectedArea(selectedValue)
        emit('updateArea', selectedValue)
      }
    }

    // Updates the selected category based on user selection
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

<!-- The template section defines two dropdowns: one for selecting the area and another for selecting the category.
The script section sets up the component's behavior:

1) It imports the useHomeStore function from the store module.

2) It defines the component's name, props, and emits for event handling.

3) It uses the setup function to provide reactive data and event handling logic:

  - It retrieves the store instance using useHomeStore.
  - It defines functions (updateArea and updateCategory) to handle user selections and update the store and emit events.
  - It returns the necessary data and functions to be used in the template.

4) The style section imports and applies scoped SCSS styles for the component.
 -->
