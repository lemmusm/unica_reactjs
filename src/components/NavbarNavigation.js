import React from 'react'
import { Container, Navbar, Nav, NavDropdown } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Logo from '../assets/img/logo.png'

const Styles = styled.div`
    .navbar {
        background-color: white;
        box-shadow: 0 3px 3px rgba(0, 0, 0, 0.1);
    }
    .navbar-brand {
        display: inline-block;
        float: left;
        text-align: center;
        margin: .3em 0;
        width: 250px !important;
    }
    .navbar-brand, .navbar-nav, .nav-link{
        color: #34495E !important;
        font-size: .92em;
        font-weight: bold;

        &:hover {
            color: #FF7964 !important;
        }
    }
    .container {
        padding-right: 15px;
        padding-left: 15px;
        margin-right: auto;
        margin-left: auto;
    }

    .dropdown {
        position: relative;
    }
    .dropdown-item {
        font-size: .92em;
        font-weight: bold;
        &:hover {
            color: #FF7964 !important;
        }
    }
    .dropdown>.dropdown-menu {
        margin-top: -10px;
        -webkit-border-radius: 0px 0px 6px 6px;
        -moz-border-radius: 0px 0px 6px;
        border-radius: 0px 0px 6px 6px;
    }
    .dropdown:hover>.dropdown-menu {
        display: block;
    }

`

const NavbarNavigation = () => (
    <Styles>
        <Navbar sticky="top" expand="lg">
            <Container>
                <Navbar.Brand>
                    <img src={Logo} alt="logo_unica" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
                    <Nav >
                        <Link className="nav-link" to="/">
                            INICIO
                        </Link>
                        <Link className="nav-link" to="/">
                            INSTALACIONES
                        </Link>
                        <Link className="nav-link" to="/">
                            INFORMACIÓN A PACIENTES
                        </Link>
                        <NavDropdown
                            title="CONSULTA DE ESPECIALIDADES" id="basic-nav-dropdown">
                            <Link className="dropdown-item" to="/">
                                CLÍNICA
                            </Link>
                            <Link className="dropdown-item" to="/">
                                FARMACOS Y ARTÍCULOS MÉDICOS DE HERIDAS
                            </Link>
                        </NavDropdown>
                        <Link className="nav-link" to="/">
                            CONTACTO
                        </Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </Styles>
)
export default NavbarNavigation