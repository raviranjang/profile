// import logo from './logo.svg';
import { NavBar } from './components/NavBar';
import { Container, Row, Col} from 'react-bootstrap'
import './App.css';
import { Profile } from './components/Profile';
import { ContactMe } from './components/ContactMe/ContactMe';
import { TechStack } from './components/TechStack/TechStack';
import { AboutMe } from './components/AboutMe';
import { WorkExp } from './components/WorkExp';
import { SideProject } from './components/SideProject';

function App() {
  return (
    <>
      <NavBar />

      <Container>
        <Row>
          <Col>
            <Row id="home">
              <AboutMe />
            </Row>
            <Row id="work-exp">
              <WorkExp />
            </Row>
            <Row id="skills">
              <TechStack />
            </Row>
            <Row id="projects">
              <SideProject />
            </Row>

            <Row id="contacts">
              <ContactMe />
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
