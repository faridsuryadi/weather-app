import {  Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react"
import { HourlyTemp } from "./hourlyTemp"

export const HourlyWeather = ({weatherData, isLoading}) => {
    return (
            <Tabs variant='soft-rounded' colorScheme='yellow' w={["100%","100%","60%"]} >
                <TabList justifyContent={"flex-end"}>
                    <Tab>24 Hour</Tab>
                    <Tab>Tab 2</Tab>
                    <Tab>Tab 3</Tab>
                </TabList>
                <TabPanels >
                    <TabPanel >
                        <HourlyTemp weatherData={weatherData} isLoading={isLoading} />
                    </TabPanel>
                    <TabPanel>
                        <p>two!</p>
                    </TabPanel>
                    <TabPanel>
                        <p>three!</p>
                    </TabPanel>
                </TabPanels>
            </Tabs>
    )
}
