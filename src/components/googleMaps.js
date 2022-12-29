import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

function SimpleMap(){
  const defaultProps = {
    center: {
      lat: 50.243160,
      lng: 14.637568
    },
    zoom: 18
  };

  return (
    <div style={{ height: '100vh', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <AnyReactComponent
          lat={59.955413}
          lng={30.337844}
          text="Sweet Caramel Rose"
        />
      </GoogleMapReact>
    </div>
  );
}

export default SimpleMap;