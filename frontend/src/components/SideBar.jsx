import React, { useContext } from "react";
import { SideBarBox, MenuItem, Title, MenuText } from "../styles";
import { GlobalContext } from "../context/GlobalState";
import { useNavigate } from "react-router-dom";

const SideBar = () => {
  const { isRestaurant, openRestaurants, openCafes } =
    useContext(GlobalContext);
  const navigate = useNavigate();

  const handleOpenCafes = () => {
    openCafes();
    navigate("/");
  };
  const handleOpenRestaurants = () => {
    openRestaurants();
    navigate("/");
  };

  return (
    <SideBarBox>
      <Title>Budaplaces</Title>
      <MenuItem onClick={handleOpenCafes}>
        <MenuText hasUnderline={!isRestaurant}>Cafés</MenuText>
      </MenuItem>
      <MenuItem onClick={handleOpenRestaurants}>
        <MenuText hasUnderline={isRestaurant}>Restaurants</MenuText>
      </MenuItem>
    </SideBarBox>
  );
};

export default SideBar;
