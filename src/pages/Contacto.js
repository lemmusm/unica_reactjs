import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";
import styled from "styled-components";
import Banner from "../components/Banner";
import Horario from "../components/Horario";

const ContactoPage = styled.div`
  .map {
    height: 300px;
    margin-bottom: 4em;
  }
`;

const Title = styled.h1`
  display: inline-block;
  font-size: 2em;

  @media (max-width: 768px) {
    text-align: center;
  }
`;

const mapStyles = {
  width: "100%",
  height: "100%"
};

class Contacto extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <ContactoPage>
        <Banner></Banner>
        <Container className="mt-5">
          <Row>
            <Col className="map" xs={12} md={6} lg={6}>
              <Title>UBÍCANOS</Title>
              <Map
                google={this.props.google}
                zoom={13}
                style={mapStyles}
                initialCenter={{ lat: 20.433534, lng: -101.711701 }}
              >
                <Marker position={{ lat: 20.433534, lng: -101.711701 }} />
              </Map>
            </Col>
            <Col className="text-center" xs={12} md={6} lg={6}>
              <Title>NUESTRO HORARIO</Title>
              <Horario />
            </Col>
          </Row>
        </Container>
      </ContactoPage>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyD9vI76XITL9g8EojaHWDDVUkFcf6RHJFo"
})(Contacto);
