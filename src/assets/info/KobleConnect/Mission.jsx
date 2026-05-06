import React from 'react';
import { 
  Container, 
  Typography, 
  Box, 
  Grid, 
  Card, 
  CardContent, 
  Divider, 
  Paper,
  Stack
} from '@mui/material';
import { 
  VolunteerActivism, 
  Handshake, 
  EmojiPeople, 
  TrendingUp, 
  Autorenew, 
} from '@mui/icons-material';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import PageNavigation from '../../components/PageNavigation';

const MissionPillars = ({darkMode}) => {
  const values = [
    {
      title: "Bless the Customer",
      desc: "We win when our customers win; we build systems to work for people (not the other way around).",
      icon: <VolunteerActivism sx={{ color: '#1f3a30' }} />
    },
    {
      title: "Honor Each Other",
      desc: "We cheerfully rise to the challenge and execute on great ideas; we sharpen each other as we learn and grow.",
      icon: <Handshake sx={{ color: '#1f3a30' }} />
    },
    {
      title: "Build Our Communities",
      desc: "Wherever we are, we bring people together and make things better than they were yesterday.",
      icon: <EmojiPeople sx={{ color: '#1f3a30' }} />
    }
  ];

  const pillars = [
    { 
      title: "Net New Customers", 
      team: "Sales Team", 
      desc: "Focused on bringing in new logos.",
      icon: <TrendingUp fontSize="large" color="primary" /> 
    },
    { 
      title: "Renew Subscriptions", 
      team: "Client Success", 
      desc: "Focused on retaining the logos we have.",
      icon: <Autorenew fontSize="large" color="primary" /> 
    },
    { 
      title: "Add to Subscriptions", 
      team: "Client Success", 
      desc: "Focused on growing accounts via the solution evolution plan.",
      icon: <AddCircleIcon fontSize="large" color="primary" /> 
    }
  ];

  return (
    <Container maxWidth="lg" sx={{ mt: 5, mb: 8 }}>
      <PageNavigation 
          darkMode={darkMode}
          prevPath="/about" 
          prevLabel=" Intro" 
          nextPath="/peopleprinciples" 
          nextLabel=" People and Principles" 
        />
      <Box sx={{ mb: 8, textAlign: 'center' }}>
      
        <Typography variant="h3" component="h2" gutterBottom fontWeight="800" color="#1f3a30">
          Make Business Growth Easier
        </Typography>
        <Typography variant="h6" sx={{ maxWidth: 700, mx: 'auto', color: 'text.secondary', lineHeight: 1.6 }}>
          By putting ERP software to work, we create better business, more productive teams, and stronger communities.
        </Typography>
      </Box>

      <Box sx={{ mb: 10, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Typography variant="h4" gutterBottom fontWeight="bold" sx={{ mb: 4 }}>
          Core Values
        </Typography>
        <Grid container spacing={3} sx={{justifyContent: 'center'}}>
          {values.map((val, i) => (
            <Grid item xs={12} md={4} key={i}>
              <Card variant="outlined" sx={{width:"600px" ,height: '100%', borderRadius: 4, transition: '0.3s', '&:hover': { transform: 'translateY(-5px)', boxShadow: 3 } }}>
                <CardContent sx={{ p: 3 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    {val.icon}
                    <Typography variant="h6" sx={{ ml: 1, fontWeight: 'bold' }}>{val.title}</Typography>
                  </Box>
                  <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.7 }}>
                    {val.desc}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      <Divider sx={{ mb: 10 }} />

      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Typography variant="h4" gutterBottom fontWeight="bold">
          Pillars of Business Success
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ mb: 4, maxWidth: 800, textAlign: 'center', }}>
          Our SaaS business model relies on three constructural elements. While owned by specific teams, success requires the joint effort of everyone in the company.
        </Typography>

        <Grid container spacing={4}>
          {pillars.map((pillar, i) => (
            <Grid item xs={12} md={4} key={i}>
              <Paper elevation={0} sx={{ p: 4, textAlign: 'center', bgcolor: '#f4f7f4', borderRadius: 4, border: '1px solid #e0e0e0', width:"350px" }}>
                <Box sx={{ mb: 2 }}>{pillar.icon}</Box>
                <Typography variant="h6" fontWeight="bold">{pillar.title}</Typography>
                <Typography variant="caption" color="primary" sx={{ textTransform: 'uppercase', fontWeight: 'bold', display: 'block', mb: 1 }}>
                  {pillar.team}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {pillar.desc}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>

        <Box sx={{ mt: 6, p: 3, bgcolor: '#1f3a30', color: 'white', borderRadius: 2, textAlign: 'center' }}>
          <Typography variant="body1">
            How does your work impact these pillars? Success does not happen in a vacuum.
          </Typography>
        </Box>
      </Box>
    </Container>
  );
};

export default MissionPillars;