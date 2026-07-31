import { create } from "zustand";
import { Task, TaskPriority } from "@/types/type";

interface TaskState {
    tasks: Task[];
    addTask: (title: string, category: string, priority: TaskPriority) => void;
    toggleTask: (id: string) => void;
    deleteTask: (id: string) => void;
}

const INITIAL_TASKS: Task[] = [
    {
        id: "1",
        title: "Architect React Native Folder Structure",
        category: "Engineering • Core",
        completed: true,
        priority: "high",
    },
    {
        id: "2",
        title: "Configure Tailwind v4 CSS Tokens",
        category: "UI/UX • Design System",
        completed: true,
        priority: "medium",
    },
    {
        id: "3",
        title: "Implement Global State with Zustand",
        category: "Architecture • State",
        completed: false,
        priority: "high",
    },
    {
        id: "4",
        title: "Review PRD and Client Scope of Work",
        category: "Management • SOW",
        completed: false,
        priority: "low",
    },
];

export const useTaskStore = create<TaskState>((set) => ({
    tasks: INITIAL_TASKS,

    addTask: (title, category, priority) =>
        set((state) => ({
            tasks: [
                {
                    id: Date.now().toString(),
                    title,
                    category,
                    priority,
                    completed: false,
                },
                ...state.tasks,
            ],
        })),

    toggleTask: (id) =>
        set((state) => ({
            tasks: state.tasks.map((task) =>
                task.id === id ? { ...task, completed: !task.completed } : task
            ),
        })),

    deleteTask: (id) =>
        set((state) => ({
            tasks: state.tasks.filter((task) => task.id !== id),
        })),
}));