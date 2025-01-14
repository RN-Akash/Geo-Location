import React, { Component } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import Geolocation from '@react-native-community/geolocation';

class CurrentLocation extends Component {

  componentDidMount() {
    Geolocation.setRNConfiguration({
      skipPermissionRequests: true,
      authorizationLevel: 'whenInUse',
      enableBackgroundLocationUpdates: false,
      locationProvider: 'auto',
    })
  }

  state = {
    latitude: null,
    longitude: null,
    errorMessage: null,
  };

  getCurrentLocation = async () => {
    Geolocation.requestAuthorization();
    Geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords;
      this.setState({ latitude, longitude, errorMessage: null });
    },
      (error) => {
        console.error(error);
        this.setState({ errorMessage: error.message });
      },
      { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
    );
  };

  render() {
    const { latitude, longitude } = this.state;
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Current Location : </Text>
        {latitude && longitude ?
          <Text style={styles.coordinates}>
            Latitude: {latitude.toFixed(6)}{"\n"}
            Longitude: {longitude.toFixed(6)}
          </Text>
          : null
        }
        <Button title="&#9758; Get Current Location" onPress={() => this.getCurrentLocation()} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 20,
    marginBottom: 20,
  },
  coordinates: {
    fontSize: 16,
    marginBottom: 20,
    color: 'green',
  },
  error: {
    fontSize: 14,
    color: 'red',
    marginBottom: 20,
  },
});

export default CurrentLocation;