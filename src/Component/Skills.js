import '../App.css';

function Skills() {
    return (
        <>
            <li><h2>Skills</h2></li>
            <li><h3>Frontend</h3></li>
            <li className='split points'>
                <span>{`ReactJs`}</span>
                <span>{`NextJs`}</span>
                <span>{`ElectronJs`}</span>
            </li>
            <li><h3>Backend</h3></li>
            <li className='split points'>
                <span>{`Node js`}</span>
                <span>{`Redis`}</span>
                <span>{`Rest API`}</span>
                <span>{`WebRtc`}</span>
                <span>{`Nginx`}</span>
                <span>{`Server management`}</span>
            </li>
            <li><h3>Database</h3></li>
            <li className='split points'>
                <span>{`MSSQL`}</span>
                <span>{`MySQL`}</span>
                <span>{`PostgreSQL`}</span>
                <span>{`Firebase`}</span>
                <span>{`MongoDB`}</span>
            </li>
            <li><h3>DevOps</h3></li>
            <li className='split points'>
                <span>{`CI/CD`}</span>
                <span>{`Github actions`}</span>
            </li>
            <li><h3>Other</h3></li>
            <li className='split points'>
                <span>{`Ajax`}</span>
                <span>{`JQuery`}</span>
                <span>{`Git`}</span>
                <span>{`OOP`}</span>
                <span>{`Agile-Scrum`}</span>
                <span>{`JSON/XML`}</span>
                <span>{`Bot-Automation`}</span>
            </li>
            <li><h3>Languages</h3></li>
            <li className='split points'>
                <span>{`Typescript`}</span>
                <span>{`Javascript`}</span>
                <span>{`Sql`}</span>
                <span>{`C#`}</span>
                <span>{`Html`}</span>
                <span>{`Css`}</span>
            </li>
            <li><h3>Tools</h3></li>
            <li className='split points'>
                <span>{`Fiddler`}</span>
                <span>{`Postman`}</span>
                <span>{`Devtools`}</span>
            </li>
        </>
    );
}

export default Skills;