import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import React from 'react';

var HeaderOwn2=()=> {
  return (
    <>
      <div className='container-fluid bg-dark'>
           <div className='row'>
                <div className='col-md-12'>
                
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" >
      {/* <Container> */}
        <Navbar.Brand className='mr-5' href="#home">
        <img src="/imgs/invent.jfif" className="img-fluid" alt="" width="100" height="10" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link className='mx-3 ml-5' href="#features">Features</Nav.Link>
            <Nav.Link className='mx-3' href="#pricing">Pricing</Nav.Link>

          </Nav>
          <Nav>
            <Nav.Link className='mx-3' href="#deets">More deets</Nav.Link>
            <Nav.Link className='mx-3' eventKey={2} href="#memes">
              Dank memes
            </Nav.Link>
            <NavDropdown  className='mx-3' title="Sign In" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">User</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Admin</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      {/* </Container> */}
    </Navbar>
    </div>

           </div>

      </div>
    </>

  );
}

export default HeaderOwn2;