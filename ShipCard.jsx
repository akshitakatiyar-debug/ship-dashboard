function ShipCard({ ship }) {
  const isCritical =
    ship.capacity > 100 &&
    ship.coreType?.toLowerCase() === "plasma";

  return (
    <div
      className={
        isCritical
          ? "card critical"
          : "card"
      }
    >
      <h2>{ship.name}</h2>

      <p>
        <strong>Class:</strong>{" "}
        {ship.shipClass}
      </p>

      <p>
        <strong>Capacity:</strong>{" "}
        {ship.capacity}
      </p>

      <p>
        <strong>Price:</strong> $
        {ship.price.toLocaleString()}
      </p>

      <p>
        <strong>Status:</strong>{" "}
        {ship.status}
      </p>

      <p>
        <strong>Core:</strong>{" "}
        {ship.coreType || "N/A"}
      </p>
    </div>
  );
}

export default ShipCard;