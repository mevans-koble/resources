import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { 
  Container, Typography, Box, Grid, Card, CardContent, 
  CardActionArea, Stack, Paper, Divider, Chip 
} from '@mui/material';
import { 
  Description, Gavel, MenuBook, AccountTree, 
  Verified, AutoFixHigh, LibraryBooks, Settings
} from '@mui/icons-material';

const Home = () => {
  // Main Categories - easy to add more here
  const sections = [
    {
      title: "Koble Connect",
      subtitle: "Internal Culture",
      desc: "Mission, Pillars, and People Principles that define who we are.",
      path: "/about",
      icon: <Description sx={{ fontSize: 32 }} />,
      color: "#1f3a30"
    },
    {
      title: "Anabaptist GTM",
      subtitle: "Market Strategy",
      desc: "Strategy, competitive landscape, and strengths for the Anabaptist segment.",
      path: "/gtm-overview",
      icon: <Gavel sx={{ fontSize: 32 }} />,
      color: "#95ab63"
    },
    {
      title: "Documentation",
      subtitle: "Technical & Ops",
      desc: "Standard Operating Procedures, technical guides, and system manuals.",
      path: "/docs", // Future path
      icon: <LibraryBooks sx={{ fontSize: 32 }} />,
      color: "#2c5282" // Blue tone to differentiate
    }
  ];

  const quickLinks = [
    { title: "Glossary", path: "/glossary", icon: <MenuBook /> },
    { title: "Processes", path: "/business", icon: <AccountTree /> },
    { title: "Strengths", path: "/gtm-strengths", icon: <Verified /> },
    { title: "Customizations", path: "/customizations", icon: <AutoFixHigh /> },
  ];

  return (
    <Container maxWidth="lg" sx={{ mt: 8, mb: 8 }}>
      {/* HEADER SECTION */}
      <Box sx={{ 
        textAlign: 'center', 
        mb: 8, 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center' 
      }}>
        <Typography variant="h2" fontWeight="800" color="#1f3a30" gutterBottom sx={{ fontSize: { xs: '2.5rem', md: '3.75rem' } }}>
          Resource Hub
        </Typography>
        <Typography variant="h5" color="text.secondary" sx={{ maxWidth: 700, lineHeight: 1.6 }}>
          The centralized intelligence center for Koble Systems. 
          Access internal culture, market strategy, and technical resources.
        </Typography>
      </Box>

      {/* MAIN NAVIGATION PILLARS */}
      <Grid container spacing={4} justifyContent="center" sx={{ mb: 10 }}>
        {sections.map((pillar, i) => (
          <Grid item xs={12} sm={6} md={4} key={i} sx={{ display: 'flex', justifyContent: 'center' }}>
            <Card 
              sx={{ 
                width: '100%', 
                maxWidth: 360,
                borderRadius: 4, 
                transition: '0.3s',
                border: `1px solid #e0e0e0`,
                '&:hover': { transform: 'translateY(-8px)', boxShadow: '0 12px 30px rgba(0,0,0,0.1)' }
              }}
            >
              <CardActionArea component={RouterLink} to={pillar.path} sx={{ p: 4, height: '100%' }}>
                <Stack spacing={2}>
                  <Box sx={{ 
                    width: 56, 
                    height: 56, 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    bgcolor: `${pillar.color}15`, 
                    color: pillar.color, 
                    borderRadius: 3 
                  }}>
                    {pillar.icon}
                  </Box>
                  <Box>
                    <Typography variant="overline" fontWeight="bold" color="text.disabled">
                      {pillar.subtitle}
                    </Typography>
                    <Typography variant="h5" fontWeight="bold" color="#1f3a30">
                      {pillar.title}
                    </Typography>
                  </Box>
                  <Typography variant="body2" color="text.secondary">
                    {pillar.desc}
                  </Typography>
                </Stack>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* QUICK ACCESS TOOLS */}
      <Box sx={{ width: '100%' }}>
        <Divider sx={{ mb: 6 }}>
          <Chip label="UTILITIES & QUICK LINKS" sx={{ fontWeight: 'bold', color: '#1f3a30', px: 2 }} />
        </Divider>

        <Grid container spacing={3} justifyContent="center">
          {quickLinks.map((link, i) => (
            <Grid item xs={6} sm={3} key={i} sx={{ display: 'flex', justifyContent: 'center' }}>
              <Paper
                component={RouterLink}
                to={link.path}
                variant="outlined"
                sx={{
                  width: '100%',
                  maxWidth: 200,
                  p: 3,
                  textAlign: 'center',
                  borderRadius: 3,
                  textDecoration: 'none',
                  color: '#1f3a30',
                  transition: '0.2s',
                  '&:hover': { bgcolor: '#f4f7f4', borderColor: '#95ab63' }
                }}
              >
                <Box sx={{ mb: 1, color: '#95ab63' }}>{link.icon}</Box>
                <Typography variant="subtitle2" fontWeight="bold">
                  {link.title}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default Home;