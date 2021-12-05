import { Box, Tab } from "@material-ui/core";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import { useState } from "react";
import { EventList } from "../components/EventList";
import { NewEvent } from "../components/NewEvent";
import { MainLayout } from "../layouts/MainLayout";

export const EventsPage = () => {
  const [value, setValue] = useState("1");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };
  return (
    <MainLayout>
      <Box sx={{ width: "100%", typography: "body1" }}>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <TabList onChange={handleChange} aria-label="lab API tabs example">
              <Tab label="List" value="1" />
              <Tab label="Create" value="2" />
              <Tab label="Item Three" value="3" />
            </TabList>
          </Box>
          <TabPanel value="1">
            <EventList />
          </TabPanel>
          <TabPanel value="2">
            <NewEvent />
          </TabPanel>
          <TabPanel value="3">Item Three</TabPanel>
        </TabContext>
      </Box>
    </MainLayout>
  );
};
