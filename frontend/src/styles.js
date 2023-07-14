import styled from "styled-components";

export const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  font-size: 35px;
  color: white;;
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
  margin-left: 320px;
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

export const SideBarBox = styled.div`
  height: 1000%;
  width: 300px;
  position: absolute;
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
    textDecoration: hasUnderline ? "underline" : "none",
  })}
`;

export const StyledHeader = styled.div`
  //padding: 8px;
  //text-align: center;
  margin-left: 320px;
  font-size: 24px;
`;

export const AddContainer = styled.div`
  height: 100%;
  width: 300px;
  margin: 30px;
  position: absolute;
  //padding-top: 40px;
  //background-color: #1c2e4a;
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
  //display: inline-block;
  margin-left: 20px;
  background-color: #1c2e4a;
  border-radius: 20px;
  color: white;
  padding: 10px 20px;
  text-align: center;
  font-size: 16px;
`;

export const SearchPlace = styled.input`
  /* height: 20px;
  width: 500px;
  display: block;
  margin-top: 5px;
  margin-left: 320px;
  padding: 8px;
  text-align: center;
  font-size: 24px;
  border-radius: 12px; */
  flex: 0 0 500px;
  height: 20px;
  width: 500px;
  margin-top: 5px;
  margin-left: 320px;
  padding: 8px;
  text-align: center;
  font-size: 24px;
  border-radius: 12px;

  @media (max-width: 1024px) {
    flex: 1;
    width: 46%;
  }
`;