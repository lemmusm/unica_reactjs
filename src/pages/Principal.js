import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styled from "styled-components";

const PrincipalPage = styled.div`
  .welcomeMsg {
    background: #ff7964;
    background: -webkit-linear-gradient(to right, #ff5e62, #ff9966);
    background: linear-gradient(to right, #ff5e62, #ff9966);
  }

  .boxMsg {
    color: #fff;
    padding: 14%;
    padding-top: 10%;
    text-align: center;
  }

  .portada {
    background: url("https://www.uni-ca.com.mx/img/frente-unica.jpg");
    background-size: cover;
    background-position: 50% 0px;
  }

  @media (max-width: 992px) {
    .bg {
      background: url("https://www.uni-ca.com.mx/img/frente-unica.jpg");
      background-size: cover;
      background-position: 50% 0px;
    }
    .layer {
      background-color: rgba(255, 121, 100, 0.8);
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
  }
`;

const Title = styled.h1`
  color: #2c3e50;
  font-size: 2.5em;
  font-weight: bold;
`;

const TitleBig = styled(Title)`
  color: white;
  font-size: 3.5em;
`;

const Button = styled.div`
  background: #ff9966;
  background: -webkit-linear-gradient(to right, #ff5e62, #ff9966);
  background: linear-gradient(to right, #ff5e62, #ff9966);
  color: #fff;
  border-radius: 0px;
  display: inline-block;
  padding: 12px 30px;
  min-width: 200px;
  margin-top: 15px;
  font-size: 16px;
  font-weight: bold;

  @media (max-width: 768px) {
    float: left !important;
  }
`;

const BoxText = styled.div`
  display: inline-block;
  margin: 1em auto;
  width: 100%;
`;

const Principal = () => (
  <PrincipalPage>
    <Row>
      <Col xs={12} md={12} lg={6} className="welcomeMsg bg">
        <div className="layer">
          <Container className="boxMsg">
            <Title>UNI-CA</Title>
            <TitleBig>CLÍNICA AMBULATORIA</TitleBig>
            <p>
              Es una unidad médica de vanguardia en la cual nos especializamos
              en atender problemas y complicaciones de píe diebético, heridas
              crónicas y cirugías laparoscópica y de corta estancia, siguiendo
              los estándares de calidad vigentes, ofreciendo servicios
              profesionales con ética, responsabilidad y de primer nivel.
            </p>
          </Container>
        </div>
      </Col>
      <Col xs={12} md={12} lg={6} className="portada"></Col>
    </Row>

    <Container className="mb-5">
      <Row className="mt-5">
        <Col xs={12} md={12} lg={12}>
          <Title className="text-center">Nuestra filosofía</Title>
        </Col>
        <Col xs={12} md={6} lg={6}>
          <Button className="float-right">MISIÓN</Button>
          <BoxText className="float-right">
            Somos una institución médica, especializada en el manejo avanzado,
            integral y ambulatorio de heridas crónicas en pacientes de
            diferentes edades, brindando servicio profesional y
            multidiciplinario, a través de un equipo altamente calificado con el
            fin de mejorar la calidad de vida de nuestros pacientes.
          </BoxText>
        </Col>
        <Col xs={12} md={6} lg={6}>
          <Button>VISIÓN</Button>
          <BoxText>
            Ser una unidad médica, reconocida a nivel regional por el
            tratamiento especializado de heridas y en particular para aquellas
            heridas crónicas y complicación por diabetes, que brinde servicios
            de calidad, prestigio y seguridad para mejorar la atención a sus
            pacientes, con tecnología de vanguardía
          </BoxText>
        </Col>
      </Row>
    </Container>
  </PrincipalPage>
);
export default Principal;
