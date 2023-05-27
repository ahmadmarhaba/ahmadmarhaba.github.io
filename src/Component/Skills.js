import '../App.css';

function Skills() {
    return (
        <>
            <li><h2>Skills</h2></li>
            <li><h3>Frontend</h3></li>
            <li className='split points'>
                <span>{`React js`}</span>
                <span>{`Next js`}</span>
                <span>{`Electron js`}</span>
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
                <span>{`CI/CD with Github actions`}</span>
            </li>
            <li><h3>Other</h3></li>
            <li className='split points'>
                <span>{`Webpack`}</span>
                <span>{`Ant design`}</span>
                <span>{`Bootstrap`}</span>
                <span>{`Ajax`}</span>
                <span>{`JQuery`}</span>
                <span>{`Git`}</span>
                <span>{`OOP`}</span>
                <span>{`Agile-Scrum`}</span>
                <span>{`JSON/XML/CSV/XLSX`}</span>
                <span>{`Bot-Automation`}</span>
            </li>
            <li><h3>Languages</h3></li>
            <li className='split points'>
                <span>{`Typescript`}</span>
                <span>{`Javascript`}</span>
                <span>{`C#`}</span>
                <span>{`Sql`}</span>
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