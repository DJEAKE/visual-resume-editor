import React from "react";
import SectionFormWrapper from "../common/SectionFormWrapper";
import AIBtn from "../common/AIBtn";

export default function ExperienceSectionForm({
  data,
  onChange,
  isCollapsed,
  setIsCollapsed,
  showAIBtn,
  onAIClick,
  onDelete,
}) {
  const isValid =
    data.position?.trim() &&
    data.company?.trim() &&
    data.period?.trim() &&
    data.experience?.trim();

  return (
    <SectionFormWrapper
      title="💼 Опыт работы"
      isCollapsed={isCollapsed}
      setIsCollapsed={setIsCollapsed}
      summary={`${data.position || ""} ${data.company || ""} ${
        data.period || ""
      }`}
    >
      <label>Должность</label>
      <input
        value={data.position || ""}
        onChange={(e) => onChange({ ...data, position: e.target.value })}
        placeholder="Введите должность"
      />
      <label>Компания</label>
      <input
        value={data.company || ""}
        onChange={(e) => onChange({ ...data, company: e.target.value })}
        placeholder="Введите компания"
      />
      <label>Период</label>
      <input
        value={data.period || ""}
        onChange={(e) => onChange({ ...data, period: e.target.value })}
        placeholder="Введите период"
      />
      <label>Описание</label>
      <textarea
        value={data.experience || ""}
        onChange={(e) => onChange({ ...data, experience: e.target.value })}
        placeholder="Введите описание"
        rows={2}
        style={{ resize: "vertical", minHeight: 40, maxHeight: 200 }}
      />
      <div className="form-actions-center">
        <button onClick={() => setIsCollapsed(true)} disabled={!isValid}>
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
