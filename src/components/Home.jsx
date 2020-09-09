import React from 'react'
import { Jumbotron, Row, Col, Image, Container } from 'react-bootstrap';
import './Home.css';


export default function Home(pros) {
  return (
    <div className={pros.dark ? " section-dark" : ""} id={pros.id} >
      <Container>
        <Row className="show-grid text-center">
          <Col xs={12} sm={12} className="person-wrapper">
            <Image src="https://www.kindpng.com/picc/b/136-1369892_avatar-png.png"
              circle alt="profile image" className="profile-pic" />

            <Jumbotron>
              <h1>Software Developer</h1>
              <hr />
              <p>HTML/CSS | JavaScript | Python | React | Bootstrap | React Native | MySQL </p>
              <div className="social-links">

                {/* LinkedIn */}
                <a href="https://www.linkedin.com/in/ryota-masuz/" rel="noopener noreferrer" target="_blank">
                  <i className="fa fa-linkedin-square" aria-hidden="true" />
                </a>

                {/* Github */}
                <a href="https://github.com/ryotma14" rel="noopener noreferrer" target="_blank">
                  <i className="fa fa-github-square" aria-hidden="true" />
                </a>

                {/* Instagram */}
                <a href="https://www.instagram.com/mr14love/" rel="noopener noreferrer" target="_blank">
                  <i class="fa fa-instagram" aria-hidden="true"></i>
                </a>

                {/* Facebook */}
                <a href="https://www.facebook.com/" rel="noopener noreferrer" target="_blank">
                  <i class="fa fa-facebook-square" aria-hidden="true"></i>
                </a>

                {/* Twitter */}
                <a href="https://twitter.com/" rel="noopener noreferrer" target="_blank">
                  <i class="fa fa-twitter-square" aria-hidden="true"></i>
                </a>
              </div>
            </Jumbotron>
          </Col>
        </Row>
      </Container>
    </div>
  )
}


