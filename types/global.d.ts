/// <reference types="nativewind/types" />

import type { ImageSourcePropType } from "react-native";

declare global {
    // Common utility types
    type Nullable<T> = T | null;
    type Optional<T> = T | undefined;

    // Standard tab icon props
    interface TabIconProps {
        focused: boolean;
        icon: ImageSourcePropType;
        label?: string;
    }

    // Environment variables autocompletion
    namespace NodeJS {
        interface ProcessEnv {
            EXPO_PUBLIC_API_URL: string;
            EXPO_PUBLIC_APP_ENV: "development" | "staging" | "production";
        }
    }
}

export {};