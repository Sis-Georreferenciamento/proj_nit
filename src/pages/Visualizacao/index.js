import React from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import { useNavigate } from "react-router-dom";

function Visualizacao() {
  return (
      <h1> Estou no MAPA!</h1>
  )
}

export default Visualizacao;

//const Visualizacao = () => {
 // const { signout } = useAuth();
 // const navigate = useNavigate();

 // const mapContainerStyle = {
 //   width: '100vw',
 //   height: '100vh',
 // };
  
 // const center = {
  //  lat: 0,
 //   lng: 0,
 // };

  
  //const Map = () => {
 // return (
   // <LoadScript googleMapsApiKey="https://earth.app.goo.gl/?apn=com.google.earth&isi=293622097&ius=googleearth&link=https%3a%2f%2fearth.google.com%2fweb%2f%40-22.8910641,-43.11705387,5.4804437a,9117.69897159d,35y,0h,0t,0r%2fdata%3dOgMKATA">
   //   <GoogleMap
    //    mapContainerStyle={mapContainerStyle}
    //    center={center}
    //    zoom={2}
    //    mapTypeId="satellite" // Define o tipo de mapa como satélite
    //  />
    //</LoadScript>
//  );
//};
//export default Visualizacao;
