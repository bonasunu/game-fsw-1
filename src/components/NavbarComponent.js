import React, { Fragment } from 'react'
import styles from './Custom.module.css'
import { Container, Navbar, Nav, NavDropdown } from 'react-bootstrap'
import Logo from 'next/image'

function NavbarComponent() {
  let user
  if (typeof window !== 'undefined') {
    // browser code
    user = localStorage.getItem('navbarInfo')
  }

  // console.log(user)
  return (
    <Fragment>
      <Navbar
        className={`py-3 variant=dark expand=lg ${styles.binarColor} border-bottom border-warning`}
        sticky="top"
        style={{ width: '100%' }}
      >
        <Container className={`navbar-container`}>
          <Navbar.Brand href="/home">
            <img
              src="/logo/secondary-logo.png"
              width="95"
              height="35"
              className={`d-inline-block align-top`}
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className={`ml-auto`}>
              {/* Conditional Rendering */}
              {user ? (
                <>
                  <Navbar.Text
                    className={`${styles.navFontSize} text-light font-white font-nunito active`}
                  >
                    Hi {user}!
                  </Navbar.Text>
                  <NavDropdown
                    title={
                      <span className="text-light my-auto">My Profile</span>
                    }
                    className={`${styles.navFontSize} font-white font-nunito active`}
                    id="basic-nav-dropdown"
                  >
                    <NavDropdown.Item href="/profile">
                      Personal Info
                    </NavDropdown.Item>
                    <NavDropdown.Item href="/leaderboard">
                      Leaderboard
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="/logout">Logout</NavDropdown.Item>
                  </NavDropdown>
                </>
              ) : (
                <Navbar.Text
                  className={`${styles.navFontSize} font-white font-nunito active`}
                >
                  Welcome, please{' '}
                  <a href="/login" className="text-warning">
                    Login
                  </a>{' '}
                  to play!
                </Navbar.Text>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Fragment>
  )
}

export default NavbarComponent
