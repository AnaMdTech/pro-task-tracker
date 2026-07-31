// All domain models for Pro-Task Tracker live here

export type TaskPriority = "low" | "medium" | "high";

export interface Task {
    id: string;
    title: string;
    category: string;
    completed: boolean;
    priority: TaskPriority;
    dueDate?: string;
}

export interface SprintMetrics {
    totalTasks: number;
    completedTasks: number;
    velocityPercentage: number;
}