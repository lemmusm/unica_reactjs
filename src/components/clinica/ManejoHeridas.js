import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styled from "styled-components";

const ManejoHeridasSection = styled.div``;

const ManejoHeridas = () => (
  <ManejoHeridasSection>
    <Container>
      <Row>
        <Col xs={12} md={12} lg={12}>
          <p>
            Contamos con material, consumibles necesarios para realizar
            curaciones de heridas aguda y crónicas dentro de las cuales contamos
            con hidrogeles, unguentos desidratantes, apositos de alta
            tecnología, desbridamiento ultrasónico, equipo de presión por
            presion negativa.
          </p>
          <p>
            Nuestros protocolos de atención son basados en las guías
            internacionales más actualizadas en este tipo de patología.
          </p>
          <p>VIDEO</p>
        </Col>
      </Row>
    </Container>
  </ManejoHeridasSection>
);

export default ManejoHeridas;
