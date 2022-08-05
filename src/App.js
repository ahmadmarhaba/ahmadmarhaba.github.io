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

function App() {
  return (
    <div className="App">
      <div className='main'>
        <ul>
          <PersonalInformation />
          <Skills />
          <Projects />
          <WorkExperience />
          <Education />
          <Certificates />
          <ProgrammingLanguages />
          <Languages />
          <Visa />
        </ul>
      </div>
    </div>
  );
}
export const previewFile = (url) => {
  window.open(url, '_blank').focus();
};
export default App;
