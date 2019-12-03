import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkerAlt,
  faPhone,
  faMobileAlt,
  faEnvelope
} from "@fortawesome/free-solid-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import LogoWhite from "../assets/img/logo-white.png";
import Horario from "../components/Horario";
import styled from "styled-components";

const FooterInfo = styled.div`
  padding: 1em 0;
  background: #f7f7f7;
  text-align: center;
  width: 100%;

  .icons {
    color: #ff6262;
    font-size: 1.5em;
    margin: 0.3em auto;
  }
`;

const FooterComponent = styled.div`
  background: #ff9966;
  background: -webkit-linear-gradient(to right, #ff5e62, #ff9966);
  background: linear-gradient(to right, #ff5e62, #ff9966);
  position: relative;

  .icons {
    color: white;
    cursor: pointer;
    font-size: 1.8em;
    margin: 0.3em auto;

    &:hover {
      color: #3b5a9b;
    }
  }
`;
const BoxInfo = styled.div`
  display: inline-block;
  margin: 1em auto;
  text-align: center;
  width: 100%;
`;

const Title = styled.h1`
  color: white;
  font-size: 1.3em;
  font-weight: bold;
  text-align: center;
`;

const TitleInfo = styled(Title)`
  color: #2c3e50;
  font-size: 1em;
`;

const Footer = () => (
  <div>
    <FooterInfo>
      <Container>
        <Row className="mt-5">
          <Col xs={6} md={6} lg={3} className="justify-content-center">
            <BoxInfo>
              <FontAwesomeIcon className="icons" icon={faMapMarkerAlt} />
            </BoxInfo>
            <TitleInfo>Dirección</TitleInfo>
            <BoxInfo>Prol. Degollado No. 151 Centro Pénjamo, Gto.</BoxInfo>
          </Col>
          <Col xs={6} md={6} lg={3}>
            <BoxInfo>
              <FontAwesomeIcon className="icons" icon={faPhone} />
            </BoxInfo>
            <TitleInfo>Teléfono clínica</TitleInfo>
            <BoxInfo>(469) 695 0124 o 69 50713</BoxInfo>
          </Col>
          <Col xs={6} md={6} lg={3}>
            <BoxInfo>
              <FontAwesomeIcon className="icons" icon={faMobileAlt} />
            </BoxInfo>
            <TitleInfo>Teléfono celular</TitleInfo>
            <BoxInfo>(469) 621 8480</BoxInfo>
          </Col>
          <Col xs={6} md={6} lg={3}>
            <BoxInfo>
              <FontAwesomeIcon className="icons" icon={faEnvelope} />
            </BoxInfo>
            <TitleInfo>Correo electrónico</TitleInfo>
            <BoxInfo>cendejasalatorreconsul@yahoo.com.mx</BoxInfo>
          </Col>
        </Row>
      </Container>
    </FooterInfo>

    <FooterComponent>
      <Container>
        <Row>
          <Col xs={12} md={6} lg={6}>
            <BoxInfo>
              <img src={LogoWhite} alt="logo_white" />
            </BoxInfo>
            <BoxInfo>
              UNI-CA Clínica Ambulatoria es una unidad de atención especializada
              en pie diabético, cuidados de heridas y cirugías de corta
              estancia.
            </BoxInfo>
            <BoxInfo>
              <a
                href="https://www.facebook.com/Uni-Ca-Cl%C3%ADnica-Ambulatoria-919021944871793/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon className="icons" icon={faFacebook} />
              </a>
            </BoxInfo>
          </Col>
          <Col xs={12} md={6} lg={6}>
            <BoxInfo>
              <Title>HORARIOS</Title>
              <Horario />
            </BoxInfo>
          </Col>
        </Row>
      </Container>
    </FooterComponent>
  </div>
);
export default Footer;
