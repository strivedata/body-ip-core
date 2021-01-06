export interface Food {
    id: string;
    name: string;
    category: string;
    calories: number;
    protein: number;
    carbs: number;
    fat: number;
    description?: string;
    step?: number;
    thumbnailUrl?: string;
    lastModifiedAt?: any;
    checked?: boolean; // optional if used in the ingredient modal
    amount?: number; // optional: if used as an ingredient in the meal planner
}
