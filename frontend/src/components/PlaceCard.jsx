import React from "react";
import { Card, PlaceImage } from "../styles";

const PlaceCard = ({ cafe }) => {
  return (
    <>
    <Card>
      <PlaceImage src={cafe.pictureUrl} alt={cafe.name} />
      <text>{cafe.name}</text>
    </Card>
    </>
  );
};

export default PlaceCard;
