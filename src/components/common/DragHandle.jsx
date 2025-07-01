import React from "react";

export default function DragHandle({ dragHandleProps }) {
  return (
    <div
      {...dragHandleProps}
      className="drag-handle"
      title="Перетащите для сортировки"
      style={{
        cursor: "grab",
        display: "inline-block",
        marginBottom: 8,
        userSelect: "none",
      }}
    >
      <span style={{ fontSize: 20, opacity: 0.6, marginRight: 8 }}>☰</span>
    </div>
  );
}