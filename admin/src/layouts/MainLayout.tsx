import { AppBar, Box, Container, CssBaseline, IconButton, Toolbar, Typography } from '@material-ui/core';
import { Menu } from '@material-ui/icons';
import { useTheme } from '@mui/material';
import { FunctionComponent, useState } from 'react';
import { Drawer } from '../components/Drawer';
import { Env } from '../env';

const drawerWidth = 240;

export const MainLayout: FunctionComponent = ({ children }) => {
  const theme = useTheme();
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  return (
    <>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CssBaseline />
        <AppBar
          position="fixed"
          color="primary"
          sx={{
            width: `calc(100% - ${open ? drawerWidth : 0}px)`,
            ml: `${open ? drawerWidth : 0}px`,
          }}>
          <Toolbar>
            <IconButton color="inherit" aria-label="open drawer" onClick={handleDrawerOpen} edge="start" sx={{ mr: 2, ...(open && { display: 'none' }) }}>
              <Menu />
            </IconButton>

            <img alt="Division LOGO" src={Env.LOGO_URL} height="45" />

            <Typography variant="h6" noWrap component="div">
              Booking System Admin
            </Typography>
          </Toolbar>
        </AppBar>

        <Drawer open={open} handleClose={handleDrawerClose} />

        <div
          style={{
            flexGrow: 1,
            transition: theme.transitions.create('margin', {
              easing: theme.transitions.easing.sharp,
              duration: theme.transitions.duration.leavingScreen,
            }),
            ...(!open && { marginLeft: 0 }),
            ...(open && {
              transition: theme.transitions.create('margin', {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen,
              }),
              marginLeft: `${drawerWidth}px`,
            }),
            height: '100vh',
            display: 'flex',
            justifyContent: 'center',
            paddingTop: theme.spacing(8),
          }}>
          <Container>{children}</Container>
        </div>
      </Box>
    </>
  );
};
