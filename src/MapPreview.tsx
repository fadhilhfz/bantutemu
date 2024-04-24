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
  const map = useMap();
  map.flyTo({ lat: 51.505, lng: -0.09 }, 18);

  return null;
}

function MapPreview() {
  return (
    <MapContainer
      center={[51.505, -0.09]}
      zoom={12}
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
