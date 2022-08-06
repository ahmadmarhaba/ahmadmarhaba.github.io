import '../App.css';

function Letter() {
  return (
    <>
          <li><h2>Letter</h2></li>
          <li>
            <ul className='detailList'>
              <li className='split'>
                <span>{`Dear Company Recuiter,`}</span>
              </li>
              <li className='split'>
                <span>{`I’m a self-motivated person that aim towards learning new tech and a high level of experience making every project successful.`}</span>
              </li>
              <li className='split'>
                <span>{`I have a Canadian permit in progress from my last job that I would get anytime soon, meanwhile I reside in Lebanon.`}</span>
              </li>
              <li className='split'>
                <span>{`I would appreciate giving me a chance to prove myself since I'm not a Canadian citizen.`}</span>
              </li>
              <li className='split'>
                <span>{`I worked in a Canadian company for a whole year, and I never had any complications.`}</span>
              </li>
              <li className='split'>
                <span>{`I don’t mind relocating to any other location the company wants.`}</span>
              </li>
              <li className='split'>
                <span>{`Regards,`}<br />{` Ahmad Marhaba`}</span>
              </li> 
            </ul>
          </li>
    </>
  );
}

export default Letter;
