import '../App.css';

function Certificates() {
  return (
    <>
          <li><h2>Certificates</h2></li>
          <li>
            <ul className='detailList'>
              <li className='split'>
                <span>{`College Volunteer - Open Day`}</span>
              </li>
              <li className='split'>
                <span>{`College Volunteer - Olympics Science`}</span>
              </li>
              <li className='split'>
                <span>{`Cisco Information Technology`}</span>
              </li>
              <li className='split'>
                <span>{`Cisco Networking CCNA`}</span>
              </li>
              <li className='split'>
                <span>{`Cisco Ethical Hacker`}</span>
              </li>
            </ul>
          </li>
    </>
  );
}

export default Certificates;
