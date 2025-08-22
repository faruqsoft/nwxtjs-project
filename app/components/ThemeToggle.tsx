"use client";
import { useTheme } from "next-themes";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="rounded-lg border px-3 py-1"
      aria-label="Toggle theme"
    >
      {theme === "dark" ? "Light" : "Dark"} Mode
    </button>
  );
}
