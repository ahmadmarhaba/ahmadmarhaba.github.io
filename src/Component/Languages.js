import '../App.css';

function Languages() {
  return (
    <>
          <li><h2>Languages</h2></li>
          <li>
            <ul className='detailList'>
              <li className='split'>
                <span>{`English`}</span>
                <span>{`Full Professional Proficiency`}</span>
              </li>
              <li className='split'>
                <span>{`Arabic`}</span>
                <span>{`Native`}</span>
              </li>
            </ul>
          </li>
    </>
  );
}

export default Languages;
