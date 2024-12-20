import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import {useAuth} from '../page/AuthProvider'

function NavbarComp() {
  const { isLogin } = useAuth();

  return (
    <Navbar bg="danger" data-bs-theme="dark">
      <Container>
        <Navbar.Brand as={Link} to="/">Life</Navbar.Brand>
        <Nav className="ml-auto">
         
         {!isLogin ?(
            <>
              <Nav.Link as={Link} to="/login">Login</Nav.Link>
              <Nav.Link as={Link} to="/register">Register</Nav.Link>
            </>
          ):(
            <>
             <Nav.Link as={Link} to="/newclient">New Client</Nav.Link>
              <Nav.Link as={Link} to="/clientlist">Client List</Nav.Link>
              <Nav.Link as={Link} to="/donerlist">Doner List</Nav.Link>
              <Nav.Link as={Link} to="/logout">Logout</Nav.Link>
            </>
          )}
          
          
          {/* <Nav.Link as={Link} to="/contacts/2">Your Friend</Nav.Link> */}
        </Nav>
      </Container>
    </Navbar>
  );
}

export default NavbarComp;