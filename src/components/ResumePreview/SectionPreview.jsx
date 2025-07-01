import React from "react";

export default function SectionPreview({ title, fields }) {
  return (
    <div className={`preview-${title.toLowerCase()}`}>
      <h2>{title}</h2>
      {fields.map(
        (field, idx) =>
          field.value && (
            <div key={idx} style={{ marginBottom: 8 }}>
              {field.label && <strong>{field.label}: </strong>}
              <span>{field.value}</span>
            </div>
          )
      )}
    </div>
  );
}
