import '../App.css';

function Letter() {
  return (
    <>
      {/* <li><h2>Letter</h2></li> */}
      <li>
        <ul className='detailList'>
          <li className='split'>
            <span>{`Dear Recuiter,`}</span>
          </li>
          <li className='split'>
            <span>{`I am writing to express my interest in the software developer position in this company. With a passion for coding and a strong background in software development, I am confident in my ability to contribute to your team and help drive the success of your projects.`}</span>
          </li>
          <li className='split'>
            <span>{`As a software developer with 4 years of experience, I have gained extensive knowledge in developing and implementing high-quality software solutions. I am well-versed in programming languages such as Javascript in ReactJS/NodeJS/ElectronJS, and C#. Having a solid understanding of software development methodologies and best practices. Throughout my career, I have successfully delivered projects that have improved efficiency, streamlined operations, and enhanced user experiences.`}</span>
          </li>
          <li className='split'>
            <span>{`Here are some highlights of my qualifications and achievements:`}</span>
          </li>
          <li className='split'>
            <span>{`Strong technical skills: I have a deep understanding of object-oriented programming concepts, data structures, algorithms, and design patterns. I am proficient in front-end and back-end development, with experience in frameworks like React, Node.js, and Electron.`}</span>
          </li>
          <li className='split'>
            <span>{`Full-stack development expertise: I have worked on end-to-end development projects, collaborating with cross-functional teams to deliver robust and scalable web applications. My experience includes developing responsive user interfaces, integrating APIs, and optimizing database performance.`}</span>
          </li>
          <li className='split'>
            <span>{`Problem-solving abilities: I thrive in challenging environments and possess excellent problem-solving skills. I am adept at analyzing complex technical issues, identifying efficient solutions, and implementing them to ensure smooth project execution.`}</span>
          </li>
          <li className='split'>
            <span>{`Strong teamwork and communication: I am a highly collaborative individual who excels in team settings. I effectively communicate technical concepts to both technical and non-technical stakeholders, fostering a cohesive and productive working environment.`}</span>
          </li>
          <li className='split'>
            <span>{`Continuous learning mindset: I am committed to staying updated with the latest trends and advancements in the software development field. I actively seek out opportunities to expand my skill set, whether through attending conferences, participating in online courses, or engaging in side projects.`}</span>
          </li>
          <li className='split'>
            <span>{`I am excited about the opportunity to join this company and contribute to your innovative and dynamic team. I am confident that my technical expertise, coupled with my passion for delivering high-quality software solutions, would make me a valuable asset to your organization.`}</span>
          </li>
          <li className='split'>
            <span>{`Thank you for considering my application. I have attached my resume for your review, which provides further details about my experience and qualifications. I would welcome the chance to discuss how my skills align with the company's goals in more detail. Please feel free to contact me at your convenience to arrange an interview.`}</span>
          </li>
          <li className='split'>
            <span>{`Thank you for your time and consideration.`}</span>
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
