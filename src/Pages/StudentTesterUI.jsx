const Home = () => {
    return ( 

        <div>
            <head>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            </head>
            <h1>Welcome Student testing software page</h1>
            <p>This app made with C# and avalonia UI framework is made to store test details, student details and evaluate student answers giving a grade which is then serialized into a json file.</p>
            <p>Features include:</p>
            <ul>
                <li>Storing test details</li>
                <li>Managing student information</li>
                <li>Evaluating student answers</li>
                <li>Generating grades</li>
                <li>Exporting results to JSON format</li>
                <img src="/resources/AddStudentPage.jpg" alt="Add Student Page" className="project-img"/>
                <img src="/resources/AddTestPage.jpg" alt="Add Test Page" className="project-img"/>
                <img src="/resources/GiveTestPage.jpg" alt="Give Test Page" className="project-img"/>
                <img src="/resources/ViewTestsPage.jpg" alt="View Test Page" className="project-img"/>
                <img src="/resources/ViewStudentsPage.jpg" alt="View Student Page" className="project-img"/>
            </ul>
        </div>
            );
};

export default Home;