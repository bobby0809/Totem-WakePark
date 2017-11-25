import React, { Component } from 'react'
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap'
import '../App.css'
import { Link } from 'react-router-dom'

class Frontbarre extends Component {
  render () {
    return (
      <div id='frontbarre'>
        <Navbar inverse collapseOnSelect className='navbar'>
          <Navbar.Header>
            <Navbar.Brand>
              <Link to='/'>Totem Wake Park</Link>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav pullRight>
              <NavItem eventKey={1} href='#'>Accueil</NavItem>
              <NavItem eventKey={2}><Link to='/galerie'>Galerie</Link></NavItem>
              <NavItem eventKey={3} href='#'>products</NavItem>
              <NavItem eventKey={4} href='#'>services</NavItem>
              <NavDropdown eventKey={5} title='Dropdown' id='basic-nav-dropdown'>
                <MenuItem eventKey={5.1}>Action</MenuItem>
                <MenuItem eventKey={5.2}>Another action</MenuItem>
                <MenuItem eventKey={5.3}>Something else here</MenuItem>
                <MenuItem divider />
                <MenuItem eventKey={5.3}>Separated link</MenuItem>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    )
  }
}

export default Frontbarre
