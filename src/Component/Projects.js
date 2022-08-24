import '../App.css';
import {previewFile} from '../App'
function Projects() {

  return (
    <>
          <li><h2>Projects</h2></li>
          <li>
            <h3>
              {`E-Commerce App`}
            </h3>
            <ul className='detailList'>
              <li className='split'>
                {`Live Preview`} 
                <div>
                  <input type="button" value="Application" onClick={() =>previewFile("https://e-commerce-app-nextjs-pi.vercel.app/")}/>
                </div>
              </li>
              <li className='split'>
                {`Github Code`}
                <div>
                  <input type="button" value="Client" onClick={() =>previewFile("https://github.com/ahmadmarhaba/e-commerce-app-nextjs")}/>
                </div>
              </li>
              <ul className='listPoints summary'>
                <li><span>{`A e-commerce app that shows a list of products your able to buy.`}</span></li>

                <li><span>{`You can search for specific products and add items into your cart before checkout.`}</span></li>
              </ul>
            </ul>
          </li>
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
                <li><span>{`A social media app that allows you to post feed and follow people you want to view their posts.`}</span></li>

                <li><span>{`You can sort, report, share, edit, and delete posts in the feed.`}</span></li>
         
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
                <li><span>{`A chat app that enables you to send and recieve private messages in real-time with any user.`}</span></li>

                <li><span>{`You can edit and delete messages sent.`}</span></li>      
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
                <li><span>{`A ws product that contains all sort of data visualization with api limiting. `}</span></li>
                
                <li><span>{`The charts contains data binding to show more information with each hover.`}</span></li>

                <li><span>{`The table was to managing search input for easy access to information and highlighting the matching results.`}</span> </li>

                <li><span>{`The geo chart was added to solve the cluster problem which makes overlapping locations in a small area join for easy view, displaying the amount of clusters in specific location.`}</span> </li>            
              </ul>
            </ul>
          </li>
          <li>
            <h3>
              {`My Personal Website`}
            </h3>
            <ul className='detailList'>
              <li className='split'>
                {`Live Preview`} 
                <div>
                  <input type="button" value="Application" onClick={() =>previewFile("https://ahmadmarhaba.github.io")}/>
                </div>
              </li>
              <li className='split'>
                {`Github Code`}
                <div>
                  <input type="button" value="Client" onClick={() =>previewFile("https://github.com/ahmadmarhaba/ahmadmarhaba.github.io")}/>
                </div>
              </li>
              <ul className='listPoints summary'>
                <li><span>{`Easy access to my information like Resume, Portfolio, and Cover Letter in a simple modern client.`}</span></li>      
              </ul>
            </ul>
          </li>
    </>
  );
}

export default Projects;
