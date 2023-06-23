// Defines an interface for a Meal object, which represents a meal item fetched from the server
export interface Meal {
  idMeal: string // Unique identifier for the meal
  strMeal: string // Name of the meal
  strMealThumb: string // URL for the meal's thumbnail image
  strYoutube: string | null // URL for the meal's YouTube video, if available
  strInstructions: string // Instructions for preparing the meal
  strArea: string // Area or region from which the meal originates
  strCategory: string // Category or type of the meal
  [key: string]: string | null // Additional properties with string or null values
}

// Defines an interface for an Area object, which represents an area or region from which a meal originates
export interface Area {
  strArea: string // Name of the area
}

// Defines an interface for a Category object, which represents a category or type of a meal
export interface Category {
  strCategory: string // Name of the category
}

// The above interfaces define the structure and properties of the data objects used in the application. They provide type annotations to ensure type safety and proper usage of the data throughout the codebase.
