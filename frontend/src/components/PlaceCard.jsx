import React from "react";
import { Link } from 'react-router-dom';
import { Card, PlaceImage, PlaceNameText } from "../styles";

const PlaceCard = ({ place }) => {
  return (
    <Link to="/details" state={place} style={{ textDecoration: "none" }}>
    <Card>
      <PlaceImage src={place.pictureUrl} alt={place.name} />
      <PlaceNameText>{place.name}</PlaceNameText>
    </Card>
    </Link>
  );
};

export default PlaceCard;
