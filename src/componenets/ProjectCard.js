import { useState, useEffect } from 'react'
import { Container, Row, Col, Tab, Nav } from 'react-bootstrap'
import github from '../assets/img/github.svg'
import website from '../assets/img/browser.svg'
import TrackVisibility from 'react-on-screen'

const ProjectCard = ({
  title,
  description,
  imgUrl,
  LinkToWebsite,
  LinkToProject,
}) => {
  return (
    <Col size={12} sm={6} md={4}>
      <TrackVisibility>
        {({ isVisible }) => (
          <div className={isVisible ? 'animate__animated animate__pulse' : ''}>
            <div className="proj-imgbx">
              <img src={imgUrl} style={{ height: '300px' }} />
              <div className="proj-txtx">
                <h4>{title}</h4>
                <span>{description}</span>
                <span>
                  <table className="table table-borderless">
                    <thead style={{}}>
                      <a
                        href={LinkToWebsite}
                        style={{
                          color: 'white',
                          textDecoration: 'none',
                        }}
                      >
                        {' '}
                        <td>
                          {' '}
                          <img
                            src={website}
                            alt="Image"
                            style={{
                              width: '60px',
                              height: '60px',
                            }}
                          />
                        </td>
                      </a>
                      <a
                        href={LinkToProject}
                        style={{ color: 'white', textDecoration: 'none' }}
                      >
                        {' '}
                        <td>
                          {' '}
                          <img
                            src={github}
                            alt="Image"
                            style={{
                              width: '60px',
                              height: '60px',
                            }}
                          />
                        </td>
                      </a>
                    </thead>
                    <tbody>
                      <tr>
                        <a
                          href={LinkToWebsite}
                          style={{ color: 'white', textDecoration: 'none' }}
                        >
                          <th scope="col">See the App</th>
                        </a>

                        <a
                          href={LinkToProject}
                          style={{ color: 'white', textDecoration: 'none' }}
                        >
                          <th scope="col"> See the code </th>
                        </a>
                      </tr>
                    </tbody>
                  </table>
                </span>
              </div>
            </div>
          </div>
        )}
      </TrackVisibility>
    </Col>
  )
}
export default ProjectCard
