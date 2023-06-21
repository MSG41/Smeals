export interface Meal {
  idMeal: string
  strMeal: string
  strMealThumb: string
  strYoutube: string | null
  strInstructions: string
  [key: string]: string | null
}

// Define Area interface
export interface Area {
  strArea: string
}

// Define Ingredient interface
export interface Ingredient {
  strIngredient1: string
}

export interface Category {
  strCategory: string
}
