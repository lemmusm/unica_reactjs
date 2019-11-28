import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleRight } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

const EspecialidadPage = styled.div`
  ul > li {
    list-style: none;
    margin: 1em auto;
  }

  .icons {
    color: #ff7964;
    margin-right: 0.3em;
  }
`;

const SmallTitle = styled.h5`
  font-size: 1.1em;
  font-weight: bold;
`;

const Especialidad = () => (
  <EspecialidadPage>
    <Container>
      <Row>
        <Col xs={12} md={12} lg={12}></Col>
        <ul>
          <li>
            <SmallTitle>
              <FontAwesomeIcon className="icons" icon={faAngleDoubleRight} />
              Medicina interna
            </SmallTitle>
          </li>
          <li>
            <SmallTitle>
              <FontAwesomeIcon className="icons" icon={faAngleDoubleRight} />
              Medicina de rehabilitación
            </SmallTitle>
          </li>
          <li>
            <SmallTitle>
              <FontAwesomeIcon className="icons" icon={faAngleDoubleRight} />
              Traumatología
            </SmallTitle>
          </li>
          <li>
            <SmallTitle>
              <FontAwesomeIcon className="icons" icon={faAngleDoubleRight} />
              Infectología
            </SmallTitle>
          </li>
          <li>
            <SmallTitle>
              <FontAwesomeIcon className="icons" icon={faAngleDoubleRight} />
              Rehabilitación física
            </SmallTitle>
          </li>
          <li>
            <SmallTitle>
              <FontAwesomeIcon className="icons" icon={faAngleDoubleRight} />
              Laboratorio de análisis clínico
            </SmallTitle>
          </li>
          <li>
            <SmallTitle>
              <FontAwesomeIcon className="icons" icon={faAngleDoubleRight} />
              Rayos X
            </SmallTitle>
          </li>
          <li>
            <SmallTitle>
              <FontAwesomeIcon className="icons" icon={faAngleDoubleRight} />
              Podología
            </SmallTitle>
          </li>
        </ul>
      </Row>
    </Container>
  </EspecialidadPage>
);

export default Especialidad;
