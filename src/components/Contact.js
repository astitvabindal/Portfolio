import React, { useRef, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import emailjs from "@emailjs/browser";
import contactImg from "../assets/img/contact-img.svg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Contact = () => {
  const refresh = () => {
    setTimeout(()=>{
      window.location.reload(true)
    },5000)
  }
  const form = useRef();
  const [done, setDone] = useState(false);
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm("service_9tjk6gs", "template_wr21gkq", form.current, "RZ21yJ41O5KXvmUvY")
      .then((result) => {
          setDone(true);
          form.reset();
        },
        (error) => {
        }
      );
  };
  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={contactImg} alt="Contact Us"/>
              }
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <h2>Get In Touch</h2>
                <form ref={form} onSubmit={sendEmail}>
                  <Row>
                    <Col size={12} sm={6} className="px-1">
                      <input type="text" name="first_name" placeholder="First Name" />
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="text" name="last_name" placeholder="Last Name"/>
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="email" name="user_email" placeholder="Email Address" />
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="number" name="contact_number" placeholder="Phone No."/>
                    </Col>
                    <Col size={12} className="px-1">
                      <textarea rows="6" name="message" placeholder="Message"></textarea>
                      <button type="submit" onClick={refresh}><span>Send</span></button>
                      <span>{done && "Thanks for Contacting me"}</span>
                    </Col>
                  </Row>
                </form>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
