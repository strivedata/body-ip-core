export interface Entity {
  id?: string; // optional for new entities
  lastModifiedAt?: any; // timestamp when the entity was created or last time it was updated
}

export interface UserProfile extends Entity {
  uid?: string;
  name?: string;
  email?: string;
  dateOfBirth?: string; // As ISO 8601 date string in the form of: 'YYYY-MM-DDTHH:mm:ss.sssZ', e.g. 1996-10-15T00:00:00.000Z
  gender?: 'm' | 'f';
  status?: string;
  shopifyID?: string; // Customer ID from shopify
  shopifyOrderID?: string; // Order ID from shopify
  signedUpAt?: any;
  lastAppStartAt?: any;
  currentWeek?: number;
  currentWeekCategory?: string; // Category of the current week (e.g. 'A')
  weight?: number;
  height?: number;
  experienceLevel?: number; // Training experience 1-4
  bodyFatCategory?: number;
  activityLevel?: number;
  avatarUrl?: string;
  notifications?: boolean;
  notificationTime?: string; // As ISO time e.g. 12:00 for noon
  setupCompleted?: boolean;
  isAdmin?: boolean;
  receivedMotivations?: string[]; // An array of the id's of the motivation messages
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
  checked?: boolean; // optional if used in the ingredient modal
  amount?: number; // optional: if used as an ingredient in the meal planner
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

export interface MealData {
  [key: string]: Meal;
}

export interface NutritionLogData {
  calories: number;
  carbs: number;
  protein: number;
  fat: number;
  meals: MealData;
  mealsOrder?: string[]; // List of meal ids in the correct order used to sort them
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

export interface TrainingWeek {
  id: string;
  number: number;
  workouts: Workout[];
  video: string;
  category: 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'default';
}

export interface WorkoutExercise {
  id: string;
  exercise?: Partial<Exercise>;
  data?: Partial<Exercise>; // Contains the data for the exercise this workout exercise is a copy of
  pause: number;
  reps: number;
  sets: number;
  completed: boolean;
  superReps?: number;
  isDropSet?: boolean;
  protocol?: ExerciseProtocol;
}

export interface Workout {
  name: string;
  number: number;
  exercises: Partial<WorkoutExercise>[];
}

export interface NutritionStats {
  total: number;
  actual: number;
  remaining: number; // Total - Actual
}

export interface RestDayProtocol {
  intensity: 'low' | 'high';
  time: number;
}

export type ExerciseProtocol = [ResultSet];

export interface TrainingLogData {
  name: string;
  completed: boolean;
  type: 'training' | 'rest';
  exercises?: { [key: string]: WorkoutExercise }; // Only on training days: contains the list of exercises
  numberOfExercises?: number;
  restDayProtocol?: RestDayProtocol; // Only on rest days: contains a protocol of the performed rest day activity (if completed)
  restDayVideo?: string; // Only on rest days: contains the url of the video for the rest day
}

export interface MotivationLogData {
  id: string; // Id of the motivation message that was used
  title: string;
  url: string;
}

export interface LogEntry {
  id?: string;
  day: number;
  week: number;
  nutrition: NutritionLogData;
  training: TrainingLogData;
  motivation: MotivationLogData;
  video: string;
}

export interface Result {
  reps?: number;
  weight?: number;
}

export interface Plan extends Entity {
  name: string;
  daysPerWeek: number;
  bodyFatCategories: number[];
  isActive: boolean;
  program?: 'default'; // Only allow 'default' until we support multiple programs
  isProtected?: boolean; // Whether this is the default training plan for this program and should be protected
}

export interface ResultSet {
  set: Result;
  superSet?: Result;
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

export interface ProgressData {
  beforePhoto: any;
  currentPhoto: any;
}

export interface PerformanceSet {
  first: ResultSet;
  last: ResultSet;
}

export interface PerformanceData {
  [key: string]: PerformanceSet;
}

export interface UpdateData {
  foods: Date;
  supplements: Date;
}
