import React, { useState } from 'react';
import { ErrorBoundary } from '@components/ErrorBoundary';
import Home from '../Home/Home';
import './login.scss';
import {
  GoogleMap,
  useJsApiLoader,
  Marker,
  Autocomplete,
} from '@react-google-maps/api';

const Login = () => {
  const containerStyle = {
    width: '400px',
    height: '400px',
  };

  const center = {
    lat: -3.745,
    lng: -38.523,
  };

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: 'AIzaSyCtwkEgMYgpsW35Tdh4N28sXPagOOKRakE',
    libraries: ['places'],
  });
  const [map, setMap] = useState(null);

  const onUnmount = React.useCallback(function callback(map: any) {
    setMap(null);
  }, []);
  return (
    <div className="page">
      <div className="func">
        <Autocomplete>
          <input type="text" placeholder="From" />
        </Autocomplete>
        <input type="text" name="" id="" placeholder="to" />
        <button onClick={() => map.panTo(center)}>Center</button>
      </div>
      <div className="cal">
        {/* <button onClick={()=>map.panTo()}>Center</button> */}
        {isLoaded ? (
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={10}
            onLoad={(map) => setMap(map)}
            onUnmount={onUnmount}
          >
            {/* Child components, such as markers, info windows, etc. */}
            <Marker position={center} />
          </GoogleMap>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default Login;
