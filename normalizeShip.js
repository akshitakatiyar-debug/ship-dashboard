function parsePrice(price) {
  if (typeof price === "number") return price;

  if (!price) return 0;

  const str = String(price);

  if (str.includes("M")) {
    return parseFloat(str) * 1000000;
  }

  const cleaned = str.replace(/[^\d.]/g, "");

  return Number(cleaned) || 0;
}

function parseCapacity(capacity) {
  if (typeof capacity === "number") return capacity;

  if (!capacity) return 0;

  const cleaned = String(capacity).replace(/[^\d]/g, "");

  return Number(cleaned) || 0;
}

export const normalizeShip = (ship) => {
  const rawPrice =
    ship.price ??
    ship.Price ??
    ship.cost ??
    0;

  const rawCapacity =
    ship.capacity ??
    ship.Capacity ??
    ship.max_passengers ??
    0;

  return {
    id:
  ship.shipName ||
  ship.ship_name ||
  ship.ShipName,

    name:
      ship.shipName ??
      ship.ship_name ??
      ship.ShipName ??
      "Unknown",

    shipClass:
      ship.ship_class ??
      ship.shipClass ??
      ship.ShipClass ??
      "Unknown",

    price: parsePrice(rawPrice),

    capacity: parseCapacity(rawCapacity),

    status:
      ship.status ??
      ship.ship_status ??
      ship.Condition ??
      "Unknown",

    manufactureDate:
      ship.manufactureDate ??
      ship.manufactured_at ??
      ship.DateOfBuild ??
      null,

    coreType:
      ship?.technical_specs?.engine_data?.core_type ??
      null,
  };
};