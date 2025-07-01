import React from "react";

export default function PreviewSection({ section }) {
  switch (section.type) {
    case "about":
      return (
        <div className="preview-about">
          <h2>О себе</h2>
          <p>{section.data.text}</p>
        </div>
      );
    case "experience":
      return (
        <div className="preview-experience">
          <h2>Должность</h2>
          <p>{section.data.position}</p>

          <h2>Прошлое место работы</h2>
          <p>{section.data.company}</p>

          <h2>Период работы</h2>
          <p>{section.data.period}</p>

          <h2>Опыт работы</h2>
          <p>{section.data.experience}</p>
        </div>
      );
    case "education":
      return (
        <div className="preview-education">
          <h2>Учебное заведение</h2>
          <p>{section.data.institution}</p>

          <h2>Специальность</h2>
          <p>{section.data.major}</p>

          <h2>Период обучения</h2>
          <p>{section.data.period}</p>
        </div>
      );
    case "skills":
      return (
        <div className="preview-skills">
          <h2>Навыки</h2>
          <p>{section.data.skill}</p>
        </div>
      );
    case "certificates":
      return (
        <div className="preview-certificate">
          <h2>Сертификат</h2>
          <p>{section.data.certificate}</p>

          <h2>Дата получения</h2>
          <p>{section.data.period}</p>
        </div>
      );
    default:
      return null;
  }
}
