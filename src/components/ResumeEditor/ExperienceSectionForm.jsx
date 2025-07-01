import React from "react";

export default function ExperienceSectionForm({ data, onChange }) {
  return (
    <div>
      <label>Ваша должность</label>
      <textarea
        value={data.position || ""}
        onChange={(e) => onChange({ ...data, position: e.target.value })}
        placeholder="Введите вашу должность"
        rows={1}
        style={{ width: "100%", padding: "8px", fontSize: "1rem" }}
      />
      <label>Компания</label>
      <textarea
        value={data.company || ""}
        onChange={(e) => onChange({ ...data, company: e.target.value })}
        placeholder="Введите название компании"
        rows={1}
        style={{ width: "100%", padding: "8px", fontSize: "1rem" }}
      />
      <label>Период</label>
      <textarea
        value={data.period || ""}
        onChange={(e) => onChange({ ...data, period: e.target.value })}
        placeholder="Введите период"
        rows={1}
        style={{ width: "100%", padding: "8px", fontSize: "1rem" }}
      />
      <label>Деятельность</label>
      <textarea
        value={data.experience || ""}
        onChange={(e) => onChange({ ...data, experience: e.target.value })}
        placeholder="Введите ваш опыт"
        rows={1}
        style={{ width: "100%", padding: "8px", fontSize: "1rem" }}
      />
    </div>
  );
}
