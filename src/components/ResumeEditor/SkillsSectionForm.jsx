import React from "react";

export default function SkillsSectionForm({ data, onChange }) {
  return (
    <div>
      <h3>⚡ Навыки</h3>
      <label>Навыки</label>
      <textarea
        value={data.skill || ""}
        onChange={(e) => onChange({ ...data, skill: e.target.value })}
        placeholder="Введите краткую информацию о себе"
      />
    </div>
  );
}
