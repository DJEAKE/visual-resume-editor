import React from "react";

export default function EducationSectionForm({ data, onChange }) {
  return (
    <div>
      <label>Учебное заведение</label>
      <textarea
        value={data.institution || ""}
        onChange={(e) => onChange({ ...data, institution: e.target.value })}
        placeholder="Введите учебное заведение"
        rows={1}
        style={{ width: "100%", padding: "8px", fontSize: "1rem" }}
      />
      <label>Специальность</label>
      <textarea
        value={data.major || ""}
        onChange={(e) => onChange({ ...data, major: e.target.value })}
        placeholder="Введите специальность"
        rows={1}
        style={{ width: "100%", padding: "8px", fontSize: "1rem" }}
      />
      <label>Период обучения</label>
      <textarea
        value={data.period || ""}
        onChange={(e) => onChange({ ...data, period: e.target.value })}
        placeholder="Введите переиод обучения"
        rows={1}
        style={{ width: "100%", padding: "8px", fontSize: "1rem" }}
      />
    </div>
  );
}
