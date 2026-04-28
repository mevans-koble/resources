import React from 'react';
import { 
  Container, 
  Typography, 
  Box, 
  Grid, 
  Card, 
  CardContent, 
  Button, 
  Paper, 
  Stack 
} from '@mui/material';
import { 
  OpenInNew, 
  Payments, 
  Badge, 
  Engineering 
} from '@mui/icons-material';

const ProcessCard = ({ title, description, link, icon, steps, color }) => (
  <Card 
    variant="outlined" 
    sx={{ 
      width: '550px',
      height: '100%', 
      borderRadius: 4, 
      display: 'flex', 
      flexDirection: 'column',
      transition: '0.3s',
      '&:hover': { boxShadow: '0 8px 24px rgba(0,0,0,0.12)' }
    }}
  >
    <CardContent sx={{ flexGrow: 1, p: 4, display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
      <Stack direction="column" spacing={2} alignItems="center" sx={{ mb: 3 }}>
        <Box sx={{ p: 1.5, bgcolor: `${color}15`, color: color, borderRadius: 3, display: 'flex' }}>
          {icon}
        </Box>
        <Typography variant="h5" fontWeight="bold">
          {title}
        </Typography>
      </Stack>

      <Typography variant="body2" color="text.secondary" sx={{ mb: 4, lineHeight: 1.6 }}>
        {description}
      </Typography>

      <Box sx={{ mb: 4, width: '100%' }}>
        <Typography variant="caption" fontWeight="bold" sx={{ textTransform: 'uppercase', color: 'text.disabled', display: 'block', mb: 1 }}>
          Key Elements:
        </Typography>
        <Stack spacing={1} alignItems="center">
          {steps.map((step, i) => (
            <Stack key={i} direction="row" spacing={1} alignItems="center">
              <Box sx={{ width: 6, height: 6, bgcolor: color, borderRadius: '50%' }} />
              <Typography variant="body2">{step}</Typography>
            </Stack>
          ))}
        </Stack>
      </Box>

      <Box sx={{ mt: 'auto', width: '100%' }}>
        <Button 
          variant="contained" 
          fullWidth 
          href={link}
          target="_blank"
          startIcon={<OpenInNew />}
          sx={{ 
            bgcolor: '#1f3a30', 
            '&:hover': { bgcolor: color },
            borderRadius: 2,
            py: 1.5
          }}
        >
          Open Miro Board
        </Button>
      </Box>
    </CardContent>
  </Card>
);

const BusinessProcesses = () => {
  return (
    <Container maxWidth="lg" sx={{ mt: 5, mb: 8 }}>
      <Box sx={{ mb: 6, display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}>
        <Typography variant="h3" fontWeight="800" color="#1f3a30" gutterBottom>
          Business Processes
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ fontSize: '1.1rem', maxWidth: 800 }}>
          Detailed visual workflows of our core operational cycles. These boards represent how 
          value flows through the company and how we support our team.
        </Typography>
      </Box>

 
      <Grid container spacing={6} >
    
        <Grid item xs={12} md={6} sx={{ display: 'flex', justifyContent: 'center' }}>
          <ProcessCard 
            title="Revenue & Onboarding"
            color="#95ab63"
            icon={<Payments fontSize="large" />}
            description="Visualizing the lifecycle of a client from initial contract through technical onboarding and the annual subscription renewal cycle."
            link="https://miro.com/app/board/uXjVInGY-_s=/" 
            steps={[
              "New Client Onboarding Flow",
              "Revenue Recognition Cycle",
              "Annual Subscription Renewals",
              "Process Hand-offs"
            ]}
          />
        </Grid>

        <Grid item xs={12} md={6} sx={{ display: 'flex', justifyContent: 'center' }}>
          <ProcessCard 
            title="HR & Payroll"
            color="#1f3a30"
            icon={<Badge fontSize="large" />}
            description="The internal workflow for bringing on new talent and managing the systems that ensure everyone is supported and paid accurately."
            link="https://miro.com/app/board/uXjVMRKONwU=/" 
            steps={[
              "New Hire Documentation",
              "System Access Provisioning",
              "Payroll Processing Cycle",
              "Employee Lifecycle Management"
            ]}
          />
        </Grid>
      </Grid>

      <Paper 
        sx={{ 
          mt: 8, 
          p: 4, 
          bgcolor: '#f4f7f4', 
          borderRadius: 4, 
          border: '1px solid #e0e0e0',
          textAlign: 'center'
        }}
      >
        <Engineering sx={{ fontSize: 40, color: '#1f3a30', mb: 2 }} />
        <Typography variant="h6" fontWeight="bold" gutterBottom>
          How to use these boards
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ maxWidth: 600, mx: 'auto' }}>
          Miro boards are living documents. If you notice a process has changed or 
          if a step is missing, please reach out to your team lead or the 
          <strong> Systems Consultant</strong> team to suggest an update.
        </Typography>
      </Paper>
    </Container>
  );
};

export default BusinessProcesses;