import '../App.css';
import {previewFile} from '../App'
function Projects() {

  return (
    <>
          <li><h2>Projects</h2></li>
          <li>
            <h4>
              {`ws-product-react`}
            </h4>
            <ul className='detailList'>
              <li className='split'>
                {`Github Code`}<input type="button" value="View" onClick={() =>previewFile("https://github.com/ahmadmarhaba/ws-product-react")}/>
              </li>
              <li className='split'>
                {`Live Preview`} <input type="button" value="View" onClick={() =>previewFile("https://ahmadmarhaba.github.io/ws-product-react/")}/>
              </li>
            </ul>
          </li>
          <li>
            <h4>
              {`ws-product-nodejs`}
            </h4>
            <ul className='detailList'>
              <li className='split'>
                {`Github Code`}<input type="button" value="View" onClick={() =>previewFile("https://github.com/ahmadmarhaba/ws-product-nodejs")}/>
              </li>
              <li className='split'>
                {`Live Preview`}<input type="button" value="View" onClick={() =>previewFile("https://vast-glass-iron.glitch.me")}/>
              </li>
            </ul>
          </li>
    </>
  );
}

export default Projects;
