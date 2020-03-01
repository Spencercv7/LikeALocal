import React from 'react';
import ReactDOM from 'react-dom';
import { Map, GoogleApiWrapper } from 'google-maps-react';

const mapStyles = {
      width: '100%',
      height: '100%'
    };

export class TestMap extends React.Component {

      render() {
            return (
                  <Map  
                        google={this.props.google}
                        zoom={8}
                        style={mapStyles}
                        initalCenter={{ lat: 47.444, lng: -122.176 }}
                  />
            );
      }

} 

export default GoogleApiWrapper({
      apiKey: 'AIzaSyBA3CFdP633NDVrc4cM5pDrF8BiKT3O26k'
})(TestMap);