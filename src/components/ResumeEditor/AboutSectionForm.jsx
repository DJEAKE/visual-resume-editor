import React from "react";

export default function AboutSectionForm({ data, onChange }) {
  return (
    <div>
      <h3>👤 О себе</h3>
      <label> О Себе</label>
      <textarea
        value={data.text || ""}
        onChange={(e) => onChange({ ...data, text: e.target.value })}
        placeholder="Введите краткую информацию о себе"
        rows={1}
      />
    </div>
  );
}
