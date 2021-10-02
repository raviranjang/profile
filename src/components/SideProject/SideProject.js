import React, { useState, useEffect } from "react"
import { Card, Col, Row } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faShareAlt, faCircle } from '@fortawesome/free-solid-svg-icons'
import "./SideProject.css"


const SideProject = () => {

    const [repos, setRepos] = useState([])

    useEffect(() => {
        const url = "https://api.github.com/search/repositories?q=user:raviranjang&per_page=20&type=Repositories"

        const fetchData = async () => {
            try {
              const response = await fetch(url);
              const json = await response.json();
              setRepos(json.items)
            } catch (error) {
              console.log("error", error);
            }
          };
      
          fetchData();

    }, [])



    return (
        <>
            <div className="projects-section-parent">
                <div className="title">Projects</div>
                    <Row xs={1} sm={2} md={3} className="g-4">
                    {
                        repos.map((repo, index) => (
                            <Col key={index}>
                                <Card >
                                    <Card.Body>
                                        <Card.Subtitle className="mb-2 text-muted">{repo.name}</Card.Subtitle>
                                        <Card.Text>{repo.description}</Card.Text>
                                        <div className="repo-attriutes">
                                            <div className="repo-stats">
                                                <span className="star-attr">
                                                    <FontAwesomeIcon icon={faStar} />
                                                    <span className="count">{repo.stargazers_count}</span>
                                                </span>

                                                <span className="fork-attr">
                                                    <FontAwesomeIcon icon={faShareAlt} rotation={270} />
                                                    <span className="count">{repo.stargazers_count}</span>
                                                </span>
                                            </div>
                                            
                                            <div>
                                                <span className="lang-attr">
                                                    <FontAwesomeIcon icon={faCircle} />
                                                    <span className="lang-list">{repo.language}</span>
                                                </span>
                                            </div>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))
                    }
                    </Row>
                </div>

        </>
    )
}

export { SideProject }