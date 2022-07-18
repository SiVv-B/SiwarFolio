import TrackVisibility from 'react-on-screen'
import react from '../assets/img/React.png'
import redux from '../assets/img/Redux.jpg'
import htmlCss from '../assets/img/html-css.jpg'
import JS from '../assets/img/JavaScript.png'
import NodeJsExpress from '../assets/img/nodeJs-express.png'
import MongoDB from '../assets/img/MongoDB.jpg'
import JWT from '../assets/img/JWT.png'
import scss from '../assets/img/sass.png'
import MUI from '../assets/img/MUI.png'
import styled from '../assets/img/stled-component.png'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import { ArrowRightCircle } from 'react-bootstrap-icons'
import colorSharp from '../assets/img/color-sharp.png'

const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  }

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <TrackVisibility>
                {({ isVisible }) => (
                  <div>
                    <h2
                      className={
                        isVisible ? 'animate__animated animate__fadeIn' : ''
                      }
                    >
                      Skills
                    </h2>
                    <p
                      className={
                        isVisible ? 'animate__animated animate__fadeIn' : ''
                      }
                    >
                      Here are the technologies that I use as a full-Stack web
                      developer.<br></br>
                    </p>
                    <div
                      className={
                        isVisible ? 'animate__animated animate__pulse' : ''
                      }
                    >
                      <Carousel
                        responsive={responsive}
                        infinite={true}
                        className="owl-carousel owl-theme skill-slider"
                      >
                        <div className="item">
                          <h5>HTML5 CSS3</h5>
                          <img
                            src={htmlCss}
                            alt="Image"
                            style={{ height: '202px', width: '200px' }}
                          />
                          <p>Level: Advenced</p>
                        </div>
                        <div>
                          <h5>JavaScript</h5>
                          <img
                            src={JS}
                            alt="Image"
                            style={{
                              height: '202px',
                              width: '250px',
                              marginBottom: '5%',
                            }}
                          />
                          <p>Level: Medium</p>
                        </div>
                        <div className="item">
                          <h5>React</h5>
                          <img
                            src={react}
                            alt="Image"
                            style={{ height: '200px', width: '200px' }}
                          />
                          <p>Level: Medium</p>
                        </div>
                        <div className="item">
                          <h5>Redux</h5>
                          <img src={redux} alt="Image" />
                          <p>Level: Medim</p>
                        </div>

                        <div className="item">
                          <h5>Node.js Express</h5>
                          <img
                            src={NodeJsExpress}
                            alt="Image"
                            style={{
                              height: '200px',
                              width: '250px',
                            }}
                          />
                          <p>Level: Medium</p>
                        </div>

                        <div className="item">
                          <h5>MongoDB</h5>
                          <img
                            src={MongoDB}
                            alt="Image"
                            style={{ height: '200px', width: '250px' }}
                          />
                          <p>Level: Medium</p>
                        </div>
                        <div className="item">
                          <h5>Json Web Token</h5>
                          <img
                            src={JWT}
                            alt="Image"
                            style={{ height: '200px', width: '250px' }}
                          />
                          <p>Level: Begginer</p>
                        </div>
                        <div className="item">
                          <h5>Styled Component</h5>
                          <img src={styled} alt="Image" />
                          <p>Level: Begginer</p>
                        </div>
                        <div className="item">
                          <h5>MUI</h5>
                          <img src={MUI} alt="Image" />
                          <p>Level: Begginer</p>
                        </div>
                        <div className="item">
                          <h5>Sass</h5>
                          <img
                            src={scss}
                            alt="Image"
                            style={{
                              height: '200px',
                              width: '250px',
                              padding: '10%',
                              marginRight: '5%',
                            }}
                          />
                          <p>Level: Begginer</p>
                        </div>
                      </Carousel>
                    </div>
                    <a
                      href="https://github.com/SiVv-B"
                      rel="noreferrer"
                      target="_blank"
                    >
                      {' '}
                      <button className="skillbutton">
                        My soft skills <br />
                        <ArrowRightCircle size={25} />
                      </button>
                    </a>{' '}
                    <span>
                      {' '}
                      <a
                        href="https://github.com/SiVv-B"
                        rel="noreferrer"
                        target="_blank"
                      >
                        {' '}
                        <button
                          className="skillbutton"
                          onClick={() => console.log('connect')}
                        >
                          My other skills <ArrowRightCircle size={25} />
                        </button>{' '}
                      </a>{' '}
                    </span>
                  </div>
                )}
              </TrackVisibility>
            </div>
          </div>
        </div>

        <img className="background-image-left" src={colorSharp} alt="Image" />
      </div>
    </section>
  )
}

export default Skills
