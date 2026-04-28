import React from 'react';
import { 
  Container, Typography, Box, Grid, Card, CardContent, 
  Avatar, Divider, Stack, List, ListItem, ListItemIcon, ListItemText 
} from '@mui/material';
import { Groups } from '@mui/icons-material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const Roles = () => {
  const leadership = [
    { title: "Chief Executive Officer", initials: "CEO", points: ["Leads the company in providing ERP solutions.", "Focuses on implementation and growth.", "Aligns people and technology.", "Oversees strategic direction."] },
    { title: "Chief Technical Officer", initials: "CTO", points: ["Implements technology strategies.", "Manages engineering teams.", "Ensures software scalability.", "Drives innovation."] },
    { title: "VP of Sales", initials: "VPS", points: ["Executes sales strategies.", "Leads sales team performance.", "Builds client relationships.", "Collaborates on business objectives."] },
    { title: "Head of HR", initials: "HR", points: ["Ensures meaningful work operations.", "Implements efficiency systems.", "Strengthens company culture."] },
    { title: "Head of Product", initials: "HOP", points: ["Oversees ERP development.", "Guides product strategy.", "Ensures client needs are met.", "Collaborates with cross-functional teams."] },
    { title: "Chief Financial Officer", initials: "CFO", points: ["Oversees financial planning.", "Aligns goals with executives.", "Ensures compliance and investor relations.", "Leads accounting and controls."] },
    { title: "Chief Client Officer", initials: "CCO", points: ["Leads client growth.", "Provides tailored solutions.", "Enhances operational efficiency.", "Engages in public speaking."] }
  ];

  return (
    <Container maxWidth="lg" sx={{ mt: 5, mb: 8 }}>
      <Box sx={{ mb: 6, textAlign: 'center' }}>
        <Typography variant="h3" fontWeight="800" color="#1f3a30" gutterBottom>
          Our Roles
        </Typography>
      </Box>

      <Typography 
        variant="h4" 
        fontWeight="bold" 
        sx={{ 
          mb: 4, 
          textAlign: 'center', 
          display: 'flex', 
          justifyContent: 'center', 
          alignItems: 'center' 
        }}
      >
        <Groups sx={{ mr: 2, fontSize: 40, color: '#1f3a30' }} /> Leadership
      </Typography>
      
      <Grid 
        container 
        spacing={4} 
        sx={{ 
          display: 'flex', 
          flexWrap: 'wrap', 
          justifyContent: 'center', 
          alignItems: 'stretch'   
        }}
      >
        {leadership.map((leader, index) => (
          <Grid 
            item 
            key={index} 
            sx={{ 
              display: 'flex', 
              justifyContent: 'center',
            
              flex: '0 0 auto', 
              width: { xs: '100%', sm: 'auto' } 
            }}
          >
            <Card 
              variant="outlined" 
              sx={{ 
                borderRadius: 4, 
                borderTop: '6px solid #1f3a30', 
                width: '350px',
                height: '100%',  
                display: 'flex', 
                flexDirection: 'column',
                boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
                boxSizing: 'border-box' 
              }}
            >
              <CardContent sx={{ flexGrow: 1, p: 3, display: 'flex', flexDirection: 'column' }}>
                <Stack 
                  direction="row" 
                  spacing={2} 
                  alignItems="center" 
                  sx={{ minHeight: 64, mb: 2 }}
                >
                  <Avatar sx={{ bgcolor: '#95ab63', fontWeight: 'bold', width: 44, height: 44, flexShrink: 0 }}>
                    {leader.initials}
                  </Avatar>
                  <Typography variant="subtitle1" fontWeight="bold" sx={{ lineHeight: 1.2 }}>
                    {leader.title}
                  </Typography>
                </Stack>
                
                <Divider sx={{ mb: 2 }} />

                <Box sx={{ flexGrow: 1 }}>
                  <List dense disablePadding>
                    {leader.points.map((point, i) => (
                      <ListItem key={i} sx={{ alignItems: 'flex-start', px: 0, py: 0.5 }}>
                        <ListItemIcon sx={{ minWidth: 24, mt: 0.5 }}>
                          <CheckCircleIcon sx={{ fontSize: 16, color: '#95ab63' }} />
                        </ListItemIcon>
                        <ListItemText 
                          primary={point} 
                          primaryTypographyProps={{ variant: 'body2', color: 'text.secondary', lineHeight: 1.4 }} 
                        />
                      </ListItem>
                    ))}
                  </List>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Roles;