import React, { useState } from 'react';
import { Box, Container, CssBaseline, Toolbar } from '@mui/material';
import Navbar from './assets/components/Navbar';
import Editor from './assets/components/Editor';
import PDFViewer from './assets/components/PDFViewer';

export default function App() {
  const [view, setView] = useState('doc');
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleSideMenuClick = (newValue) => {
    setView(newValue);
    setMobileOpen(false); 
  };

  return (
    <div sx={{ display: 'flex', height:'100%' }}>
      
      <Navbar 
        mobileOpen={mobileOpen} 
        onDrawerToggle={handleDrawerToggle} 
        onSideMenuClick={handleSideMenuClick} 
      />
      <Box style={{height:'100% '}} >
      <div style={{height:"100%"}}>Test</div>
      </Box>

    </div>
  );
}