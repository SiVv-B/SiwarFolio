import { Container, Row, Col } from 'react-bootstrap'
import logo from '../assets/img/logo.svg'
import navIcon1 from '../assets/img/nav-icon1.svg'
import navIcon2 from '../assets/img/github.svg'
import TrackVisibility from 'react-on-screen'

const Footer = () => {
  return (
    <footer className="footer">
      <TrackVisibility>
        {({ isVisible }) => (
          <div>
            <Container>
              <Row className="align-items-center">
                <Col size={12} sm={6}>
                  <img
                    src={logo}
                    alt="Logo"
                    className={
                      isVisible
                        ? 'animate__animated animate__rotateInDownLeft'
                        : ''
                    }
                  />
                </Col>

                <Col size={12} sm={6} className="text-center text-sm-end">
                  <div
                    className={
                      isVisible ? 'animate__animated animate__fadeInUp' : ''
                    }
                  >
                    <div className="social-icon">
                      <a
                        href="https://www.linkedin.com/in/siwar-belkhir/"
                        rel="noreferrer"
                        target="_blank"
                      >
                        <img src={navIcon1} alt="Icon" />
                      </a>
                      <a
                        href="https://github.com/SiVv-B"
                        rel="noreferrer"
                        target="_blank"
                      >
                        <img src={navIcon2} alt="Icon" />
                      </a>
                    </div>
                    <br />
                  </div>
                  <p className="tagline">
                    Thank you for your visit and see you soon!
                  </p>
                </Col>
              </Row>
            </Container>
          </div>
        )}
      </TrackVisibility>
    </footer>
  )
}
export default Footer
