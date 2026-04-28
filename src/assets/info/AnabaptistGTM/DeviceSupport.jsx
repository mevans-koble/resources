import React from 'react';
import { 
  Container, Typography, Box, Grid, Card, CardContent, 
  Stack, Divider, Paper, Avatar, Button // Added Button
} from '@mui/material';
import { 
  Security, Router, Storage, Person, AdminPanelSettings, Lan, OpenInNew 
} from '@mui/icons-material';

const DeviceSupport = () => {
  const tools = [
    {
      title: "DrawBridge",
      subtitle: "Compass Foundation",
      description: "A prominent network control tool currently being utilized by clients like Buffalo Valley as they transition away from specialized locked-down devices.",
      icon: <Router color="primary" />,
      tag: "Network Control",
      link: "https://erp.compassfoundation.io/services/drawbridge" 
    },
    {
      title: "Sunlight Enterprise",
      subtitle: "On-Premises Platform",
      description: "A specialized platform for managing locked-down devices within a localized, on-premises environment to ensure strict security standards.",
      icon: <Storage color="primary" />,
      tag: "Device Lock-down",
      link: "https://docs.sunlight.io/on_premise/" 
    }
  ];

  return (
    <Container maxWidth="lg" sx={{ mt: 5, mb: 8 }}>
      <Box sx={{ 
        mb: 6, 
        display: "flex", 
        flexDirection: "column", 
        alignItems: "center", 
        textAlign: "center" 
      }}>
        <Typography variant="h3" fontWeight="800" color="#1f3a30" gutterBottom>
          Device & Network Support
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ fontSize: '1.1rem', maxWidth: 800 }}>
          Providing technical solutions that allow our clients to control their network environments 
          and lock down devices to maintain cultural and operational integrity.
        </Typography>
      </Box>

      {/* CORE TOOLS GRID */}
      <Grid container spacing={4} justifyContent="center" sx={{ mb: 8 }}>
        {tools.map((tool, i) => (
          <Grid item xs={12} md={5} key={i} sx={{ display: 'flex', justifyContent: 'center' }}>
            <Card 
              variant="outlined" 
              sx={{ 
                width: '560px', 
                borderRadius: 4, 
                textAlign: 'center',
                transition: '0.3s',
                '&:hover': { boxShadow: '0 4px 20px rgba(0,0,0,0.08)' }
              }}
            >
              <CardContent sx={{ p: 4 }}>
                <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
                  <Box sx={{ p: 2, bgcolor: '#f4f7f4', borderRadius: '50%' }}>
                    {tool.icon}
                  </Box>
                </Box>
                <Typography variant="h5" fontWeight="bold" color="#1f3a30">
                  {tool.title}
                </Typography>
                <Typography variant="subtitle2" color="primary" sx={{ fontWeight: 'bold', mb: 2 }}>
                  {tool.subtitle}
                </Typography>
                <Divider sx={{ my: 2, mx: 'auto', width: '40%' }} />
                <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.7, mb: 3 }}>
                  {tool.description}
                </Typography>
                
                <Box sx={{ mt: 2 }}>
                  <Button
                    variant="contained"
                    href={tool.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    endIcon={<OpenInNew sx={{ fontSize: '12px !important' }} />}
                    sx={{ 
                      bgcolor: '#1f3a30', 
                      color: 'white',
                      textTransform: 'none',
                      borderRadius: 2,
                      px: 3,
                      '&:hover': {
                        bgcolor: '#2d5445'
                      }
                    }}
                  >
                    {tool.tag}
                  </Button>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Paper 
        sx={{ 
          p: 4, 
          bgcolor: '#f4f7f4', 
          borderRadius: 4, 
          border: '1px solid #e0e0e0',
          textAlign: 'center' 
        }}
      >
        <AdminPanelSettings sx={{ color: '#1f3a30', mb: 1 }} />
        <Typography variant="h6" fontWeight="bold" color="#1f3a30" gutterBottom>
          Key Technical Contacts
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
          For inquiries regarding specific hardware configurations or lock-down implementations:
        </Typography>
        
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <Stack direction="row" spacing={3} alignItems="center">
            <Avatar sx={{ bgcolor: '#1f3a30' }}>
              <Person />
            </Avatar>
            <Box sx={{ textAlign: 'left' }}>
              <Typography variant="subtitle1" fontWeight="bold">
                Daniel Miller
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Technical Representative (Hoover Tractor)
              </Typography>
            </Box>
          </Stack>
        </Box>
      </Paper>

    
    </Container>
  );
};

export default DeviceSupport;