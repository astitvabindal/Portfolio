/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/alt-text */
import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, url }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <a href={url} style={{textDecoration:"none"}} target="_blank">
        <div className="proj-imgbx">
          <img src={imgUrl} style={{height:"300px",width:"450px"}} />
          <div className="proj-txtx">
            <h4 style={{color:"white"}}>{title}</h4>
            <span style={{color:"white"}}>{description}</span>
          </div>
        </div>
      </a>
    </Col>
  )
}
