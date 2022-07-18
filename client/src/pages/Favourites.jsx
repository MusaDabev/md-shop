import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import Announcement from "../components/Announcement";
import { mobile } from "../responsive";
import { removeFavourite } from "../redux/favouriteRedux";
import { addProduct } from "../redux/cartRedux";

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 20px;
  ${mobile({ padding: "10px" })}
`;

const Info = styled.div`
  flex: 3;
`;

const Product = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${mobile({ flexDirection: "column" })}
`;

const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`;

const Image = styled.img`
  width: 200px;
`;

const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const ProductName = styled.span``;

const ProductId = styled.span``;

const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;

const ProductSize = styled.span``;

const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 200;
  ${mobile({ marginBottom: "20px" })}
`;

const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
`;

const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const DeleteButton = styled.button`
  height: 40px;
  width: 70px;
  cursor: pointer;
  background-color: green;
  border: none;
  color: white;
  border-radius: 3px;
`;

const AddToCartButton = styled(DeleteButton)`
  margin-top: 5px;
`;

function Favourites() {
  const favourite = useSelector((state) => state.favourite);

  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch(
      addProduct({...product})
    )
  } 

  const handleRemoveFromFav = (id) => {
    dispatch(removeFavourite({ id }));
  };

  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <Info>
          {favourite.products.map((product) => (
            <Product key={product._id}>
              <ProductDetail>
                <Image src={product.img} />
                <Details>
                  <ProductName>
                    <b>Product:</b> {product.title}
                  </ProductName>
                  <ProductId>
                    <b>ID:</b> {product._id}
                  </ProductId>
                  <ProductColor color={product.color} />
                  <ProductSize>
                    <b>Size:</b> {product.size}
                  </ProductSize>
                </Details>
              </ProductDetail>
              <PriceDetail>
                <ProductPrice>
                  $ {product.price * product.quantity}
                </ProductPrice>
              </PriceDetail>
              <ButtonsContainer>
                <DeleteButton onClick={() => handleRemoveFromFav(product._id)}>
                  {" "}
                  Delete{" "}
                </DeleteButton>
                <AddToCartButton onClick={() => handleAddToCart(product)}>Add to cart</AddToCartButton>
              </ButtonsContainer>
            </Product>
          ))}
        </Info>
      </Wrapper>
      <Footer />
    </Container>
  );
}

export default Favourites;
