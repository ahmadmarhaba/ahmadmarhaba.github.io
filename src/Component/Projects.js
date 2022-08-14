import '../App.css';
import {previewFile} from '../App'
function Projects() {

  return (
    <>
          <li><h2>Projects</h2></li>
          <li>
            <h3>
              {`chat-app-nextjs`}
            </h3>
            <ul className='detailList'>
              <li className='split'>
                {`Github Code`}<input type="button" value="View" onClick={() =>previewFile("https://github.com/ahmadmarhaba/chat-app-nextjs")}/>
              </li>
              <li className='split'>
                {`Live Preview`} <input type="button" value="View" onClick={() =>previewFile("https://chat-app-nextjs-ahmadmarhaba.vercel.app")}/>
              </li>
              <li className='summary'>
                {`Summary: A chat app project that enables you to Send and Recieve 1 on 1 private messages with any user with authentication in mind.`}
              </li>
            </ul>
          </li>
          <li>
            <h3>
              {`chat-app-nodejs`}
            </h3>
            <ul className='detailList'>
              <li className='split'>
                {`Github Code`}<input type="button" value="View" onClick={() =>previewFile("https://github.com/ahmadmarhaba/chat-app-nodejs")}/>
              </li>
              <li className='split'>
                {`Live Preview`} <input type="button" value="View" onClick={() =>previewFile("https://ahmadmarhaba-chat-app-nextjs.herokuapp.com/")}/>
              </li>
              <li className='summary'>
                {`Summary: This is a server to manage the chat app project for live time chat and storage managment.`}
              </li>
            </ul>
          </li>
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
                {`Summary: A modern react project, that contains all sort of data charts and statistics that also includes api limiting.`}
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
                {`Summary: A serverless CI/CD project, that uses Docker, Kubernetes, and Terraform.`}
              </li>
            </ul>
          </li>
    </>
  );
}

export default Projects;
