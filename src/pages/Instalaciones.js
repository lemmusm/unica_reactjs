import React, { Component } from "react";
import { Container } from "react-bootstrap";
import styled from "styled-components";
import Banner from "../components/Banner";
import { Gallery } from "@kurpachsv/react-gallery";

// Styles component
const InstalacionesPage = styled.div`
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
`;

const Title = styled.h1`
  color: #e52d27;
  font-size: 3em;
  font-weight: bold;

  @media (max-width: 768px) {
    text-align: center;
  }
`;

class Instalaciones extends Component {
  constructor(props) {
    super(props);
    this.state = {
      photos: [
        {
          src:
            "https://www.uni-ca.com.mx/img/infopacientes/instalaciones/1.jpg",
          width: 4,
          height: 3
        },
        {
          src:
            "https://www.uni-ca.com.mx/img/infopacientes/instalaciones/2.jpg",
          width: 4,
          height: 3
        },
        {
          src:
            "https://www.uni-ca.com.mx/img/infopacientes/instalaciones/3.jpg",
          width: 4,
          height: 3
        },
        {
          src:
            "https://www.uni-ca.com.mx/img/infopacientes/instalaciones/4.jpg",
          width: 4,
          height: 3
        },
        {
          src:
            "https://www.uni-ca.com.mx/img/infopacientes/instalaciones/5.jpg",
          width: 4,
          height: 5.3
        },
        {
          src:
            "https://www.uni-ca.com.mx/img/infopacientes/instalaciones/6.jpg",
          width: 4,
          height: 5.3
        },
        {
          src:
            "https://www.uni-ca.com.mx/img/infopacientes/instalaciones/7.jpg",
          width: 4,
          height: 5.3
        },
        {
          src:
            "https://www.uni-ca.com.mx/img/infopacientes/instalaciones/9.jpg",
          width: 4,
          height: 3
        },
        {
          src:
            "https://www.uni-ca.com.mx/img/infopacientes/instalaciones/10.jpg",
          width: 4,
          height: 3
        },
        {
          src:
            "https://www.uni-ca.com.mx/img/infopacientes/instalaciones/11.jpg",
          width: 4,
          height: 3
        },
        {
          src:
            "https://www.uni-ca.com.mx/img/infopacientes/instalaciones/12.jpg",
          width: 4,
          height: 3
        },
        {
          src:
            "https://www.uni-ca.com.mx/img/infopacientes/instalaciones/13.jpg",
          width: 4,
          height: 3
        },
        {
          src:
            "https://www.uni-ca.com.mx/img/infopacientes/instalaciones/14.jpg",
          width: 4,
          height: 3
        },
        {
          src:
            "https://www.uni-ca.com.mx/img/infopacientes/instalaciones/15.jpg",
          width: 4,
          height: 3
        }
      ]
    };
  }

  render() {
    //   Obtain random sort from array photos
    const Randomize = () => {
      return 0.5 - Math.random();
    };
    const randomPhotos = this.state.photos.sort(Randomize);

    const gutterInPercent = 1;
    const columnsMaxCount = 4;
    return (
      <InstalacionesPage>
        <Banner></Banner>
        <Container className="mt-5 mb-5">
          <Title className="mb-5">Nuestras instalaciones</Title>
          <Gallery
            className="gallery"
            images={randomPhotos}
            enableMasonry
            gutterInPercent={gutterInPercent}
            columnsMaxCount={columnsMaxCount}
          />
        </Container>
      </InstalacionesPage>
    );
  }
}

export default Instalaciones;
