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
  const position = [24.63528, 46.84773];
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
              <div className="info__name">RAQYAH STEEL</div>
              <div className="info__address">
                Address: المملكة العربية السعودية , الرياض , السلي , صناعية
                المجاهد
              </div>
            </div>
          </Popup>
          <Tooltip>RAQYAH STEEL For Metal</Tooltip>
        </Marker>
      </LeafletMap>
    </div>
  );
};

export default Map;
