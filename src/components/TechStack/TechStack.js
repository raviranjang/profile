import React from "react"
import { Row } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faJs, faReact, faNode, faVuejs, faGithub, faDocker, faAws } from '@fortawesome/free-brands-svg-icons'
import "./TechStack.css"


const TechStack = () => {
    const now = 60;
    var skills = ['JavaScript',, 'React.js', 'Node.js', 'Vue.js', 'Golang', 
    'MongoDB', 'MySQL', 'Redis', 'Docker', 'Git', 'Aws']

    return (
        <>
        <div className="skills-section-parent">
            <div className="title">SKILLS</div>
            
            <Row xs={3} md={6} className="g-4">
                <div className="skill-card js">
                    <FontAwesomeIcon icon={faJs} />
                    <span className="hidden-text">semicolon</span>
                </div>

                <div className="skill-card react">
                    <FontAwesomeIcon icon={faReact} />
                    <span className="hidden-text">JSX is fun</span>
                </div>

                <div className="skill-card vue">
                    <FontAwesomeIcon icon={faVuejs} />
                    <span className="hidden-text">Progressive</span>
                </div>

                <div className="skill-card node">
                    <FontAwesomeIcon icon={faNode} />
                    <span className="hidden-text">Async callbacks</span>
                </div>

                <div className="skill-card go">
                    <i className="icon-go"></i>
                    <span className="hidden-text">Simplicity</span>
                </div>

                <div className="skill-card mongo">
                    <i className="icon-mongodb"></i>
                    <span className="hidden-text">BSON</span>
                </div>

                <div className="skill-card mysql">
                    <i className="icon-mysql"></i>
                    <span className="hidden-text">Relations</span>
                </div>

                <div className="skill-card redis">
                    <i className="icon-redis"></i>
                    <span className="hidden-text">Schemaless</span>
                </div>

                <div className="skill-card git">
                    <FontAwesomeIcon icon={faGithub} />
                    <span className="hidden-text">Conflicts</span>
                </div>

                <div className="skill-card docker">
                    <FontAwesomeIcon icon={faDocker} />
                    <span className="hidden-text">Container</span>
                </div>

                <div className="skill-card aws">
                    <i className="icon-aws" />
                    <span className="hidden-text">Amplify</span>
                </div>
            </Row>
        </div>
        </>
    )
}

export { TechStack }