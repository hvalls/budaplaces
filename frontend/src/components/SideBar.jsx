import React, { useContext } from "react";
import { SideBarBox, MenuItem, Title, MenuText } from "../styles";
import { GlobalContext } from "../context/GlobalState";

const SideBar = () => {
  const { isRestaurant, openRestaurants, openCafes } = useContext(GlobalContext);

  return (
    <SideBarBox>
      <Title>Budaplaces</Title>
      <MenuItem onClick={() => openCafes()}><MenuText hasUnderline={!isRestaurant}>Cafés</MenuText></MenuItem>
      <MenuItem onClick={() => openRestaurants()}><MenuText hasUnderline={isRestaurant}>Restaurants</MenuText></MenuItem>
    </SideBarBox>
  );
};

export default SideBar;
