import { useState, useRef } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import contactImg from '../assets/img/contactme.jpg'
import 'animate.css'
import TrackVisibility from 'react-on-screen'
import emailjs from '@emailjs/browser'

const Contact = () => {
  const formRef = useRef()
  const [done, setDone] = useState(false)
  const [formvalue, setFormValue] = useState({
    userName: '',
    userLastName: '',
    userEmail: '',
    userSubject: '',
    message: '',
  })

  const handelChange = (e) => {
    setFormValue({ ...formvalue, [e.target.id]: e.target.value })
  }
  const onsubmit = (e) => {
    e.preventDefault()
    emailjs
      .sendForm(
        'service_kfty6cq',
        'template_rarhjxf',
        formRef.current,
        'H4yR-KtTlIhNNud_R',
      )
      .then(
        (result) => {
          console.log(result.text)
          setDone(true)
          setFormValue({
            userName: '',
            userLastName: '',
            userEmail: '',
            userSubject: '',
            message: '',
          })
        },
        (error) => {
          console.log(error.text)
        },
      )
  }

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6} className="colImg">
            <TrackVisibility>
              {({ isVisible }) => (
                <img
                  className={
                    isVisible ? 'animate__animated animate__pulse' : ''
                  }
                  src={contactImg}
                  alt="Contact Us"
                />
              )}
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible
                      ? 'animate__animated animate__rotateInDownRight'
                      : ''
                  }
                >
                  <form ref={formRef} onSubmit={onsubmit}>
                    <Row>
                      <Col size={12} sm={6} className="px-1">
                        <input
                          type="text"
                          placeholder="First Name"
                          name="user_name"
                          onChange={handelChange}
                          value={formvalue.userName}
                          id="userName"
                        />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input
                          type="text"
                          placeholder="Last Name"
                          name="user_last_name"
                          onChange={handelChange}
                          value={formvalue.userLastName}
                          id="userLastName"
                        />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input
                          type="email"
                          placeholder="Email Address"
                          name="user_email"
                          onChange={handelChange}
                          value={formvalue.userEmail}
                          id="userEmail"
                        />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input
                          type="text"
                          placeholder="Object of the message"
                          name="user_subject"
                          onChange={handelChange}
                          value={formvalue.userSubject}
                          id="userSubject"
                        />
                      </Col>
                      <Col size={12} className="px-1">
                        <textarea
                          rows="6"
                          placeholder="Message"
                          name="message"
                          onChange={handelChange}
                          value={formvalue.message}
                          id="message"
                        ></textarea>
                        <button
                          type="submit"
                          className={
                            isVisible ? 'animate__animated animate__zoomIn' : ''
                          }
                        >
                          Send
                        </button>
                        {done && 'Email is sent with success!'}
                      </Col>
                    </Row>
                  </form>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Contact
