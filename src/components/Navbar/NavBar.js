import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import WebsiteLogo from './latammedia1.png'
//import Button from 'react-bootstrap/Button';

const  NavBar = () => {
  //const [open, setOpen] = useState(false)
  
  return (

    <>
    {['xxxl'].map((expand) => (

    <Navbar key={expand} bg="dark" variant="dark" collapseOnSelect expand={expand} sticky="top" >
      <Container fluid>
        {/* <Navbar.Brand href="/">Dominican TV/Radio</Navbar.Brand>*/}
        <Navbar.Brand href="/"><img src={WebsiteLogo} width={'200px'} height={'24px'} alt=""/></Navbar.Brand>
        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
        <Navbar.Offcanvas 
              id={`offcanvasNavbar-expand-${expand}`} 
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
              className='bg-image1'
        >
          <Offcanvas.Header closeButton className=''>
                <Offcanvas.Title 
                id={`offcanvasNavbarLabel-expand-${expand}`}> </Offcanvas.Title>
              </Offcanvas.Header>
          
          <Nav
            className="me-auto my-2 my-lg-0"
            navbarScroll
          >

            <Offcanvas.Body>
             <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link><Link to="/dominicanchannels" className="custom-link"> 
                <i class="bi bi-tv-fill">Canales Dominicanos en Vivo</i>
                </Link>
                </Nav.Link>

                <Nav.Link><Link to="/dominicanradiostations" className="custom-link"> 
                <i class="bi bi-file-earmark-music-fill">Emisoras Dominicanas en Vivo </i>
                </Link>
                </Nav.Link>
            </Nav>
            </Offcanvas.Body>
            
            
            {/*<Nav.Link href="#action2">Link</Nav.Link>
            <NavDropdown title="Link" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#" disabled>
              Link
            </Nav.Link>*/}
          </Nav>
          {/*</Offcanvas>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>*/}
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
    ))}
    </>
  );
};

export default NavBar;