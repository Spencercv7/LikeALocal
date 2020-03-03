import React from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';

const mapColorStyle = require("../../constants/mapStyle.json");

export class MapContainer extends React.Component {

      render() {

            let pos = navigator.geolocation.getCurrentPosition(function(position) {
                  pos = {
                        lat: position.coords.latitude,
                        lng: position.coords.longitude
                  };
            });


            return (

                  <Map  
                        className={ "map" }
                        google={ google }
                        zoom={14}
                        styles={ mapColorStyle }
                        initialCenter={{ lat: 44.2312, lng: -76.4860 }}
                        disableDefaultUI={ true }
                  />

            );
      }
}


export default GoogleApiWrapper({
      apiKey: 'AIzaSyBA3CFdP633NDVrc4cM5pDrF8BiKT3O26k'
})(MapContainer);