import type { FC, ReactNode } from "react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { IoSunnyOutline as Sun, IoMoonOutline as Moon } from "react-icons/io5";
import { useState, useRef, useEffect } from "react";

const ToggleThemeButton: FC = (): ReactNode => {
  const { resolvedTheme, theme, setTheme } = useTheme();
  const [showPopup, setShowPopup] = useState(false);
  const popupRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (popupRef.current && !popupRef.current.contains(e.target as Node)) {
        setShowPopup(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      <Button
        title={resolvedTheme === "dark" ? "Switch to light mode." : "Switch to dark mode."}
        variant="outline"
        onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
        onContextMenu={(e) => {
          e.preventDefault();
          setShowPopup(true);
        }
        }
        className="border-border"
      >
        <span className="py-1 flex sm:hidden">
          {theme !== "light" ? <Sun /> : <Moon />}
        </span>
        <span className="py-1 hidden sm:flex gap-2">
          <Sun /> <Moon />
        </span>
      </Button>

      {showPopup && (
        <div ref={popupRef} className="bg-muted absolute top-12 right-4 mt-1 w-32 rounded-md border border-border bg-popover shadow-md z-50">
          {["System theme", "Light mode", "Dark mode"].map((t) => (
            <button
              key={t}
              onClick={() => {
                setTheme(t.split(" ")[0].toLowerCase());
                setShowPopup(false);
              }}
              className={`w-full px-3 py-2 text-left text-sm capitalize hover:bg-accent ${theme === t.split(" ")[0].toLowerCase() && "font-semibold text-primary"}`}
            >
              {t}
            </button>
          ))}
        </div >
      )}
    </>
  );
};

export default ToggleThemeButton;
