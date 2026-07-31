import React from "react";
import { Pressable, Text, View } from "react-native";
import { Task, TaskPriority } from "@/types/type";

interface TaskCardProps {
    task: Task;
    onToggle: (id: string) => void;
    onPress?: (task: Task) => void;
}

const getPriorityBadgeStyle = (priority: TaskPriority) => {
    switch (priority) {
        case "high":
            return {
                badgeBg: "bg-destructive/10",
                badgeText: "text-destructive",
            };
        case "medium":
            return {
                badgeBg: "bg-accent/10",
                badgeText: "text-accent",
            };
        case "low":
        default:
            return {
                badgeBg: "bg-muted",
                badgeText: "text-muted-foreground",
            };
    }
};

export function TaskCard({ task, onToggle, onPress }: TaskCardProps) {
    const { badgeBg, badgeText } = getPriorityBadgeStyle(task.priority);

    return (
        <Pressable
            onPress={() => onPress?.(task)}
            className="mb-3 w-full flex-row items-center justify-between rounded-2xl border border-border bg-card p-4 shadow-sm active:opacity-80"
        >
            {/* Left Side: Checkbox & Task Info */}
            <View className="flex-1 flex-row items-center gap-3">
                <Pressable
                    onPress={() => onToggle(task.id)}
                    hitSlop={8}
                    className={`h-6 w-6 items-center justify-center rounded-lg border ${
                        task.completed
                            ? "border-accent bg-accent"
                            : "border-muted-foreground/40 bg-transparent"
                    }`}
                >
                    {task.completed && (
                        <Text className="text-xs font-bold text-background">✓</Text>
                    )}
                </Pressable>

                <View className="flex-1">
                    <Text
                        numberOfLines={1}
                        className={`text-base font-semibold ${
                            task.completed
                                ? "text-muted-foreground line-through"
                                : "text-foreground"
                        }`}
                    >
                        {task.title}
                    </Text>
                    <Text className="mt-0.5 text-xs text-muted-foreground">
                        {task.category}
                    </Text>
                </View>
            </View>

            {/* Right Side: Priority Badge */}
            <View className={`rounded-full px-2.5 py-1 ${badgeBg}`}>
                <Text className={`text-xs font-bold uppercase tracking-wider ${badgeText}`}>
                    {task.priority}
                </Text>
            </View>
        </Pressable>
    );
}