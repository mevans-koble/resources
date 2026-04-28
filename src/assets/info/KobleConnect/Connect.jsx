import React from 'react';
import { 
  Container, 
  Typography, 
  Box, 
  Divider, 
  List, 
  ListItem, 
  ListItemIcon, 
  ListItemText,
  Paper
} from '@mui/material';
import { 
  Groups, 
  AccountTree, 
  Stars 
} from '@mui/icons-material';

const KobleConnect = () => {
  const highlightItems = [
    { text: "Company mission, values, and vision", icon: <Stars color="primary" /> },
    { text: "Organizational structure", icon: <AccountTree color="primary" /> },
    { text: "Leadership Principles", icon: <Stars color="primary" /> },
    { text: "Other full-company relevant information", icon: <Groups color="primary" /> },
  ];

  return (
    <Container maxWidth="md" sx={{ mt: 5, mb: 5 }}>
      <Box sx={{ mb: 6, textAlign: 'center' }}>
        <Typography variant="h3" component="h1" gutterBottom fontWeight="800" color="#1f3a30">
          Koble Connect
        </Typography>
        <Typography variant="h6" color="text.secondary" sx={{ fontStyle: 'italic' }}>
          "Helping individuals and organizations thrive."
        </Typography>
      </Box>

      <Paper elevation={0} sx={{ p: 4, bgcolor: '#f9fbf9', borderRadius: 4, border: '1px solid #e0e0e0' }}>
        <Typography variant="h5" gutterBottom fontWeight="bold" color="#1f3a30">
          Introduction
        </Typography>
        <Typography variant="body1" paragraph sx={{ lineHeight: 1.7 }}>
          At Koble, we work not just out of love for ERP software but because we believe work is inherently good. 
          While we value our product, designed to help individuals and organizations thrive, our mission is to 
          bless customers, honor each other, and build communities. We expect our team to take ownership 
          and lead in their roles.
        </Typography>

        <Divider sx={{ my: 4 }} />

        <Typography variant="h5" gutterBottom fontWeight="bold" color="#1f3a30">
          A Centralized Information Hub
        </Typography>
        <Typography variant="body1" paragraph>
          <strong>Koble Connect</strong> is an internal site for employees, new and old, and it is your starting 
          point to understand who we are and what we do. It acts as a single source of truth for everything 
          a new hire needs to know, including:
        </Typography>

        <List>
          {highlightItems.map((item, index) => (
            <ListItem key={index} disableGutters>
              <ListItemIcon sx={{ minWidth: 40 }}>
                {item.icon}
              </ListItemIcon>
              <ListItemText 
                primary={item.text} 
                primaryTypographyProps={{ variant: 'body1', fontWeight: 500 }}
              />
            </ListItem>
          ))}
        </List>

        <Box sx={{ mt: 4, p: 2, bgcolor: '#e8f0e6', borderRadius: 2 }}>
          <Typography variant="body2" color="#1f3a30">
            For more details on our Mission, Vision, Values, and Pillars, please visit the 
            <strong> Our Mission and Pillars of Success</strong> page.
          </Typography>
        </Box>
      </Paper>
    </Container>
  );
};

export default KobleConnect;