import React, { useState } from 'react';
import { ErrorBoundary } from '@components/ErrorBoundary';
import Home from '../Home/Home';
import './login.scss';
import {
  GoogleMap,
  useJsApiLoader,
  Marker,
  Autocomplete,
  LoadScript,
} from '@react-google-maps/api';
import { GOOGLE_API } from '../../config';

const Login = () => {
  const containerStyle = {
    width: '100%',
    height: '400px',
  };

  const center = {
    lat: 48.745,
    lng: 38.523,
  };
  const center1 = {
    lat: 89.745,
    lng: 80.523,
  };
  const center2 = {
    lat: -12.745,
    lng: -23.523,
  };
  const center3 = {
    lat: -0.745,
    lng: -8.523,
  };

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: 'AIzaSyCtwkEgMYgpsW35Tdh4N28sXPagOOKRakE',
  });
  const [map, setMap] = useState(null);

  const onUnmount = React.useCallback(function callback(map: any) {
    setMap(null);
  }, []);
  return (
    <ErrorBoundary>
      <div className="page">
        <LoadScript
          googleMapsApiKey="AIzaSyCtwkEgMYgpsW35Tdh4N28sXPagOOKRakE"
          libraries={['places']}
        >
          <div className="func">
            <Autocomplete>
              <input type="text" placeholder="From" />
            </Autocomplete>
            <Autocomplete>
              <input type="text" name="" id="" placeholder="to" />
            </Autocomplete>

            <button onClick={() => map.panTo(center)}>Center</button>
          </div>
          <div className="cal">
            {/* <button onClick={()=>map.panTo()}>Center</button> */}
            {isLoaded ? (
              <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={5}
                onLoad={(map) => setMap(map)}
                onUnmount={onUnmount}
              >
                {/* Child components, such as markers, info windows, etc. */}
                {/* <Marker position={center} /> */}
                <Marker position={center1} />
                <Marker position={center2} />
                <Marker position={center3} />
              </GoogleMap>
            ) : (
              <></>
            )}
          </div>
        </LoadScript>
      </div>
    </ErrorBoundary>
  );
};

export default Login;
