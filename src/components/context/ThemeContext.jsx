import React, { createContext, useState } from "react";

// Создаём и экспортируем ThemeContext как именованный экспорт
export const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState({
    color: "#4f8cff",
    font: "Inter, sans-serif",
  });

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}