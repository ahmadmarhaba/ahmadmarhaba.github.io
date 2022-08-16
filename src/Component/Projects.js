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
                  <input type="button" value="Front-end" onClick={() =>previewFile("https://github.com/ahmadmarhaba/chat-app-nextjs")}/>
                  <input type="button" value="Back-end" onClick={() =>previewFile("https://github.com/ahmadmarhaba/chat-app-nodejs")}/>
                </div>
              </li>
              <li className='split'>
                {`Live Preview`} 
                <div>
                  <input type="button" value="Front-end" onClick={() =>previewFile("https://chat-app-nextjs-ahmadmarhaba.vercel.app")}/>
                  <input type="button" value="Back-end" onClick={() =>previewFile("https://ahmadmarhaba-chat-app-nextjs.herokuapp.com/")}/>
                </div>
              </li>
              <ul className='listPoints summary'>
                <li><span>{`This is a chat app project that enables you to send and recieve private messages in real-time with any user. You can edit and delte messages sent.`}</span></li>
                <li><span>{`All the frontend to backend was made in javascript framework.`}</span> </li>
                <li><span>{` Authentication was necessary to make the app more secured and to manage users making each one unique.`}</span></li>        
              </ul>
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
                  <input type="button" value="Front-end" onClick={() =>previewFile("https://github.com/ahmadmarhaba/ws-product-react")}/>
                  <input type="button" value="Back-end" onClick={() =>previewFile("https://github.com/ahmadmarhaba/ws-product-nodejs")}/>
                </div>
              </li>
              <li className='split'>
                {`Live Preview`} 
                <div>
                  <input type="button" value="Front-end" onClick={() =>previewFile("https://ahmadmarhaba.github.io/ws-product-react/")}/>
                  <input type="button" value="Back-end" onClick={() =>previewFile("https://ahmadmarhaba-ws-product-nodejs.herokuapp.com/")}/>
                </div>
              </li>
              <ul className='listPoints summary'>
                <li><span>{`A modern react project that contains all sort of data charts and statistics that also includes api limiting. `}</span></li>
                <li><span>{`For the charts there was data binding to show more information with each hover.`}</span></li>
                <li><span>{`The table was to managing search input for easy access to information and highlighting the matching results.`}</span> </li>
                <li><span>{`As for the Geo visulization was for solving clustering problem which makes overlapping locations in a small area join for easy view displaying the amount of clusters in specific location.`}</span> </li>
                <li><span>{`The project utilizes continuous integration continuous development for the server.`}</span> </li>             
              </ul>
            </ul>
          </li>
    </>
  );
}

export default Projects;
