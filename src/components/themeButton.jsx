"use client";
import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";
import { CiLight, CiDark } from "react-icons/ci";

const ThemeButton = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Wait for client-side mount
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; // 👈 Prevents hydration error

  return (
    <button aria-label="Mode Changing" onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
      {theme === "dark" ? (
        <div className="bg-[#EBF2FA] p-3 rounded-full shadow-2xl border border-slate-200">
          <CiLight className="text-black text-3xl cursor-pointer" />
        </div>
      ) : (
        <div className="bg-[#EBF2FA] p-3 rounded-full shadow-2xl border border-slate-200">
          <CiDark className="text-black text-3xl cursor-pointer" />
        </div>
      )}
    </button>
  );
};

export default ThemeButton;
