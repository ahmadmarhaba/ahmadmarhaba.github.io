import './App.css';
import  Information  from "./Component/Information";
import  Projects  from "./Component/Projects";

function App() {
  return (
    <div className="App">
      <div className='main'>
        <ul>
          <Information />
          <Projects />
        </ul>
      </div>
    </div>
  );
}
export const previewFile = (url) => {
  window.open(url, '_blank').focus();
};
export default App;
