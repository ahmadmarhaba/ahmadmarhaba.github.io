import '../App.css';
// import { saveAs } from "file-saver";
import {previewFile} from '../App'
// import scrape from 'website-scraper';

function PersonalInformation() {

  return (
    <>
          <li><h2>Personal Information</h2></li>
          <li>
            <ul className='detailList'>
              <li className='split'>
                <span>{`Title`}</span>
                <span>{`Full stack developer`}</span>
              </li>
              <li className='split'>
                <span>{`Full Name`}</span>
                <span>{`Ahmad Marhaba`}</span>
              </li>
              <li className='split'>
                <span>{`Email`}</span>
                <span><a href="mailto:ahmadmarhaba@gmail.com">ahmadmarhaba@gmail.com</a></span>
              </li>
              <li className='split'>
                <span>{`LinkedIn`}</span>
                <input type="button" value="View" onClick={() => previewFile("https://www.linkedin.com/in/ahmad-marhaba-029145181/")}/>
              </li>
              <li className='split'>
                <span>{`Github`}</span>
                <input type="button" value="View" onClick={() => previewFile("https://github.com/ahmadmarhaba")}/>
              </li>
            </ul>
          </li>
    </>
  );
}

export default PersonalInformation;
