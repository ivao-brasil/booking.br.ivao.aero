import { Box, Tab } from '@material-ui/core';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import { useState } from 'react';
import { EventForm } from './components/EventForm';
import { EventList } from './components/EventList';
import { MainLayout } from '../../layouts/MainLayout';
import { Event } from '../../types/Event';

export const EventsPage = () => {
  const [value, setValue] = useState('1');
  const [editEvent, setEditEvent] = useState<Event>();

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };
  return (
    <MainLayout>
      <Box sx={{ width: '100%', typography: 'body1' }}>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <TabList onChange={handleChange} aria-label="lab API tabs example">
              <Tab label="List" value="1" />
              <Tab label="Create" value="2" />
              <Tab label="Edit" value="3" disabled={value !== '3'} />
            </TabList>
          </Box>
          <TabPanel value="1">
            <EventList
              onEdit={event => {
                setValue('3');
                setEditEvent(event);
              }}
            />
          </TabPanel>
          <TabPanel value="2">
            <EventForm onPersist={() => setValue('1')} />
          </TabPanel>
          <TabPanel value="3">
            <EventForm defaultState={editEvent} onPersist={() => setValue('1')} />
          </TabPanel>
        </TabContext>
      </Box>
    </MainLayout>
  );
};
