import React from "react";
import {
  TileLayer,
  Marker,
  Popup,
  Tooltip,
  MapContainer as LeafletMap,
} from "react-leaflet";
import "./Maps.css";
import "leaflet/dist/leaflet.css";
import { iconSmart } from "./IconMarker";
import logoImg from "../../../assets/img/logo-web-black.png";
const Map = () => {
  const position = [30.1417143, 31.7479228];
  const zoom = 15;
  return (
    <div className="map">
      <LeafletMap center={position} zoom={zoom}>
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position} icon={iconSmart}>
          <Popup>
            <div className="info-container">
              <div className="info__logo">
                <img src={logoImg} alt="logo" />
              </div>
              <div className="info__name">RAQYAH</div>
              <div className="info__address">
                Address: Al Asher Men Ramadan - Badr, Cairo , Egypt
              </div>
            </div>
          </Popup>
          <Tooltip>RAQYAH For Metal</Tooltip>
        </Marker>
      </LeafletMap>
    </div>
  );
};

export default Map;
