import { MainLayout } from '../../layouts/MainLayout';
import { useParams } from 'react-router-dom';
import { useContext, useState } from 'react';
import { Box, Grid, Tab } from '@material-ui/core';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import { SlotForm } from './components/SlotForm';
import { SlotList } from './components/SlotList';
import { Slot } from '../../types/Slot';
import { Button, CircularProgress } from '@mui/material';
import { CloudUpload } from '@material-ui/icons';
import { Download } from '@mui/icons-material';
import { AuthContext } from '../../context/AuthContext';
import { IocContext } from '../../context/IocContext';
import { Confirm } from '../../components/Confirm';
import { NotificationContext, NotificationType } from '../../context/NotificationContext';
import { ONE_SECOND } from '../../constants';
import { useQueryClient } from 'react-query';

export const SlotsPage = () => {
  const eventId = Number(useParams().eventId);
  const [value, setValue] = useState('1');
  const [editingSlot, setEditingSlot] = useState<Slot>();
  const { token } = useContext(AuthContext);
  const { apiClient } = useContext(IocContext);
  const [loading, setLoading] = useState(false);
  const { dispatch } = useContext(NotificationContext);

  const [formData, setFormData] = useState<FormData>();
  const queryClient = useQueryClient();

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  const handleFileInput = (event: any) => {
    const name = event.target.value.split('\\').pop();
    const file = event.target.files[0];

    const formData = new FormData();
    formData.append('name', name);
    formData.append('file', file);
    setFormData(formData);
  };

  const uploadFile = () => {
    if (formData) {
      setLoading(true);
      return apiClient
        .createManySlots(eventId, token, formData)
        .then(() => {
          queryClient.invalidateQueries(['slots', eventId]);
          dispatch('Slots created successfully', 'Slot Creation', NotificationType.SUCCESS, 5 * ONE_SECOND);
          setValue('1');
        })
        .catch(() => {
          dispatch('Error to create slots ', 'Slot Creation', NotificationType.ERROR, 5 * ONE_SECOND);
        })
        .finally(() => {
          setLoading(false);
        });
    }
  };

  return (
    <MainLayout>
      {formData && (
        <Confirm
          text={`Please confirm if you want to upload ${formData?.get('name')}`}
          onConfirm={result => {
            if (result) {
              uploadFile();
            }
            setFormData(undefined);
          }}
        />
      )}

      <Box sx={{ width: '100%', typography: 'body1' }}>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <TabList onChange={handleChange} aria-label="lab API tabs example">
              <Tab label="List" value="1" />
              <Tab label="Create" value="2" />
              <Tab label="Edit" value="3" disabled={value !== '3'} />
              <Tab label="Many" value="4" />
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
          <TabPanel value="4">
            <Grid container spacing={2}>
              <Grid item>
                <Button variant="contained" href="/api/slot/many" endIcon={<Download />}>
                  Download Template
                </Button>
              </Grid>
              <Grid item>
                <label htmlFor="icon-button-file">
                  <input accept="text/csv" id="icon-button-file" type="file" style={{ display: 'none' }} onChange={handleFileInput} />
                  <Box sx={{ position: 'relative' }}>
                    <Button variant="contained" endIcon={<CloudUpload />} component="span" disabled={loading}>
                      Upload
                    </Button>
                    {loading && (
                      <CircularProgress
                        size={24}
                        sx={{
                          position: 'absolute',
                          top: '50%',
                          left: '50%',
                          marginTop: '-12px',
                          marginLeft: '-12px',
                        }}
                      />
                    )}
                  </Box>
                </label>
              </Grid>
            </Grid>
          </TabPanel>
        </TabContext>
      </Box>
    </MainLayout>
  );
};
