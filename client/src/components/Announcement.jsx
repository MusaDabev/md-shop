import styled from "styled-components";

const Container = styled.div`
  height: 30px;
  background-color: #747575;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 500;
`;

const Announcement = () => {
  return <Container>Super discount! Free shipping for orders over $50 !!!</Container>;
};

export default Announcement;
