import React from 'react'
import { Container, Row, Col, ListGroup } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import styled from 'styled-components'
import LogoWhite from '../assets/img/logo-white.png'

const FooterComponent = styled.div`
    background: #ff9966;
    background: -webkit-linear-gradient(to right, #ff5e62, #ff9966);
    background: linear-gradient(to right, #ff5e62, #ff9966);
    position: relative;

    .list-group-item {
        background-color: transparent;
        border: 0;
        padding: .3rem 1.25rem;
    }

    .icons{
        color: white;
        cursor: pointer;
        font-size: 1.8em;
        margin: .3em auto;

        &:hover {
           color: #3b5a9b
        }
    }
`
const BoxInfo = styled.div`
    display: inline-block;
    margin: 1em auto;
    text-align: center;
    width: 100%;
`

const Title = styled.h1`
    color: white;
    font-size: 1.3em;
    font-weight: bold;
    text-align: center;
`

const Footer = () => (
    <FooterComponent>
        <Container>
            <Row>
                <Col xs={12} md={6} lg={6}>
                    <BoxInfo>
                        <img src={LogoWhite} alt="logo_white" />
                    </BoxInfo>
                    <BoxInfo>
                        UNI-CA Clínica Ambulatoria es una unidad de atención especializada en pie diabético, cuidados de heridas y cirugías de corta estancia.
                    </BoxInfo>
                    <BoxInfo>
                        <a href="https://www.facebook.com/Uni-Ca-Cl%C3%ADnica-Ambulatoria-919021944871793/" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon className="icons" icon={faFacebook} />
                        </a>
                    </BoxInfo>
                </Col>
                <Col xs={12} md={6} lg={6}>
                    <BoxInfo >
                        <Title>HORARIOS</Title>
                        <ListGroup>
                            <ListGroup.Item>Lunes 8:00 am a 7:00pm</ListGroup.Item>
                            <ListGroup.Item>Martes 8:00 am a 7:00pm</ListGroup.Item>
                            <ListGroup.Item>Miércoles 8:00 am a 7:00pm</ListGroup.Item>
                            <ListGroup.Item>Jueves 8:00 am a 3:00pm</ListGroup.Item>
                            <ListGroup.Item>Viernes 8:00 am a 7:00pm</ListGroup.Item>
                            <ListGroup.Item>Sábado 8:00 am a 3:00pm</ListGroup.Item>
                        </ListGroup>
                    </BoxInfo>
                </Col>
            </Row>
        </Container>
    </FooterComponent>
)
export default Footer
