import React from "react";
import SectionFormWrapper from "../common/SectionFormWrapper";
import AIBtn from "../common/AIBtn";

export default function SkillsSectionForm({
  data,
  onChange,
  isCollapsed,
  setIsCollapsed,
  showAIBtn,
  onAIClick,
  onDelete,
}) {
  const isValid = data.skill?.trim();

  return (
    <SectionFormWrapper
      title="⚡ Навыки"
      isCollapsed={isCollapsed}
      setIsCollapsed={setIsCollapsed}
      summary={data.skill || ""}
    >
      <textarea
        value={data.skill || ""}
        onChange={(e) => onChange({ ...data, skill: e.target.value })}
        placeholder="Введите навыки которыми владеете"
        rows={2}
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
