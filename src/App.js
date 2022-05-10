import "./App.css";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";

import Navbar from "./components/NavBAr/NavBar";

function App() {
  return (
    <>
      <Navbar />
      <ItemListContainer texto="Tienda Online" />
      
     </>
  );
}

export default App;
