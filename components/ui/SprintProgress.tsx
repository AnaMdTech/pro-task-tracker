import React from "react";
import { Text, View } from "react-native";

interface SprintProgressProps {
    totalTasks: number;
    completedTasks: number;
}

export function SprintProgress({ totalTasks, completedTasks }: SprintProgressProps) {
    const percentage = totalTasks > 0 ? Math.round((completedTasks / totalTasks) * 100) : 0;

    return (
        <View className="mb-6 w-full rounded-2xl border border-border bg-card p-5 shadow-sm">
            <View className="flex-row items-center justify-between">
                <View>
                    <Text className="text-xs font-bold uppercase tracking-widest text-accent">
                        Sprint Velocity
                    </Text>
                    <Text className="mt-1 text-2xl font-extrabold text-foreground">
                        {percentage}% Completed
                    </Text>
                </View>

                {/* Counter Badge */}
                <View className="items-end">
                    <Text className="text-base font-bold text-foreground">
                        {completedTasks} / {totalTasks}
                    </Text>
                    <Text className="text-xs text-muted-foreground">Tasks Done</Text>
                </View>
            </View>

            {/* Progress Bar Track */}
            <View className="mt-4 h-2 w-full overflow-hidden rounded-full bg-muted">
                {/* Animated Fill Bar */}
                <View
                    style={{ width: `${percentage}%` }}
                    className="h-full rounded-full bg-accent"
                />
            </View>
        </View>
    );
}