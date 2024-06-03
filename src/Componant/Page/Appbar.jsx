import * as React from 'react';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { BiUser } from 'react-icons/bi';
import { IoReorderThreeOutline } from 'react-icons/io5';

export default function NavbarDrawer() {
  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemText sx={{textAlign:'center', display:'flex', justifyContent:'center'}} >
              <a href="#home-sec">
                <img src="https://i.ibb.co/KsztxWq/logo1.png" alt="Company Logo" id="header-img" />
              </a>
            </ListItemText>
          </ListItemButton>
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem disablePadding>
          <ListItemButton>
          
            <ListItemText sx={{textAlign:'center'}} >
              <a href="#about" className="nav-link"  style={{fontSize:"20px"}}>ABOUT</a>
            </ListItemText>
          </ListItemButton>
        </ListItem>
      </List>
      <List>
        <ListItem disablePadding>
          <ListItemButton>
          
            <ListItemText sx={{textAlign:'center'}} >
              <a href="#varieties" className="nav-link"  style={{fontSize:"20px"}}>VARIETIES</a>
            </ListItemText>
          </ListItemButton>
        </ListItem>
      </List>
      <List>
        <ListItem disablePadding>
          <ListItemButton>
          
            <ListItemText sx={{textAlign:'center'}} >
              <a href="#our-service" className="nav-link"  style={{fontSize:"20px"}}>OUR SERVICE</a>
            </ListItemText>
          </ListItemButton>
        </ListItem>
      </List>
      <List>
        <ListItem disablePadding>
          <ListItemButton>
          
            <ListItemText sx={{textAlign:'center'}} >
              <a href="#benefits" className="nav-link" style={{fontSize:"20px"}}>BENEFITS</a>
            </ListItemText>
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <div>
      {['left'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}><IoReorderThreeOutline style={{ fontSize: '37px', color: 'black' }} /></Button>
          <SwipeableDrawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
          >
            {list(anchor)}
          </SwipeableDrawer>
        </React.Fragment>
      ))}
    </div>
  );
}
