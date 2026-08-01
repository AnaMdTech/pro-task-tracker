import React from "react";
import { Pressable, ScrollView, Text, View } from "react-native";
import { SafeAreaView as RNSafeAreaView } from "react-native-safe-area-context";
import { styled } from "nativewind";
import { useTaskStore } from "@/store/useTaskStore";

const SafeAreaView = styled(RNSafeAreaView);

export default function SettingsScreen() {
    const { tasks } = useTaskStore();

    return (
        <SafeAreaView className="flex-1 bg-background">
            <ScrollView
                contentContainerStyle={{ padding: 20 }}
                className="flex-1"
                showsVerticalScrollIndicator={false}
            >
                <View className="mb-6 mt-2">
                    <Text className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
                        Workspace Configuration
                    </Text>
                    <Text className="mt-0.5 text-3xl font-extrabold text-foreground">
                        Settings
                    </Text>
                </View>

                {/* App Meta Card */}
                <View className="mb-4 rounded-2xl border border-border bg-card p-5">
                    <Text className="text-sm font-bold text-foreground">
                        Active Workspace
                    </Text>
                    <Text className="mt-1 text-xs text-muted-foreground">
                        Pro-Task Tracker • SDK 54 NativeWind Engine
                    </Text>
                    <View className="mt-3 border-t border-border pt-3">
                        <Text className="text-xs font-semibold text-accent">
                            ✓ State Persistence Active ({tasks.length} cached items)
                        </Text>
                    </View>
                </View>

                {/* Mock Danger Zone */}
                <View className="rounded-2xl border border-destructive/30 bg-card p-5">
                    <Text className="text-sm font-bold text-destructive">
                        Danger Zone
                    </Text>
                    <Text className="mt-1 text-xs text-muted-foreground">
                        Resetting your sprint will clear all backlog tasks from memory.
                    </Text>

                    <Pressable
                        onPress={() => console.log("Clear Sprint triggered")}
                        className="mt-4 items-center rounded-xl border border-destructive/40 bg-destructive/10 py-3 active:opacity-80"
                    >
                        <Text className="text-xs font-bold uppercase tracking-wider text-destructive">
                            Reset Sprint Backlog
                        </Text>
                    </Pressable>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}