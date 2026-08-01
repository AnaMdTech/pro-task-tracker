import React from "react";
import { View } from "react-native";
import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { FLOATING_BAR } from "@/constants/layout";

type IconName = React.ComponentProps<typeof Ionicons>["name"];

interface TabIconProps {
    name: IconName;
    focused: boolean;
}

function TabIcon({ name, focused }: TabIconProps) {
    return (
        <View
            className={`h-11 w-11 items-center justify-center rounded-full ${
                focused ? "bg-primary" : "bg-transparent"
            }`}
        >
            <Ionicons
                name={name}
                size={22}
                color={focused ? "#ffffff" : "#94a3b8"}
            />
        </View>
    );
}

export default function TabLayout() {
    const insets = useSafeAreaInsets();
    const bottomOffset = insets.bottom > 0 ? insets.bottom + 8 : 16;

    return (
        <Tabs
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,

                tabBarItemStyle: {
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center",
                    paddingTop: 0,
                    paddingBottom: 0,
                },

                tabBarIconStyle: {
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center",
                },

                tabBarStyle: {
                    position: "absolute",
                    bottom: bottomOffset,

                    // BULLETPROOF CENTERING: Anchoring both left & right forces exact center alignment
                    left: FLOATING_BAR.HORIZONTAL_MARGIN,
                    right: FLOATING_BAR.HORIZONTAL_MARGIN,

                    backgroundColor: "#111827",
                    borderWidth: 1,
                    borderColor: "#1e293b",
                    borderRadius: FLOATING_BAR.BORDER_RADIUS,
                    height: FLOATING_BAR.HEIGHT,

                    paddingTop: 0,
                    paddingBottom: 0,

                    shadowColor: "#000",
                    shadowOffset: { width: 0, height: 8 },
                    shadowOpacity: 0.35,
                    shadowRadius: 16,
                    elevation: 10,
                    borderTopWidth: 0,
                },
            }}
        >
            <Tabs.Screen
                name="index"
                options={{
                    title: "Dashboard",
                    tabBarIcon: ({ focused }) => (
                        <TabIcon
                            name={focused ? "grid" : "grid-outline"}
                            focused={focused}
                        />
                    ),
                }}
            />

            <Tabs.Screen
                name="analytics"
                options={{
                    title: "Analytics",
                    tabBarIcon: ({ focused }) => (
                        <TabIcon
                            name={focused ? "stats-chart" : "stats-chart-outline"}
                            focused={focused}
                        />
                    ),
                }}
            />

            <Tabs.Screen
                name="settings"
                options={{
                    title: "Settings",
                    tabBarIcon: ({ focused }) => (
                        <TabIcon
                            name={focused ? "settings" : "settings-outline"}
                            focused={focused}
                        />
                    ),
                }}
            />
        </Tabs>
    );
}