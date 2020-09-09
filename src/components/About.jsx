import React from 'react'
import { Col, Image, Container } from 'react-bootstrap';
import './About.css';


export default function About (pros) {
    return (
      <div className={pros.dark ? " section-dark" : ""} id = {pros.id} >
        <Container>
          <Col xs={12} sm={12}>
            <h2 className="titles">About Me <hr /></h2>
            <div className="info-myself">
            <p>Front-end developer who is familiar with React, JavaScript, HTML, CSS, MySQL and RESTful APIs. </p>
            <p>Common use of UI technologies: react-bootstrap, Material-UI, Ant Design, react-router-dom, Elemental-UI and Font Awesome.</p>
            </div>
            <div className="space">
            <p >Experienced to be a part of an industry project as a web developer in Anchorz.</p>
            </div>
            <div className= "about-pics">
            <Image src="https://user-images.githubusercontent.com/34767371/92561125-f664eb00-f2b6-11ea-904c-43db1cd7abd5.JPG" className="first_pic" rounded />
            <Image src="https://user-images.githubusercontent.com/34767371/92561120-f4029100-f2b6-11ea-87f4-ae2e0525eb5f.JPG" className="second_pic" rounded />
            <Image src="https://user-images.githubusercontent.com/34767371/92561807-3bd5e800-f2b8-11ea-850c-9f3c81746aa3.JPG" className="third_pic" rounded />
            </div> 
          </Col>
        </Container>
      </div>
    )

    
}
