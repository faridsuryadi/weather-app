import { Box, Text, Flex, HStack, Skeleton, Heading } from "@chakra-ui/react";
import translateWMOCode from "../helpers/wmoCode";

export const HourlyTemp = ({ weatherData, isLoading }) => {
  // if (!weatherData || !weatherData.hourly || !weatherData.hourly.time) 
  // {
  //  return Array.from({ length: 17 }).map((_, index) => (
  //   <HStack>

  //       <Skeleton key={index} width="370px" height="130px" p={4} borderWidth="1px" borderRadius="lg" />
  //   </HStack>
  //     ))
     
  // }
  const { hourly } = weatherData;
  const currentTime = new Date();
  const currentTimeIndex = hourly?.time?.findIndex((time) => new Date(time) > currentTime);

  return (
    <Box>
      <Text fontSize="xl" fontWeight="bold" mb={4}>
        24-Hour Weather Forecast
      </Text>
      <HStack overflowX="scroll" w={"100%"}>
        {!weatherData || !weatherData.hourly || !weatherData.hourly.time || isLoading? (
          Array.from({ length: 17 }).map((_, index) => (
            <Skeleton key={index} width="350px" height="130px" p={4} borderWidth="1px" borderRadius="lg" />
          ))
        ) : (
          hourly.time.slice(currentTimeIndex, currentTimeIndex + 24).map((time, index) => (
            <Flex key={index} direction="column" p={4} pb="20px" borderWidth="1px" borderRadius="lg"  gap={2}>
              <Text fontSize="md" textAlign={"center"}>
                { new Date(time).getHours()}
              </Text>
              <Heading>{translateWMOCode(hourly.weathercode[currentTimeIndex + index]).icon}</Heading>
              <Heading fontSize={"2xl"}>{Math.round(hourly.temperature_2m[currentTimeIndex + index])}°C</Heading>
            </Flex>
          ))
        )}
      </HStack>
    </Box>
  );
};
