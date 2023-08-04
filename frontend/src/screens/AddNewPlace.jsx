import React, { useContext, useState } from "react";
import Modal from "react-modal";
import axios from "axios";
import { GlobalContext } from "../context/GlobalState";
import { AddContainer, AddInput, ConfirmButton } from "../styles";

const AddNewPlace = () => {
  const { isAddNew, isRestaurant, closeAddNew } = useContext(GlobalContext);
  const [name, setName] = useState("");
  const [pictureUrl, setPictureUrl] = useState("");

  const handleAdd = (e) => {
    if (isRestaurant) {
      axios
        .post("http://localhost:8080/restaurants", {
          name,
          pictureUrl,
        })
        .then((response) => {
          console.log(response.data);
        })
        .catch((error) => {
          console.error(error);
        });
    } else {
      axios
        .post("http://localhost:8080/cafes", {
          name,
          pictureUrl,
        })
        .then((response) => {
          console.log(response.data);
        })
        .catch((error) => {
          console.error(error);
        });
    }
    closeAddNew();
  };
  return (
    <Modal
      style={{
        content: {
          borderRadius: "50px",
          height: "300px",
          width: "600px",
          top: "50%",
          left: "50%",
          right: "auto",
          bottom: "auto",
          marginRight: "-50%",
          transform: "translate(-50%, -50%)",
        },
      }}
      isOpen={isAddNew}
      onRequestClose={() => closeAddNew()}
    >
      <AddContainer>
        {isRestaurant ? <h1>Add New Restaurant</h1> : <h1>Add New Café</h1>}
        <AddInput
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
        ></AddInput>
        <AddInput
          onChange={(e) => setPictureUrl(e.target.value)}
          placeholder="Picture Url"
        ></AddInput>
        <ConfirmButton onClick={(e) => handleAdd(e)}>Confirm</ConfirmButton>
      </AddContainer>
    </Modal>
  );
};

export default AddNewPlace;
