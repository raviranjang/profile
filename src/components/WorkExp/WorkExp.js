import React from "react"
import { Card } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons'
import "./WorkExp.css"

const WorkExp = () => {

    return (
        <>

            <div className="exp-block">

            </div>

            <div className="work-title">WORK EXPERIENCE</div>
            
            <div className="exp-section">
                <div className="exp-content">
                    <div className="exp-icon">
                        <FontAwesomeIcon className="icon-circle" icon={faPencilAlt} />
                    </div>
                    <div className="exp-card-parent">
                        <Card border="light">
                            <Card.Body>
                                <Card.Title>6D Technologies</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">Sr. Software Engineer</Card.Subtitle>
                                <Card.Text>
                                    <div className="project-list">
                                        <div className="project-title">DMS (Device management System)</div>
                                        <div className="project-description">This project empowers organization to maintain the details of the subscribers and device info and helps to take necessary action using the dashboard</div>
                                        <div className="project-role">
                                            <div>• Led the development of DMS back end as micro services using Go with Kafka and Keycloak, including database and schema design</div>
                                            <div>• Implemented Kong as API GW with postgreSQL </div>
                                            <div>• Implemented CI/CD pipeline using SonarQube and Jenkins</div>
                                            <div>• Automated unit test cases using Chai and Mocha</div>
                                            <div>• Configured Jmeter and worked on creating the test plans for load testing</div>
                                            <div>• Implemented Redis to optimize avg response time by 50% </div>
                                        </div>
                                    </div>
                                    
                                    <div className="project-list">
                                        <div className="project-title">TASMU – A smart city project</div>
                                        <div className="project-description">This project is set to transform the way automated parking system works. This enabled admins to easily manage the parking system and generating usage/bill</div>
                                        <div className="project-role">
                                            <div>• Developed micro front end in React, reducing initial load time by 30%</div>
                                            <div>• Developed Auth module on Azure AD and Node.</div>
                                        </div>
                                    </div> 
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                Jul 2020 ~ Present | Bengaluru, KA, India
                            </Card.Footer>
                        </Card>
                    </div>
                </div>

                <div className="exp-content">
                    <div className="exp-icon">
                        <FontAwesomeIcon className="icon-circle" icon={faPencilAlt} />
                    </div>
                    <div className="exp-card-parent">
                        <Card border="light">
                            <Card.Body>
                                <Card.Title>FlyNava Technologies</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">Sr. Software Engineer</Card.Subtitle>
                                <Card.Text>
                                    <div className="project-list">
                                        <div className="project-title">Jupiter (Airline Pricing Intelligence System)</div>
                                        <div className="project-description">Jupiter is a radical new airline pricing decision support solution that is set to transform the way airlines set fares. It empowers airlines to create optimal fares and associated rules to be filed and published.</div>
                                        <div className="project-role">
                                            <div>• Developed front end as reusable react components</div>
                                            <div>• Developed backend in Node, including Mongo schema and model design</div>
                                        </div>
                                    </div>
                                    
                                    <div className="project-list">
                                        <div className="project-title">FlyNava Official Website</div>
                                        <div className="project-description">This web application gives a platform to showcase products and means to connect with clients. Technical blog section, team activity and future goals</div>
                                        <div className="project-role">
                                            <div>• Developed UI in React</div>
                                            <div>• Implemented CI/CD pipelines using GitLab and Jenkins</div>
                                        </div>
                                    </div> 
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                May 2018 ~ Jun 2020 | Bengaluru, KA, India
                            </Card.Footer>
                        </Card>
                    </div>
                </div>

                <div className="exp-content">
                    <div className="exp-icon">
                        <FontAwesomeIcon className="icon-circle" icon={faPencilAlt} />
                    </div>
                    <div className="exp-card-parent">
                        <Card border="light">
                            <Card.Body>
                                <Card.Title>AriveGuru Tech Sol Pvt Ltd</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">Software Engineer</Card.Subtitle>
                                <Card.Text>
                                    <div className="project-list">
                                        <div className="project-title">Sharana Sangama PWA</div>
                                        <div className="project-description">Sharana Sangama is a progressive web app for the community to share posts, listen saved podcasts, read books, and donate to community</div>
                                        <div className="project-role">
                                            <div>• Worked on designing the App architecture</div>
                                            <div>• Developed UI using Vuejs and Vuetify</div>
                                            <div>• Implemented back end in Node with Google firebase and firestore</div>
                                            <div>• Automated build and deploy process using Webpack and firebase CLI</div>
                                        </div>
                                    </div>
                                    
                                    <div className="project-list">
                                        <div className="project-title">CEP (Cisco Customer Engagement Portal)</div>
                                        <div className="project-description">CEP is the user request management portal which helps users to create and manage events as well as Admins can manage the portals. An event will go through multiple phases until it’s completion</div>
                                        <div className="project-role">
                                            <div>• Developed UI using Angularjs, Bootstrap, HTML, CSS</div>
                                            <div>• Implemented back end in Node with rethinkDB, including database and schema design</div>
                                        </div>
                                    </div>

                                    <div className="project-list">
                                        <div className="project-title">Cisco Leaderboard web app</div>
                                        <div className="project-description">This app empowers admins to track sales through dashboards and leaderboards</div>
                                        <div className="project-role">
                                            <div>• Developed UI using Angularjs,  HTML, CSS, and Angular Material</div>
                                            <div>• Implemented graphs using chart.js</div>
                                        </div>
                                    </div> 
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                Sep 2016 ~ May 2018 | Bengaluru, KA, India
                            </Card.Footer>
                        </Card>
                    </div>
                </div>

                <div className="void-circle"></div>
                
            </div>
        </>
    )
}


export { WorkExp }