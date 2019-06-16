import React, { Component } from 'react';
import {
    Map,
    InfoWindow,
    Marker,
    GoogleApiWrapper,
    mapConfig
} from 'google-maps-react';
import './../css/map.css';

class MapContainer extends Component {
  render() {
    console.log('mapConfig::', mapConfig);
    
    return (
      <div className="card">
        <div className="card-header card-header-text bg-success">
          <div className="card-text">
          <h4 className="card-title text-white">Endereço</h4>
          </div>
        </div>
        <div className="card-body">
          <p><i className="fas fa-map-marked-alt">&nbsp;R. Romero Gomes Vieira, 12 - Mangueiras, Belo Horizonte - MG, 30666-330</i></p>
          <hr />
          <div className="google-map">
            <Map
              style={
                {
                  width: '95%',
                  height: '380px'
                }
              }
              google={this.props.google}
              zoom={14}
              initialCenter={{ lat: -20.0159746, lng: -44.0380226}} >
                <Marker onClick={this.onMarkerClick}
                    name={'Current location'} />
                <InfoWindow onClose={this.onInfoWindowClose} />
            </Map>
          </div>
        </div>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: ("AIzaSyARfZtVFJfglVjw5WjchUcdXq61q2n5GhQ")
})(MapContainer);
