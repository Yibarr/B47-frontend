import React, { useState, useContext } from 'react'
import { AuthContext } from '../../context/AuthContext.js'
import {
  Container,
  Navbar,
  Dropdown,
  DropdownMenu,
  DropdownToggle,
  DropdownItem
} from 'reactstrap'
import {
  Link
} from 'react-router-dom'
import './NavBar.css'


const NavBar = () => {
  const { user } = useContext(AuthContext)

  const [dropdownOpen, setDropdownOpen] = useState(false);
  return (
    <Navbar color="white" style={{ borderBottom: '2px #F2F2F2 solid' }}>
      <Container>
        <Link to="/">
          <div className="text-secondary mr-auto">
            Instababy
          </div>
        </Link>
        <nav className="nav-actions">
          <img className="profile_img mr-3" src={user.profile_img} alt="profile_img"/>
          <Dropdown isOpen={dropdownOpen} toggle={() => setDropdownOpen(prevState => !prevState)}>
            <DropdownToggle caret color="white" className="text-secondary">
              { user.first_name }
            </DropdownToggle>
            <DropdownMenu right>
              <Link to="/profile">
                <DropdownItem>
                  Profile
                </DropdownItem>
              </Link>
              <DropdownItem divider />
              <Link to="/logout">
                <DropdownItem>
                  Log Out
                </DropdownItem>
              </Link>
            </DropdownMenu>
          </Dropdown>
        </nav>
      </Container>
    </Navbar>
    
  )
}

export default NavBar
