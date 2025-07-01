import React, { useState }from "react";

export default function AboutSectionForm({ data, onChange }) {
  const [isCollapsed, setIsCollapsed] = useState(false);
  if (isCollapsed) {
    // Свернутое отображение
    return (
      <div>
        <h3>👤 О себе</h3>
        <div style={{ color: "#555", marginTop: 4 }}>
          {data.text}
        </div>
        <button onClick={() => setIsCollapsed(false)} style={{ marginTop: 8 }}>
          Редактировать
        </button>
      </div>
    );
  }
  return (
    <div>
      <h3>👤 О себе</h3>
      <textarea
        value={data.text || ""}
        onChange={(e) => onChange({ ...data, text: e.target.value })}
        placeholder="Введите краткую информацию о себе"
        rows={1}
      />
      <button
        style={{ marginTop: 8, background: "#4f8cff", color: "#fff" }}
        onClick={() => setIsCollapsed(true)}
      >
        Сохранить
      </button>
    </div>
  );
}
