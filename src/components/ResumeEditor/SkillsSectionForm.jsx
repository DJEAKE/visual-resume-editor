import React from "react";

export default function SkillsSectionForm({ data, onChange }) {
  return (
    <div>
      <label>Навыки</label>
      <textarea
        value={data.skill || ""}
        onChange={(e) => onChange({ ...data, skill: e.target.value })}
        placeholder="Введите краткую информацию о себе"
        rows={1}
        style={{ width: "100%", padding: "8px", fontSize: "1rem" }}
      />
    </div>
  );
}
