import React, { useState } from "react";
import { Pressable, ScrollView, Text, View } from "react-native";
import {
    SafeAreaView as RNSafeAreaView,
    useSafeAreaInsets,
} from "react-native-safe-area-context";
import { styled } from "nativewind";

import { SprintProgress } from "@/components/ui/SprintProgress";
import { TaskCard } from "@/components/ui/TaskCard";
import { CreateTaskModal } from "@/components/forms/CreateTaskModal";
import { useTaskStore } from "@/store/useTaskStore";
import { Task, TaskPriority } from "@/types/type";
import { FLOATING_BAR } from "@/constants/layout";

const SafeAreaView = styled(RNSafeAreaView);

export default function DashboardScreen() {
    const { tasks, toggleTask, addTask } = useTaskStore();
    const [modalVisible, setModalVisible] = useState(false);

    const insets = useSafeAreaInsets();

    // Dynamic layout calculations reading from single source of truth
    const tabBarBottomOffset = insets.bottom > 0 ? insets.bottom + 8 : 16;
    const fabBottomPosition =
        FLOATING_BAR.HEIGHT + tabBarBottomOffset + FLOATING_BAR.GAP_ABOVE_TAB;
    const scrollPaddingBottom = fabBottomPosition + 80;

    const totalTasks = tasks.length;
    const completedTasks = tasks.filter((t) => t.completed).length;

    const handleCreateTask = (
        title: string,
        category: string,
        priority: TaskPriority
    ) => {
        addTask(title, category, priority);
    };

    return (
        <SafeAreaView className="flex-1 bg-background">
            <View className="flex-1">
                <ScrollView
                    contentContainerStyle={{
                        padding: 20,
                        paddingBottom: scrollPaddingBottom,
                    }}
                    className="flex-1"
                    showsVerticalScrollIndicator={false}
                >
                    {/* Header Section */}
                    <View className="mb-6 mt-2 flex-row items-center justify-between">
                        <View>
                            <Text className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
                                Friday, Jul 31
                            </Text>
                            <Text className="mt-0.5 text-3xl font-extrabold text-foreground">
                                Sprint Dashboard
                            </Text>
                        </View>

                        <View className="rounded-full border border-border bg-card px-3 py-1.5">
                            <Text className="text-xs font-bold text-accent">● Active</Text>
                        </View>
                    </View>

                    {/* Progress Molecule */}
                    <SprintProgress
                        totalTasks={totalTasks}
                        completedTasks={completedTasks}
                    />

                    {/* Backlog Section Header */}
                    <View className="mb-3 flex-row items-center justify-between">
                        <Text className="text-sm font-bold uppercase tracking-wider text-muted-foreground">
                            Backlog Tasks ({totalTasks})
                        </Text>
                        <Text className="text-xs font-medium text-accent">
                            Filter: All
                        </Text>
                    </View>

                    {/* Task List */}
                    <View className="w-full">
                        {tasks.map((task: Task) => (
                            <TaskCard
                                key={task.id}
                                task={task}
                                onToggle={toggleTask}
                                onPress={(item) =>
                                    console.log("Inspecting task:", item.title)
                                }
                            />
                        ))}
                    </View>
                </ScrollView>

                {/* Floating Action Button - PIXEL-PERFECT ALIGNMENT WITH TAB BAR */}
                <View
                    style={{
                        bottom: fabBottomPosition,
                        left: FLOATING_BAR.HORIZONTAL_MARGIN,
                        right: FLOATING_BAR.HORIZONTAL_MARGIN,
                    }}
                    className="absolute"
                >
                    <Pressable
                        onPress={() => setModalVisible(true)}
                        className="w-full flex-row items-center justify-center rounded-2xl bg-primary py-4 shadow-lg active:opacity-90"
                    >
                        <Text className="text-base font-bold text-primary-foreground">
                            + Create New Task
                        </Text>
                    </Pressable>
                </View>

                {/* Create Task Bottom Sheet Modal */}
                <CreateTaskModal
                    visible={modalVisible}
                    onClose={() => setModalVisible(false)}
                    onSubmit={handleCreateTask}
                />
            </View>
        </SafeAreaView>
    );
}