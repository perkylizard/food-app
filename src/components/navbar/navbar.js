import React from 'react';
import {
    Navbar,
    Nav,
} from 'react-bootstrap';
import '../navbar/navbar.css'


export default class Navigation extends React.Component{
render(){
    return(
        <>
  <Navbar  fixed="top"  bg="muted" expand="lg">
  <Navbar.Brand href="#home"><strong className="text-light">FOOD.<span className="text-warning">LOGO</span></strong></Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end mnav">
    <Nav>
      <Nav.Link className="link" href="#link">ABOUT</Nav.Link>
      <Nav.Link className="link" href="#link">OUR FOOD</Nav.Link>
      <Nav.Link className="link" href="#link">PLANS</Nav.Link>
      <Nav.Link className="clink" href="#link">CONTACT US</Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
</>
    )
}
}
