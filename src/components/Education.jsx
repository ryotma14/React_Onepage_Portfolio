import React from 'react'
import { Col, Row, Container } from 'react-bootstrap';
import './Education.css';


export default function Education(pros) {
  return (
    <div className={pros.dark ? " section-dark" : ""} id={pros.id} >
      <Container className="edu_exp">
        <Row>
          <h2 className="titless">Education / Experience <hr /></h2>
          <Col className="date" xs lg="4"> <p>2014 - 2018 </p></Col>
          <Col className="uni" xs lg="8"> <p>Ritsumeikan Asia Pacific University</p>
            <p>Bachelor of Business Administration (Marketing)</p>
          </Col>
        </Row>
        <Row>
          <Col className="date" xs lg="4"><p >2018 - 2020</p> </Col>
          <Col className="uni" xs lg="8"> <p>Queensland University of Technology</p>
            <p>Master of Information Technology (Computer Science)</p>
          </Col>
        </Row>
        <Row>
          <Col className="date" xs lg="4"> <p>06/2016 - 09/2016</p></Col>
          <Col className="expe" xs lg="8"> <p>George P. Johnson Japan</p>
            <p>Marketing Director (Internship)</p></Col>
        </Row>
        <Row>
          <Col className="date" xs lg="4"><p>11/2019 - 02/2020</p>  </Col>
          <Col className="expe" xs lg="8"> <p>AnchorZ Inc.</p>
            <p>Web Developer (Internship)</p></Col>
        </Row>

      </Container>

    </div>
  )


}
