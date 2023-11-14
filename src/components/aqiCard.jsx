import React from 'react';
import {
  Box,
  useColorModeValue,
  Heading,
  Flex,
  Text,
  Skeleton, 
} from '@chakra-ui/react';
import { WeatherVariable } from './weatherVariable';
import classifyAQI from '../helpers/aqiClass';

export const AQICard = ({ data,isLoading }) => {
  const aqi = data.us_aqi;
  const aqiClass = classifyAQI(aqi);

  return (
    <Box
      role="group"
      p={6}
      w={["100%"]}
      maxW="500px"
      bg={useColorModeValue('white', 'black')}
      borderRadius="30px"
      boxShadow="lg"
    >
      <Heading fontSize={["xl", "2xl"]}>
        Air Quality
      </Heading>
      {isLoading ? (
        <Skeleton height="150px" mt={5}/>
      ) : (
        <Flex justifyContent={['space-between']} w={"100%"}>
          <Heading fontSize={["6xl", "9xl"]}>
            {aqi}
          </Heading>
        </Flex>
      )}
      {isLoading ? (
        
        <Skeleton height="40px" width="50%" mt={3}  />
      ) : (
        <>
            <Heading fontSize={["2xl", "4xl"]} color={aqiClass.color} textAlign={"left"}>
            {aqiClass.category}
          </Heading>
        </>
        
      )}
        {isLoading ? (
            <Skeleton height="50px" width="50%" mt={3} w="100%" />
            ):(
      <Flex justifyContent={["space-around", "space-between"]} mt={3}>
       
          <WeatherVariable variable="PM 10" value={data.pm10}  unit={" μg/m³"}/>
                <WeatherVariable variable="PM 2.5"  value={data.pm2_5} unit={" μg/m³"} />
                <WeatherVariable variable="UV Index"  value={data.uv_index} unit={" index"}/>
          
      </Flex>
        )}
    </Box>
  );
};
