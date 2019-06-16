import React, { Component } from 'react';
import {
    Map,
    InfoWindow,
    Marker,
    GoogleApiWrapper
} from 'google-maps-react';

class MapContainer extends Component {
  render() {
    return (
        <Map google={this.props.google} zoom={14}>
            <Marker onClick={this.onMarkerClick}
                name={'Current location'} />
            <InfoWindow onClose={this.onInfoWindowClose} >
              <div>
                <h1>TESTE</h1>
              </div>
            </InfoWindow>
        </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: ("AIzaSyARfZtVFJfglVjw5WjchUcdXq61q2n5GhQ")
})(MapContainer);
