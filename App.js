import React from 'react';
import Loading from './Loading';
import Weather from './Weather';
import { Alert } from "react-native";
import axios from "axios";
import * as Location from "expo-location";

const API_KEY = "e5d9296e19bf7f7a0e2653e697e1f2fa";

export default class App extends React.Component {
  state = {
    isLoading: true,
  }

  getWeather = async(lat, lon) => {
    const { data: {
      main: {
        temp
      },
      weather
    } } = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&APPID=${API_KEY}&units=metric`);
    this.setState({ 
      isLoading: false,
      temp,
      condition: weather[0].main,
     });
  }
  
  getLocation = async () => {
    try {
      await Location.requestPermissionsAsync();
      const {coords: {latitude, longitude}} = await Location.getCurrentPositionAsync(); //long, lat을 제대로 가져왔으면 밑에서 isLoading  false로 하고 화면다시 랜더링.
      this.getWeather(latitude, longitude);
    }catch (error) {
      Alert.alert("Can't find you", "try again");
    }
  }
  
  componentDidMount() {
    this.getLocation();
  }  
  render() {
    const {isLoading, temp, condition} = this.state;
    return isLoading ? <Loading /> : <Weather temp={Math.ceil(temp)} condition={condition}/>;
  }
}

