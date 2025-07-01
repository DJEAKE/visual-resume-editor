import React from "react";
import SectionPreview from "./SectionPreview";

export default function PreviewSection({ section }) {
  switch (section.type) {
    case "about":
      return (
        <SectionPreview
          title="О себе"
          fields={[{ value: section.data.text }]}
        />
      );
    case "experience":
      return (
        <SectionPreview
          title="Опыт работы"
          fields={[
            { label: "Должность", value: section.data.position },
            { label: "Компания", value: section.data.company },
            { label: "Период", value: section.data.period },
            { label: "Описание", value: section.data.experience },
          ]}
        />
      );
    case "education":
      return (
        <SectionPreview
          title="Образование"
          fields={[
            { label: "Учебное заведение", value: section.data.institution },
            { label: "Специальность", value: section.data.major },
            { label: "Период", value: section.data.period },
          ]}
        />
      );
    case "skills":
      return (
        <SectionPreview
          title="Навыки"
          fields={[{ value: section.data.skill }]}
        />
      );
    case "certificates":
      return (
        <SectionPreview
          title="Сертификат"
          fields={[
            { label: "Название", value: section.data.certificate },
            { label: "Период", value: section.data.period },
          ]}
        />
      );
    default:
      return null;
  }
}
