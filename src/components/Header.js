

import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Header = () => {
    return <>
        <Navbar  className="Header" variant="dark">
            <Container>
                <Navbar.Brand href="/">LMS Portal</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="#Home">Home </Nav.Link>
                    <Nav.Link href="#features">Features</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    </>
}
export default Header;












// import React from 'react'
// import Navbar from 'react-bootstrap/Navbar'
// import Container from 'react-bootstrap/Container'
// import Nav from 'react-bootstrap/Nav'
// import { NavLink } from 'react-router-dom'

// const Header = () => {
//     return (
//         <>
//             <Navbar className='Header' >
//                 <Container>
//                     <NavLink to="/" className="text-decoration-none text-light mx-2">User Registration</NavLink>
//                     <Nav className="me-auto">
//                         <NavLink to="/" href="#Home" className="text-decoration-none text-light mx-2">Home</NavLink>
//                         <NavLink to="/" className="text-decoration-none text-light">Features</NavLink>
//                     </Nav>
//                 </Container>
//             </Navbar>
//         </>
//     )
// }

// export default Header
