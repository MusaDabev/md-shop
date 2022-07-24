import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';


const SideBarContainer = styled.aside`
    flex: 1;
    display: flex;
    justify-content: center;
    margin-left: 15px;
`

const Menu = styled.ul`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    list-style-type: none;
    background-color: #525151;
    width: 200px;
   
    padding: 5px;
`
const ListItem = styled.li`
    margin-top: 8px;
    border-bottom: 2px solid white;
    
    padding: 5px;
    &:hover {
        background-color: #646463;
    }

   
`

function SideBar() {
  return (
    <SideBarContainer>
      <Menu>
      <ListItem><Link to="/profile" style={{ textDecoration: 'none',  color: "white"}}>Profile</Link></ListItem>
      <ListItem><Link to="" style={{ textDecoration: 'none', color: "white" }}>Menu</Link></ListItem>
      <ListItem><Link to="" style={{ textDecoration: 'none', color: "white" }}>Menu</Link></ListItem>
      <ListItem><Link to="" style={{ textDecoration: 'none', color: "white" }}>My Orders</Link></ListItem>
      <ListItem><Link to="" style={{ textDecoration: 'none', color: "white" }}>Fvourites</Link></ListItem>
      <ListItem><Link to="" style={{ textDecoration: 'none', color: "white" }}>Security settings</Link></ListItem>
      <ListItem><Link to="" style={{ textDecoration: 'none', color: "white" }}>Discount voucher</Link></ListItem>
      <ListItem><Link to="" style={{ textDecoration: 'none', color: "white" }}>Returned products</Link></ListItem>
      <ListItem><Link to="" style={{ textDecoration: 'none', color: "white" }}>Personal data</Link></ListItem>
    </Menu>
    </SideBarContainer>
  )
}

export default SideBar
