import React, { useState } from "react";

export default function ExperienceSectionForm({ data, onChange }) {
  const [isCollapsed, setIsCollapsed] = useState(false);

  if (isCollapsed) {
    // Свернутое отображение
    return (
      <div>
        <h3>💼 Опыт работы</h3>
        <div style={{ color: "#555", marginTop: 4 }}>
          {data.position} {data.company} {data.experience} {data.description}
        </div>
        <button onClick={() => setIsCollapsed(false)} style={{ marginTop: 8 }}>
          Редактировать
        </button>
      </div>
    );
  }

  // Полная форма
  return (
    <div>
      <h3>💼 Опыт работы</h3>
      <label>Должность</label>
      <input
        value={data.position || ""}
        onChange={(e) => onChange({ ...data, position: e.target.value })}
        placeholder="Введите должность"
      />
      <label>Компания</label>
      <input
        value={data.company || ""}
        onChange={(e) => onChange({ ...data, company: e.target.value })}
        placeholder="Введите компания"
      />
      <label>Период</label>
      <input
        value={data.period || ""}
        onChange={(e) => onChange({ ...data, period: e.target.value })}
        placeholder="Введите период"
      />
      <label>Описание</label>
      <textarea
        value={data.experience || data.description || ""}
        onChange={(e) => onChange({ ...data, experience: e.target.value })}
        placeholder="Введите описание"
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
