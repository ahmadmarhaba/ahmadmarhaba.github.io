import './App.css';
import  PersonalInformation  from "./Component/PersonalInformation";
import  Projects  from "./Component/Projects";
import  WorkExperience  from "./Component/WorkExperience";
import  Education  from "./Component/Education";
import  Certificates  from "./Component/Certificates";
import  Languages  from "./Component/Languages";
import  ProgrammingLanguages  from "./Component/ProgrammingLanguages";
import  Skills  from "./Component/Skills";
import  Visa  from "./Component/Visa";
import  Letter  from "./Component/Letter";
import { useState } from 'react';

function App() {
  const [page,SetPage] = useState(0)
  return (
    <div className="App">
        <div className='nav'>
          <label className={page === 0 ? `selectedButton`: ''}>
            <input type="radio" value={0} name="page" onChange={(e)=>{ SetPage(parseInt(e.target.value)) }}/>Resume
          </label>
          <label className={page === 1 ? `selectedButton`: ''}>
            <input type="radio" value={1} name="page" onChange={(e)=>{ SetPage(parseInt(e.target.value)) }}/>Portfolio
          </label>
          <label className={page === 2 ? `selectedButton`: ''}>
            <input type="radio" value={2} name="page" onChange={(e)=>{ SetPage(parseInt(e.target.value)) }}/>Cover Letter
          </label>
        </div>
      <div className='main'>
        <ul>
          <li><div className='alert'>I am not asking for a canadian sponsorship, I'm sponsoring myself.<br /> Meanwhile, waiting for my canadian work permit papers to finish.</div></li>
          {
            page === 0 && <>
              <PersonalInformation />
              <Skills />
              <ProgrammingLanguages />
              <WorkExperience />
              <Education />
              <Certificates />
              <Languages />
            </>
          }
          {
            page === 1 && <>
              <Projects />
            </>
          }
          {
            page === 2 && <>
              <Letter />
              <Visa />
            </>
          }
          
          
        </ul>
      </div>
    </div>
  );
}
export const previewFile = (url) => {
  window.open(url, '_blank').focus();
};
export default App;
