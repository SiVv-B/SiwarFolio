import { useEffect, useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { ArrowRightCircle } from 'react-bootstrap-icons'
import 'animate.css'
import TrackVisibility from 'react-on-screen'
import {
  faHtml5,
  faCss3,
  faGitAlt,
  faNode,
  faJsSquare,
  faReact,
} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Banner.scss'
import { Collapse, Fade } from '@mui/material'

const Banner = () => {
  const [checked, setChecked] = useState(false)
  useEffect(() => {
    setChecked(true)
  }, [])

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div>
                  <span className="tagline">Welcome to my Portfolio</span>
                  <Collapse in={checked} {...(true ? { timeout: 1000 } : {})}>
                    <h1>
                      Hi! I'm Siwar
                      <br />
                      I'm a
                    </h1>
                    <h1 className="glitch">
                      <span aria-hidden="true">web developer</span>
                      web developer{' '}
                      <span aria-hidden="true">web developer</span>
                    </h1>
                  </Collapse>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book.
                  </p>
                  <a href="#connect">
                    {' '}
                    <button
                      onClick={() => console.log('connect')}
                      className={
                        isVisible ? 'animate__animated animate__pulse' : ''
                      }
                    >
                      Let’s Connect <ArrowRightCircle size={25} />
                    </button>
                  </a>
                </div>
              )}
            </TrackVisibility>
          </Col>

          <Fade
            in={checked}
            style={{ transitionDelay: checked ? '300ms' : '0ms' }}
            {...(true ? { timeout: 2000 } : {})}
          >
            <Col xs={12} md={6} xl={5}>
              <TrackVisibility>
                <div className="stage-cube-cont">
                  <div className="cubespinner">
                    <div className="face1">
                      <FontAwesomeIcon icon={faHtml5} color="#e34c26" />
                    </div>
                    <div className="face2">
                      <FontAwesomeIcon icon={faNode} color=" #3C873A" />
                    </div>
                    <div className="face3">
                      <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
                    </div>
                    <div className="face4">
                      <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
                    </div>
                    <div className="face5">
                      <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
                    </div>
                    <div className="face6">
                      <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
                    </div>
                  </div>
                </div>
              </TrackVisibility>
            </Col>
          </Fade>
        </Row>
      </Container>
    </section>
  )
}

export default Banner
