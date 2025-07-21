export type Theme = {
    bg_dark: string;
    bg: string;
    bg_light: string;
    border: string;
    border_muted: string;
    text: string;
    text_muted: string;
    highlight: string;
    primary: string;
    secondary: string;
    success: string;
    warning: string;
    danger: string;
    info: string;
}

export type getAppColorsFn = (isDark:boolean)=>Theme;

export type ThemeContextType = {
  theme: Theme;
  isDark: boolean;
  toggleTheme: () => void;
};