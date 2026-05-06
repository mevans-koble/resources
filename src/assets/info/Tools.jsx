import React, { useState } from 'react';
import { 
  Container, Typography, Box, Grid, Card, CardContent, 
  Divider, Button, Paper, Stack, TextField, InputAdornment 
} from '@mui/material';
import { Launch, Search as SearchIcon } from '@mui/icons-material';
import { toolsData } from './ToolsData'; 

const Tools = ({ darkMode }) => {
  const [searchTerm, setSearchTerm] = useState("");

  
  const displayTools = toolsData
    .filter((tool) => {
      const search = searchTerm.toLowerCase();
      return (
        tool.title.toLowerCase().includes(search) ||
        tool.tag.toLowerCase().includes(search) ||
        tool.desc.toLowerCase().includes(search)
      );
    })
    .sort((a, b) => a.title.localeCompare(b.title));

  return (
    <Container maxWidth="lg" sx={{ mt: 5, mb: 8 }}>
      {/* Header Section */}
      <Box sx={{ mb: 6, display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}>
        <Typography variant="h3" fontWeight="800" color={darkMode ? "#ffffff" : "#1f3a30"} gutterBottom>
          System Tools
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ fontSize: '1.1rem', maxWidth: 800, mb: 4 }}>
          Direct access to the administrative, development, and management portals 
          that power Koble Systems operations.
        </Typography>

        {/* Search Bar */}
        <TextField
          placeholder="Search by name, tag, or function..."
          variant="outlined"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          fullWidth
          sx={{
            maxWidth: 500,
            bgcolor: darkMode ? '#2d2d2d' : '#ffffff',
            borderRadius: 3,
            '& .MuiOutlinedInput-root': {
              color: 'inherit',
              '& fieldset': { borderColor: darkMode ? '#444' : '#e0e0e0' },
              '&:hover fieldset': { borderColor: '#95ab63' },
            }
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon sx={{ color: 'text.secondary' }} />
              </InputAdornment>
            ),
          }}
        />
      </Box>

      {/* Grid Section */}
      <Grid container spacing={3} justifyContent="center">
        {displayTools.length > 0 ? (
          displayTools.map((tool) => (
            <Grid item key={tool.title} sx={{ display: 'flex', justifyContent: 'center', flex: '0 0 auto', width: { xs: '100%', sm: '320px' } }}>
              <Card 
                variant="outlined" 
                sx={{ 
                  width: '280px', 
                  borderRadius: 4, 
                  textAlign: 'center',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: '0.3s',
                  '&:hover': { transform: 'translateY(-4px)', boxShadow: darkMode ? '0 8px 24px rgba(0,0,0,0.5)' : '0 8px 24px rgba(0,0,0,0.1)' },
                  bgcolor: darkMode ? '#2d2d2d' : '#ffffff',
                  borderColor: darkMode ? '#444' : '#e0e0e0',
                  color: 'inherit'
                }}
              >
                <CardContent sx={{ flexGrow: 1, p: 3 }}>
                  <Box sx={{ mb: 2, display: 'flex', justifyContent: 'center' }}>
                    <Box sx={{ p: 1.5, bgcolor: darkMode ? '#3d3d3d' : '#f4f7f4', borderRadius: 3 }}>
                      {tool.icon}
                    </Box>
                  </Box>
                  
                  <Typography variant="h6" fontWeight="bold" color={darkMode ? "#ffffff" : "#1f3a30"} gutterBottom>
                    {tool.title}
                  </Typography>
                  
                  <Typography variant="caption" sx={{ bgcolor: darkMode ? '#1f3a30' : '#e8f0e6', color: darkMode ? '#ffffff' : '#1f3a30', px: 1.5, py: 0.5, borderRadius: 1, fontWeight: 'bold', mb: 2, display: 'inline-block' }}>
                    {tool.tag}
                  </Typography>

                  <Typography variant="body2" sx={{ mt: 1.5, fontSize: '0.875rem', color: darkMode ? '#b0b0b0' : 'text.secondary' }}>
                    {tool.desc}
                  </Typography>
                </CardContent>

                <Divider sx={{ borderColor: darkMode ? '#444' : 'divider' }} />
                
                <Box sx={{ p: 2, bgcolor: darkMode ? '#252525' : '#f9fbf9' }}>
                  <Button 
                    fullWidth
                    variant="contained" 
                    href={tool.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    endIcon={<Launch sx={{ fontSize: 14 }} />}
                    sx={{ 
                      bgcolor: '#1f3a30', 
                      borderRadius: 2,
                      textTransform: 'none',
                      fontWeight: 'bold',
                      '&:hover': { bgcolor: '#2d5445' }
                    }}
                  >
                    Launch App
                  </Button>
                </Box>
              </Card>
            </Grid>
          ))
        ) : (
          <Box sx={{ mt: 4, textAlign: 'center' }}>
            <Typography variant="h6" color="text.secondary">
              No tools match your search "{searchTerm}"
            </Typography>
          </Box>
        )}
      </Grid>

      {/* Footer Info Box */}
      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 8 }}>
        <Paper sx={{ p: 3, bgcolor: darkMode ? '#1f3a30' : '#f4f7f4', borderRadius: 4, textAlign: 'center', maxWidth: 800, width: '100%', border: '1px dashed #ccc', color: darkMode ? '#ffffff' : '#1f3a30' }}>
          <Stack direction="row" spacing={1} justifyContent="center" alignItems="center">
            <Typography variant="body2" sx={{ color: 'inherit', opacity: 0.8 }}>
              Most tools require <strong>Single Sign-On (SSO)</strong> or specific Azure DevOps / Salesforce permissions. 
              Contact the Systems Admin if you encounter an access denied error.
            </Typography>
          </Stack>
        </Paper>
      </Box>
    </Container>
  );
};

export default Tools;