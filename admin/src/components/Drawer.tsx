import { Divider, Drawer as MuiDrawer, IconButton, List, ListItemButton, ListItemIcon, ListItemText } from '@material-ui/core';
import { ChevronLeft, ChevronRight, Event, Home, People } from '@material-ui/icons';
import { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';
import { Logout } from '@mui/icons-material';

interface DrawerProps {
  open: boolean;
  handleClose: () => void;
}

export const Drawer: FunctionComponent<DrawerProps> = ({ open, handleClose }) => {
  return (
    <MuiDrawer
      sx={{
        width: 240,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: 240,
          boxSizing: 'border-box',
        },
      }}
      variant="persistent"
      anchor="left"
      open={open}>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          padding: '10px',
          justifyContent: 'flex-end',
        }}>
        <IconButton onClick={handleClose}>{open ? <ChevronLeft /> : <ChevronRight />}</IconButton>
      </div>
      <Divider />
      <List>
        <ListItemButton component={Link} to="/admin">
          <ListItemIcon>
            <People />
          </ListItemIcon>
          <ListItemText primary="Home" />
        </ListItemButton>

        <ListItemButton component={Link} to="/admin/users">
          <ListItemIcon>
            <Home />
          </ListItemIcon>
          <ListItemText primary="Users" />
        </ListItemButton>

        <ListItemButton component={Link} to="/admin/events">
          <ListItemIcon>
            <Event />
          </ListItemIcon>
          <ListItemText primary="Events" />
        </ListItemButton>

        <ListItemButton component={Link} to="/admin/logout">
          <ListItemIcon>
            <Logout />
          </ListItemIcon>
          <ListItemText primary="Logout" />
        </ListItemButton>
      </List>
    </MuiDrawer>
  );
};
