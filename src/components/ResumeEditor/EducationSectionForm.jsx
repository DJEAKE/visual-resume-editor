import React from "react";
import SectionFormWrapper from "../common/SectionFormWrapper";
import AIBtn from "../common/AIBtn";

export default function EducationSectionForm({
  data,
  onChange,
  isCollapsed,
  setIsCollapsed,
  showAIBtn,
  onAIClick,
  onDelete,
}) {
  const isValid =
    data.institution?.trim() &&
    data.major?.trim() &&
    data.period?.trim();

  return (
    <SectionFormWrapper
      title="🎓 Образование"
      isCollapsed={isCollapsed}
      setIsCollapsed={setIsCollapsed}
      summary={`${data.institution || ""} ${data.major || ""} ${data.period || ""}`}
    >
      <label>Учебное заведение</label>
      <textarea
        value={data.institution || ""}
        onChange={(e) => onChange({ ...data, institution: e.target.value })}
        placeholder="Введите учебное заведение"
        rows={1}
        style={{ resize: "vertical", minHeight: 32, maxHeight: 120 }}
      />
      <label>Специальность</label>
      <textarea
        value={data.major || ""}
        onChange={(e) => onChange({ ...data, major: e.target.value })}
        placeholder="Введите специальность"
        rows={1}
        style={{ resize: "vertical", minHeight: 32, maxHeight: 120 }}
      />
      <label>Период обучения</label>
      <textarea
        value={data.period || ""}
        onChange={(e) => onChange({ ...data, period: e.target.value })}
        placeholder="Введите период обучения"
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
                <button className="delete-btn" onClick={onDelete}>Удалить</button>
      </div>
    </SectionFormWrapper>
  );
}
