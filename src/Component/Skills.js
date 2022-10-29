import '../App.css';

function Skills() {
    return (
        <>
            <li><h2>Skills</h2></li>
            <li><h3>Front-end</h3></li>
            <li className='split points'>
                <span>{`Reactjs`}</span>
                <span>{`Nextjs`}</span>
                <span>{`.Net`}</span>
                <span>{`Redux`}</span>
                <span>{`Ajax`}</span>
                {/* <span>{`Electron js`}</span> */}
                {/* <span>{`React Native`}</span> */}
                {/* <span>{`Unity`}</span> */}
                {/* <span>{`Xamarin`}</span> */}
                {/* <span>{`JQuery`}</span> */}
                {/* <span>{`Client visualization`}</span> */}
            </li>
            <li><h3>Back-end</h3></li>
            <li className='split points'>
                <span>{`Node js`}</span>
                <span>{`Redis`}</span>
                <span>{`Rest API`}</span>
                <span>{`WebRtc`}</span>
                <span>{`SQL Server`}</span>
                <span>{`MySQL`}</span>
                <span>{`PostgreSQL`}</span>
                <span>{`Firebase`}</span>
                <span>{`MongoDB`}</span>
                {/* <span>{`Socket.io`}</span> */}
                {/* <span>{`Asp .net`}</span> */}
                {/* <span>{`Php`}</span> */}
                {/* <span>{`Mongoose`}</span> */}
                {/* <span>{`Prisma`}</span> */}
                {/* <span>{`Passportjs`}</span> */}
                {/* <span>{`SignalR`}</span> */}
                {/* <span>{`Cloudinary`}</span> */}
                {/* <span>{`Nginx`}</span> */}
                {/* <span>{`Apache`}</span> */}
            </li>
            <li><h3>DevOps</h3></li>
            <li className='split points'>
                <span>{`CI/CD`}</span>
                <span>{`Github actions`}</span>
                {/* <span>{`Github pages`}</span> */}
                {/* <span>{`Docker`}</span> */}
                {/* <span>{`Terraform`}</span> */}
                {/* <span>{`Kubernetes`}</span> */}
                {/* <span>{`Vercel`}</span> */}
                {/* <span>{`Netlify`}</span> */}
                {/* <span>{`Heruko`}</span> */}
                {/* <span>{`Stripe`}</span> */}
                {/* <span>{`JWT`}</span> */}
                {/* <span>{`Web3`}</span> */}
            </li>
            <li><h3>Other</h3></li>
            <li className='split points'>
                <span>{`Git`}</span>
                <span>{`OOP`}</span>
                <span>{`Agile/Scrum`}</span>
                <span>{`JSON/XML`}</span>
                {/* <span>{`Server management`}</span> */}
                {/* <span>{`Hosting management`}</span> */}
            </li>
            <li><h3>Languages</h3></li>
            <li className='split points'>
                <span>{`Typescript`}</span>
                <span>{`Javascript`}</span>
                <span>{`Sql`}</span>
                <span>{`C#`}</span>
                <span>{`Php`}</span>
                <span>{`Java`}</span>
                <span>{`Html`}</span>
                <span>{`Css`}</span>
            </li>
        </>
    );
}

export default Skills;