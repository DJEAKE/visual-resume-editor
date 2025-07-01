import React from "react";

export default function EducationSectionForm({ data, onChange }) {
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
    </div>
  );
}
