import GoogleMapReact from 'google-map-react';
import React, { Component } from 'react'

export class GMapsComponent extends Component {
    static defaultProps = {
        center: {lat: 51.126128, lng: 16.970674},
        zoom: 15
    };
    render(){
        return (
        <GoogleMapReact
            bootstrapURLKeys={{
                language: 'pl',
                region: 'pl'
            }}
            defaultCenter={this.props.center}
            defaultZoom={this.props.zoom}
        >
            {/* <AnyReactComponent 
                lat={59.955413} 
                lng={30.337844} 
                text={'Kreyser Avrora'} 
            /> */}
        </GoogleMapReact>
        )
    }

}

export default GMapsComponent;
