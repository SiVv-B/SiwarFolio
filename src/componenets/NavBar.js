import React from 'react'
import { useState, useEffect } from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'
import { Fade } from '@mui/material'
import logo from '../assets/img/logo.svg'
import navIcon1 from '../assets/img/nav-icon1.svg'
import navIcon2 from '../assets/img/github.svg'

function NavBar() {
  const [activeLink, setActiveLink] = useState('home')
  const [scrolled, setScrolled] = useState(false)
  const [checked, setChecked] = useState(false)
  useEffect(() => {
    setChecked(true)
  }, [])

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener('scroll', onScroll)

    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value)
  }

  return (
    <Fade
      in={checked}
      style={{ transitionDelay: checked ? '300ms' : '0ms' }}
      {...(true ? { timeout: 2000 } : {})}
    >
      <Navbar expand="md" className={scrolled ? 'scrolled' : ''} id="NavBar">
        <Container>
          <Navbar.Brand href="/">
            <img src={logo} alt="Logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link
                href="#home"
                className={
                  activeLink === 'home' ? 'active navbar-link' : 'navbar-link'
                }
                onClick={() => onUpdateActiveLink('home')}
              >
                Home - test
              </Nav.Link>

              <Nav.Link
                href="#skills"
                className={
                  activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'
                }
                onClick={() => onUpdateActiveLink('skills')}
              >
                Skills
              </Nav.Link>

              <Nav.Link
                href="#projects"
                className={
                  activeLink === 'projects'
                    ? 'active navbar-link'
                    : 'navbar-link'
                }
                onClick={() => onUpdateActiveLink('projects')}
              >
                Projects
              </Nav.Link>
            </Nav>
            <span className="navbar-text">
              <div className="social-icon">
                <a
                  href="https://www.linkedin.com/in/siwar-belkhir/"
                  rel="noreferrer"
                  target="_blank"
                >
                  <img
                    src={navIcon1}
                    alt=""
                    style={{ height: '25px', width: '25px' }}
                  />
                </a>
                <a
                  href="https://github.com/SiVv-B"
                  rel="noreferrer"
                  target="_blank"
                >
                  <img
                    src={navIcon2}
                    alt=""
                    style={{ height: '25px', width: '25px' }}
                  />
                </a>
              </div>
              <Nav.Link href="#connect">
                <button
                  className="navButton"
                  onClick={() => console.log('connect')}
                >
                  <span>Let’s Connect</span>
                </button>
              </Nav.Link>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Fade>
  )
}

export default NavBar
