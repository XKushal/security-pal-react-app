import React, {Component } from "react";
import { Navbar,Container, Button } from "react-bootstrap";

class Header extends Component{
    render(){
        return(
            <Navbar id="header" className="fixed-top ">
                <div className="container d-flex align-items-center">
                <h1 className="logo mr-auto "><a className="button-color" href="#">  SecurityPal</a></h1>
                <a href="#" className="get-started-btn button-color" variant="outline-warning">Contact Us</a>

                </div>
            </Navbar>
        );
    }
}

export default Header;

 {/* <Navbar expand="lg" variant="light" bg="light">
            <Container>
                <Navbar.Brand href="#">SecurityPal</Navbar.Brand>
            </Container>
            </Navbar> */}
            // mailto:hey@securitypalhq.com