import React from "react";
import styled from "styled-components";
import { FiSettings } from "react-icons/fi";
import { useState } from "react";
import DropdownMenu from "./DropdownMenu";

const SettingsDropDownContainer = styled.div`
  margin-left: 15px;
  flex: 0.5;
`;
const SettingsButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SettingsButton = styled.button`
  background-color: white;
  border: none;
  color: black;
  font-weight: 500;
  font-size: 1rem;
  cursor: pointer;
`;
function SettingsDropDown() {
  const [showDropdown, setShowDropdown] = useState(false);

  const handleDropdown = () => {
    setShowDropdown(!showDropdown);

  };
  return (
    <SettingsDropDownContainer>
      <SettingsButtonContainer>
        <SettingsButton onClick={handleDropdown}>Settings</SettingsButton>
        <FiSettings></FiSettings>
      </SettingsButtonContainer>
      {showDropdown && <DropdownMenu />}
    </SettingsDropDownContainer>
  );
}

export default SettingsDropDown;
