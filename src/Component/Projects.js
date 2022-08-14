import '../App.css';
import {previewFile} from '../App'
function Projects() {

  return (
    <>
          <li><h2>Projects</h2></li>
          <li>
            <h3>
              {`Chat App`}
            </h3>
            <ul className='detailList'>
              <li className='split'>
                {`Github Code`}
                <div>
                  <input type="button" value="Application" onClick={() =>previewFile("https://github.com/ahmadmarhaba/chat-app-nextjs")}/>
                  <input type="button" value="Server" onClick={() =>previewFile("https://github.com/ahmadmarhaba/chat-app-nodejs")}/>
                </div>
              </li>
              <li className='split'>
                {`Live Preview`} 
                <div>
                  <input type="button" value="Application" onClick={() =>previewFile("https://chat-app-nextjs-ahmadmarhaba.vercel.app")}/>
                  <input type="button" value="Server" onClick={() =>previewFile("https://ahmadmarhaba-chat-app-nextjs.herokuapp.com/")}/>
                </div>
              </li>
              <li className='summary'>
                {`Summary: This is a chat app project that enables you to send and recieve private messages in real-time with any user.`}
              </li>
              <li className='split points'>
                <span>{`Next js`}</span>
                <span>{`Node js`}</span>
                <span>{`Redux`}</span>
                <span>{`Typescript`}</span>
                <span>{`Git / Github`}</span>
                <span>{`Github Actions`}</span>
                <span>{`Firebase`}</span>
                <span>{`JSON`}</span>
                <span>{`Socket.io`}</span>
              </li>
            </ul>
          </li>
          <li>
            <h3>
              {`WS Product`}
            </h3>
            <ul className='detailList'>
              <li className='split'>
                {`Github Code`}
                <div>
                  <input type="button" value="Application" onClick={() =>previewFile("https://github.com/ahmadmarhaba/ws-product-react")}/>
                  <input type="button" value="Server" onClick={() =>previewFile("https://github.com/ahmadmarhaba/ws-product-nodejs")}/>
                </div>
              </li>
              <li className='split'>
                {`Live Preview`} 
                <div>
                  <input type="button" value="Application" onClick={() =>previewFile("https://ahmadmarhaba.github.io/ws-product-react/")}/>
                  <input type="button" value="Server" onClick={() =>previewFile("https://ahmadmarhaba-ws-product-nodejs.herokuapp.com/")}/>
                </div>
              </li>
              <li className='summary'>
                {`Summary: A modern react project that contains all sort of data charts and statistics that also includes api limiting. Also utilizes continuous integration continuous development for the server.`}
              </li>
              <li className='split points'>
                <span>{`React js`}</span>
                <span>{`Node js`}</span>
                <span>{`Redux`}</span>
                <span>{`Redis`}</span>
                <span>{`Rest API`}</span>
                <span>{`Git / Github`}</span>
                <span>{`Github Actions`}</span>
                <span>{`CI / CD`}</span>
                <span>{`Docker`}</span>
                <span>{`Terraform`}</span>
                <span>{`Kubernetes`}</span>
                <span>{`PostgreSQL`}</span>
                <span>{`JSON`}</span>
                <span>{`Client-side Geo / Table / Chart data visualization`}</span>
              </li>
            </ul>
          </li>
    </>
  );
}

export default Projects;
