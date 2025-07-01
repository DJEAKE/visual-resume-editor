import React, { useState }from "react";

export default function CertificateSectionForm({ data, onChange }) {
  const [isCollapsed, setIsCollapsed] = useState(false);
    if (isCollapsed) {
    // Свернутое отображение
    return (
      <div>
        📜 Сертификаты
        <div style={{ color: "#555", marginTop: 4 }}>
          {data.certificate} | {data.period}
        </div>
        <button onClick={() => setIsCollapsed(false)} style={{ marginTop: 8 }}>
          Редактировать
        </button>
      </div>
    );
  }
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
            <button
        style={{ marginTop: 8, background: "#4f8cff", color: "#fff" }}
        onClick={() => setIsCollapsed(true)}
      >
        Сохранить
      </button>
    </div>
  );
}
