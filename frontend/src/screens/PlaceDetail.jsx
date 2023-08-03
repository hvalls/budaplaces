import React, { useEffect, useState, useContext } from "react";
import Modal from "react-modal";
import SideBar from "../components/SideBar";
import Comments from "../components/Comments";
import {
  PlaceDetailBox,
  PlaceImageBox,
  PlaceDetailImage,
  PlaceNameDetailText,
  DeletePlaceButton,
  PlaceDetailHeader,
  CancelButton,
  DeleteButtonBox,
  DeleteTitle,
  DeleteText,
} from "../styles";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { GlobalContext } from "../context/GlobalState";
//import { useHistory } from 'react-router-dom';


const PlaceDetail = (props) => {
    //const history = useHistory();
  const location = useLocation();
  const place = location.state;
  const [placeDetail, setPlaceDetail] = useState([]);
  const [isDeleteConfirmation, setIsDeleteConfirmation] = useState(false);
  const { isRestaurant } = useContext(GlobalContext);

  useEffect(() => {
    if (isRestaurant) {
      axios
        .get(`http://localhost:8080/restaurants/${place.id}`)
        .then((response) => {
          console.log(response.data);
          setPlaceDetail(response.data);
        })
        .catch((error) => {
          console.error(error);
        });
    } else {
      axios
        .get(`http://localhost:8080/cafes/${place.id}`)
        .then((response) => {
          console.log(response.data);
          setPlaceDetail(response.data);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [place, isRestaurant,]);

  const handleDelete = () => {
    setIsDeleteConfirmation(false);
    if (isRestaurant) {
      axios
        .delete(`http://localhost:8080/restaurants/${place.id}`)
        .then((response) => {
          console.log(response.data);
          //history.push("/");
        })
        .catch((error) => {
          console.error(error);
        });
    } else {
      axios
        .delete(`http://localhost:8080/cafes/${place.id}`)
        .then((response) => {
          console.log(response.data);
          //history.push("/");
        })
        .catch((error) => {
          console.error(error);
        });
    }
  };

  return (
    <>
      <SideBar></SideBar>
      <PlaceDetailBox>
        <PlaceImageBox>
          <PlaceDetailImage src={place.pictureUrl} alt={place.name} />
        </PlaceImageBox>
        <PlaceDetailHeader>
          <PlaceNameDetailText>{place.name}</PlaceNameDetailText>
          <DeletePlaceButton onClick={() => setIsDeleteConfirmation(true)}>
            Delete
          </DeletePlaceButton>
        </PlaceDetailHeader>
        <Comments comments={placeDetail.comments} />
      </PlaceDetailBox>
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
        isOpen={isDeleteConfirmation}
        onRequestClose={() => setIsDeleteConfirmation(false)}
      >
        <DeleteTitle>Delete {place.name}?</DeleteTitle>
        <DeleteText>
          Are you sure you want to delete {place.name} permenantly? You can not undo this action.
        </DeleteText>
        <DeleteButtonBox>
          <CancelButton onClick={() => setIsDeleteConfirmation(false)}>
            Cancel
          </CancelButton>
          <DeletePlaceButton onClick={handleDelete}>Delete</DeletePlaceButton>
        </DeleteButtonBox>
      </Modal>
    </>
  );
};

export default PlaceDetail;
