import Desert from "./Desert";
import data from "../data.json";
export default function DesertList() {
  return (
    <div className="deserts">
      <h3>Deserts</h3>
      <div className="deserts-list">
        {data.map((desert) => (
          <Desert
            image={desert.image.desktop}
            name={desert.name}
            category={desert.category}
            price={desert.price}
          />
        ))}
      </div>
    </div>
  );
}
