import React from "react";

export default function AboutSectionForm({ data, onChange }) {
  return (
    <div>
      <label> О Себе</label>
      <textarea
        value={data.text || ""}
        onChange={(e) => onChange({ ...data, text: e.target.value })}
        placeholder="Введите краткую информацию о себе"
        rows={1}
        style={{ width: "100%", padding: "8px", fontSize: "1rem" }}
      />
    </div>
  );
}
