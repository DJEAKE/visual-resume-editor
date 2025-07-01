import React, { useState, useRef } from "react";
import { v4 as uuidv4 } from "uuid";
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";
import html2pdf from "html2pdf.js";

import AboutSectionForm from "./AboutSectionForm";
import ExperienceSectionForm from "./ExperienceSectionForm";
import EducationSectionForm from "./EducationSectionForm";
import SkillsSectionForm from "./SkillsSectionForm";
import CertificateSectionForm from "./CertificatesSectionForm";

import { MOCK_AI } from "../utils/mockAIAnswer";
import { useSectionCollapse } from "../../hooks/useSectionCollapse";
import ThemeSelector from "../common/ThemeSelector";
import DragHandle from "../common/DragHandle";

export default function ResumeEditor({ sections, setSections, previewRef }) {
  const [selectedType, setSelectedType] = useState("");
  const { isCollapsed, setIsCollapsed } = useSectionCollapse();
  const sectionsContainerRef = useRef(null);

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
    setTimeout(() => {
      if (sectionsContainerRef.current) {
        sectionsContainerRef.current.scrollIntoView({
          behavior: "smooth",
          block: "end",
        });
      }
    }, 100);
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
    const commonProps = {
      data: section.data,
      onChange: (newData) => updateSection(section.id, newData),
      isCollapsed: isCollapsed(section.id),
      setIsCollapsed: (value) => setIsCollapsed(section.id, value),
      showAIBtn: !isCollapsed(section.id),
      onAIClick: () => insertMockAIText(section.id, section.type),
      onDelete: () => deleteSection(section.id), // добавьте это!
    };

    switch (section.type) {
      case "about":
        return <AboutSectionForm {...commonProps} />;
      case "experience":
        return <ExperienceSectionForm {...commonProps} />;
      case "education":
        return <EducationSectionForm {...commonProps} />;
      case "skills":
        return <SkillsSectionForm {...commonProps} />;
      case "certificates":
        return <CertificateSectionForm {...commonProps} />;
      default:
        return null;
    }
  };

  const onDragEnd = (result) => {
    if (!result.destination) return;
    const items = Array.from(sections);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    setSections(items);
  };

  const handleDownloadPDF = () => {
    if (!previewRef.current) return;
    html2pdf()
      .set({
        margin: 0.5,
        filename: "resume.pdf",
        html2canvas: { scale: 2 },
        jsPDF: { unit: "in", format: "a4", orientation: "portrait" },
      })
      .from(previewRef.current)
      .save();
  };

  return (
    <div className="resume-editor">
      <h2>Редактор резюме</h2>
      <ThemeSelector />
      <div
        style={{
          display: "flex",
          alignItems: "center",
          marginBottom: "1rem",
          gap: 12,
        }}
      >
        <select
          id="section-select"
          value={selectedType}
          onChange={(e) => setSelectedType(e.target.value)}
          style={{ marginRight: 0 }}
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
          <option
            value="certificates"
            disabled={isSectionExists("certificates")}
          >
            {" "}
            📜 Сертификаты
          </option>
        </select>
        <button
          onClick={addSection}
          disabled={!selectedType || isSectionExists(selectedType)}
          className="section-add-btn"
        >
          + добавить секцию
        </button>
        <button onClick={handleDownloadPDF} className="pdf-btn">
          <span style={{ fontSize: 18, marginRight: 8 }}>⬇️</span> Скачать как
          PDF
        </button>
      </div>
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="sections">
          {(provided) => (
            <div
              {...provided.droppableProps}
              ref={(el) => {
                provided.innerRef(el);
                sectionsContainerRef.current = el;
              }}
            >
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
                      className={`draggable-section${
                        snapshot.isDragging ? " dragging" : ""
                      }`}
                    >
                      <DragHandle dragHandleProps={provided.dragHandleProps} />
                      {renderSectionForm(section)}
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
