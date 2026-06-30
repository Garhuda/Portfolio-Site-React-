
const Home = () => {
    return (
        <div className="resume-container scroll-reveal">
            <head>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            </head>
            <h1>My Resume</h1>
            <iframe title="Garrett Hudak Resume" src="/resources/GarrettHudak_Resume.pdf"></iframe>
            <a className="resume-download" href="/resources/GarrettHudak_Resume.pdf" download>
                Download Resume
            </a>
        </div>
    );
};

export default Home;