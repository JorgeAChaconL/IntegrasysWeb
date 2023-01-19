import {
  BrowserRouter as Router,
  Route,
  Routes,
  NavLink,
  Link,
} from "react-router-dom";
import isologo from "./assets/Corporation/isologoazul.png";
import React, { Component } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import Home from './containers/home/Home'

class App extends Component {
  render() {
    return (
      <Router>
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="dark"
        className="mt-10"
        variant="dark"
        align="center"
      >
        <Container>
          <Link to='/'>
          <Navbar.Brand>
            <img
              alt=""
              src={isologo}
              width="250"
              height="auto"
              className="d-inline-block align-top "
            />{" "}
          </Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="justify-content-end flex-grow-1 pe-3">
              <NavLink
                style={({ isActive }) =>
                  isActive
                    ? {
                        textAlign: "center",
                        color: "#fff",
                        marginLeft: 10,
                        marginRight: 10,
                        textDecoration: "none",
                      }
                    : {
                        textAlign: "center",
                        color: "#fff",
                        marginLeft: 10,
                        marginRight: 10,
                        textDecoration: "none",
                      }
                }
                to=""
              >
                Home
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Routes>
        <Route path="/home" element={<Home />} />
      </Routes>
      
    </Router>
    );
  }
}

export default App;
