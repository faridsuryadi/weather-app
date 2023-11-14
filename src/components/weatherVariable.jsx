import {
    Box,
    Text,
    Stack,

  } from '@chakra-ui/react'
export const WeatherVariable = ({color,variable,value,unit}) => {
    return(
        <>
        <Box
          role={'group'}
          p={2}
          maxW={'120px'}
          w={'full'}
          borderRadius={"20px"}>
            <Stack textAlign={"center"}>
            <Text color={color} fontSize={"17px"} fontWeight={"semibold"}>{variable}</Text>
            <Text color={color}>{value}{unit}</Text>
            </Stack>
        </Box>
        </>
    )
}