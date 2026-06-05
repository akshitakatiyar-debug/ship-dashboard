import { useEffect, useState } from "react";
import "./App.css";

import ShipCard from "./components/ShipCard";
import { normalizeShip } from "./utils/normalizeShip";
import shipsData from "./data/ships.json";

function App() {
  const [ships, setShips] = useState([]);

  useEffect(() => {
    const normalizedShips = shipsData.map((ship) =>
      normalizeShip(ship)
    );

    setShips(normalizedShips);
  }, []);

  const criticalShips = ships.filter(
    (ship) =>
      ship.capacity > 100 &&
      ship.coreType?.toLowerCase() === "plasma"
  );

  return (
    <div className="container">
      <h1 className="title">
        🚀 Intergalactic Ship Dashboard
      </h1>

      <div className="stats">
        <div className="stat-box">
          Total Ships
          <span>{ships.length}</span>
        </div>

        <div className="stat-box">
          Critical Alerts
          <span>{criticalShips.length}</span>
        </div>
      </div>

      <div className="grid">
        {ships.map((ship) => (
          <ShipCard
            key={ship.id}
            ship={ship}
          />
        ))}
      </div>
    </div>
  );
}

export default App;