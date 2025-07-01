import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";

import AboutSectionForm from "./AboutSectionForm";
import ExperienceSectionForm from "./ExperienceSectionForm";
import EducationSectionForm from "./EducationSectionForm";
import SkillsSectionForm from "./SkillsSectionForm";
import CertificateSectionForm from "./CertificatesSectionForm";

import { MOCK_AI } from "../utils/mockAIAnswer";

const fonts = [
  { label: "Georgia", value: "Georgia, serif" },
  { label: "Arial", value: "Arial, sans-serif" }
];

export default function ResumeEditor({ sections, setSections, theme, setTheme }) {
  const [selectedType, setSelectedType] = useState("");

  const isSectionExists = (type) => sections.some((sec) => sec.type === type);

  const addSection = () => {
    if (isSectionExists(selectedType)) return;
    const newSection = {
      id: uuidv4(),
      type: selectedType,
      data: {},
    };
    setSections([...sections, newSection]);
    setSelectedType("");
  };

  const updateSection = (id, newData) => {
    const updated = sections.map((sec) =>
      sec.id === id ? { ...sec, data: newData } : sec
    );
    setSections(updated);
  };

  const deleteSection = (id) => {
    setSections(sections.filter((sec) => sec.id !== id));
  };

  const insertMockAIText = (id, type) => {
    if (MOCK_AI[type]) {
      updateSection(id, { ...MOCK_AI[type] });
    } else {
      updateSection(id, { text: "" });
    }
  };

  const renderSectionForm = (section) => {
    switch (section.type) {
      case "about":
        return (
          <AboutSectionForm
            data={section.data}
            onChange={(newData) => updateSection(section.id, newData)}
          />
        );
      case "experience":
        return (
          <ExperienceSectionForm
            data={section.data}
            onChange={(newData) => updateSection(section.id, newData)}
          />
        );
      case "education":
        return (
          <EducationSectionForm
            data={section.data}
            onChange={(newData) => updateSection(section.id, newData)}
          />
        );
      case "skills":
        return (
          <SkillsSectionForm
            data={section.data}
            onChange={(newData) => updateSection(section.id, newData)}
          />
        );
      case "certificates":
        return (
          <CertificateSectionForm
            data={section.data}
            onChange={(newData) => updateSection(section.id, newData)}
          />
        );
      // Для других типов
      default:
        return null;
    }
  };
  // Drag & Drop handler
  const onDragEnd = (result) => {
    if (!result.destination) return;
    const items = Array.from(sections);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    setSections(items);
  };
  return (
    <div className="resume-editor">
      <h2>Редактор резюме</h2>
      <div style={{ display: "flex", alignItems: "center", marginBottom: 16, gap: 16 }}>
        <span role="img" aria-label="palette">🎨</span>
        <input
          type="color"
          value={theme.color}
          onChange={e => setTheme({ ...theme, color: e.target.value })}
          style={{ width: 32, height: 32, border: "none", background: "none" }}
        />
        <select
          value={theme.font}
          onChange={e => setTheme({ ...theme, font: e.target.value })}
        >
          {fonts.map(f => (
            <option key={f.label} value={f.value}>{f.label}</option>
          ))}
        </select>
      </div>
      <div style={{ marginBottom: "1rem" }}>
        <label htmlFor="section-select">Выберите секцию:</label>
        <select
          id="section-select"
          value={selectedType}
          onChange={(e) => setSelectedType(e.target.value)}
          style={{ marginRight: "1rem" }}
        >
          <option value="">-- Выберите секцию --</option>
          <option value="about" disabled={isSectionExists("about")}>
            👤 О себе
          </option>
          <option value="experience" disabled={isSectionExists("experience")}>
            {" "}
            💼 Опыт работы
          </option>
          <option value="education" disabled={isSectionExists("education")}>
            {" "}
            🎓 Образование
          </option>
          <option value="skills" disabled={isSectionExists("skills")}>
            {" "}
            ⚡ Навыки
          </option>
          <option value="certificates" disabled={isSectionExists("certificates")}>
            {" "}
            📜 Сертификаты
          </option>

          {/* Позже добавим другие опции */}
        </select>

        <button
          onClick={addSection}
          disabled={!selectedType || isSectionExists(selectedType)}
        >
          Добавить секцию
        </button>
      </div>
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="sections">
          {(provided) => (
            <div {...provided.droppableProps} ref={provided.innerRef}>
              {sections.map((section, index) => (
                <Draggable
                  key={section.id}
                  draggableId={section.id}
                  index={index}
                >
                  {(provided, snapshot) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      className={`draggable-section${snapshot.isDragging ? " dragging" : ""}`}
                    >
                      <div
                        {...provided.dragHandleProps}
                        className="drag-handle"
                        title="Перетащите для сортировки"
                        style={{ cursor: "grab", display: "inline-block", marginBottom: 8 }}
                      >
                        {/* Можно использовать иконку или символ */}
                        <span style={{ fontSize: 20, opacity: 0.6, marginRight: 8 }}>☰</span>
                      </div>
                      {renderSectionForm(section)}
                      <button
                        onClick={() =>
                          insertMockAIText(section.id, section.type)
                        }
                        style={{ marginTop: "0.5rem", marginRight: "0.5rem" }}
                      >
                        AI-подсказка
                      </button>
                      <button
                        onClick={() => deleteSection(section.id)}
                        style={{ marginTop: "0.5rem" }}
                      >
                        Удалить
                      </button>
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
}
