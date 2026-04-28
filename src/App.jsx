import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Box, CssBaseline, Toolbar } from '@mui/material';
import Navbar from './assets/components/Navbar';
import Footer from './assets/components/Footer';
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

export default function App() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <Router>
      <Box sx={{ 
        display: 'flex', 
        flexDirection: 'column', 
        height: '100vh', 
        overflow: 'hidden' 
      }}>
        <CssBaseline />
        
  
        <Navbar 
          mobileOpen={mobileOpen} 
          onDrawerToggle={() => setMobileOpen(!mobileOpen)} 
        />

   
        <Box
          component="main"
          sx={{
            flexGrow: 1, 
            overflowY: 'auto', 
            display: 'flex',
            flexDirection: 'column',
            backgroundColor: '#ffffff'
          }}
        >
     
          <Toolbar /> 
          
          <Box sx={{ p: 3, flexGrow: 1 }}>
            <Routes>
              <Route path="/about" element={<Connect />} /> 
              <Route path="/mission" element={<Mission />} /> 
              <Route path="/peopleprinciples" element={<PeoplePrinciples />} />
              <Route path="/products" element={<Products />} />
              <Route path="/customers" element={<Customers />} />
              <Route path="/roles" element={<Roles />} />
              <Route path="/history" element={<History />} />
              <Route path="/glossary" element={<Glossary />} />
              <Route path="/business" element={<BusinessProcess />} />
              <Route path="/gtm-overview" element={<Overview />} />
              <Route path="/gtm-devicesupport" element={<DeviceSupport />} />
              <Route path="/gtm-compland" element={<CompLand />} /> 
              <Route path="/gtm-strengths" element={<Strengths />} />
              <Route path="/customizations" element={<Customizations />} />
            </Routes>
          </Box>
        </Box>

    
        <Footer sx={{ flexShrink: 0 }} />
      </Box>
    </Router>
  );
}