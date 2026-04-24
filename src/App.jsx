import React, { useState } from 'react';
import { Box, CssBaseline, Toolbar } from '@mui/material';
import Navbar from './assets/components/Navbar';
import Editor from './assets/components/Editor';
import PDFViewer from './assets/components/PdfViewer';

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
    <div sx={{ display: 'flex' }}>
      <CssBaseline />
      

      <Navbar 
        mobileOpen={mobileOpen} 
        onDrawerToggle={handleDrawerToggle} 
        onSideMenuClick={handleSideMenuClick} 
      />

    </div>
  );
}