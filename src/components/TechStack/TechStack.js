import React from "react"
import { Card, ProgressBar } from 'react-bootstrap'
import "./TechStack.css"


const TechStack = () => {
    const now = 60;

    return (
        <>
        <div style={{ margin: '20px 0 10px 0' }}>SKILLS</div>
        <Card>
            <div className="skill-parent-section">
                <div className="skill-box right">
                    <span>JavaScript</span>
                    <ProgressBar now={now} variant="info" />
                </div>
                
                <div className="skill-box left">
                    <span>TypeScript</span>
                    <ProgressBar now={now} variant="info" />
                </div>
            </div> 

            <div className="skill-parent-section">
                <div className="skill-box right">
                    <span>React.js</span>
                    <ProgressBar now={now} variant="info" />
                </div>
                
                <div className="skill-box left">
                    <span>Node.js</span>
                    <ProgressBar now={now} variant="info" />
                </div>
            </div> 

            <div className="skill-parent-section">
                <div className="skill-box right">
                    <span>Vue.js</span>
                    <ProgressBar now={now} variant="info" />
                </div>
                
                <div className="skill-box left">
                    <span>Golang</span>
                    <ProgressBar now={now} variant="info" />
                </div>
            </div> 

            <div className="skill-parent-section">
                <div className="skill-box right">
                    <span>MongoDB</span>
                    <ProgressBar now={now} variant="info" />
                </div>
                
                <div className="skill-box left">
                    <span>MySQL</span>
                    <ProgressBar now={now} variant="info" />
                </div>
            </div> 

            <div className="skill-parent-section">
                <div className="skill-box right">
                    <span>Redis</span>
                    <ProgressBar now={now} variant="info" />
                </div>
                
                <div className="skill-box left">
                    <span>Kafka</span>
                    <ProgressBar now={now} variant="info" />
                </div>
            </div> 

            <div className="skill-parent-section">
                <div className="skill-box right">
                    <span>Microservices</span>
                    <ProgressBar now={now} variant="info" />
                </div>
                
                <div className="skill-box left">
                    <span>Docker</span>
                    <ProgressBar now={now} variant="info" />
                </div>
            </div>

            <div className="skill-parent-section">
                <div className="skill-box right">
                    <span>Git</span>
                    <ProgressBar now={now} variant="info" />
                </div>
                
                <div className="skill-box left">
                    <span>Aws</span>
                    <ProgressBar now={now} variant="info" />
                </div>
            </div>
        </Card>       
        </>
    )
}

export { TechStack }