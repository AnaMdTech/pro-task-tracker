import React from "react";
import { ScrollView, Text, View } from "react-native";
import { SafeAreaView as RNSafeAreaView } from "react-native-safe-area-context";
import { styled } from "nativewind";
import { useTaskStore } from "@/store/useTaskStore";

const SafeAreaView = styled(RNSafeAreaView);

export default function AnalyticsScreen() {
    const { tasks } = useTaskStore();

    const total = tasks.length;
    const completed = tasks.filter((t) => t.completed).length;
    const pending = total - completed;
    const highPriority = tasks.filter((t) => t.priority === "high" && !t.completed).length;

    return (
        <SafeAreaView className="flex-1 bg-background">
            <ScrollView
                contentContainerStyle={{ padding: 20 }}
                className="flex-1"
                showsVerticalScrollIndicator={false}
            >
                {/* Header */}
                <View className="mb-6 mt-2">
                    <Text className="text-xs font-bold uppercase tracking-widest text-accent">
                        Real-Time Store Metrics
                    </Text>
                    <Text className="mt-0.5 text-3xl font-extrabold text-foreground">
                        Sprint Analytics
                    </Text>
                </View>

                {/* Analytics Grid */}
                <View className="flex-row gap-4">
                    <View className="flex-1 rounded-2xl border border-border bg-card p-5">
                        <Text className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                            Total Backlog
                        </Text>
                        <Text className="mt-2 text-3xl font-extrabold text-foreground">
                            {total}
                        </Text>
                    </View>

                    <View className="flex-1 rounded-2xl border border-border bg-card p-5">
                        <Text className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                            Completed
                        </Text>
                        <Text className="mt-2 text-3xl font-extrabold text-accent">
                            {completed}
                        </Text>
                    </View>
                </View>

                <View className="mt-4 flex-row gap-4">
                    <View className="flex-1 rounded-2xl border border-border bg-card p-5">
                        <Text className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                            In Progress
                        </Text>
                        <Text className="mt-2 text-3xl font-extrabold text-primary">
                            {pending}
                        </Text>
                    </View>

                    <View className="flex-1 rounded-2xl border border-destructive/30 bg-destructive/10 p-5">
                        <Text className="text-xs font-bold uppercase tracking-wider text-destructive">
                            High Priority Bottlenecks
                        </Text>
                        <Text className="mt-2 text-3xl font-extrabold text-destructive">
                            {highPriority}
                        </Text>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}