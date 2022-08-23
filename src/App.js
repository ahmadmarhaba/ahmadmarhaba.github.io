import './App.css';
import  PersonalInformation  from "./Component/PersonalInformation";
import  Projects  from "./Component/Projects";
import  WorkExperience  from "./Component/WorkExperience";
import  Education  from "./Component/Education";
import  Certificates  from "./Component/Certificates";
import  Languages  from "./Component/Languages";
import  Skills  from "./Component/Skills";
import  Visa  from "./Component/Visa";
import  Letter  from "./Component/Letter";
import { useState } from 'react';

function App() {
  const [page,SetPage] = useState(0)
  const [alert,SetAlert] = useState(true)
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
          {
            alert &&
            <li className='alert'>
              <div>{`- I have a canadian work permit in progress.`}
              <br />
                {`- I can do every task from the job responsibilities.`}
                <br />
                {`- I'm interest with any other position the company offer.`}
              </div>
              <input type="button" value="✖" onClick={()=>{ SetAlert(false) }} />
            </li>
          }
          {
            page === 0 && <>
              <PersonalInformation />
              <Skills />
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
