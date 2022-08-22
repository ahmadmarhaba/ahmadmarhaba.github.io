import '../App.css';
import {previewFile} from '../App'
function Projects() {

  return (
    <>
          <li><h2>Projects</h2></li>
          <li>
            <h3>
              {`Social Media App`}
            </h3>
            <ul className='detailList'>
              <li className='split'>
                {`Live Preview`} 
                <div>
                  <input type="button" value="Application" onClick={() =>previewFile("https://ahmadmarhaba.github.io/social-media-app-react/")}/>
                </div>
              </li>
              <li className='split'>
                {`Github Code`}
                <div>
                  <input type="button" value="Client" onClick={() =>previewFile("https://github.com/ahmadmarhaba/social-media-app-react")}/>
                  <input type="button" value="Server" onClick={() =>previewFile("https://github.com/ahmadmarhaba/social-media-app-nodejs")}/>
                </div>
              </li>
              <ul className='listPoints summary'>
                <li><span>{`This is a social media app project that allows you to post feed and follow people you want to view their posts.`}</span></li>

                <li><span>{`You can edit and delete posts in the feed.`}</span></li>

                <li><span>{`Passportjs and JWT was used for authentication.`}</span></li>

                <li><span>{`The project utilizes continuous integration continuous development for the client.`}</span> </li>            
              </ul>
            </ul>
          </li>
          <li>
            <h3>
              {`Chat App`}
            </h3>
            <ul className='detailList'>
              <li className='split'>
                {`Live Preview`} 
                <div>
                  <input type="button" value="Application" onClick={() =>previewFile("https://chat-app-nextjs-ahmadmarhaba.vercel.app")}/>
                </div>
              </li>
              <li className='split'>
                {`Github Code`}
                <div>
                  <input type="button" value="Client" onClick={() =>previewFile("https://github.com/ahmadmarhaba/chat-app-nextjs")}/>
                  <input type="button" value="Server" onClick={() =>previewFile("https://github.com/ahmadmarhaba/chat-app-nodejs")}/>
                </div>
              </li>
              <ul className='listPoints summary'>
                <li><span>{`This is a chat app project that enables you to send and recieve private messages in real-time with any user.`}</span></li>

                <li><span>{`You can edit and delete messages sent.`}</span></li>

                <li><span>{`Firebase Auth was used for authentication.`}</span></li>        
              </ul>
            </ul>
          </li>
          <li>
            <h3>
              {`WS Product`}
            </h3>
            <ul className='detailList'>
              <li className='split'>
                {`Live Preview`} 
                <div>
                  <input type="button" value="Application" onClick={() =>previewFile("https://ahmadmarhaba.github.io/ws-product-react/")}/>
                </div>
              </li>
              <li className='split'>
                {`Github Code`}
                <div>
                  <input type="button" value="Client" onClick={() =>previewFile("https://github.com/ahmadmarhaba/ws-product-react")}/>
                  <input type="button" value="Server" onClick={() =>previewFile("https://github.com/ahmadmarhaba/ws-product-nodejs")}/>
                </div>
              </li>
              <ul className='listPoints summary'>
                <li><span>{`A modern react project that contains all sort of data charts and statistics that also includes api limiting. `}</span></li>
                
                <li><span>{`For the charts there was data binding to show more information with each hover.`}</span></li>

                <li><span>{`The table was to managing search input for easy access to information and highlighting the matching results.`}</span> </li>

                <li><span>{`Geo visulization was for solving clustering problem which makes overlapping locations in a small area join for easy view, displaying the amount of clusters in specific location.`}</span> </li>

                <li><span>{`The project utilizes continuous integration continuous development for the server.`}</span> </li>             
              </ul>
            </ul>
          </li>
    </>
  );
}

export default Projects;
