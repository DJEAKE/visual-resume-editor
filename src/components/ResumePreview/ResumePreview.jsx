import React from "react";
import PreviewSection from "./PreviewSection";
import { useTheme } from "../context/useTheme";

export default function ResumePreview({ sections, previewRef }) {
  const { theme } = useTheme();
  const hasSections = sections && sections.length > 0;

  return (
    <div>
      <div
        className={hasSections ? "preview" : ""}
        ref={previewRef}
        style={
          hasSections
            ? {
                "--main-color": theme.color,
                fontFamily: theme.font,
                width: "100%",
                minWidth: 0,
                boxSizing: "border-box",
                display: "flex",
                flexDirection: "column",
                gap: "16px",
              }
            : {}
        }
      >
        {hasSections
          ? sections.map((section) => (
              <PreviewSection key={section.id} section={section} />
            ))
          : null}
      </div>
    </div>
  );
}
