import DesertList from "./DesertsList";
import Cart from "./Cart";
import Confirm from "./Confirm";
function App() {
  return (
    <>
      <div className="container">
        <DesertList />
        <Cart />
      </div>
      <Confirm />
    </>
  );
}

export default App;
