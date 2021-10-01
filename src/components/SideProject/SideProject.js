import React, { Fragment, useState, useEffect } from "react"
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
        <Fragment>
            <Card border="light">
                <Card.Header>Projects</Card.Header>
                <Card.Body>
                    <Row xs={2} md={3} className="g-4">
                    {
                        repos.map((repo, index) => (
                            <Col key={index}>
                                <Card >
                                    <Card.Body>
                                        {/* <Card.Title>Card Title</Card.Title> */}
                                        <Card.Subtitle className="mb-2 text-muted">{repo.name}</Card.Subtitle>
                                        <Card.Text>{repo.description}</Card.Text>

                                        <div className="repo-attributes">
                                            <span className="start-attr">
                                                <FontAwesomeIcon icon={faStar} />
                                                {repo.stargazers_count}
                                            </span>

                                            <span className="fork-attr">
                                                <FontAwesomeIcon icon={faShareAlt} rotation={270} />
                                                {repo.stargazers_count}
                                            </span>

                                            <span className="lang-attr">
                                                <FontAwesomeIcon icon={faCircle} />
                                                {repo.language}
                                            </span>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))
                    }
                    </Row>
                </Card.Body>
            </Card>

            
        </Fragment>
    )
}

export { SideProject }