import '../App.css';
// import { previewFile } from '../App'
function WorkExperience() {

  return (
    <>
      <li><h2>Work Experience</h2></li>
      <li>
        <h3>
          {`AIY Expert Solutions`}
        </h3>
        <ul className='detailList'>
          <li className='split'>
            <span>{`Role`}</span>
            <span>{`Software Developer`}</span>
          </li>
          <li className='split'>
            <span>{`Location`}</span>
            <span>{`Tripoli, North, Lebanon`}</span>
          </li>
          <li className='split'>
            <span>{`Year`}</span>
            <span>{`2023`}</span>
          </li>
          <li className='split'>
            <span>{`Site`}</span>
            <span><a href="https://www.aiyexpertsolutions.com/" target="_blank" rel="noreferrer">aiyexpertsolutions.com</a></span>
          </li>
          <li className='split'>
            <span>{`Tasks / Achievements`}</span>
          </li>
          <ul className='listPoints summary'>
            <li className='split'>
              <span>{`Worked on bot automation, anti-bot solutions, building full stack app with webhook support, maintaining old and new features, bypassing all anti-bots.`}</span>
            </li>
            <li>
              <span>{`Solved Kassada's anti-bot solution, as you know kasada is on every major site like Nike store, huge bots are currently buying kasada's solution that keeps updating daily for hundred thousand of dollars.`}</span>
            </li>
            <li>
              <span>{`Created an app called "Coptivity" which is a tool bot that automated user human activities on NIKE store.`}</span>
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
          </li>
          <li className='split'>
            <span>{`Tasks / Achievements`}</span>
          </li>
          <ul className='listPoints summary'>
            <li className='split'>
              <span>{`I have worked on an educational kids' desktop app that aims to revolutionize the current educational system.`}</span>
            </li>
            <li>
              <span>{`Developed "Game Maker" a tool that empowers teachers to create 2D games for students to use as online homework or tests in real-time, while also providing online progress tracking, stats, and scores.`}</span>
            </li>
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
          </li>
          <li className='split'>
            <span>{`Tasks / Achievements`}</span>
          </li>
          <ul className='listPoints summary'>
            <li>
              <span>{`Created an admin control panel with live stats and charts.`}</span>
            </li>
            <li className='split'>
              <span>{`Worked on frontend for a product called "Makane"`}</span>
            </li>
            <li>
              <span>{`Created a custom wedding card invitation for "Makane"`}</span>
            </li>
            <li>
              <span>{`Refurbished a site called "Yumush" that allows users to critic products using rating and post discussion threads.`}</span>
            </li>
          </ul>
        </ul>
      </li>
    </>
  );
}

export default WorkExperience;
