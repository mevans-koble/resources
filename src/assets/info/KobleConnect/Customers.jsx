import React from 'react';
import { 
  Container, 
  Typography, 
  Box, 
  Grid, 
  Card, 
  CardContent, 
  Paper, 
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Stack
} from '@mui/material';
import { 
  Groups, 
  ReportProblem, 
  CheckCircle, 
  Factory, 
  Storefront, 
  Construction, 
  DirectionsCar, 
  Engineering,
  TrendingUp
} from '@mui/icons-material';
import PageNavigation from '../../components/PageNavigation';

const Customers = ({ darkMode }) => {
  const industries = [
    {
      title: "Manufacturing & Supply Chain",
      icon: <Factory color="primary" />,
      items: ["Metal & Metal Supply", "Manufacturing", "Supply", "Distribution"]
    },
    {
      title: "Retail & Consumer Goods",
      icon: <Storefront color="primary" />,
      items: ["Retail", "Outdoor Living", "Outdoor Power", "Storage Sheds"]
    },
    {
      title: "Construction & Infrastructure",
      icon: <Construction color="primary" />,
      items: ["Construction", "Equipment", "Mechanical Contracting"]
    },
    {
      title: "Automotive & Fuel",
      icon: <DirectionsCar color="primary" />,
      items: ["Automotive", "Fuel"]
    },
    {
      title: "Industrial Services",
      icon: <Engineering color="primary" />,
      items: ["Hydraulics", "General Service"]
    }
  ];

  return (
    <Container maxWidth="lg" sx={{ mt: 5, mb: 8 }}>
      <PageNavigation 
          darkMode={darkMode}
          prevPath="/products" 
          prevLabel=" Our Products" 
          nextPath="/history" 
          nextLabel=" Our History" 
        />
      <Box sx={{ mb: 6, display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}>
        <Typography variant="h3" fontWeight="800" color="#1f3a30" gutterBottom>
                Our Customers
         </Typography>
       
      </Box>
      <Paper elevation={0} sx={{ p: { xs: 4, md: 6 }, bgcolor: '#1f3a30', color: 'white', borderRadius: 4, mb: 8 }}>
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={7}>
            <Stack direction="row" spacing={2} alignItems="center" sx={{ mb: 2 }}>
              <ReportProblem sx={{ color: '#95ab63', fontSize: 40 }} />
              <Typography variant="h4" fontWeight="bold">The Problem We Solve</Typography>
            </Stack>
            <Typography variant="h6" sx={{ opacity: 0.9, lineHeight: 1.6, fontWeight: 400 }}>
              We help small, fast-growing businesses overcome the chaos of scaling by unifying their 
              inventory, financials, and operations into one streamlined ERP system.
            </Typography>
            <Box sx={{ mt: 3 }}>
              <Stack direction="row" spacing={1} alignItems="center" sx={{ mb: 1 }}>
                <CheckCircle sx={{ color: '#95ab63', fontSize: 20 }} />
                <Typography variant="body1">Reduces manual work & eliminates costly errors</Typography>
              </Stack>
              <Stack direction="row" spacing={1} alignItems="center">
                <CheckCircle sx={{ color: '#95ab63', fontSize: 20 }} />
                <Typography variant="body1">Provides clarity and control for smart decisions</Typography>
              </Stack>
            </Box>
          </Grid>
          <Grid item xs={12} md={5} sx={{ textAlign: 'center' }}>
             <TrendingUp sx={{ fontSize: 180, opacity: 0.1, position: 'absolute', right: 40, top: 40 }} />
             <Box sx={{ p: 3, border: '2px dashed rgba(255,255,255,0.2)', borderRadius: 4 }}>
                <Typography variant="h3" fontWeight="bold" color="#95ab63">$1M – $35M</Typography>
                <Typography variant="overline">Typical Revenue Range</Typography>
             </Box>
          </Grid>
        </Grid>
      </Paper>

      <Box sx={{ mb: 8 }}>
        <Typography variant="h4" fontWeight="bold" color="#1f3a30" gutterBottom>
          Who We Serve
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ fontSize: '1.1rem', maxWidth: 850, mb: 4 }}>
          Our heart is in serving businesses with roots in <strong>conservative Anabaptist culture</strong> experiencing 
          the pressures of growth. However, we are not limited to this market; we catch small-to-mid sized 
          businesses "on the way up" across various high-inventory industries.
        </Typography>
      </Box>

      <Divider sx={{ mb: 6 }} />

      <Typography variant="h5" fontWeight="bold" sx={{ mb: 4, textAlign: 'center' }}>
        Sub-Industries Our Teams Serve
      </Typography>
      
      <Grid container spacing={3} sx={{justifyContent: 'center'}}>
        {industries.map((ind, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card variant="outlined" sx={{ width:"300px",height: '100%', borderRadius: 3, border: '1px solid #e0e0e0' }}>
              <CardContent>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <Box sx={{ p: 1, bgcolor: '#f4f7f4', borderRadius: 2, mr: 2 }}>
                    {ind.icon}
                  </Box>
                  <Typography variant="subtitle1" fontWeight="bold">{ind.title}</Typography>
                </Box>
                <List dense disablePadding>
                  {ind.items.map((item, i) => (
                    <ListItem key={i} sx={{ py: 0.5 }}>
                      <ListItemIcon sx={{ minWidth: 28 }}>
                        <Box sx={{ width: 6, height: 6, bgcolor: '#95ab63', borderRadius: '50%' }} />
                      </ListItemIcon>
                      <ListItemText primary={item} />
                    </ListItem>
                  ))}
                </List>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Box sx={{ mt: 8, p: 4, bgcolor: '#f9fbf9', borderRadius: 4, textAlign: 'center', border: '1px solid #95ab63' }}>
        <Groups sx={{ fontSize: 40, color: '#1f3a30', mb: 1 }} />
        <Typography variant="h6" color="#1f3a30" fontWeight="bold">
          Our Primary Goal
        </Typography>
        <Typography variant="body2" color="text.secondary">
          To catch businesses on the way up and grow with them as their long-term ERP partner.
        </Typography>
      </Box>
    </Container>
  );
};

export default Customers;