import React from "react";

export default function AIBtn({ show, onClick, style }) {
  if (!show) return null;
  return (
    <button
      className="ai-btn"
      style={{
        marginLeft: 8,
        background: "#a259ff",
        color: "#fff",
        ...style,
      }}
      onClick={onClick}
    >
      <span role="img" aria-label="ai" style={{ marginRight: 4 }}>
        ✨
      </span>
      AI-подсказка
    </button>
  );
}
