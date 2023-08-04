import React, { useEffect, useState, useContext } from "react";
import Modal from "react-modal";
import SideBar from "../components/SideBar";
import Comments from "../components/Comments";
import SuccessIcon from "../icons/success.png";
import TrashIcon from "../icons/trash.png";
import StarRatings from "react-rating-stars-component";
import {
  PlaceImageBox,
  PlaceDetailImage,
  PlaceNameDetailText,
  DeletePlaceButton,
  PlaceDetailHeader,
  CancelButton,
  DeleteButtonBox,
  DeleteTitle,
  DeleteText,
  SuccessBox,
  OkButton,
  ConfirmDeletePlaceButton,
  ScreenContainer,
  ScreenBox,
} from "../styles";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { GlobalContext } from "../context/GlobalState";
import AddComment from "../components/AddComment";

const PlaceDetail = (props) => {
  const navigate = useNavigate();
  const location = useLocation();
  const place = location.state;
  const [placeDetail, setPlaceDetail] = useState([]);
  const [isDeleteConfirmation, setIsDeleteConfirmation] = useState(false);
  const [deleteMessage, setDeleteMessage] = useState(false);
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
  }, [place, isRestaurant]);

  const handleDelete = () => {
    setIsDeleteConfirmation(false);
    if (isRestaurant) {
      axios
        .delete(`http://localhost:8080/restaurants/${place.id}`)
        .then((response) => {
          console.log(response.data);
          setDeleteMessage(response.data.message);
        })
        .catch((error) => {
          console.error(error);
        });
    } else {
      axios
        .delete(`http://localhost:8080/cafes/${place.id}`)
        .then((response) => {
          console.log(response.data);
          setDeleteMessage(response.data.message);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  };
  return (
    <ScreenContainer>
      <SideBar></SideBar>
      <ScreenBox>
        <PlaceImageBox>
          <PlaceDetailImage src={place.pictureUrl} alt={place.name} />
        </PlaceImageBox>
        <PlaceDetailHeader>
          <PlaceNameDetailText>{place.name}</PlaceNameDetailText>
          <DeletePlaceButton onClick={() => setIsDeleteConfirmation(true)}>
            <img src={TrashIcon} alt="Success Icon" width="24" height="24" />
            Delete
          </DeletePlaceButton>
        </PlaceDetailHeader>
        {placeDetail.rating && (
            <StarRatings
              count={5}
              value={placeDetail.rating}
              size={24}
              activeColor="#ffd700"
            />
        )}
        <AddComment></AddComment>
        <Comments comments={placeDetail.comments} />
      </ScreenBox>
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
          Are you sure you want to delete {place.name} permenantly? You can not
          undo this action.
        </DeleteText>
        <DeleteButtonBox>
          <CancelButton onClick={() => setIsDeleteConfirmation(false)}>
            Cancel
          </CancelButton>
          <ConfirmDeletePlaceButton onClick={handleDelete}>
            Delete
          </ConfirmDeletePlaceButton>
        </DeleteButtonBox>
      </Modal>
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
            transform: "translate(-50%, -50%)",
          },
        }}
        isOpen={!!deleteMessage}
        onRequestClose={() => navigate("/")}
      >
        <SuccessBox>
          <img src={SuccessIcon} alt="Success Icon" width="48" height="48" />
          <DeleteTitle>{deleteMessage}</DeleteTitle>

          <OkButton onClick={() => navigate("/")}>OK</OkButton>
        </SuccessBox>
      </Modal>
    </ScreenContainer>
  );
};

export default PlaceDetail;
