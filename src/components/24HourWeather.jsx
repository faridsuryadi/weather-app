import React from "react";
import { Box, Text, Grid, GridItem } from "@chakra-ui/react";
import translateWMOCode from "../helpers/wmoCode";

const WeatherComponent = ({ weatherData }) => {
  const { hourly } = weatherData;

  return (
    <Box>
      <Text fontSize="xl" fontWeight="bold" mb={4}>
        24-Hour Weather Forecast
      </Text>
      <Grid templateColumns="repeat(6, 1fr)" gap={4}>
        {hourly.time.slice(0, 24).map((time, index) => (
          <GridItem key={index}>
            <Box p={4} borderWidth="1px" borderRadius="lg">
              <Text fontSize="md">{new Date(time).toLocaleTimeString()}</Text>
              <Text>Temperature: {hourly.temperature_2m[index]}°C</Text>
              <Text>Relative Humidity: {hourly.relativehumidity_2m[index]}%</Text>
              <Text>Precipitation Probability: {hourly.precipitation_probability[index]}%</Text>
              <Text>Weather Code: {hourly.weathercode[index]}</Text>
              <Text>Wind Speed: {hourly.windspeed_10m[index]} km/h</Text>
            </Box>
          </GridItem>
        ))}
      </Grid>
    </Box>
  );
};

export default WeatherComponent;
