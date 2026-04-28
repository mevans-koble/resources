import React from 'react';
import { 
  Container, Typography, Box, Grid, Card, CardContent, 
  Stack, Divider, Chip, Paper, Accordion, AccordionSummary, 
  AccordionDetails, List, ListItem, ListItemIcon, ListItemText, Button
} from '@mui/material';
import { 
  ExpandMore, TrendingUp, Groups, Gavel, CheckCircle, 
  Warning, Biotech, Assessment, Payments, Factory, 
  LocalShipping, Psychology, Description
} from '@mui/icons-material';

const GTMOverview = () => {
  return (
    <Container maxWidth="lg" sx={{ mt: 5, mb: 8 }}>
      <Box sx={{ mb: 6, display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
        
        <Typography variant="h3" fontWeight="800" color="#1f3a30" gutterBottom>
          Conservative Anabaptist GTM
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ fontSize: '1.1rem', maxWidth: 850 }}>
          Helping small growing businesses overcome scaling chaos by unifying inventory, 
          financials, and operations into a single system of truth.
        </Typography>
      </Box>

      <Grid container spacing={3} sx={{ mb: 6, justifyContent:"center", alignItems:"center" }}>
        {[
          { label: 'Market Size', value: '8k - 12k', sub: 'Businesses', icon: <Groups /> },
          { label: 'Growth Rate', value: '3.5%', sub: 'YoY Growth', icon: <TrendingUp /> },
          { label: 'Rev. Range', value: '$1M - $35M', sub: 'Primary Target', icon: <Assessment /> },
          { label: 'New Sales KPI', value: '$840k', sub: 'Annual Target', icon: <Payments /> },
        ].map((stat, i) => (
          <Grid item xs={12} sm={6} md={3} key={i}>
            <Paper variant="outlined" sx={{ p: 3, textAlign: 'center', borderRadius: 4, bgcolor: '#f9fbf9' }}>
              <Box sx={{ color: '#1f3a30', mb: 1 }}>{stat.icon}</Box>
              <Typography variant="h4" fontWeight="bold" color="#1f3a30">{stat.value}</Typography>
              <Typography variant="body2" fontWeight="bold">{stat.label}</Typography>
              <Typography variant="caption" color="text.secondary">{stat.sub}</Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>

      <Grid container spacing={4} sx={{ mb: 8, justifyContent:"center", alignItems:"center" }}>
        <Grid item xs={12} md={6}>
          <Typography variant="h5" fontWeight="bold" gutterBottom>
            Who is the Segment?
          </Typography>
          <Typography variant="body2" paragraph color="text.secondary">
            Any business with roots in conservative Anabaptist culture experiencing growth pressure. 
            They are hesitant about "worldly" technology but recognize the vital need for automation to protect their values.
          </Typography>
          <Card variant="outlined" sx={{ borderRadius: 4, bgcolor: '#1f3a30', color: 'white' }}>
            <CardContent>
              <Typography variant="subtitle1" fontWeight="bold" gutterBottom sx={{ color: '#95ab63' }}>
                Cultural Indicators
              </Typography>
              <List dense>
                {[
                  "Adhere to 1921 Garden City Confession",
                  "Observe the Seven Ordinances",
                  "No TV in the home",
                  "Non-resistance principles",
                  "Discourage voting/civil government"
                ].map((text, i) => (
                  <ListItem key={i} disableGutters>
                    <ListItemIcon sx={{ minWidth: 30 }}><CheckCircle sx={{ color: '#95ab63', fontSize: 18 }} /></ListItemIcon>
                    <ListItemText primary={text} />
                  </ListItem>
                ))}
              </List>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={6}>
          <Typography variant="h5" fontWeight="bold" gutterBottom>
            Why Koble Wins
          </Typography>
          <Stack spacing={2}>
            {[
              { title: "Shared Roots", desc: "We understand their values without them having to explain." },
              { title: "Freedom (On-Prem)", desc: "Internet is optional. They keep control of their data." },
              { title: "Fits 'Scrappy'", desc: "We allow people to wear multiple hats without onerous restrictions." },
              { title: "Proven Implementation", desc: "On-time, on-budget, no coin-toss bets on the company." }
            ].map((strength, i) => (
              <Box key={i} sx={{ p: 2, borderLeft: '4px solid #95ab63', bgcolor: '#f4f7f4' }}>
                <Typography variant="subtitle2" fontWeight="bold">{strength.title}</Typography>
                <Typography variant="caption" color="text.secondary">{strength.desc}</Typography>
              </Box>
            ))}
          </Stack>
        </Grid>
      </Grid>

      <Divider sx={{ mb: 8 }} />

      <Typography variant="h4" fontWeight="bold" textAlign="center" sx={{ mb: 4 }}>
        Vertical Focus
      </Typography>
      
      <Grid container spacing={4} sx={{ mb: 8 }}>
        <Grid item xs={12} md={6}>
          <Card variant="outlined" sx={{ height: '100%', borderRadius: 4 }}>
            <CardContent>
              <Stack direction="row" spacing={2} alignItems="center" sx={{ mb: 2 }}>
                <Factory color="primary" />
                <Typography variant="h5" fontWeight="bold">Discrete Manufacturing</Typography>
              </Stack>
              <Typography variant="body2" sx={{ mb: 3, height: 40 }}>
                Production of distinct items (Equipment, Furniture, Metal Supply).
              </Typography>
              
              <Typography variant="subtitle2" fontWeight="bold" color="success.main">Strengths:</Typography>
              <Typography variant="caption" display="block" sx={{ mb: 2 }}>
                Robust costing/labor, FIFO inventory, works without internet.
              </Typography>

              <Typography variant="subtitle2" fontWeight="bold" color="error.main">Gaps:</Typography>
              <Typography variant="caption" display="block">
                No MRP, lacks Gantt charts, no operator-specific reporting screen.
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={6}>
          <Card variant="outlined" sx={{ height: '100%', borderRadius: 4 }}>
            <CardContent>
              <Stack direction="row" spacing={2} alignItems="center" sx={{ mb: 2 }}>
                <LocalShipping color="primary" />
                <Typography variant="h5" fontWeight="bold">Building Supply</Typography>
              </Stack>
              <Typography variant="body2" sx={{ mb: 3, height: 40 }}>
                Supply chain management and delivery of construction materials.
              </Typography>

              <Typography variant="subtitle2" fontWeight="bold" color="success.main">Strengths:</Typography>
              <Typography variant="caption" display="block" sx={{ mb: 2 }}>
                Charge accounts, multiple warehouses, units of measure conversions.
              </Typography>

              <Typography variant="subtitle2" fontWeight="bold" color="error.main">Gaps:</Typography>
              <Typography variant="caption" display="block">
                Bin location, Demand planning.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      <Paper sx={{ p: 4, bgcolor: '#1f3a30', color: 'white', borderRadius: 4 }}>
        <Typography variant="h5" fontWeight="bold" gutterBottom>
          Pricing Structure
        </Typography>
        <Grid container spacing={4} sx={{ mt: 1 }}>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="#95ab63">$250/hr</Typography>
            <Typography variant="caption">Implementation (Scoped)</Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="#95ab63">$190 - $270</Typography>
            <Typography variant="caption">Per User / Per Month</Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="#95ab63">3 Users</Typography>
            <Typography variant="caption">Minimum Requirement</Typography>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};

export default GTMOverview;