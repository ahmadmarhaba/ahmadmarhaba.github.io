import '../App.css';
import {previewFile} from '../App'
function Projects() {

  return (
    <>
          <li><h2>Projects</h2></li>
          <li>
            <h3>
              {`ws-product-react`}
            </h3>
            <ul className='detailList'>
              <li className='split'>
                {`Github Code`}<input type="button" value="View" onClick={() =>previewFile("https://github.com/ahmadmarhaba/ws-product-react")}/>
              </li>
              <li className='split'>
                {`Live Preview`} <input type="button" value="View" onClick={() =>previewFile("https://ahmadmarhaba.github.io/ws-product-react/")}/>
              </li>
              <li className='summary'>
                {`Summary: The project was based on showing my ability to write a modern react project, that contains all sort of data charts and statistics in a simple way.`}
              </li>
            </ul>
          </li>
          <li>
            <h3>
              {`ws-product-nodejs`}
            </h3>
            <ul className='detailList'>
              <li className='split'>
                {`Github Code`}<input type="button" value="View" onClick={() =>previewFile("https://github.com/ahmadmarhaba/ws-product-nodejs")}/>
              </li>
              <li className='split'>
                {`Live Preview`}<input type="button" value="View" onClick={() =>previewFile("https://ahmadmarhaba-ws-product-nodejs.herokuapp.com/")}/>
              </li>
              <li className='summary'>
                {`Summary: The project was to learn Docker, Kubernetes, and terraform for a serverless CI/CD improving my skills.`}
              </li>
            </ul>
          </li>
    </>
  );
}

export default Projects;
