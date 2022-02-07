import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import MapView from 'react-native-maps';

import Geolocation from '@react-native-community/geolocation';

import styles from './styles';

interface ILocation {
  latitude: number;
  longitude: number;
}

const MapScreen = () => {
  const [location, setLocation] = useState<ILocation | null>(null);

  useEffect(() => {
    Geolocation.getCurrentPosition(
      position => {
        console.log(position);
        setLocation(position.coords);
      },
      error => console.log('Error', error),
      {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000},
    );
  }, []);

  return (
    <View style={styles.screenWrapper}>
      {location && (
        <MapView
          style={styles.screenWrapper}
          initialRegion={{
            latitude: location.latitude,
            longitude: location.longitude,
            latitudeDelta: 1,
            longitudeDelta: 1,
          }}
          showsUserLocation
        />
      )}
    </View>
  );
};

export default MapScreen;
