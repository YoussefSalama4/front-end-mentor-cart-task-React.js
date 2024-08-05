import DesertsList from "./DesertsList";
import Cart from "./Cart";
import Confirm from "./Confirm";
import { useState } from "react";
function App() {
  const [selectedDeserts, setSelectedDeserts] = useState([]);
  const [isConfirmed, setIsConfirmed] = useState(false);

  let totalPrice = 0;
  selectedDeserts.forEach((el) => (totalPrice += el.count * el.price));
  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
  function handleSelectDesert(desert) {
    setSelectedDeserts([...selectedDeserts, desert]);
  }
  function handleDeleteDesert(name) {
    setSelectedDeserts((selectedDeserts) =>
      selectedDeserts.filter((el) => el.name !== name)
    );
  }
  function handleUpdateDesert(desert) {
    setSelectedDeserts((selectedDeserts) =>
      selectedDeserts.map((el) => (el.name === desert.name ? desert : el))
    );
  }
  function handleClearList() {
    setSelectedDeserts([]);
  }
  return (
    <>
      <div
        onClick={() => {
          if (isConfirmed) setIsConfirmed(false);
        }}
        className="container"
      >
        <DesertsList
          onSelectDesert={handleSelectDesert}
          selectedDeserts={selectedDeserts}
          onUpdateDesert={handleUpdateDesert}
          onDeleteDesert={handleDeleteDesert}
        />
        <Cart
          selectedDeserts={selectedDeserts}
          totalPrice={totalPrice}
          onDeleteDesert={handleDeleteDesert}
          setIsConfirmed={setIsConfirmed}
        />
      </div>
      <Confirm
        selectedDeserts={selectedDeserts}
        totalPrice={totalPrice}
        isConfirmed={isConfirmed}
        setIsConfirmed={setIsConfirmed}
        onClearList={handleClearList}
        onScrollToTop={scrollToTop}
      />
    </>
  );
}

export default App;
