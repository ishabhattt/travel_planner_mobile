import { useState, useEffect } from "react";
import { PermissionsAndroid } from "react-native";
import Geolocation from "react-native-geolocation-service";
import axios from "axios";

const useLocation = () => {
  const [location, setLocation] = useState<Geolocation.GeoPosition>();
  const [city, setCity] = useState<string>();

  useEffect(() => {
    const requestLocationPermission = async () => {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
          {
            title: "Geolocation Permission",
            message: "Can we access your location?",
            buttonNeutral: "Ask Me Later",
            buttonNegative: "Cancel",
            buttonPositive: "OK",
          }
        );

        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          return true;
        } else {
          return false;
        }
      } catch (err) {
        return false;
      }
    };

    const fetchLocation = async () => {
      const isPermissionGranted = await requestLocationPermission();

      if (isPermissionGranted) {
        Geolocation.getCurrentPosition(
          async (position) => {
            setLocation(position);

            // Use OpenStreetMap Nominatim API to get city name
            try {
              const response = await axios.get(
                `https://nominatim.openstreetmap.org/reverse?lat=${position.coords.latitude}&lon=${position.coords.longitude}&format=json`
              );
              console.log(
                `{"latitude":${
                  position.coords.latitude +
                  ",latitude:" +
                  position.coords.longitude
                }}`
              );
              if (response.data.address && response.data.address.city) {
                console.log(response.data);
                const city = response.data.address.city;
                console.log("City Name:", city);
                setCity(city);
              }
            } catch (error: any) {
              console.error("Error fetching city name:", error.message);
              setCity(undefined);
            }
          },
          (error: any) => {
            console.log(error.code, error.message);
            setLocation(undefined);
            setCity(undefined);
          },
          { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
        );
      }
    };

    fetchLocation();
  }, []);

  return { location, city };
};

export default useLocation;
