import { MainLayout } from '../../layouts/MainLayout';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { Box, Tab } from '@material-ui/core';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import { SlotForm } from './components/SlotForm';
import { SlotList } from './components/SlotList';
import { Slot } from '../../types/Slot';

export const SlotsPage = () => {
  const eventId = Number(useParams().eventId);
  const [value, setValue] = useState('1');
  const [editingSlot, setEditingSlot] = useState<Slot>();

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
            <SlotList
              onEdit={slot => {
                setValue('3');
                setEditingSlot(slot);
              }}
            />
          </TabPanel>
          <TabPanel value="2">
            <SlotForm onPersist={() => setValue('1')} eventId={eventId} />
          </TabPanel>
          <TabPanel value="3">
            <SlotForm onPersist={() => setValue('1')} eventId={eventId} defaultState={editingSlot} />
          </TabPanel>
        </TabContext>
      </Box>
    </MainLayout>
  );
};
