import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import { Marker } from '../Marker';
 
 
class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33
    },
    zoom: 11
  };
 
  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{key:"AIzaSyALsDGUKJntADnzlBz4-SS4cktc0p-Q1FU&"}}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <Marker
            lat={34.098185}
            lng={-118.326833}
            text="My Marker"
          />
           <Marker
            lat={59.935417}
            lng={30.337854}
            text="Apic"
          />
           <Marker
            lat={59.965413}
            lng={30.397844}
            text="My Marker"
          />
        </GoogleMapReact>
      </div>
    );
  }
}
 
export default SimpleMap;