import React from "react";
import SectionFormWrapper from "../common/SectionFormWrapper";
import AIBtn from "../common/AIBtn";

export default function CertificatesSectionForm({
  data,
  onChange,
  isCollapsed,
  setIsCollapsed,
  showAIBtn,
  onAIClick,
  onDelete,
}) {
  const isValid = data.certificate?.trim() && data.period?.trim();

  return (
    <SectionFormWrapper
      title="📜 Сертификаты"
      isCollapsed={isCollapsed}
      setIsCollapsed={setIsCollapsed}
      summary={`${data.certificate || ""} ${data.period || ""}`}
    >
      <label>Сертификат</label>
      <textarea
        value={data.certificate || ""}
        onChange={(e) => onChange({ ...data, certificate: e.target.value })}
        placeholder="Введите название сертификата"
        rows={1}
        style={{ resize: "vertical", minHeight: 32, maxHeight: 120 }}
      />
      <label>Дата получения сертификата</label>
      <textarea
        value={data.period || ""}
        onChange={(e) => onChange({ ...data, period: e.target.value })}
        placeholder="Введите дату получения сертификата"
        rows={1}
        style={{ resize: "vertical", minHeight: 32, maxHeight: 120 }}
      />
      <div className="form-actions-center">
        <button
          style={{ marginTop: 8, background: "#4f8cff", color: "#fff" }}
          onClick={() => setIsCollapsed(true)}
          disabled={!isValid}
        >
          Сохранить
        </button>
        <AIBtn show={showAIBtn} onClick={onAIClick} />
        <button className="delete-btn" onClick={onDelete}>
          Удалить
        </button>
      </div>
    </SectionFormWrapper>
  );
}
