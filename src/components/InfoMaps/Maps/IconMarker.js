import L from "leaflet";
import iconUrl from "../../../assets/img/logo-circle.png";

const iconSmart = new L.Icon({
  iconUrl: iconUrl,
  iconSize: [64, 64],
  iconAnchor: [64, 64],
  shadowUrl: null,
  shadowSize: null,
  shadowAnchor: null,
});

export { iconSmart };
