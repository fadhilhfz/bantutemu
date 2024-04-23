import {
  MapContainer,
  TileLayer,
  useMap,
  Marker,
  Popup,
  useMapEvent,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";

function HandleOnLoad() {
  const map = useMapEvent("load", () => {
    map.flyTo({ lat: 51.505, lng: -0.09 }, 18);
  });

  console.log("fired");
  return null;
}

function MapPreview() {
  return (
    <MapContainer
      center={[51.505, -0.09]}
      zoom={10}
      scrollWheelZoom={false}
      className="h-64"
      zoomControl={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[51.505, -0.09]}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>

      <HandleOnLoad />
    </MapContainer>
  );
}

export default MapPreview;
