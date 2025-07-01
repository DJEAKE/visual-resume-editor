import "./styles/App.css";
import ResumeEditor from './components/ResumeEditor/ResumeEditor';
import ResumePreview from './components/ResumePreview/ResumePreview';
import { useSections } from './hooks/useSections';

function App() {
  const [sections, setSections] =  useSections();
  return (
    <div className='app-flex-container'>
      <ResumeEditor sections={sections} setSections={setSections}/>
      <ResumePreview sections={sections}/>
    </div>
  );
  
}

export default App
