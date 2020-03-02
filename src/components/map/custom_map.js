import React from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';

const mapStyles = {
      width: '100%',
      height: '100%'
    };

export class CustomMap extends React.Component {

      render() {
            return (
                  <Map  
                        className="map"
                        google={this.props.google}
                        zoom={8}
                        style={mapStyles}
                        initalCenter={{ lat: 10.1234, lng: -10.1234 }}
                  />
            );
      }

} 

export default GoogleApiWrapper({
      apiKey: 'AIzaSyBA3CFdP633NDVrc4cM5pDrF8BiKT3O26k'
})(CustomMap);