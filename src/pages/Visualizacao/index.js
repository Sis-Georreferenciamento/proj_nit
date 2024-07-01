import React from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import { useNavigate } from "react-router-dom";

//function Visualizacao() {return (<h1> Estou no MAPA!</h1>)}export default Visualizacao;

const Visualizacao = () => {
  const googleEarthURL = 'https://earth.google.com/web/';

  return (
    <LoadScript
      googleMapsApiKey="AIzaSyCQcO6e-8G9WN6Q5FOBYQ9rkzSBi0Djv_w" // Substitua pela sua chave API do Google Maps
      googleMapsScript={googleEarthURL}
    >
      <div style={{ width: '100vw', height: '100vh' }}>
        <iframe
          title="Google Earth"
          width="100%"
          height="100%"
          frameBorder="1"
          src={googleEarthURL}
        ></iframe>
      </div>
    </LoadScript>
  );
};

export default Visualizacao;