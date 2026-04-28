import React, { useState } from 'react';
import { 
  Box, Drawer, AppBar, Toolbar, List, Typography, 
  ListItem, ListItemButton, ListItemIcon, ListItemText, 
  IconButton, Divider, Collapse, Link as MuiLink
} from '@mui/material';
import { 
  Description, Menu as MenuIcon, ExpandLess, ExpandMore, 
  Info, Stars, AccountTree, Home, Gavel, Public, 
  MenuBook, BusinessCenter, HistoryEdu
} from '@mui/icons-material';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import LandscapeIcon from '@mui/icons-material/Landscape';
import DevicesIcon from '@mui/icons-material/Devices';
import SchoolIcon from '@mui/icons-material/School';
import ConstructionIcon from '@mui/icons-material/Construction';
import { Link, useLocation } from 'react-router-dom';

const drawerWidth = 240;

const Navbar = ({ mobileOpen, onDrawerToggle }) => {
  const location = useLocation();
  
  const [openKoble, setOpenKoble] = useState(false);
  const [openGTM, setOpenGTM] = useState(false);

  const handleKobleToggle = () => setOpenKoble(!openKoble);
  const handleGTMToggle = () => setOpenGTM(!openGTM);

  const drawerContent = (
    <div>
      <Toolbar>
        {/* Clickable Branding in Sidebar */}
        <MuiLink 
          component={Link} 
          to="/" 
          underline="none" 
          onClick={onDrawerToggle}
          sx={{ display: 'flex', alignItems: 'center' }}
        >
          <Typography 
            variant="h6" 
            color="primary" 
            sx={{ 
              fontWeight: '800', 
              letterSpacing: '0.5px',
              transition: '0.2s',
              '&:hover': { opacity: 0.7 }
            }}
          >
            Resource Hub
          </Typography>
        </MuiLink>
      </Toolbar>
      <Divider />
      <List>
        {/* HOME LINK */}
        <ListItem disablePadding>
          <ListItemButton 
            component={Link} to="/" 
            onClick={onDrawerToggle}
            selected={location.pathname === '/'}
          >
            <ListItemIcon><Home /></ListItemIcon>
            <ListItemText primary="Home" />
          </ListItemButton>
        </ListItem>

        <Divider sx={{ my: 1 }} />
        
        <ListItem disablePadding>
          <ListItemButton 
            component={Link} to="/knowledge" 
            onClick={onDrawerToggle}
            selected={location.pathname === '/knowledge'}
          >
            <ListItemIcon><SchoolIcon /></ListItemIcon>
            <ListItemText primary="Knowledge" />
          </ListItemButton>
        </ListItem>

        <Divider sx={{ my: 1 }} />
        
        <ListItem disablePadding>
          <ListItemButton 
            component={Link} to="/tools" 
            onClick={onDrawerToggle}
            selected={location.pathname === '/tools'}
          >
            <ListItemIcon><ConstructionIcon /></ListItemIcon>
            <ListItemText primary="Tools" />
          </ListItemButton>
        </ListItem>

        <Divider sx={{ my: 1 }} />

        <ListItem disablePadding>
          <ListItemButton 
            component={Link} to="/customizations" 
            onClick={onDrawerToggle}
            selected={location.pathname === '/customizations'}
          >
            <ListItemIcon><AutoAwesomeIcon /></ListItemIcon>
            <ListItemText primary="Customizations" />
          </ListItemButton>
        </ListItem>

        <Divider sx={{ my: 1 }} />

        {/* SECTION 1: KOBLE CONNECT */}
        <ListItem disablePadding sx={{ display: 'block' }}>
          <ListItemButton onClick={handleKobleToggle}>
            <ListItemIcon><Description /></ListItemIcon>
            <ListItemText primary="Koble Connect" />
            {openKoble ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>

          <Collapse in={openKoble} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              {[
                { text: 'Introduction', path: '/about', icon: <Info fontSize="small" /> },
                { text: 'Mission & Pillars', path: '/mission', icon: <Stars fontSize="small" /> },
                { text: 'People Principles', path: '/peopleprinciples', icon: <AccountTree fontSize="small" /> },
                { text: 'Our Products', path: '/products', icon: <BusinessCenter fontSize="small" /> },
                { text: 'Our Customers', path: '/customers', icon: <Public fontSize="small" /> },
                { text: 'Our History', path: '/history', icon: <HistoryEdu fontSize="small" /> },
                { text: 'Glossary', path: '/glossary', icon: <MenuBook fontSize="small" /> },
                { text: 'Business Processes', path: '/business', icon: <AccountTree fontSize="small" /> },
              ].map((item) => (
                <ListItemButton 
                  key={item.path}
                  component={Link} to={item.path} 
                  sx={{ pl: 4 }} 
                  onClick={onDrawerToggle}
                  selected={location.pathname === item.path}
                >
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.text} />
                </ListItemButton>
              ))}
            </List>
          </Collapse>
        </ListItem>

        <Divider sx={{ my: 1 }} />

        {/* SECTION 2: CONSERVATIVE ANABAPTIST GTM */}
        <ListItem disablePadding sx={{ display: 'block' }}>
          <ListItemButton onClick={handleGTMToggle}>
            <ListItemIcon><Gavel /></ListItemIcon>
            <ListItemText primary="Anabaptist GTM" />
            {openGTM ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>

          <Collapse in={openGTM} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              {[
                { text: 'Overview', path: '/gtm-overview', icon: <Public fontSize="small" /> },
                { text: 'Device Support', path: '/gtm-devicesupport', icon: <DevicesIcon fontSize="small" /> },
                { text: 'Competitive Landscape', path: '/gtm-compland', icon: <LandscapeIcon fontSize="small" /> },
                { text: 'Strengths', path: '/gtm-strengths', icon: <FitnessCenterIcon fontSize="small" /> },
              ].map((item) => (
                <ListItemButton 
                  key={item.path}
                  component={Link} to={item.path} 
                  sx={{ pl: 4 }} 
                  onClick={onDrawerToggle}
                  selected={location.pathname === item.path}
                >
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.text} />
                </ListItemButton>
              ))}
            </List>
          </Collapse>
        </ListItem>

        <Divider sx={{ my: 1 }} />
      </List>
    </div>
  );

  return (
    <>
      <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1, backgroundColor: '#1f3a30' }}>
        <Toolbar>
          <IconButton color="inherit" edge="start" onClick={onDrawerToggle} sx={{ mr: 2 }}>
            <MenuIcon />
          </IconButton>
          
          {/* Clickable Branding in AppBar */}
          <MuiLink 
            component={Link} 
            to="/" 
            underline="none" 
            sx={{ display: 'flex', alignItems: 'center', color: 'inherit' }}
          >
            <Typography 
              variant="h6" 
              noWrap 
              sx={{ 
                letterSpacing: '0.5px',
                transition: '0.2s',
                '&:hover': { opacity: 0.8 }
              }}
            >
              Resource Hub
            </Typography>
          </MuiLink>
        </Toolbar>
      </AppBar>

      <Box component="nav">
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={onDrawerToggle}
          ModalProps={{ keepMounted: true }}
          sx={{ 
            '& .MuiDrawer-paper': { 
              boxSizing: 'border-box', 
              width: drawerWidth, 
              backgroundColor: '#95ab63' 
            } 
          }}
        >
          {drawerContent}
        </Drawer>
      </Box>
    </>
  );
};

export default Navbar;