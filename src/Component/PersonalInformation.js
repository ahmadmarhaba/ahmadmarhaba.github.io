import '../App.css';
// import { saveAs } from "file-saver";
// import { previewFile } from '../App'
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
            <span><a href="mailto:ahmadmarhaba.8881@gmail.com">ahmadmarhaba.8881@gmail.com</a></span>
          </li>
          <li className='split'>
            <span>{`LinkedIn`}</span>
            <span><a href="https://www.linkedin.com/in/ahmad-marhaba-029145181" target="_blank" rel="noreferrer">linkedin.com/in/ahmad-marhaba-029145181</a></span>
            {/* <input type="button" value="View" onClick={() => previewFile("https://www.linkedin.com/in/ahmad-marhaba-029145181/")}/> */}
          </li>
          <li className='split'>
            <span>{`Github`}</span>
            <span><a href="https://github.com/ahmadmarhaba" target="_blank" rel="noreferrer">github.com/ahmadmarhaba</a></span>
            {/* <input type="button" value="View" onClick={() => previewFile("https://github.com/ahmadmarhaba")}/> */}
          </li>
        </ul>
      </li>
    </>
  );
}

export default PersonalInformation;
