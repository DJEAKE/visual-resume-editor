import React from "react";
import { useTheme } from "../context/useTheme";
import { FONTS } from "../constants/constants";

export default function ThemeSelector() {
  const { theme, setTheme } = useTheme();

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 16,
        marginBottom: 16,
      }}
    >
      <label
        style={{
          display: "flex",
          alignItems: "center",
          gap: 4,
          cursor: "pointer",
        }}
      >
        <span
          role="img"
          aria-label="palette"
          style={{ fontSize: 22, verticalAlign: "middle" }}
        >
          🎨
        </span>
        <input
          type="color"
          value={theme.color}
          onChange={(e) => setTheme({ ...theme, color: e.target.value })}
          style={{
            width: 32,
            height: 32,
            border: "none",
            background: "none",
            cursor: "pointer",
            padding: 0,
            marginLeft: 2,
          }}
        />
      </label>
      <span style={{ fontSize: 15, color: "#444" }}></span>
      <select
        value={theme.font}
        onChange={(e) => setTheme({ ...theme, font: e.target.value })}
      >
        {FONTS.map((f) => (
          <option key={f.label} value={f.value}>
            {f.label}
          </option>
        ))}
      </select>
    </div>
  );
}
