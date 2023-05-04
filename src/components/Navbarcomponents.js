
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Link from 'next/link';

export default function Navbarcomponents() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className='fixed-top '>
      <Container className='btn-button'>
        <Navbar.Brand className=' text-danger' href="/">CamMovie</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto ">
            <Nav.Link className='text-white' href="/">Home</Nav.Link>
            <Nav.Link className='text-white' href="/movies">Movies</Nav.Link>
            <Nav.Link  className='text-white'href="/about">About Us</Nav.Link>
            <Nav.Link className='text-white' href="/login">Contact Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
