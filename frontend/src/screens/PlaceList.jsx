import React, { useEffect, useState, useContext } from "react";
import PlaceCard from "../components/PlaceCard";
import SideBar from "../components/SideBar";
import Header from "../components/Header";
import Modal from "react-modal";
import {
  CancelButton,

  PlaceBox,
  SearchPlace,
} from "../styles";
import axios from "axios";
import { GlobalContext } from "../context/GlobalState";
import AddNewPlace from "./AddNewPlace.jsx";

const PlaceList = () => {
  const deleteMessage = "aa";
  const [places, setPlaces] = useState([]);
  const [filteredPlaces, setFilteredPlaces] = useState();
  const { isRestaurant, isAddNew } = useContext(GlobalContext);
  const [isPlaceDeleted, seIsPlaceDeleted] = useState(false);

  const handleSearch = (e) => {
    console.log("e", e.target.value);
    const searchedPlaces = places.filter((place) => {
      return place.name.toLowerCase().includes(e.target.value.toLowerCase());
    });
    if (!e.target.value) {
      setFilteredPlaces(undefined);
    }
    setFilteredPlaces(searchedPlaces);
    console.log("filteredPlaces", filteredPlaces);
  };

  useEffect(() => {
    if (deleteMessage) {
      console.log(deleteMessage);
      seIsPlaceDeleted(true);
    }
  }, [isPlaceDeleted, deleteMessage]);

  useEffect(() => {
    if (isRestaurant) {
      axios
        .get("http://localhost:8080/restaurants")
        .then((response) => {
          console.log(response.data);
          setPlaces(response.data);
        })
        .catch((error) => {
          console.error(error);
        });
    } else {
      axios
        .get("http://localhost:8080/cafes")
        .then((response) => {
          console.log(response.data);
          setPlaces(response.data);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [isRestaurant, isAddNew]);

  return (
    <>
      <SideBar></SideBar>
      <Header></Header>
      <SearchPlace
        onChange={(e) => handleSearch(e)}
        type="text"
        placeholder="Search"
      />
      <PlaceBox>
        {(filteredPlaces || places).map((place) => (
          <PlaceCard place={place} key={place.id + place.name}></PlaceCard>
        ))}
      </PlaceBox>
      <AddNewPlace></AddNewPlace>
      <Modal
        style={{
          content: {
            overflow: "hidden",
            borderRadius: "10px",
            height: "120px",
            width: "300px",
            top: "50%",
            left: "50%",
            right: "auto",
            bottom: "auto",
            marginRight: "-50%",
            transform: "translate(-30%, -40%)",
          },
        }}
        isOpen={false
          //isPlaceDeleted
        }
        onRequestClose={() => seIsPlaceDeleted(false)}
      >
        

        <CancelButton onClick={() => seIsPlaceDeleted(false)}>
          Cancel
        </CancelButton>
      </Modal>
    </>
  );
};

export default PlaceList;
