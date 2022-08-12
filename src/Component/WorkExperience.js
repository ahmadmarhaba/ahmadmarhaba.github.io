import '../App.css';
import {previewFile} from '../App'
function WorkExperience() {

  return (
    <>
          <li><h2>Work Experience</h2></li>
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
                <span>{`Year`}</span>
                <span>{`2019`}</span>
              </li>
              <li className='split'>
                <span>{`Site`}</span>
                <input type="button" value="View" onClick={() =>previewFile("http://www.telepaty.com/")}/>
              </li>
              <li className='split'>
                <span>{`Tasks / Achievements`}</span>
              </li>
                <ul className='listPoints summary'>
                    <li className='split'>
                        <span>{`Bug fixing and design issues for Makane`}</span>
                        <input type="button" value="View" onClick={() =>previewFile("https://makane.myviva.net/")}/>
                    </li>
                    <li>
                        <span>{`Created a wedding card invitation creator.`}</span>
                    </li>
                    <li>
                        <span>{`Recreated a site called yumush that allows users to critic products using rating and post discussion threads.`}</span>
                    </li>
                    <li>
                        <span>{`Worked with a designer, while having multiple senior developers supervising project progress.`}</span>
                    </li>
                    <li>
                        <span>{`Used Asp.Net and MVC (Frontend + Backend), and MSSQL (Database).`}</span>
                    </li>
                </ul>
            </ul>
          </li>
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
                <span>{`Year`}</span>
                <span>{`2020 - Current`}</span>
              </li>
              <li className='split'>
                <span>{`Site`}</span>
                <input type="button" value="View" onClick={() =>previewFile("https://www.deenstrong.com/")}/>
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
                    <li>
                        <span>{`Worked with a designer and a data analyst, while having a senior developer supervising project progress.`}</span>
                    </li>
                    <li>
                        <span>{`Used Unity (Game), Next js (Frontend), Node js (Backend), and SQL Server ( Database).`}</span>
                    </li>
                </ul>
            </ul>
          </li>
    </>
  );
}

export default WorkExperience;
