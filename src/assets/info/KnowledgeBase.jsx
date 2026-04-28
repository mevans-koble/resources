import React from 'react';
import { 
  Container, Typography, Box, Grid, Card, CardContent, 
  Stack, Paper, Button, Divider 
} from '@mui/material';
import { 
  MenuBook, 
  Launch, 
  Terminal, 
  LibraryBooks, 
  Assignment 
} from '@mui/icons-material';

const KnowledgeBase = () => {
  const resources = [
    {
      title: "EBMS Knowledge Base",
      desc: "The primary customer-facing documentation for EBMS software features and workflows.",
      link: "https://koblesystems.com/knowledge",
      icon: <LibraryBooks color="primary" />,
      tag: "Customer Facing"
    },
    {
      title: "Eagle Knowledge Base",
      desc: "Comprehensive support and technical documentation hosted on the legacy Eagle info portal.",
      link: "https://info.eaglebusinesssoftware.com/support/knowledgebase",
      icon: <MenuBook color="primary" />,
      tag: "Support Archive"
    },
    {
      title: "Boggle Search",
      desc: "Internal search tool for querying user data and system records.",
      link: "http://bog.eshcom.com:56565/?q=user",
      icon: <Terminal color="primary" />,
      tag: "Internal Tool"
    },
    {
      title: "Fact Sheets & Documents",
      desc: "Centralized SharePoint library for Partners, Fact Sheets, and the Content Library.",
      link: "https://eshcomputer.sharepoint.com/sites/Partners/Shared%20Documents/Forms/AllItems.aspx?id=%2Fsites%2FPartners%2FShared%20Documents%2FContent%20Library%2FFact%20Sheets",
      icon: <Assignment color="primary" />,
      tag: "SharePoint Library"
    },
    {
      title: "Koble Team OneNote",
      desc: "Collaborative team notes and internal strategy documents.",
      link: "https://eshcomputer-my.sharepoint.com/:o:/g/personal/bryan_l_koblesystems_com/IgBc9ct7o8mrTJnXVEVhXNQuAdPlnDJvqvBVpkTZGX6SCDo?e=Q9uMAu",
      icon: <MenuBook sx={{ color: '#77357a' }} />, // OneNote Purple
      tag: "Shared Notebook"
    }
  ];

  return (
    <Container maxWidth="lg" sx={{ mt: 5, mb: 8 }}>
      <Box sx={{ mb: 8, display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}>
        <LibraryBooks sx={{ fontSize: 48, color: '#1f3a30', mb: 2 }} />
        <Typography variant="h3" fontWeight="800" color="#1f3a30" gutterBottom>
          Knowledge Base
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ fontSize: '1.1rem', maxWidth: 800 }}>
          Direct access to our external technical documentation, internal search tools, 
          and shared asset libraries.
        </Typography>
      </Box>

      <Grid container spacing={4} justifyContent="center">
        {resources.map((resource, i) => (
          <Grid item xs={12} sm={6} md={4} key={i} sx={{ display: 'flex', justifyContent: 'center' }}>
            <Card 
              variant="outlined" 
              sx={{ 
                width: '100%', 
                maxWidth: 340, 
                borderRadius: 4, 
                textAlign: 'center',
                display: 'flex',
                flexDirection: 'column',
                transition: '0.3s',
                '&:hover': { transform: 'translateY(-5px)', boxShadow: '0 8px 24px rgba(0,0,0,0.1)' }
              }}
            >
              <CardContent sx={{ flexGrow: 1, p: 3 }}>
                <Box sx={{ mb: 2, display: 'flex', justifyContent: 'center' }}>
                  <Box sx={{ p: 2, bgcolor: '#f4f7f4', borderRadius: '50%' }}>
                    {resource.icon}
                  </Box>
                </Box>
                
                <Typography variant="h6" fontWeight="bold" gutterBottom color="#1f3a30">
                  {resource.title}
                </Typography>
                
                <Typography variant="caption" sx={{ bgcolor: '#e8f0e6', px: 1.5, py: 0.5, borderRadius: 1, fontWeight: 'bold', mb: 2, display: 'inline-block' }}>
                  {resource.tag}
                </Typography>

                <Typography variant="body2" color="text.secondary" sx={{ mt: 2, lineHeight: 1.6 }}>
                  {resource.desc}
                </Typography>
              </CardContent>

              <Divider />
              
              <Box sx={{ p: 2, bgcolor: '#f9fbf9' }}>
                <Button 
                  fullWidth
                  variant="contained" 
                  href={resource.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  endIcon={<Launch sx={{ fontSize: 14 }} />}
                  sx={{ 
                    bgcolor: '#1f3a30', 
                    borderRadius: 2,
                    textTransform: 'none',
                    '&:hover': { bgcolor: '#2d5445' }
                  }}
                >
                  Open Resource
                </Button>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Paper sx={{ mt: 8, p: 3, bgcolor: '#f4f7f4', borderRadius: 4, textAlign: 'center', border: '1px dashed #ccc' }}>
        <Typography variant="body2" color="text.secondary">
          <strong>Note:</strong> Some resources (SharePoint, OneNote, Boggle) require internal authentication. 
          Ensure you are logged into your <strong>Koble Systems</strong> account to gain access.
        </Typography>
      </Paper>
    </Container>
  );
};

export default KnowledgeBase;