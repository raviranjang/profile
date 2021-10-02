import React from "react"
import { Card } from 'react-bootstrap'
import "./WorkExp.css"

const WorkExp = () => {

    const experiences = [
        {
            org: '6D Technologies',
            designation: 'Sr. Software Engineer',
            from: 'Jul 2020',
            to: 'present',
            location: 'Bengaluru, KA, India',
            responsibilities: [
                'Led the development of DMS back end as micro services using Node.js, Go with Kafka and Keycloak, including database and schema design',
                'Implemented Kong as API GW with postgreSQL',
                'Implemented CI/CD pipeline using SonarQube and Jenkins',
                'Automated unit test cases using Chai and Mocha',
                'Configured Jmeter and worked on creating the test plans for load testing',
                'Implemented Redis to optimize avg response time by 50%',
                'Developed micro front end in React, reducing initial load time by 30%',
                'Developed Auth module on Azure AD and Node'
            ]
        },
        {
            org: 'FlyNava Technologies',
            designation: 'Sr. Software Engineer',
            from: 'Jul 2020',
            to: 'Jun 2020',
            location: 'Bengaluru, KA, India',
            responsibilities: [
                'Developed front end as reusable react components',
                'Developed backend in Node, including Mongo schema and model design',
                'Migrated FlyNava Official website in React',
                'Implemented CD pipelines using GitLab and Jenkins'
            ]
        },
        {
            org: 'AriveGuru Tech Sol Pvt Ltd',
            designation: 'Software Engineer',
            from: 'Jul 2020',
            to: 'May 2018',
            location: 'Bengaluru, KA, India',
            responsibilities: [
                'Worked on designing the App architecture fpr Sarana Sangama PWA',
                'Developed UI using Vuejs and Vuetify',
                'Implemented back end in Node with Google firebase and firestore',
                'Automated build and deploy process using Webpack and firebase CLI',
                'Developed UI using Angularjs, Bootstrap, HTML, CSS for CEP',
                'Implemented back end in Node with rethinkDB, including database and schema design',
                'Developed UI using Angularjs,  HTML, CSS, and Angular Material',
                'Implemented graphs using chart.js'
            ]
        }
    ]

    console.log("exp", experiences)

    return (
        <>
            <div className="exp-block">
                <div className="work-title">WORK EXPERIENCE</div>
                {
                    experiences.map((exp, index) => {
                        return (
                        <Card key={index} border="light">
                            <Card.Body>
                                <Card.Title>{exp.org}</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">{exp.designation}</Card.Subtitle>
                                <Card.Text>
                                    <div className="project-list">
                                        <div className="project-role">
                                            {
                                                exp.responsibilities.map((resp, index) => {
                                                    return <div key={index}>• {resp}</div>
                                                })
                                            }
                                        </div>
                                    </div>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        )})
                }
            </div>
        </>
    )
}


export { WorkExp }