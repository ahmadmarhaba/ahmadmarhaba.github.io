import '../App.css';

function Letter() {
  return (
    <>
          <li><h2>Letter</h2></li>
          <li>
            <ul className='detailList'>
              <li className='split'>
                <span>{`To whom it may concern/Dear Company Recuiter,`}</span>
              </li>
              <li className='split'>
                <span>{`I am a graduate of the Beirut Arab University and hold a Bachelor Degree in Computer Science. At present, I am seeking a challenging position in your reputable institution that meets my qualifications and expectations.`}</span>
              </li>
              <li className='split'>
                <span>{`I would like to be part of your esteemed organization where I can put in use my strong education and experience which I have gathered along the years. I am hoping for a challenging position which will grant me the chance to reveal my potential and allow me to contribute innovatively and successfully in this friendly working environment.`}</span>
              </li>
              <li className='split'>
                <span>{`Throughout my academic and professional experiences, I have learned to become responsible, self-motivated, decision maker, team player and punctual in my schedule. Furthermore, as highlighted by my colleagues, mentors, and co-workers, working as part of a team enhanced my leadership skills and enabled me to work under pressure with utmost motivation and professionalism. As a result, I feel that working for your company will grant me my goal, and in return I will be able to prove my indispensability to the institution. Also I aim towards learning new tech and a high level of experience making every project successful.`}</span>
              </li>
              <li className='split'>
                <span>{`In addition to that, as my title shows, I work as a full stack developer from making front end development to back end development with CI/CD integration.`}</span>
              </li>
              <li className='split'>
                <span>{`I don’t mind relocating to any other location the company wants.`}</span>
              </li>
              <li className='split'>
                <span>{`Finally, to discuss further your job requirements and my qualifications, I am available anytime, at your convenience, for a meeting. Should any references or any further information be required, please do not hesitate to contact me at the email and phone number from my resume section.`}</span>
              </li>
              <li className='split'>
                <span>{`Thank you for your time and consideration. I look forward to hearing from you.`}</span>
              </li>
              <li className='split'>
                <span>{`Sincerely,`}<br />{`Ahmad Marhaba`}</span>
              </li> 
            </ul>
          </li>
    </>
  );
}

export default Letter;
