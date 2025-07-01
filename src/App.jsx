import "./styles/App.css";
import React, { useRef } from "react";
import { ThemeProvider } from "./components/context/ThemeContext";
import ResumeEditor from "./components/ResumeEditor/ResumeEditor";
import ResumePreview from "./components/ResumePreview/ResumePreview";
import { useSections } from "./hooks/useSections";

function App() {
  const [sections, setSections] = useSections();
  const previewRef = useRef();

  return (
    <ThemeProvider>
      <div className="app-flex-container">
        <ResumeEditor sections={sections} setSections={setSections} previewRef={previewRef} />
        <ResumePreview sections={sections} previewRef={previewRef} />
      </div>
    </ThemeProvider>
  );
}

export default App;
