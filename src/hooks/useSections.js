import { useState, useEffect } from "react";

const STORAGE_KEY = "resume_sections";

export function useSections() {
  const [sections, setSections] = useState(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(sections));
  }, [sections]);

  return [sections, setSections];
}