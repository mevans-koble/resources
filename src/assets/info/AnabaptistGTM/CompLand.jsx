import React from 'react';
import { 
  Container, Typography, Box, Grid, Card, CardContent, 
  Stack, Divider, Chip, Paper, Accordion, AccordionSummary, 
  AccordionDetails, List, ListItem, ListItemIcon, ListItemText, Button
} from '@mui/material';
import { 
  ExpandMore, Gavel, CompareArrows, Verified, 
  Block,  Language, Storage, CloudQueue, Terminal
} from '@mui/icons-material';

const CompetitorCard = ({ name, share, status, strengths, winStrategy, icon }) => (
  <Card variant="outlined" sx={{ height: '100%', width:"600px",borderRadius: 4, display: 'flex', flexDirection: 'column' }}>
    <CardContent sx={{ flexGrow: 1, p: 3, }}>
      <Stack direction="row" spacing={2} alignItems="center" sx={{ mb: 2 }}>
        <Box sx={{ p: 1, bgcolor: '#f4f7f4', borderRadius: 2, color: '#1f3a30' }}>
          {icon}
        </Box>
        <Box>
          <Typography variant="h5" fontWeight="bold">{name}</Typography>
          <Typography variant="caption" color="text.secondary" sx={{ textTransform: 'uppercase' }}>
            Market Share: {share}
          </Typography>
        </Box>
      </Stack>
      
      <Chip label={status} size="small" sx={{ mb: 2, bgcolor: '#1f3a30', color: 'white' }} />
      
      <Typography variant="subtitle2" fontWeight="bold" gutterBottom>The Situation:</Typography>
      <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>{strengths}</Typography>

      <Divider sx={{ my: 2 }} />
      
      <Typography variant="subtitle2" fontWeight="bold" color="success.main" gutterBottom>
        Why We Win:
      </Typography>
      <Typography variant="body2">{winStrategy}</Typography>
    </CardContent>
  </Card>
);

const CompetitiveLandscape = () => {
  return (
    <Container maxWidth="lg" sx={{ mt: 5, mb: 8 }}>
      <Box sx={{ mb: 6, display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}>
        <Typography variant="h3" fontWeight="800" color="#1f3a30" gutterBottom>
          Competitive Landscape
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ fontSize: '1.1rem', maxWidth: 800 }}>
          Understanding our rivals helps us better articulate the unique value of EBMS 
          and Koble Systems. Use these insights to navigate complex sales conversations.
        </Typography>
      </Box>

      <Grid container spacing={4}  sx={{ mb: 8, justifyContent: 'center' }}>
        <Grid item xs={12} sm={6} md={4} sx={{ display: 'flex', justifyContent: 'center' }}>
          <CompetitorCard 
            name="QuickBooks"
            share="~85% (Global SMB)"
            status="Deeply Established"
            icon={<Verified />}
            strengths="The default for tiny businesses. Extremely high awareness but lacks deep inventory/mfg logic."
            winStrategy="We win when businesses outgrow simple bookkeeping and need a real inventory system with scaled financials."
          />
        </Grid>

        <Grid item xs={12} sm={6} md={4} sx={{ display: 'flex', justifyContent: 'center' }}>
          <CompetitorCard 
            name="Odoo"
            share="Growing Quickly"
            status="Aggressive Startup"
            icon={<Language />}
            strengths="Open-source blocks. Browser-based but requires high assembly/technical setup."
            winStrategy="We win on support value and 'out-of-the-box' readiness. We are a finished product, not a bucket of parts."
          />
        </Grid>

        <Grid item xs={12} sm={6} md={4} sx={{ display: 'flex', justifyContent: 'center' }}>
          <CompetitorCard 
            name="Acumatica"
            share="Negligible in Segment"
            status="Indirect Partner Model"
            icon={<CloudQueue />}
            strengths="100% partner-driven. Requires C# programmers for customization. No segment roots."
            winStrategy="We win on cultural alignment and 'low-code' customization. We don't require an in-house programmer."
          />
        </Grid>
      </Grid>

      {/* DEEP DIVE: ODOO VS EBMS */}
      <Paper elevation={0} sx={{ p: 4, bgcolor: '#f9fbf9', border: '1px solid #e0e0e0', borderRadius: 4, mb: 8 }}>
        <Typography variant="h4" fontWeight="bold" color="#1f3a30" textAlign="center" gutterBottom>
          Deep Dive: Why EBMS over Odoo?
        </Typography>
        <Typography variant="body2" textAlign="center" color="text.secondary" sx={{ mb: 4 }}>
          Insights from the Field (Roger, Brian, Nathaniel)
        </Typography>

        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12} md={5}>
            <Stack spacing={2}>
              <Box sx={{ p: 2, bgcolor: 'white', borderRadius: 2, borderLeft: '4px solid #95ab63' }}>
                <Typography variant="subtitle2" fontWeight="bold">Out-of-the-Box Value</Typography>
                <Typography variant="caption">Odoo is a bunch of building blocks that require assembly. EBMS is a finished product ready for business context.</Typography>
              </Box>
              <Box sx={{ p: 2, bgcolor: 'white', borderRadius: 2, borderLeft: '4px solid #95ab63' }}>
                <Typography variant="subtitle2" fontWeight="bold">Superior Financials</Typography>
                <Typography variant="caption">Field reports show Odoo is weak on the AP/Expense side. Clients often need Power BI just to get good numbers out of Odoo.</Typography>
              </Box>
            </Stack>
          </Grid>
          <Grid item xs={12} md={5}>
            <Stack spacing={2}>
              <Box sx={{ p: 2, bgcolor: 'white', borderRadius: 2, borderLeft: '4px solid #95ab63' }}>
                <Typography variant="subtitle2" fontWeight="bold">Support vs. Blocks</Typography>
                <Typography variant="caption">EBMS offers integrated support value vs. paying for blocks of support with 3rd-party Odoo resellers.</Typography>
              </Box>
              <Box sx={{ p: 2, bgcolor: 'white', borderRadius: 2, borderLeft: '4px solid #95ab63' }}>
                <Typography variant="subtitle2" fontWeight="bold">Customization</Typography>
                <Typography variant="caption">Odoo Online is NOT customizable. EBMS and Koble ERP allow for customization without the server headache.</Typography>
              </Box>
            </Stack>
          </Grid>
        </Grid>
      </Paper>

      <Box sx={{ textAlign: 'center', mb: 8 }}>
        <Typography variant="h6" fontWeight="bold" gutterBottom>Other Players</Typography>
        <Chip label="ABC Software: ~350 Clients" variant="outlined" sx={{ m: 1 }} />
      </Box>

      <Paper sx={{ p: 4, bgcolor: '#1f3a30', color: 'white', borderRadius: 4, textAlign: 'center' }}>
        <Terminal sx={{ fontSize: 40, color: '#95ab63', mb: 2 }} />
        <Typography variant="h5" fontWeight="bold" gutterBottom>
          The Road Ahead: Odoo Features We Like
        </Typography>
        <Typography variant="body2" sx={{ opacity: 0.8, mb: 3 }}>
          We are constantly learning from the market. Key Odoo features we aim to integrate:
        </Typography>
        <Grid container spacing={2} justifyContent="center">
          {['Notification Lists', 'Email Integration', 'Internal Chat/Tagging', 'Linux Support?'].map((feature, i) => (
            <Grid item key={i}>
              <Chip label={feature} sx={{ color: 'white', borderColor: 'rgba(255,255,255,0.3)' }} variant="outlined" />
            </Grid>
          ))}
        </Grid>
      </Paper>
    </Container>
  );
};

export default CompetitiveLandscape;