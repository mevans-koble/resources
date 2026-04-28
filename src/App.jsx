import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Box, CssBaseline, Toolbar } from '@mui/material';
import Navbar from './assets/components/Navbar.jsx';
import Footer from './assets/components/Footer.jsx';
import Home from './assets/info/Home';
import Connect from './assets/info/KobleConnect/Connect';
import Mission from './assets/info/KobleConnect/Mission';
import PeoplePrinciples from './assets/info/KobleConnect/PeoplePrinciples';
import Products from './assets/info/KobleConnect/Products';
import Customers from './assets/info/KobleConnect/Customers';
import Roles from './assets/info/KobleConnect/Roles';
import History from './assets/info/KobleConnect/History';
import Glossary from './assets/info/KobleConnect/Glossary';
import BusinessProcess from './assets/info/KobleConnect/BusinessProcess';
import Overview from './assets/info/AnabaptistGTM/Overview';
import DeviceSupport from './assets/info/AnabaptistGTM/DeviceSupport';
import CompLand from './assets/info/AnabaptistGTM/CompLand';
import Strengths from './assets/info/AnabaptistGTM/Strengths';
import Customizations from './assets/info/KobleConnect/Customizations';
import KnowledgeBase from './assets/info/KnowledgeBase';
import Tools from './assets/info/Tools';

export default function App() {
  const [mobileOpen, setMobileOpen] = useState(false);
  
  // 1. Dark Mode State Logic
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev);
  };

  return (
    <Router>
      <Box sx={{ 
        display: 'flex', 
        flexDirection: 'column', 
        height: '100vh', 
        overflow: 'hidden' 
      }}>
        <CssBaseline />
  
        {/* Pass darkMode props to Navbar if you want to add a toggle icon there */}
        <Navbar 
          mobileOpen={mobileOpen} 
          onDrawerToggle={() => setMobileOpen(!mobileOpen)} 
          darkMode={darkMode}
          onToggleDark={toggleDarkMode}
        />
   
        <Box
          component="main"
          sx={{
            flexGrow: 1, 
            overflowY: 'auto', 
            display: 'flex',
            flexDirection: 'column',
            // 2. Dark Mode Conditional Styling (Isolated to the middle)
            backgroundColor: darkMode ? '#121212' : '#ffffff',
            color: darkMode ? '#ffffff' : '#000000',
            transition: 'background-color 0.3s ease, color 0.3s ease'
          }}
        >
          <Toolbar /> 
          
          <Box sx={{ p: 3, flexGrow: 1 }}>
            <Routes>
              <Route path="/" element={<Home darkMode={darkMode} />} />
              <Route path="/about" element={<Connect />} /> 
              <Route path="/mission" element={<Mission />} /> 
              <Route path="/peopleprinciples" element={<PeoplePrinciples />} />
              <Route path="/products" element={<Products />} />
              <Route path="/customers" element={<Customers />} />
              <Route path="/roles" element={<Roles />} />
              <Route path="/history" element={<History />} />
              <Route path="/glossary" element={<Glossary darkMode={darkMode} />} />
              <Route path="/business" element={<BusinessProcess />} />
              <Route path="/gtm-overview" element={<Overview />} />
              <Route path="/gtm-devicesupport" element={<DeviceSupport />} />
              <Route path="/gtm-compland" element={<CompLand />} /> 
              <Route path="/gtm-strengths" element={<Strengths />} />
              <Route path="/customizations" element={<Customizations />} />
              <Route path="/knowledge" element={<KnowledgeBase darkMode={darkMode} />} />
              <Route path="/tools" element={<Tools darkMode={darkMode} />} />
            </Routes>
          </Box>
        </Box>

        <Footer sx={{ flexShrink: 0 }} />
      </Box>
    </Router>
  );
}