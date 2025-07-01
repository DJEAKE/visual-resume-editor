import React from "react";

export default function CertificateSectionForm({ data, onChange }) {
  return (
    <div>
      <h3>📜 Сертификаты</h3>
      <label>Сертификат</label>
      <textarea
        value={data.certificate || ""}
        onChange={(e) => onChange({ ...data, certificate: e.target.value })}
        placeholder="Введите название сертификата"
        rows={1}
      />
      <label>Дата получения сертификата</label>
      <textarea
        value={data.period || ""}
        onChange={(e) => onChange({ ...data, period: e.target.value })}
        placeholder="Введите дату получения сертификата"
        rows={1}
      />
    </div>
  );
}
