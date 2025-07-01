import React from "react";

export default function CertificateSectionForm({ data, onChange }) {
  return (
    <div>
      <label>Сертификат</label>
      <textarea
        value={data.certificate || ""}
        onChange={(e) => onChange({ ...data, certificate: e.target.value })}
        placeholder="Введите название сертификата"
        rows={5}
        style={{ width: "100%", padding: "8px", fontSize: "1rem" }}
      />
      <label>Дата получения сертификата</label>
      <textarea
        value={data.period || ""}
        onChange={(e) => onChange({ ...data, period: e.target.value })}
        placeholder="Введите дату получения сертификата"
        rows={5}
        style={{ width: "100%", padding: "8px", fontSize: "1rem" }}
      />
    </div>
  );
}
