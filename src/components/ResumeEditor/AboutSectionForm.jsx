import React from "react";
import SectionFormWrapper from "../common/SectionFormWrapper";
import AIBtn from "../common/AIBtn";

export default function AboutSectionForm({
  data,
  onChange,
  isCollapsed,
  setIsCollapsed,
  showAIBtn,
  onAIClick,
  onDelete,
}) {
  const isValid = data.text?.trim();

  return (
    <SectionFormWrapper
      title="👤 О себе"
      isCollapsed={isCollapsed}
      setIsCollapsed={setIsCollapsed}
      summary={data.text || ""}
    >
      <textarea
        value={data.text || ""}
        onChange={(e) => onChange({ ...data, text: e.target.value })}
        placeholder="Введите краткую информацию о себе"
        rows={2}
        style={{ resize: "vertical", minHeight: 40, maxHeight: 200 }}
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
        <button className="delete-btn" onClick={onDelete}>Удалить</button>
      </div>
    </SectionFormWrapper>
  );
}
