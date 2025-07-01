import React, { useState } from "react";

export default function EducationSectionForm({ data, onChange }) {
  const [isCollapsed, setIsCollapsed] = useState(false);
  if (isCollapsed) {
    // Свернутое отображение
    return (
      <div>
        <h3>🎓 Образование</h3>
        <div style={{ color: "#555", marginTop: 4 }}>
          {data.institution} {data.major} {data.period}
        </div>
        <button onClick={() => setIsCollapsed(false)} style={{ marginTop: 8 }}>
          Редактировать
        </button>
      </div>
    );
  }
  return (
    <div>
      <h3>🎓 Образование</h3>
      <label>Учебное заведение</label>
      <textarea
        value={data.institution || ""}
        onChange={(e) => onChange({ ...data, institution: e.target.value })}
        placeholder="Введите учебное заведение"
        rows={1}
      />
      <label>Специальность</label>
      <textarea
        value={data.major || ""}
        onChange={(e) => onChange({ ...data, major: e.target.value })}
        placeholder="Введите специальность"
        rows={1}
      />
      <label>Период обучения</label>
      <textarea
        value={data.period || ""}
        onChange={(e) => onChange({ ...data, period: e.target.value })}
        placeholder="Введите переиод обучения"
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
