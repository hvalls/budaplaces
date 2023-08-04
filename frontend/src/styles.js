import styled from "styled-components";

export const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  font-size: 35px;
  color: white;
`;

export const PlaceBox = styled.div`
  display: grid;

  grid-template-columns: repeat(auto-fill, minmax(calc(33.33% - 10px), 1fr));

  @media (max-width: 1024px) {
    grid-template-columns: repeat(auto-fill, minmax(calc(50% - 10px), 1fr));
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(calc(100% - 10px), 1fr));
  }
  margin-top: 30px;
  color: #fff;
`;

export const Card = styled.div`
  width: 80%;
  background-color: #1c2e4a;
  padding: 20px 20px 10px;
  margin-top: 30px;
  border-radius: 30px;
  text-align: center;
  font-size: 18px;
`;

export const PlaceImage = styled.img`
  max-height: 180px;
  max-width: 400px;
  height: auto;
  width: 100%;
`;

export const ScreenContainer = styled.div`
    margin: 20px 20px 0 320px;
display: flex;
`;

export const SideBarBox = styled.div`
  height: 1000%;
  width: 300px;
  position: fixed;
  left: 0;
  top: 0;
  padding-top: 40px;
  background-color: #1c2e4a;
`;

export const MenuItem = styled.div`
  text-align: center;
  font-size: 24px;
  display: block;
  color: white;
`;

export const MenuText = styled.h4`
  ${({ hasUnderline }) => ({
    textDecoration: hasUnderline === "true" ? "underline" : "none",
  })}
`;

export const StyledHeader = styled.div`
  font-size: 24px;
`;

export const AddContainer = styled.div`
  height: 100%;
  width: 300px;
  margin: 30px;
  position: absolute;
`;

export const AddInput = styled.input`
  height: 30px;
  width: 520px;
  margin-bottom: 30px;
  text-align: center;
  font-size: 24px;
  display: block;
`;

export const ConfirmButton = styled.button`
  background-color: #1c2e4a;
  border-radius: 20px;
  color: white;
  padding: 15px 32px;
  text-align: center;
  display: inline-block;
  font-size: 16px;
`;

export const PlaceType = styled.h1`
  display: inline-block;
  font-size: 36px;
`;

export const AddButton = styled.button`
  margin-left: 20px;
  background-color: #1c2e4a;
  border-radius: 20px;
  color: white;
  padding: 10px 20px;
  text-align: center;
  font-size: 16px;
`;

export const SearchPlace = styled.input`
  flex: 0 0 500px;
  height: 20px;
  width: 500px;
  margin-top: 5px;
  padding: 8px;
  text-align: center;
  font-size: 24px;
  border-radius: 12px;

  @media (max-width: 1024px) {
    flex: 1;
    width: 80%;
  }
`;

export const PlaceNameText = styled.h4`
  margin: 0;
  color: white;
`;

export const ScreenBox = styled.div`
  flex-grow: 1;
`;

export const PlaceImageBox = styled.div`
  color: #fff;
  position: relative;
  height: 30vh;
  overflow: hidden;
  display: flex;
  justify-content: center;
`;

export const PlaceDetailImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: relative;

  @media screen and (max-width: 768px) {
    height: 280px;
  }

  @media screen and (min-width: 769px) and (max-width: 1024px) {
    height: 280px;
  }

  @media screen and (min-width: 1025px) {
    height: 280px;
  }
`;

export const PlaceNameDetailText = styled.h4`
  font-size: 25px;
  font-weight: bold;
`;

export const CommentsHeader = styled.h4`
  margin: 0;
  font-size: 25px;
  font-weight: bold;
`;

export const CommentsTextContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const AuthorText = styled.h4`
  font-size: 22px;
  margin: 10px 0 0 0;
  font-weight: bold;
`;

export const CommentText = styled.p`
  font-size: 18px;
  margin: 0 0 10px 0;
`;

export const ConfirmDeletePlaceButton = styled.button`
  background-color: #b71c1c;
  margin-left: 4px;
  color: white;
  padding: 12px 32px;
  border: none;
  border-radius: 4px;
`;

export const DeletePlaceButton = styled.button`
  background-color: #b71c1c;
  color: white;
  padding: 6px 14px 6px 12px;
  border: none;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CancelButton = styled.button`
  background-color: white;
  color: black;
  padding: 12px 32px;
  border-style: solid;
  border-width: thin;
  border-radius: 4px;
`;

export const OkButton = styled.button`
  background-color: white;
  color: black;
  padding: 12px 32px;
  border: solid;
  border-width: thin;
  border-radius: 4px;
  margin-top: 10px;
`;

export const PlaceDetailHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
  max-height: 30px;
`;

export const DeleteButtonBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 20px;
`;

export const DeleteTitle = styled.h4`
  margin: 0;
  display: flex;
  font-size: 22px;
  font-weight: bold;
`;

export const DeleteText = styled.p`
  display: flex;
  font-size: 12px;
  margin-top: 4px;
  font-weight: bold;
`;

export const SuccessBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const AddCommentBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 40px;
  margin-bottom: 20px;
  position: relative;
  align-items: flex-end;
`;

export const CommentAuthorInput = styled.input`
  padding-left: 10px;
  margin-left: 10px;
  height: 30px;
  border-radius: 12px;
  width: 99%;
  border-style: solid;
  border-color: black;
`;
export const CommentTextInput = styled.input`
  padding-left: 10px;
  margin: 12px 0;
  height: 60px;
  border-radius: 12px;
  width: 99%;
  border-style: solid;
  border-color: black;
`;

export const PostButton = styled.button`
  background-color: #5d9c59;
  width: 90px;
  margin-left: 4px;
  color: white;
  padding: 12px 32px;
  border: none;
  border-radius: 4px;
`;
