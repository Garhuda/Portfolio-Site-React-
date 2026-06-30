import ImageButton from "../Components/ImageButton";

const Home = () => {
    return (
        <div>
            <head>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            </head>
            <div className="projects-intro scroll-reveal">
                <h1>Projects</h1>
                <p>Here are a few of the applications and tools I&apos;ve built while growing as a developer.</p>
            </div>
            <div className="Projects">
            <ImageButton
                className="ImageButton"
                imagePath="/resources/Mutual-Fund-Viewer.jpg"
                caption="Mutual Fund Viewer"
                action="ProjectDetails"
                controller="MutualFundViewer"
                name="MutualFundViewer"
            /> 
            <ImageButton
                className="ImageButton"
                imagePath="/resources/Sports-Pro.jpg"
                caption="SportsPro Sports Management Site"
                action="ProjectDetails"
                controller="SportsPro"
                name="SportsPro"
            />
            <ImageButton
                className="ImageButton"
                imagePath="/resources/Student-Tester.jpg"
                caption="Student Tester Program"
                action="ProjectDetails"
                controller="StudentTesterUI"
                name="StudentTesterUI"
            />
            <ImageButton
                className="ImageButton"
                imagePath="/resources/Http-Server.jpg"
                caption="Http Server"
                action="ProjectDetails"
                controller="HTTPServer"
                name="HTTPServer"
            />
            <ImageButton
                className="ImageButton"
                imagePath="/resources/Calculator-App.jpg"
                caption="Calculator App"
                action="ProjectDetails"
                controller="CalculatorApp"
                name="CalculatorApp"
            />
            <ImageButton
                className="ImageButton"
                imagePath="/resources/Black-Jack.jpg"
                caption="BlackJack Game"
                action="ProjectDetails"
                controller="BlackJack"
                name="BlackJack"
            />
            <ImageButton
                className="ImageButton"
                imagePath="/resources/Algorithm-Analyzer.jpg"
                caption="Algorithm Analyzer"
                action="ProjectDetails"
                controller="AlgorithmAnalyzer"
                name="AlgorithmAnalyzer"
            />
            </div>
        </div>
    );
};

export default Home;