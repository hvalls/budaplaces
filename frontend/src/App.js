import "./App.css";
import PlaceList from "./screens/PlaceList.jsx";
import { GlobalProvider } from "./context/GlobalState";

function App() {
  return (
    <GlobalProvider>
      <PlaceList></PlaceList>
    </GlobalProvider>
  );
}

export default App;
