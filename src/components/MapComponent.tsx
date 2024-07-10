import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

type Contact = {
  name: string;
  phone: string;
  email: string;
  addresses: string[];
  longitude: string;
  latitude: string;
};

type MapComponentProps = {
  contacts: Contact[];
};

const MapComponent: React.FC<MapComponentProps> = ({ contacts }) => {
  const defaultPosition: [number, number] = [6.5244, 3.3792]; 
  const defaultZoom = 8;

  return (
    <MapContainer center={defaultPosition} zoom={defaultZoom} style={{ height: '100%', width: '100%', zIndex: '0' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {contacts.map((contact, index) => (
        <Marker
          key={index}
          position={[parseFloat(contact.latitude), parseFloat(contact.longitude)]}
          icon={L.icon({
            iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
            iconSize: [25, 41],
            iconAnchor: [12, 41],
          })}
        >
          <Popup>
            <div>
              <strong>{contact.name}</strong><br />
              {contact.phone}<br />
              {contact.email}
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default MapComponent;
