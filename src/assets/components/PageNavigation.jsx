import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import { ArrowBack, ArrowForward } from '@mui/icons-material';
import { Link } from 'react-router-dom';

const PageNavigation = ({ prevPath, prevLabel, nextPath, nextLabel, darkMode }) => {
  return (
    <Box sx={{ 
      display: 'flex', 
      justifyContent: 'space-between', 
      alignItems: 'center', 
      mt: 6, 
      pt: 2, 
      borderTop: `1px solid ${darkMode ? '#444' : '#e0e0e0'}` 
    }}>
      {/* Left / Previous Button */}
      <Box sx={{ minWidth: '100px' }}>
        {prevPath && (
          <Button
            component={Link}
            to={prevPath}
            startIcon={<ArrowBack />}
            sx={{ color: '#95ab63', textTransform: 'none', fontWeight: 'bold' }}
          >
            <Box sx={{ textAlign: 'left', ml: 1 }}>
              <Typography variant="caption" display="block" sx={{ opacity: 0.7, color: 'text.secondary' }}>
                Previous 
              </Typography>
              {prevLabel}
            </Box>
          </Button>
        )}
      </Box>

      {/* Right / Next Button */}
      <Box sx={{ minWidth: '100px', textAlign: 'right' }}>
        {nextPath && (
          <Button
            component={Link}
            to={nextPath}
            endIcon={<ArrowForward />}
            sx={{ color: '#1f3a30', bgcolor: '#e8f0e6', px: 2, py: 1, borderRadius: 2, textTransform: 'none', fontWeight: 'bold', '&:hover': { bgcolor: '#d4e3d1' } }}
          >
            <Box sx={{ textAlign: 'right', mr: 1 }}>
              <Typography variant="caption" display="block" sx={{ opacity: 0.7, color: '#1f3a30' }}>
                Next Up
              </Typography>
              {nextLabel}
            </Box>
          </Button>
        )}
      </Box>
    </Box>
  );
};

export default PageNavigation;