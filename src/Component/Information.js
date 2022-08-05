import '../App.css';
import { saveAs } from "file-saver";
import {previewFile} from '../App'
function Information() {
    const saveFile = () => {
        saveAs(
          "./Ahmad-Resume.pdf",
          "Ahmad-Resume.pdf"
        );
      };
  return (
    <>
          <li><h2>Information</h2></li>
          <li>
            <ul className='detailList'>
              <li className='split'>
                <span>{`Full Name`}</span>
                <span>{`Ahmad Marhaba`}</span>
              </li>
              <li className='split'>
                <span>{`Email`}</span>
                <span>{`ahmadmarhaba@gmail.com`}</span>
              </li>
              <li className='split'>
                <span>{`Mobile`}</span>
                <span>{`+961 76 600 574`}</span>
              </li>
              <li className='split'>
                <span>{`Birth Date`}</span>
                <span>{`01 January, 1999`}</span>
              </li>
              <li className='split'>
                <span>{`LinkedIn`}</span>
                <input type="button" value="View" onClick={() => previewFile("https://www.linkedin.com/in/ahmad-marhaba-029145181/")}/>
              </li>
              <li className='split'>
                <span>{`Github`}</span>
                <input type="button" value="View" onClick={() => previewFile("https://github.com/ahmadmarhaba")}/>
              </li>
              <li className='split'>
                <div>
                  {`CV File`}
                </div>
                <div className='multipleButtons'>
                  <input type="button" value="Download" onClick={saveFile} />
                  <input type="button" value="View" onClick={() => previewFile("Ahmad-Resume.pdf")}/>
                </div>
              </li>
            </ul>
          </li>
    </>
  );
}

export default Information;
