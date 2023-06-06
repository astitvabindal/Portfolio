/* eslint-disable jsx-a11y/alt-text */
import { Container, Row, Col, } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import Calculator from "../assets/img/calculator.png";
import Clock from "../assets/img/clock.png";
import TicTaeToe from "../assets/img/TicTaeToe.png";
import Weather from "../assets/img/Weather.png";
import Movie from "../assets/img/Movie.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Movie Search App",
      description: "I have created a movie app using HTML, CSS , React.Js and Javascript in which we can get the information about the lattest movies.I have created this app using the movie API",
      imgUrl: Movie,
      url:"https://astitvabindal.github.io/Movie-Search-App/"
    },  
    {
      title: "Weather App",
      description: "I have created a weather app using HTML, CSS and Javascript in which we can check the temperature of different cities and country in the world.I have created this app using weather API.",
      imgUrl: Weather,
      url:"https://astitvabindal.github.io/Check-Weather.github.io/"
    }, 
    {
      title: "TicTacToe Game",
      description: "I have created a TicTacToe using HTML, CSS and Javascript.To play game click on it.",
      imgUrl: TicTaeToe,
      url:"https://astitvabindal.github.io/TicTacToe.github.io/"
    },    
    {
      title: "Clock",
      description: "I have created a analog clock using HTML, CSS and Javascript.",
      imgUrl: Clock,
      url:"https://astitvabindal.github.io/Analog-Clock.github.io/"
    },  
    {
      title: "Calculator",
      description: "I have created a calculator using HTML , CSS and Javascript. We can switch the theme of calculator to dark mode or light mode and perform simple calculations.",
      imgUrl: Calculator,
      url:"https://astitvabindal.github.io/Calculator.github.io/"
    }, 
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Projects</h2><br />
                  <Row>
                    {
                      projects.map((project, index) => {
                        return (
                          <ProjectCard
                            key={index}
                            {...project}
                          />
                        )
                      })
                    }
                  </Row>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
