import '../App.css';
import {previewFile} from '../App'
function Certificates() {
  return (
    <>
          <li><h2>Certificates</h2></li>
          <li>
            <ul className='detailList'>
              <li className='split'>
                <span>{`Cisco Information Technology`}</span>
                <span>{`2017`}</span>
              </li>
              <li className='split'>
                <span>{`College Volunteer - Open Day`}</span>
                <span>{`2018`}</span>
              </li>
              <li className='split'>
                <span>{`Cisco Networking CCNA`}</span>
                <span>{`2018`}</span>
              </li>
              <li className='split'>
                <span>{`College Volunteer - Olympics Science`}</span>
                <span>{`2018`}</span>
              </li>
              <li className='split'>
                <span>{`Cisco Ethical Hacker`}</span>
                <span>{`2019`}</span>
              </li>
            </ul>
          </li>
    </>
  );
}

export default Certificates;
