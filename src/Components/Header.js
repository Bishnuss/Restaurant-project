import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
    <>
         <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">
            <img
              alt=""
              src="https://i.postimg.cc/zfPb5vgc/Restaurant-logo-on-transparent-background-PNG.png"
              width="65"
              height="50"
              className="d-inline-block align-top"
            />{' '}
            Eat In
            
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  )
}

export default Header