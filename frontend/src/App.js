import "./App.css";
import { Routes, Route } from "react-router-dom";
import { GlobalProvider } from "./context/GlobalState";
import PlaceList from "./screens/PlaceList.jsx";
import PlaceDetail from "./screens/PlaceDetail.jsx";
import Modal from "react-modal";

function App() {
  Modal.setAppElement("#root");
  return (
    <GlobalProvider>
      <Routes>
        <Route path="/" element={<PlaceList />} />
        <Route path="/details" element={<PlaceDetail />} />
      </Routes>
    </GlobalProvider>
  );
}

export default App;