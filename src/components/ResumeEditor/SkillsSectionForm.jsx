import React, { useState } from "react";

export default function SkillsSectionForm({ data, onChange }) {
  const [isCollapsed, setIsCollapsed] = useState(false);
  if (isCollapsed) {
    // Свернутое отображение
    return (
      <div>
        <h3>⚡ Навыки</h3>
        <div style={{ color: "#555", marginTop: 4 }}>{data.skill}</div>
        <button onClick={() => setIsCollapsed(false)} style={{ marginTop: 8 }}>
          Редактировать
        </button>
      </div>
    );
  }
  return (
    <div>
      <h3>⚡ Навыки</h3>
      <textarea
        value={data.skill || ""}
        onChange={(e) => onChange({ ...data, skill: e.target.value })}
        placeholder="Введите навыки которыми владеете"
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
