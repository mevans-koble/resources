import React from 'react';
import { Box, Container, Typography, Link, Stack } from '@mui/material';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        py: 3,
        px: 2,
        mt: 'auto',
        backgroundColor: '#1f3a30',
        color: 'white',
        width:"100%"
      }}
    >
      <Container maxWidth={false} sx={{ display: 'flex', justifyContent: 'start' }}>
        <Stack 
          direction={{ xs: 'column', sm: 'row' }} 
          justifyContent="space-between" 
          alignItems="center"
          spacing={2}
        >
          <Typography variant="body2">
            © Copyright {new Date().getFullYear()} 
          </Typography>
          <div>|</div>
          <Stack direction="row" spacing={3}>
            <Link href="https://koblesystems.com/" color="inherit" underline="hover" target="_blank" 
                  rel="noopener noreferrer" sx={{ fontSize: '0.875rem' }}>
              Koble Systems, Inc.
            </Link>
            <div>|</div>
            <Link color="inherit" underline="hover" sx={{ fontSize: '0.875rem' }}>
              350 New Holland Ave., Lancaster PA
            </Link>
            <div>|</div>
            <Link href="https://koblesystems.com/knowledge/website-privacy-policy" target="_blank" 
                  rel="noopener noreferrer" color="inherit" underline="hover" sx={{ fontSize: '0.875rem' }}>
              Privacy Policy
            </Link>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;