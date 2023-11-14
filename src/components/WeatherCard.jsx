import React from 'react';
import {
  Box,
  useColorModeValue,
  Heading,
  Flex,
  Text,
  Skeleton, // Import the Skeleton component from Chakra UI
} from '@chakra-ui/react';
import { WeatherVariable } from './weatherVariable';
import translateWMOCode from '../helpers/wmoCode';

export const WeatherCard = ({ data, isLoading }) => {
  const supStyle = {
    color: useColorModeValue('#21409a', '#ffde17'),
  };
  const weatherInfo = translateWMOCode(data?.weathercode);
  const datacolor = useColorModeValue('#21409a', '#ffde17')

  return (
    <Box
      role="group"
      p={6}
      w={['100%']}
      maxW="500px"
      bg={useColorModeValue('white', 'black')}
      borderRadius="30px"
      boxShadow="lg"
    >
      <Heading fontSize={['xl', '2xl']} color={useColorModeValue('#21409a', '#ffde17')}>
        Weather
      </Heading>
      {isLoading ? (
        <Skeleton height="150px" mt={5} />
      ) : (
        <Flex justifyContent={['space-between']}>
          <Heading fontSize={['6xl', '9xl']} color={datacolor}>
            {Math.round(data?.temperature_2m)}
            <sup style={supStyle}>°</sup>
          </Heading>
          <Heading fontSize={['6xl', '9xl']}>{weatherInfo.icon}</Heading>
        </Flex>
      )}
      {isLoading ? (
        <Skeleton height="40px" width="50%" mt={3} />
      ) : (
        <Heading fontSize={['2xl', '4xl']} color={datacolor} textAlign={'left'}>
          {weatherInfo.category}
        </Heading>
      )}
      {isLoading ? (
        <Skeleton height="50px" width="100%" mt={3} />
      ) : (
        <Flex justifyContent={['center', 'space-between']} mt={3}>
          <WeatherVariable variable="Humidity" value={data?.relativehumidity_2m} unit={' %'} />
          <Text fontSize={['sm', 'md']} whiteSpace="nowrap">
            <WeatherVariable variable="Wind Speed" value={data?.windspeed_10m} unit={' km/h'} />
          </Text>
          <Text fontSize={['sm', 'md']} whiteSpace="nowrap">
            <WeatherVariable variable="Cloud Cover" value={data?.cloudcover} unit={' %'} />
          </Text>
        </Flex>
      )}
    </Box>
  );
};
