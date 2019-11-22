import React from "react";
import { Row, Col } from "react-bootstrap";
import styled from "styled-components";

const BannerPage = styled.div`
  background: url(https://www.uni-ca.com.mx/img/banner.jpg);
  background-size: cover;
  height: 200px;

  .layer {
    background-color: rgba(255, 255, 255, 0.85);
    width: 100%;
    height: 100%;
  }

  .title {
    color: #e52d27;
    font-size: 2em;
    font-weight: bold;
  }

  .fixRow {
    margin: 0 auto !important;
  }

  .subtitle {
    color: #2c3e50;
    font-size: 1.3em;
    font-weight: bold;
  }
`;

const BoxText = styled.div`
  display: inline-block;
  margin: 0 auto;
  letter-spacing: 3px;
  text-align: center;
  width: 100%;
`;

const Banner = () => (
  <BannerPage>
    <Row className="layer fixRow">
      <Col xs={12} md={12} lg={12}>
        <BoxText className="title mt-3">UNI-CA</BoxText>
        <BoxText className="subtitle">Clínica Ambulatoria</BoxText>
      </Col>
    </Row>
  </BannerPage>
);

export default Banner;
