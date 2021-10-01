import React from 'react'
import {Card} from 'react-bootstrap'
import "./Profile.css"


const Profile = () => {
    
    return (
        <>
            <Card className="profile-card">
                <Card.Body>
                    <div className="profile-img-circle">
                        <img src={require("../../assets/images/profile-circle.png").default} alt="profile_pic" />
                    </div>
                    <div className="profile-desc">
                        <div className="name">Ravi Ranjan</div>
                        <div className="designation">Sr. Software Engineer</div>
                    </div>
                </Card.Body>
            </Card>
        </>
    )
}


export { Profile }