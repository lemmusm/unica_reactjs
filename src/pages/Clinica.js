import React, { Component } from "react";
import { Container, Button, Accordion, Card } from "react-bootstrap";
import styled from "styled-components";
import Banner from "../components/Banner";
import UnidadIntegral from "../components/clinica/UnidadIntegral";
import OrtesisProtesis from "../components/clinica/OrtesisProtesis";
import ManejoHeridas from "../components/clinica/ManejoHeridas";
import Ambulatoria from "../components/clinica/Ambulatoria";
import Laroscopica from "../components/clinica/Laroscopica";
import Varices from "../components/clinica/Varices";
import Nutricion from "../components/clinica/Nutricion";
import Especialidad from "../components/clinica/Especialidad";

const ClinicaPage = styled.div`
  .btn-link {
    color: #e52d27 !important;
    font-weight: bold;
    text-decoration: none !important;
  }

  ul > li {
    list-style: none;
  }

  .gallery {
    justify-content: space-between | space-around !important;
    cursor: default !important;
  }

  @media (max-width: 768px) {
    .gallery > div {
      width: 48% !important;
    }

    .container {
      maring: 0 auto;
      max-width: 95%;
    }
  }

  .item {
    display: inline-block;
    font-size: 1em;
    font-weight: normal;
    margin: 0.3em auto;
  }
`;

const ItemList = styled.li`
  display: inline;
`;

class Clinica extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    // Variables for Gallery component
    const gutterInPercent = 1;
    const columnsMaxCount = 4;

    return (
      <ClinicaPage>
        <Banner></Banner>
        <Container className="mt-5 mb-5">
          {/* <Accordion defaultActiveKey="0"></Accordion> */}
          <Accordion>
            <Card>
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="0">
                  UNIDAD INTEGRAL EN MANEJO DE PIE DIABÉTICO:
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="0">
                <Card.Body>
                  <UnidadIntegral />
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="1">
                  ÓRTESIS Y PRÓTESIS DE EXTREMIDADES:
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="1">
                <Card.Body>
                  <OrtesisProtesis />
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="2">
                  UNIDAD DE MANEJO AVANZADO DE HERIDAS:
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="2">
                <Card.Body>
                  <ManejoHeridas />
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="3">
                  CIRUGÍA DE CORTA ESTANCIA O AMBULATORIA:
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="3">
                <Card.Body>
                  <Ambulatoria />
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="4">
                  CIRUGÍA LAPAROSCÓPICA:
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="4">
                <Card.Body>
                  <Laroscopica />
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="5">
                  TRATAMIENTO Y CIRUGÍA LASER DE VARICES:
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="5">
                <Card.Body>
                  <Varices />
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="6">
                  NUTRICIÓN:
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="6">
                <Card.Body>
                  <Nutricion />
                </Card.Body>
              </Accordion.Collapse>
            </Card>

            <Card>
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="7">
                  ESPECIALIDAD:
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="7">
                <Card.Body>
                  <Especialidad />
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
        </Container>
      </ClinicaPage>
    );
  }
}

export default Clinica;
