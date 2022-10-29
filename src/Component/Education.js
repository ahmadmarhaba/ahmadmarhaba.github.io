import '../App.css';
// import { previewFile } from '../App'
function Education() {
  return (
    <>
      <li><h2>Education</h2></li>
      <li>
        <ul className='detailList'>
          <li className='split'>
            <span>{`Major`}</span>
            <span>{`Computer Science`}</span>
          </li>
          <li className='split'>
            <span>{`University`}</span>
            <span>{`Beirut Arab University`}</span>
          </li>
          <li className='split'>
            <span>{`Degree`}</span>
            <span>{`Bachelor of Science`}</span>
          </li>
          <li className='split'>
            <span>{`Year`}</span>
            <span>{`2019`}</span>
          </li>
          <li className='split'>
            <span>{`Site`}</span>
            <span><a href="https://www.bau.edu.lb" target="_blank" rel="noreferrer">bau.edu.lb</a></span>
            {/* <input type="button" value="View" onClick={() => previewFile("https://www.bau.edu.lb/")}/> */}
          </li>
        </ul>
      </li>
    </>
  );
}

export default Education;
