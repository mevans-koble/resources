import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { 
  Container, Typography, Box, Grid, Card, CardContent, 
  CardActionArea, Stack, Paper, Divider, Chip 
} from '@mui/material';
import { 
  Description, 
  Build, 
  LibraryBooks, 
  MenuBook, 
  AccountTree, 
  CompareArrows, 
  AutoFixHigh,
  Explore
} from '@mui/icons-material';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';

const Home = () => {
  // Main Pillars: Knowledge, Koble Connect, Tools
  const sections = [
    {
      title: "Knowledge Base",
      subtitle: "Research & Documentation",
      desc: "Centralized access to EBMS guides, Boggle, SharePoint libraries, and team OneNote.",
      path: "/knowledge",
      icon: <LibraryBooks sx={{ fontSize: 32 }} />,
      color: "#2c5282" // Professional Blue
    },
     {
      title: "System Tools",
      subtitle: "Active Portals",
      desc: "Direct links to Salesforce, Landis, Cloudflare, Azure Repos, and API monitoring.",
      path: "/tools",
      icon: <Build sx={{ fontSize: 32 }} />,
      color: "#95ab63" // Koble Light Green
    },
    {
      title: "Koble Connect",
      subtitle: "Internal Culture",
      desc: "Our mission, people principles, and the history that defines our company identity.",
      path: "/about",
      icon: <Description sx={{ fontSize: 32 }} />,
      color: "#1f3a30" // Koble Dark Green
    },
   
  ];

  // Updated Quick Links for GTM Strategy and Utilities
  const quickLinks = [
      { title: "Glossary", path: "/glossary", icon: <MenuBook /> },
      { title: "People and Principles", path: "/peopleprinciples", icon: <PeopleAltIcon /> },
      { title: "Products", path: "/products", icon: <Explore /> },
      { title: "Competitors", path: "/gtm-compland", icon: <CompareArrows /> },
      { title: "Strengths", path: "/gtm-strengths", icon: <FitnessCenterIcon /> },
  ];

  return (
    <Container maxWidth="lg" sx={{ mt: 8, mb: 8 }}>
      {/* HEADER SECTION - Centered Standard */}
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
        <Typography variant="h5" color="text.secondary" sx={{ maxWidth: 750, lineHeight: 1.6 }}>
          The centralized intelligence center for Koble Systems. 
          Manage your tools, access shared knowledge, and connect with our culture.
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

      <Box sx={{ width: '100%' }}>
        <Divider sx={{ mb: 6 }}>
          <Chip label="Quick Links" sx={{ fontWeight: 'bold', color: '#1f3a30', px: 2 }} />
        </Divider>

        <Grid container spacing={3} justifyContent="center" sx={{justifyContent: 'center'}}>
          {quickLinks.map((link, i) => (
            <Grid item xs={6} sm={3} key={i} sx={{ display: 'flex', justifyContent: 'center' }}>
              <Paper
                component={RouterLink}
                to={link.path}
                variant="outlined"
                sx={{
                  width: '150px',
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