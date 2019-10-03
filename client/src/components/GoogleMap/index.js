import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import { Marker } from '../Marker';
  
class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 42.0454159,
      lng: -87.6989784
    },
    zoom: 12
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
            text="My Marker"
          />
           <Marker
            lat={42.0252519}
            lng={-87.6874458}
            text="My Marker"
          />
           <Marker
            lat={42.02496}
            lng={-87.687168}
            text="My Marker"
          />
           <Marker
            lat={42.0215081}
            lng={-87.746052}
            text="My Marker"
          />
           <Marker
            lat={42.0249600}
            lng={-87.6871680}
            text="My Marker"
          />
           <Marker
            lat={42.0516614}
            lng={-87.7334935}
            text="My Marker"
          />
           <Marker
            lat={42.0436334}
            lng={-87.7252924}
            text="My Marker"
          />
           <Marker
            lat={42.0344261}
            lng={-87.7634144}
            text="My Marker"
          />
           <Marker
            lat={42.0403748}
            lng={-87.8261113}
            text="My Marker"
          />
           <Marker
            lat={42.022832}
            lng={-87.8192779}
            text="My Marker"
          />
           <Marker
            lat={42.0228157}
            lng={-87.8207321}
            text="My Marker"
          />
           <Marker
            lat={42.0154075}
            lng={-87.7262461}
            text="My Marker"
          />
        </GoogleMapReact>
      </div>
    );
  }
}
 
export default SimpleMap;

