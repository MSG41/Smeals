export interface Meal {
  idMeal: string
  strMeal: string
  strMealThumb: string
  strYoutube: string | null
  strInstructions: string
  strArea: string
  strCategory: string
  [key: string]: string | null
}

export interface Area {
  strArea: string
}

export interface Category {
  strCategory: string
}
