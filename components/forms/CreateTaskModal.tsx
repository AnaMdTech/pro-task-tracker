import React, { useState } from "react";
import {
    KeyboardAvoidingView,
    Modal,
    Platform,
    Pressable,
    Text,
    TextInput,
    View,
} from "react-native";
import { TaskPriority } from "@/types/type";

interface CreateTaskModalProps {
    visible: boolean;
    onClose: () => void;
    onSubmit: (title: string, category: string, priority: TaskPriority) => void;
}

const PRIORITIES: TaskPriority[] = ["low", "medium", "high"];

export function CreateTaskModal({
                                    visible,
                                    onClose,
                                    onSubmit,
                                }: CreateTaskModalProps) {
    const [title, setTitle] = useState("");
    const [category, setCategory] = useState("");
    const [priority, setPriority] = useState<TaskPriority>("medium");

    const handleSubmit = () => {
        if (!title.trim() || !category.trim()) return;

        onSubmit(title.trim(), category.trim(), priority);
        // Reset form state after submit
        setTitle("");
        setCategory("");
        setPriority("medium");
        onClose();
    };

    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={visible}
            onRequestClose={onClose}
        >
            <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : "height"}
                className="flex-1 justify-end bg-black/60"
            >
                {/* Backdrop clickable close */}
                <Pressable className="flex-1" onPress={onClose} />

                {/* Bottom Sheet Container */}
                <View className="rounded-t-3xl border-t border-border bg-card p-6 shadow-2xl">
                    {/* Sheet Drag Handle Bar */}
                    <View className="mb-4 items-center">
                        <View className="h-1.5 w-12 rounded-full bg-muted-foreground/30" />
                    </View>

                    <Text className="text-xl font-extrabold text-foreground">
                        Create New Task
                    </Text>
                    <Text className="mb-6 text-xs text-muted-foreground">
                        Add a task to your active sprint backlog.
                    </Text>

                    {/* Task Title Input */}
                    <View className="mb-4">
                        <Text className="mb-2 text-xs font-bold uppercase tracking-wider text-muted-foreground">
                            Task Title
                        </Text>
                        <TextInput
                            value={title}
                            onChangeText={setTitle}
                            placeholder="e.g., Implement Auth flow"
                            placeholderTextColor="#94a3b8"
                            className="rounded-xl border border-border bg-background p-4 text-base text-foreground"
                        />
                    </View>

                    {/* Category Input */}
                    <View className="mb-6">
                        <Text className="mb-2 text-xs font-bold uppercase tracking-wider text-muted-foreground">
                            Category / Domain
                        </Text>
                        <TextInput
                            value={category}
                            onChangeText={setCategory}
                            placeholder="e.g., Architecture • Core"
                            placeholderTextColor="#94a3b8"
                            className="rounded-xl border border-border bg-background p-4 text-base text-foreground"
                        />
                    </View>

                    {/* Priority Selector Pills */}
                    <View className="mb-8">
                        <Text className="mb-2 text-xs font-bold uppercase tracking-wider text-muted-foreground">
                            Priority Level
                        </Text>
                        <View className="flex-row gap-3">
                            {PRIORITIES.map((p) => {
                                const isSelected = priority === p;
                                return (
                                    <Pressable
                                        key={p}
                                        onPress={() => setPriority(p)}
                                        className={`flex-1 items-center rounded-xl border py-3 ${
                                            isSelected
                                                ? "border-accent bg-accent/20"
                                                : "border-border bg-background"
                                        }`}
                                    >
                                        <Text
                                            className={`text-xs font-bold uppercase tracking-wider ${
                                                isSelected ? "text-accent" : "text-muted-foreground"
                                            }`}
                                        >
                                            {p}
                                        </Text>
                                    </Pressable>
                                );
                            })}
                        </View>
                    </View>

                    {/* Action Buttons */}
                    <View className="flex-row gap-4">
                        <Pressable
                            onPress={onClose}
                            className="flex-1 items-center justify-center rounded-xl border border-border py-4"
                        >
                            <Text className="font-bold text-muted-foreground">Cancel</Text>
                        </Pressable>

                        <Pressable
                            onPress={handleSubmit}
                            className="flex-1 items-center justify-center rounded-xl bg-primary py-4 shadow-lg active:opacity-90"
                        >
                            <Text className="font-bold text-primary-foreground">
                                Add to Sprint
                            </Text>
                        </Pressable>
                    </View>
                </View>
            </KeyboardAvoidingView>
        </Modal>
    );
}