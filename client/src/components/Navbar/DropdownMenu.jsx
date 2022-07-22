
import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'


const Menu = styled.ul`
    position: absolute;
    z-index: 2;
    list-style-type: none;
`
const ListItem = styled.li`
    margin-top: 5px;
    background-color: #646463;
    padding: 5px;
   
`

function DropdownMenu() {
  return (
    <Menu>
      <ListItem><Link to="/profile" style={{ textDecoration: 'none',  color: "white"}} to="/profile">Profile</Link></ListItem>
      <ListItem><Link to="" style={{ textDecoration: 'none', color: "white" }}>Menu</Link></ListItem>
      <ListItem><Link to="" style={{ textDecoration: 'none', color: "white" }}>Menu</Link></ListItem>
      <ListItem><Link to="" style={{ textDecoration: 'none', color: "white" }}>Logout</Link></ListItem>
    </Menu>
  )
}

export default DropdownMenu
