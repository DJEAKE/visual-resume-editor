import "./styles/App.css";
import React, { useState } from "react";
import ResumeEditor from './components/ResumeEditor/ResumeEditor';
import ResumePreview from './components/ResumePreview/ResumePreview';
import { useSections } from './hooks/useSections';

function App() {
  const [sections, setSections] =  useSections();
  const [theme, setTheme] = useState({
    color: "#4f8cff",
    font: "Inter"
  });

  return (
    <div className='app-flex-container'>
      <ResumeEditor
        sections={sections}
        setSections={setSections}
        theme={theme}
        setTheme={setTheme}
      />
      <ResumePreview sections={sections} theme={theme} />
    </div>
  );
  
}

export default App
