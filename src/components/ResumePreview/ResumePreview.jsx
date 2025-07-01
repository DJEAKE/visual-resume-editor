import React, { useRef } from "react";
import PreviewSection from "./PreviewSection";
import html2pdf from "html2pdf.js";

export default function ResumePreview({ sections, theme }) {
  const previewRef = useRef();

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
    <div>
      <button onClick={handleDownloadPDF} style={{ marginBottom: "1rem" }}>
        Скачать как PDF
      </button>
      <div
        className="preview"
        ref={previewRef}
        style={{
          "--main-color": theme.color,
          fontFamily: theme.font,
        }}
      >
        {sections.map((section) => (
          <PreviewSection key={section.id} section={section} />
        ))}
      </div>
    </div>
  );
}
