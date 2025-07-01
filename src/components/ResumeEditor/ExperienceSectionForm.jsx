import React from "react";

export default function ExperienceSectionForm({ data, onChange }) {
  return (
    <div>
      <h3>💼 Опыт работы</h3>
      <label>Ваша должность</label>
      <textarea
        value={data.position || ""}
        onChange={(e) => onChange({ ...data, position: e.target.value })}
        placeholder="Введите вашу должность"
        rows={1}
      />
      <label>Компания</label>
      <textarea
        value={data.company || ""}
        onChange={(e) => onChange({ ...data, company: e.target.value })}
        placeholder="Введите название компании"
        rows={1}
      />
      <label>Период</label>
      <textarea
        value={data.period || ""}
        onChange={(e) => onChange({ ...data, period: e.target.value })}
        placeholder="Введите период"
        rows={1}
      />
      <label>Деятельность</label>
      <textarea
        value={data.experience || ""}
        onChange={(e) => onChange({ ...data, experience: e.target.value })}
        placeholder="Введите ваш опыт"
        rows={1}
      />
    </div>
  );
}
