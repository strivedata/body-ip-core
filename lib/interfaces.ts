export interface Entity {
  id?: string; // optional for new entities
  lastModifiedAt?: any; // timestamp when the entity was created or last time it was updated
}

export type FoodCategories = 'carbs' | 'fat' | 'protein';

export interface Food extends Entity {
  name: string;
  category: FoodCategories;
  calories: number;
  protein: number;
  carbs: number;
  fat: number;
  description?: string;
  step?: number; // The step size that will be used for the slider in the meal planner
  thumbnailUrl?: string; // URL that points to the image used as the thumbnail
}

export type ExerciseTypes = 'repsOnly' | 'repsAndWeight' | 'time';

export interface Exercise extends Entity {
  name: string;
  description?: string;
  type: ExerciseTypes;
  muscleGroups: string[];
  isSuperSet: boolean;
  completed: boolean;
  superType?: ExerciseTypes;
  videoUrl?: string;
  thumbnailUrl?: string;
  thumbnailSmallUrl?: string;
}

export interface Meal extends Entity {
  name: string;
  isEaten: boolean;
  ingredients: Food[];
  calories: number;
  carbs: number;
  protein: number;
  fat: number;
}

export interface Motivation extends Entity {
  title: string;
  url: string;
  isActive: boolean;
}

export interface Video extends Entity {
  title: string;
  program: 'default'; // Only allow 'default' program until we support multiple programs
  ref?: string; // Firebase cloud reference
  url?: string;
}
