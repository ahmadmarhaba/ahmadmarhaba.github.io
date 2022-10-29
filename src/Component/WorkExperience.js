import '../App.css';
// import { previewFile } from '../App'
function WorkExperience() {

  return (
    <>
      <li><h2>Work Experience</h2></li>
      <li>
        <h3>
          {`DeenStrong`}
        </h3>
        <ul className='detailList'>
          <li className='split'>
            <span>{`Role`}</span>
            <span>{`Software Developer`}</span>
          </li>
          <li className='split'>
            <span>{`Location`}</span>
            <span>{`Calgary, Alberta, Canada`}</span>
          </li>
          <li className='split'>
            <span>{`Year`}</span>
            <span>{`2021`}</span>
          </li>
          <li className='split'>
            <span>{`Site`}</span>
            <span><a href="https://www.deenstrong.com/" target="_blank" rel="noreferrer">deenstrong.com</a></span>
            {/* <input type="button" value="View" onClick={() => previewFile("https://www.deenstrong.com/")} /> */}
          </li>
          <li className='split'>
            <span>{`Tasks / Achievements`}</span>
          </li>
          <ul className='listPoints summary'>
            <li className='split'>
              <span>{`Educational Kids Platform project that's tries to change the way educational system is being handled.`}</span>
            </li>
            <li>
              <span>{`Created "Game Maker" on browser that allows teacher to make a 2d game for students for online homework / test in real-time with tracking progress online.`}</span>
            </li>
            <li>
              <span>{`Created a 3d game that connect students with each other to contest each other online.`}</span>
            </li>
            {/* <li>
              <span>{`Worked with many professional people as the company have over 50 employee`}</span>
            </li> */}
          </ul>
        </ul>
      </li>
      <li>
        <h3>
          {`Telepaty`}
        </h3>
        <ul className='detailList'>
          <li className='split'>
            <span>{`Role`}</span>
            <span>{`Web Developer`}</span>
          </li>
          <li className='split'>
            <span>{`Location`}</span>
            <span>{`Tripoli, North, Lebanon`}</span>
          </li>
          <li className='split'>
            <span>{`Year`}</span>
            <span>{`2019`}</span>
          </li>
          <li className='split'>
            <span>{`Site`}</span>
            <span><a href="http://www.telepaty.com" target="_blank" rel="noreferrer">telepaty.com</a></span>
            {/* <input type="button" value="View" onClick={() => previewFile("http://www.telepaty.com/")} /> */}
          </li>
          <li className='split'>
            <span>{`Tasks / Achievements`}</span>
          </li>
          <ul className='listPoints summary'>
            <li className='split'>
              <span>{`Bug fixing and design issues for Makane`}</span>
              <span><a href="https://makane.myviva.net/" target="_blank" rel="noreferrer">makane.myviva.net</a></span>
              {/* <input type="button" value="View" onClick={() => previewFile("https://makane.myviva.net/")} /> */}
            </li>
            <li>
              <span>{`Created a wedding card invitation creator.`}</span>
            </li>
            <li>
              <span>{`Remade a site called yumush that allows users to critic products using rating and post discussion threads.`}</span>
            </li>
            <li>
              <span>{`created an admin control panel with live stats.`}</span>
            </li>
            {/* <li>
              <span>{`Worked with many professional people as the company have over 50 employee`}</span>
            </li> */}
          </ul>
        </ul>
      </li>
    </>
  );
}

export default WorkExperience;
