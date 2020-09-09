import React from 'react'
import { Col, Row, Container } from 'react-bootstrap';
import './Contact.css';


export default function Contact(pros) {
    return (
        <div className={pros.dark ? " section-dark" : ""} id={pros.id} >
            <Col xs={12} sm={12}>
                <h2 className="titles">Contact Me<hr /></h2>
            </Col>
            <Container className="contact" >
                <Row>
                    <Col xs lg="4"> <i class="fas fa-phone"></i> <p>0434012470</p></Col>
                    <Col xs lg="4"> <i class="fab fa-skype"></i> <p>ryotamr</p> </Col>
                    <Col xs lg="4"><i class="far fa-envelope"></i><p>ryotma14@gmail.com</p> </Col>
                </Row>
            </Container>
        </div>
    )


}
