import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/userRedux";
import { clearCart } from "../../redux/cartRedux";
import { clearFavourites } from "../../redux/favouriteRedux";

const Menu = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  position: absolute;
  z-index: 2;
  list-style-type: none;
  right: 15px;
  background-color: grey;
  padding: 5px;

 
`;
const ListItem = styled.li`
  margin-top: 5px;

  padding: 5px;
  &:hover {
    background-color: #646463;
  }
`;
const LogoutButton = styled.button`
  border: none;
  color: white;
  padding: 5px;
  background-color: gray;
  cursor: pointer;
  font-size: 1rem;
  &:hover {
    background-color: #646463;
  }
`;

function DropdownMenu() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.currentUser);

  const handleLogout = () => {
    dispatch(logout());
    dispatch(clearCart());
    dispatch(clearFavourites());
  };
  return (
    <Menu>
      <ListItem>
        <Link to="/profile" style={{ textDecoration: "none", color: "white" }}>
          Profile
        </Link>
      </ListItem>
      <ListItem>
        <Link to="" style={{ textDecoration: "none", color: "white" }}>
          Menu
        </Link>
      </ListItem>
      <ListItem>
        <Link to="" style={{ textDecoration: "none", color: "white" }}>
          Menu
        </Link>
      </ListItem>
      <ListItem>
        <Link to="" style={{ textDecoration: "none", color: "white" }}>
          My Orders
        </Link>
      </ListItem>
      <ListItem>
        <Link to="" style={{ textDecoration: "none", color: "white" }}>
          Fvourites
        </Link>
      </ListItem>
      <ListItem>
        <Link to="" style={{ textDecoration: "none", color: "white" }}>
          Security settings
        </Link>
      </ListItem>
      {user && (
        <ListItem>
          <LogoutButton onClick={handleLogout}>Logout</LogoutButton>
        </ListItem>
      )}
    </Menu>
  );
}

export default DropdownMenu;
