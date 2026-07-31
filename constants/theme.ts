/**
 * SENIOR TEMPLATE: Single Source of Truth Design Tokens
 * Mirror of global.css @theme block for imperative JavaScript/React Native code.
 */

export const colors = {
    background: "#090d16",
    foreground: "#f8fafc",
    card: "#111827",
    cardForeground: "#f8fafc",
    muted: "#1e293b",
    mutedForeground: "#94a3b8",
    primary: "#6366f1",
    primaryForeground: "#ffffff",
    accent: "#10b981",
    accentForeground: "#047857",
    border: "#1e293b",
    success: "#10b981",
    destructive: "#ef4444",
} as const;

export const spacing = {
    0: 0,
    1: 4,
    2: 8,
    3: 12,
    4: 16,
    5: 20,
    6: 24,
    8: 32,
    10: 40,
    12: 48,
    16: 64,
    20: 80,
    24: 96,
} as const;

export const radius = {
    sm: 8,
    md: 12,
    lg: 16,
    xl: 24,
    full: 9999,
} as const;

export const components = {
    tabBar: {
        height: 72,
        horizontalInset: spacing[5],
        radius: radius.xl,
        iconFrame: spacing[12],
    },
    card: {
        padding: spacing[4],
        radius: radius.lg,
    },
} as const;

export const theme = {
    colors,
    spacing,
    radius,
    components,
} as const;

export type ThemeColors = keyof typeof colors;
export type ThemeSpacing = keyof typeof spacing;