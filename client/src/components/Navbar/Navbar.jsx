import { Badge } from "@material-ui/core";
import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import { GrFavorite } from 'react-icons/gr';
import React from "react";
import styled from "styled-components";
import { mobile } from "../../responsive";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import SettingsDropDown from "./SettingsDropDown";

const Container = styled.div`
  height: 60px;
  ${mobile({ height: "50px" })}
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ padding: "10px 0px" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  ${mobile({ display: "none" })}
`;

const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;

const Input = styled.input`
  border: none;
  ${mobile({ width: "50px" })}
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Logo = styled.h1`
  font-weight: bold;
  ${mobile({ fontSize: "24px" })}
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ flex: 2, justifyContent: "center" })}
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`;

const Navbar = () => {
  const cartQuantity = useSelector((state) => state.cart.products.length);
  const favQuantity = useSelector((state) => state.favourite.products.length);
  const user = useSelector((state) => state.user.currentUser);
 
  
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>БГ</Language>
          <SearchContainer>
            <Input placeholder="Search" />
            <Search style={{ color: "gray", fontSize: 16 }} />
          </SearchContainer>
        </Left>
        <Center>
          <Link to={"/"} style={{ textDecoration: "none", color: "black" }}>
            <Logo>MP SHOP.</Logo>
          </Link>
        </Center>
        <Right>
          {user ? null : (
            <Link
              to={"/register"}
              style={{ textDecoration: "none", color: "black" }}
            >
              <MenuItem>РЕГИСТРАЦИЯ</MenuItem>
            </Link>
          )}

          {user ? null : (
            <Link
              to={"/login"}
              style={{ textDecoration: "none", color: "black" }}
            >
              <MenuItem>ВХОД</MenuItem>
            </Link>
          )}

          <Link to="/cart" style={{ color: "black" }}>
            <MenuItem>
              <Badge badgeContent={cartQuantity} color="primary">
                <ShoppingCartOutlined />
              </Badge>
            </MenuItem>
          </Link>
          <Link to="/favourites" style={{ color: "black" }}>
            <MenuItem>
              <Badge badgeContent={favQuantity} color="primary">
                < GrFavorite style={{fontSize: "1.4rem"}} />
              </Badge>
            </MenuItem>
          </Link>
        {user && <SettingsDropDown /> }  
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
