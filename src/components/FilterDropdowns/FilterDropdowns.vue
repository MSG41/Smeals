<template>
    <div class="filter-dropdowns">
      <div class="dropdown-wrapper">
        <div class="dropdown-header">
          <i class="dropdown-icon"></i>
        </div>
        <select v-model="selectedArea" @change="updateArea">
          <option value="">AREA</option>
          <option v-for="area in areas" :key="area" :value="area">{{ area }}</option>
        </select>
      </div>
      <div class="dropdown-wrapper">
        <div class="dropdown-header">
          <i class="dropdown-icon"></i>
        </div>
        <select v-model="selectedIngredient" @change="updateIngredient">
          <option value="">INGREDIENT</option>
          <option v-for="ingredient in ingredients" :key="ingredient" :value="ingredient">{{ ingredient }}</option>
        </select>
      </div>
      <div class="dropdown-wrapper">
        <div class="dropdown-header">
          <i class="dropdown-icon"></i>
        </div>
        <select v-model="selectedCategory" @change="updateCategory">
          <option value="">CATEGORY</option>
          <option v-for="category in categories" :key="category" :value="category">{{ category }}</option>
        </select>
      </div>
    </div>
  </template>
  
  <script lang="ts">
  import { ref, watch, onMounted } from 'vue'
  import { useHomeStore } from '../../stores/store'
  
  export default {
    name: 'FilterDropdowns',
    setup() {
      const store = useHomeStore()
      const selectedArea = ref('')
      const selectedIngredient = ref('')
      const selectedCategory = ref('')
  
      const fetchData = async () => {
        await Promise.all([
          store.fetchAreas(),
          store.fetchIngredients(),
          store.fetchCategories()
        ])
        selectedArea.value = store.selectedArea || ''
        selectedIngredient.value = store.selectedIngredient || ''
        selectedCategory.value = store.selectedCategory || ''
      }
  
      // Watch for changes in the store and fetch data once the store is available
      watch(() => store, async () => {
        await fetchData()
      })
  
      const updateArea = () => {
        store.setSelectedArea(selectedArea.value)
      }
  
      const updateIngredient = () => {
        store.setSelectedIngredient(selectedIngredient.value)
      }
  
      const updateCategory = () => {
        store.setSelectedCategory(selectedCategory.value)
      }
  
      // Fetch data when the component is mounted
      onMounted(async () => {
        await fetchData()
      })
  
      return {
        areas: store.areas,
        ingredients: store.ingredients,
        categories: store.categories,
        selectedArea,
        selectedIngredient,
        selectedCategory,
        updateArea,
        updateIngredient,
        updateCategory
      }
    },
  }
  </script>
  
  <style scoped lang="scss">
  @import './FilterDropdownsStyles.scss';
  </style>
  