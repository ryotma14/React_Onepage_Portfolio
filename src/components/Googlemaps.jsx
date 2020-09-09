import React from 'react'
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import './Googlemaps.css';

// require('dotenv').config();
//console.log(process.env.REACT_APP_API_KEY);  

const containerStyle = {
  margin: "0 auto 2em",
  width: '96%',
  height: '300px'
};

const center = {
  lat: -27.470125,
  lng: 153.021072
};

function Googlemaps() {
  return (
    <LoadScript
      googleMapsApiKey= {process.env.REACT_APP_API_KEY}
    >
      <h2 className="location"> Current Location<hr /></h2>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={11}
      >
        { /* Child components, such as markers, info windows, etc. */}
        <Marker position={{ lat: -27.470125, lng: 153.021072 }} />
      </GoogleMap>
    </LoadScript>
    
  )
}

export default React.memo(Googlemaps) 