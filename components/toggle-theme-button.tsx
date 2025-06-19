import type { FC, ReactNode } from "react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { IoSunnyOutline as Sun, IoMoonOutline as Moon } from "react-icons/io5";

const ToggleThemeButton: FC = (): ReactNode => {
  const { theme, setTheme } = useTheme();
  return (
    <Button
      title={theme === "dark" ? "Switch to light mode." : "Switch to dark mode."}
      variant="outline"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="mr-4 border-border"
    >
      <span className="py-1 flex sm:hidden">
        {theme !== "light" ? <Sun /> : <Moon />}</span>
      <span className="py-1 hidden sm:flex gap-2">
        <Sun /> <Moon />
      </span>
    </Button>
  )
}

export default ToggleThemeButton;
