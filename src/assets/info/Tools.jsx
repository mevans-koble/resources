import React from 'react';
import { 
  Container, Typography, Box, Grid, Card, CardContent, 
  Divider, Button, Paper, Stack 
} from '@mui/material';
import { 
  Build, 
  Launch, 
  Cloud, 
  BarChart, 
  Code, 
  Hub, 
  Security, 
  SettingsSuggest,
  AdminPanelSettings
} from '@mui/icons-material';
import PaymentsIcon from '@mui/icons-material/Payments';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import StorefrontIcon from '@mui/icons-material/Storefront';
import PointOfSaleIcon from '@mui/icons-material/PointOfSale';
import LockPersonIcon from '@mui/icons-material/LockPerson';

const Tools = () => {
  const tools = [
    {
      title: "Salesforce",
      desc: "Primary CRM for managing customer relationships, leads, and sales pipelines.",
      link: "https://koblesystems.lightning.force.com/lightning/page/home",
      icon: <Hub sx={{ color: '#00a1e0' }} />, 
      tag: "CRM"
    },
    {
      title: "Landis",
      desc: "Cloud dashboard for managing communication systems and Landis app workflows.",
      link: "https://cc.landis.cloud/app/main/dashboard",
      icon: <Cloud sx={{ color: '#0078d4' }} />,
      tag: "Cloud Ops"
    },
    {
      title: "Passportal",
      desc: "Secure credential management and documentation vault for storing and sharing sensitive system passwords.",
      link: "https://us-clover.passportalmsp.com/dashboard#/default",
      icon: <LockPersonIcon sx={{ color: '#00c853' }} />, 
      tag: "Security"
    },
    {
      title: "Fizzy",
      desc: "Project management and task tracking for specific account workflows.",
      link: "https://app.fizzy.do/6102307/",
      icon: <BarChart sx={{ color: '#e4405f' }} />,
      tag: "PM Tool"
    },
    {
      title: "Fizzibility",
      desc: "Specialized application for visibility and data analytics.",
      link: "https://nice-dune-01849980f.7.azurestaticapps.net/",
      icon: <SettingsSuggest sx={{ color: '#0078d4' }} />,
      tag: "Analytics"
    },
    {
      title: "API Monitor",
      desc: "Real-time monitoring for client environment and API health.",
      link: "https://canary.koblesystems.dev/dashboard",
      icon: <Code sx={{ color: '#38b2ac' }} />,
      tag: "DevOps"
    },
    {
      title: "CloudFlare",
      desc: "Network security and connector management for the Koble infrastructure.",
      link: "https://dash.cloudflare.com/ece11a7c891e7956b6188b74460d5ec3/one/networks/connectors",
      icon: <Security sx={{ color: '#f38020' }} />, 
      tag: "Security"
    },
    {
      title: "Koble Payments Portal",
      desc: "User-facing dashboard for managing transactions, payment methods, and account billing history.",
      link: "https://paymentsportal.koblesystems.com/login?last=%2Fdashboard",
      icon: <PaymentsIcon sx={{ color: '#2e7d32' }} />, 
      tag: "Payments"
    },
    {
      title: "Koble Payments Admin Console",
      desc: "Backend administrative interface for managing client payment accounts and processing configurations.",
      link: "https://webpay.koblesystems.com/ClientAdmin/login",
      icon: <AdminPanelSettings sx={{ color: '#1f3a30' }} />, 
      tag: "Admin"
    },
    {
      title: "Verifone Portal (Internal)",
      desc: "Corporate-level gateway for managing Verifone hardware, encryption keys, and internal device deployments.",
      link: "https://corporateportal.vfipayna.com/",
      icon: <VpnKeyIcon sx={{ color: '#0078d4' }} />,
      tag: "Gateway"
    },
    {
      title: "Verifone Portal (Client)",
      desc: "Client-side access for merchants to manage their specific Verifone hardware and storefront transaction data.",
      link: "https://storeportal.vfipayna.com/",
      icon: <StorefrontIcon sx={{ color: '#9c27b0' }} />, 
      tag: "Merchant"
    },
    {
      title: "Verifone Web Pay Admin",
      desc: "Administrative portal for managing legacy Web Pay integrations and client-specific transaction settings.",
      link: "https://webpay.eaglebusinesssoftware.com/clientadmin/login",
      icon: <PointOfSaleIcon sx={{ color: '#f38020' }} />, 
      tag: "Processing"
    },
    
    {
      title: "Azure Repo",
      desc: "Version control and source code management for EBMS-2XX development.",
      link: "https://dev.azure.com/koblesystems/ebms-2XX/_versionControl",
      icon: <Code sx={{ color: '#0078d4' }} />,
      tag: "Development"
    }
  ];

  return (
    <Container maxWidth="lg" sx={{ mt: 5, mb: 8,  }}>
      <Box sx={{ mb: 8, display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}>
        <Typography variant="h3" fontWeight="800" color="#1f3a30" gutterBottom>
          System Tools
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ fontSize: '1.1rem', maxWidth: 800 }}>
          Direct access to the administrative, development, and management portals 
          that power Koble Systems operations.
        </Typography>
      </Box>

      <Grid container spacing={3} justifyContent="center" sx={{justifyContent: 'center'}}>
        {tools.map((tool, i) => (
          <Grid item key={i} sx={{ display: 'flex', justifyContent: 'center', flex: '0 0 auto', width: { xs: '100%', sm: '320px' } }}>
            <Card 
              variant="outlined" 
              sx={{ 
                width: '280px', 
                borderRadius: 4, 
                textAlign: 'center',
                display: 'flex',
                flexDirection: 'column',
                transition: '0.3s',
                '&:hover': { transform: 'translateY(-4px)', boxShadow: '0 8px 24px rgba(0,0,0,0.1)' }
              }}
            >
              <CardContent sx={{ flexGrow: 1, p: 3 }}>
                <Box sx={{ mb: 2, display: 'flex', justifyContent: 'center' }}>
                  <Box sx={{ p: 1.5, bgcolor: '#f4f7f4', borderRadius: 3 }}>
                    {tool.icon}
                  </Box>
                </Box>
                
                <Typography variant="h6" fontWeight="bold" color="#1f3a30" gutterBottom>
                  {tool.title}
                </Typography>
                
                <Typography variant="caption" sx={{ bgcolor: '#e8f0e6', px: 1.5, py: 0.5, borderRadius: 1, fontWeight: 'bold', mb: 2, display: 'inline-block' }}>
                  {tool.tag}
                </Typography>

                <Typography variant="body2" color="text.secondary" sx={{ mt: 1.5, fontSize: '0.875rem' }}>
                  {tool.desc}
                </Typography>
              </CardContent>

              <Divider />
              
              <Box sx={{ p: 2, bgcolor: '#f9fbf9' }}>
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
        ))}
      </Grid>

      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 8 }}>
        <Paper sx={{ p: 3, bgcolor: '#f4f7f4', borderRadius: 4, textAlign: 'center', maxWidth: 800, width: '100%', border: '1px dashed #ccc' }}>
          <Stack direction="row" spacing={1} justifyContent="center" alignItems="center">
            <Typography variant="body2" color="text.secondary">
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