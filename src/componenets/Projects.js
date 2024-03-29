import 'animate.css'

import TrackVisibility from 'react-on-screen'
import { Container, Row, Col, Tab, Nav } from 'react-bootstrap'
import ProjectCard from './ProjectCard'
import ocrmarss from '../assets/img/OCR-MARSS.jpg'
import projImg1 from '../assets/img/project-img1.png'
import projImg2 from '../assets/img/project-img2.png'
import projImg3 from '../assets/img/project-img3.png'
import ToDoList from '../assets/img/ToDoList-FrontEnd.jpg'
import colorSharp2 from '../assets/img/color-sharp2.png'

const Projects = () => {
  const projectsFullStack = [
    {
      title: 'OCR-MARSS company',
      description: 'Private company to manage nuclear zones',
      LinkToWebsite: 'https://ocr-marss.herokuapp.com/',
      LinkToProject: 'https://github.com/SiVv-B/ocr-marss-gomycode',
      imgUrl: ocrmarss,
    },
/*     {
      title: 'Business Startup',
      description: 'Design & Development',
      LinkToWebsite: 'See the Website',
      LinkToProject: 'See the Code',
      imgUrl: projImg2,
    }, */
    {
      title: 'Business Startup',
      description: 'Design & Development',
      LinkToWebsite: 'See the Website',
      LinkToProject: 'See the Code',
      imgUrl: projImg3,
    },/* 
    {
      title: 'Business Startup',
      description: 'Design & Development',
      LinkToWebsite: 'See the Website',
      LinkToProject: 'See the Code',
      imgUrl: projImg1,
    }, */
  ]

  const projectsFrontEnd = [
    {
      title: 'To Do List',
      description: 'React Redux front-end app',
      LinkToWebsite: 'https://todolist-begginer.web.app/',
      LinkToProject:
        'https://github.com/SiVv-B/To-Do-List-App/tree/master/todolistapp',
      imgUrl: ToDoList,
    },/* 
    {
      title: 'Business Startup',
      description: 'Design & Development',
      LinkToWebsite: 'See the Website',
      LinkToProject: 'See the Code',
      imgUrl: projImg1,
    },
    {
      title: 'Business Startup',
      description: 'Design & Development',
      LinkToWebsite: 'See the Website',
      LinkToProject: 'See the Code',
      imgUrl: projImg2,
    }, */
    {
      title: 'Business Startup',
      description: 'Design & Development',
      LinkToWebsite: 'See the Website',
      LinkToProject: 'See the Code',
      imgUrl: projImg3,
    },
  ]
  const projectsBackEnd = [
    {
      title: 'Business Startup',
      description: 'Design & Development',
      LinkToWebsite: 'See the Website',
      LinkToProject: 'See the Code',
      imgUrl: projImg3,
    },
/*     {
      title: 'Business Startup',
      description: 'Design & Development',
      LinkToWebsite: 'See the Website',
      LinkToProject: 'See the Code',
      imgUrl: projImg2,
    }, */
  ]

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? 'animate__animated animate__fadeIn' : ''
                  }
                >
                  <h2>Projects</h2>
                  <p>
                    I develop MERN applications
                    <br />
                    MongoDB // Express // React // NodeJs
                    <br />
                  </p>
                </div>
              )}
            </TrackVisibility>
            <Tab.Container id="projects-tabs" defaultActiveKey="first">
              <TrackVisibility>
                {({ isVisible }) => (
                  <div>
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item
                        className={
                          isVisible ? 'animate__animated animate__pulse' : ''
                        }
                      >
                        <Nav.Link eventKey="first">Full-Stack App</Nav.Link>
                      </Nav.Item>
                      <Nav.Item
                        className={
                          isVisible ? 'animate__animated animate__pulse' : ''
                        }
                      >
                        <Nav.Link eventKey="second">Front-End App</Nav.Link>
                      </Nav.Item>
                      <Nav.Item
                        className={
                          isVisible ? 'animate__animated animate__pulse' : ''
                        }
                      >
                        <Nav.Link eventKey="third">Back End App</Nav.Link>
                      </Nav.Item>
                    </Nav>
                  </div>
                )}
              </TrackVisibility>

              <Tab.Content id="slideInUp" className="projectsTabContent">
                <Tab.Pane eventKey="first">
                  <Row>
                    {projectsFullStack.map((project, index) => {
                      return <ProjectCard key={index} {...project} />
                    })}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  <Row>
                    {projectsFrontEnd.map((project, index) => {
                      return <ProjectCard key={index} {...project} />
                    })}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="third">
                  <Row>
                    {projectsBackEnd.map((project, index) => {
                      return <ProjectCard key={index} {...project} />
                    })}
                  </Row>
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>

        <img className="background-image-right" src={colorSharp2}></img>
      </Container>
    </section>
  )
}

export default Projects
