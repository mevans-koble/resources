import React from 'react';
import { 
  Box, Drawer, AppBar, Toolbar, List, Typography, 
  ListItem, ListItemButton, ListItemIcon, ListItemText, 
  IconButton, Divider 
} from '@mui/material';
import { Description, PictureAsPdf, Menu as MenuIcon } from '@mui/icons-material';

const drawerWidth = 240;

const Navbar = ({ mobileOpen, onDrawerToggle, onSideMenuClick }) => {
  const menuItems = [
    { text: 'Documentation', icon: <Description />, value: 'doc' },
    { text: 'PDF Resources', icon: <PictureAsPdf />, value: 'pdf' },
  ];

  const drawerContent = (
    <div>
      <Toolbar>
        <Typography variant="h6" color="primary" sx={{ fontWeight: 'bold' }}>
          Resources
        </Typography>
      </Toolbar>
      <Divider />
      <List>
        {menuItems.map((item) => (
          <ListItem key={item.text} disablePadding>
            <ListItemButton onClick={() => onSideMenuClick(item.value)}>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <>
      <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <Toolbar>
          <IconButton
            color="inherit"
            edge="start"
            onClick={onDrawerToggle}
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Resource Hub
          </Typography>
        </Toolbar>
      </AppBar>

      <Box component="nav">
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={onDrawerToggle}
          ModalProps={{ keepMounted: true }}
          sx={{
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {/* {drawerContent} */}
        </Drawer>
      </Box>
    </>
  );
};

export default Navbar;