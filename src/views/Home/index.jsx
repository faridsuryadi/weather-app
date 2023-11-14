import React from 'react';
import {
  Flex,
  Input,
  Button,
  InputGroup,
  InputRightElement,
  VStack,
  Text,
} from "@chakra-ui/react";
import { WeatherCard } from "../../components/WeatherCard";
import { AQICard } from "../../components/aqiCard";
import DarkModeSwitch from "../../components/darkMode";
import { HourlyWeather } from "../../components/hourlyWeather";
import { useState, useEffect } from "react";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import { FaLocationArrow } from 'react-icons/fa';
import { useColorModeValue } from "@chakra-ui/react";
import { useLocation, useNavigate } from 'react-router-dom';

export const HomeView = () => {
  const [locationData, setLocationData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [errorToastTimer, setErrorToastTimer] = useState(null);
  const [weatherData, setWeatherData] = useState([]);
  const [airData, setAirData] = useState([]);
  const [hourlyWeather, setHourlyWeather] = useState([]);
  const [weatherLoading, setWeatherLoading] = useState(false); 
  const locations = useLocation();
  const navigate = useNavigate()
  const params = new URLSearchParams(locations.search);
  const search = params.get("search")||"Jakarta"
  const [searchQuery, setSearchQuery] = useState(search);

  const inputPlaceholderColor = useColorModeValue('gray.600', 'gray.200');
  const buttonColor = useColorModeValue('white', 'black');
  const inputColor = useColorModeValue('#21409a', '#ffde17');
  const buttonBgColor = useColorModeValue('#21409a', '#ffde17');

  const handleSearch = async (e) => {
      setLoading(true);
      clearTimeout(errorToastTimer);
      setWeatherLoading(true);

    try {
      const response = await axios.get(
        `https://api.opencagedata.com/geocode/v1/json?q=${searchQuery}&key=2302672fc4cc4d16bf752028c121d584`
      );

      const [location] = response.data.results;

      if (location) {
        setLocationData({
          lat: location.geometry.lat,
          lon: location.geometry.lng,
          location: location.formatted,
        });

        const openMeteoResponse = await axios.get(
          `https://api.open-meteo.com/v1/forecast?latitude=${location.geometry.lat}&longitude=${location.geometry.lng}&current=temperature_2m,relativehumidity_2m,weathercode,cloudcover,windspeed_10m&hourly=temperature_2m`
        );
        setWeatherData(openMeteoResponse.data.current)
        const openMeteoResponseAir = await axios.get(
            `https://air-quality-api.open-meteo.com/v1/air-quality?latitude=${location.geometry.lat}&longitude=${location.geometry.lng}&current=us_aqi,pm10,pm2_5,uv_index`       );

        setAirData(openMeteoResponseAir.data.current);
        console.log(openMeteoResponse);
          const responses = await axios.get(`https://api.open-meteo.com/v1/forecast?latitude=${location.geometry.lat}&longitude=${location.geometry.lng}&hourly=temperature_2m,relativehumidity_2m,precipitation_probability,weathercode,windspeed_10m&timezone=Asia%2FBangkok`)
          console.log(responses)
          setHourlyWeather(responses.data);
        
      } else {
        setLocationData(null);
        setErrorToastTimer(
          setTimeout(() => {
            toast.error("No valid location found.");
          }, !loading)
        );
      }
    } catch (error) {
      setLocationData(null);
      toast.error("Search for a valid location!");
    } finally {
      setLoading(false);
      setWeatherLoading(false);
      navigate(`?search=${searchQuery}`)
    }
  };

  useEffect(() => {
      handleSearch()
    return () => {
      clearTimeout(errorToastTimer);
    };
  }, []);

  return (
    <>
      <ToastContainer />
      <DarkModeSwitch />

      <VStack justifyContent={"center"}>
        <InputGroup w={["100", "50%", "30%"]} size="lg">
          <Input
            placeholder="Enter a location"
            value={searchQuery}
            _placeholder={{
              color: inputPlaceholderColor,
            }}
            onChange={(e) => setSearchQuery(e.target.value)}
            color={inputColor}
          />
          <InputRightElement width="4.5rem">
            {loading ? (
              <Button color={buttonColor} bg={buttonBgColor} size="sm" h="1.75rem" isLoading />
            ) : (
              <Button onClick={handleSearch} color={buttonColor} bg={buttonBgColor}h="1.75rem" fontSize={""} mr={2}>
                Search
              </Button>
            )}
          </InputRightElement>
        </InputGroup>
        {locationData ? (
  <Flex alignItems="center">
    <FaLocationArrow       style={{ marginRight: '8px'}} color={buttonBgColor}/>
    <Text>{locationData.location}</Text>
  </Flex>
):(
  null
)
}
      </VStack>
      <Flex justifyContent={"center"} gap={20} p={10} flexDirection={["column", "column", "row"]}>
        <WeatherCard data={weatherData} isLoading={weatherLoading} />
        <AQICard data={airData} isLoading={weatherLoading}/>
      </Flex>
      <Flex justifyContent={"center"} p={10}>
        <HourlyWeather weatherData={hourlyWeather} isLoading={weatherLoading}/>
      </Flex>
    </>
  );
};
