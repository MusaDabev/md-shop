import React from "react";
import Announcement from "../components/Announcement";
import Navbar from "../components/Navbar/Navbar";
import styled from "styled-components";
import SideBar from "../components/Profile/SideBar";
import AccountInfo from "../components/Profile/AccountInfo";

const ProfileContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 40px;
  width: 100%;
`;
function Profile() {
  return (
    <>
      <Announcement />
      <Navbar />
      <ProfileContainer>
        <SideBar />
        <AccountInfo />
      </ProfileContainer>
    </>
  );
}

export default Profile;
