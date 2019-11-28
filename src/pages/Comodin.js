import React from "react";
import { Container, Row, Col, Breadcrumb } from "react-bootstrap";
import styled from "styled-components";
import Banner from "../components/Banner";

const ComodingPage = styled.div`
  .breadcrumb-item a {
    text-decoration: none;
    cursor: default !important;
  }
`;

const Comodin = () => (
  <ComodingPage>
    <Banner></Banner>
    <Container>
      <Row>
        <Col className="mt-5" xs={12} md={12} lg={12}>
          <Breadcrumb>
            <Breadcrumb.Item>
              Calzado y articulos para el pie diabético
            </Breadcrumb.Item>
            <Breadcrumb.Item>Artículos ortopédicos</Breadcrumb.Item>
            <Breadcrumb.Item>Material de curación y apositos</Breadcrumb.Item>
            <Breadcrumb.Item>Medias de compresión</Breadcrumb.Item>
            <Breadcrumb.Item>Farmacia</Breadcrumb.Item>
          </Breadcrumb>
        </Col>
        <p>
            FOTOS
        </p>
      </Row>
    </Container>
  </ComodingPage>
);

export default Comodin;
