export interface Meal {
  idMeal: string
  strMeal: string
  strMealThumb: string
  strYoutube: string | null
  strInstructions: string
  [key: string]: string | null
}
