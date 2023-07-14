import React, { useContext } from "react";
import {
  StyledHeader,
  AddButton,
  PlaceType,
} from "../styles";
import { GlobalContext } from "../context/GlobalState";

const Header = () => {
  const { isRestaurant, openAddNew } =
    useContext(GlobalContext);

  return (
    <>
      <StyledHeader>
          {isRestaurant ? (
            <PlaceType>Restaurants</PlaceType>
          ) : (
            <PlaceType>Cafés</PlaceType>
          )}
          <AddButton onClick={() => openAddNew()}>Add New</AddButton>
      </StyledHeader>
    </>
  );
};

export default Header;
