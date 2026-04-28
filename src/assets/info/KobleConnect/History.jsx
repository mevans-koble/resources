import React from 'react';
import { 
  Container, 
  Typography, 
  Box, 
  Paper, 
  Divider,
  Stack,
  useTheme,
  useMediaQuery,
  Grid
} from '@mui/material';
import { 
  HistoryEdu, 
  Business, 
  Computer, 
  Window, 
  ChangeCircle, 
  LocationOn,
  TrendingUp
} from '@mui/icons-material';

const TimelineItem = ({ year, title, description, icon, isLast }) => (
  <Box sx={{ display: 'flex', mb: isLast ? 0 : 4 }}>
    <Stack alignItems="center" sx={{ mr: 3 }}>
      <Box 
        sx={{ 
          p: 1.5, 
          bgcolor: '#1f3a30', 
          color: 'white', 
          borderRadius: '50%', 
          zIndex: 1,
          boxShadow: '0 0 0 4px white' 
        }}
      >
        {icon}
      </Box>
      {!isLast && <Box sx={{ width: 2, flexGrow: 1, bgcolor: '#95ab63', my: 1 }} />}
    </Stack>
    <Box sx={{ pb: 4 }}>
      <Typography variant="h6" fontWeight="bold" color="#1f3a30">
        {year} — {title}
      </Typography>
      <Typography variant="body1" color="text.secondary" sx={{ mt: 1, lineHeight: 1.6 }}>
        {description}
      </Typography>
    </Box>
  </Box>
);

const History = () => {
  const isMobile = useMediaQuery('(max-width:600px)');

  const milestones = [
    {
      year: "Feb 1989",
      title: "Founding of the Company",
      description: "Jake Esh started the company after helping friends build automated software. This initial project became the foundation of the entire business.",
      icon: <HistoryEdu fontSize="small" />
    },
    {
      year: "1990",
      title: "Full-Time Commitment",
      description: "Jake went full-time, operating Esh Computer Services out of his basement. He opened maintenance and sales offices, expanding into hardware.",
      icon: <Business fontSize="small" />
    },
    {
      year: "1991",
      title: "The First Rewrite",
      description: "Glenn joined the company. Together they rewrote the system in DOS (transitioning from C), creating the first generation: Eshware.",
      icon: <Computer fontSize="small" />
    },
    {
      year: "1998",
      title: "The Second Generation",
      description: "Work began on a 16-bit Windows version. The software was completely rewritten with a new name and look, while keeping the core concepts.",
      icon: <Window fontSize="small" />
    },
    {
      year: "1999",
      title: "The Birth of EBMS",
      description: "Eagle Business Management System (EBMS) was launched. Over the next 8 years, clients transitioned from the DOS-based Eshware to this new system.",
      icon: <TrendingUp fontSize="small" />
    },
    {
      year: "2017",
      title: "Eagle Business Software",
      description: "The company rebranded from Esh Computer Center to Eagle Business Software to reflect its software-centric focus.",
      icon: <ChangeCircle fontSize="small" />
    },
    {
      year: "2023",
      title: "Becoming Koble Systems",
      description: "The company rebranded to Koble (Norwegian for 'Connect'), representing our mission to unify business processes.",
      icon: <LocationOn fontSize="small" />
    }
  ];

  return (
    <Container maxWidth="md" sx={{ mt: 5, mb: 8 }}>
      {/* HERO SECTION */}
      <Box sx={{ mb: 8, textAlign: 'center' }}>
        <Typography variant="h3" fontWeight="800" color="#1f3a30" gutterBottom>
          Our Story
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ fontSize: '1.1rem' }}>
          From a basement in 1989 to a nationwide ERP leader.
        </Typography>
      </Box>

      <Paper elevation={0} sx={{ p: { xs: 2, md: 5 }, borderRadius: 4, bgcolor: '#f9fbf9', border: '1px solid #e0e0e0' }}>
        {milestones.map((item, index) => (
          <TimelineItem 
            key={index}
            year={item.year}
            title={item.title}
            description={item.description}
            icon={item.icon}
            isLast={index === milestones.length - 1}
          />
        ))}
      </Paper>

      {/* PRESENT DAY SUMMARY */}
      <Box sx={{ mt: 8, p: 4, bgcolor: '#1f3a30', color: 'white', borderRadius: 4 }}>
        <Typography variant="h5" fontWeight="bold" gutterBottom>
          Present Day
        </Typography>
        <Divider sx={{ bgcolor: 'rgba(255,255,255,0.2)', mb: 3 }} />
        <Grid container spacing={3}>
          <Grid item xs={12} sm={4}>
            <Typography variant="h4" fontWeight="bold" color="#95ab63">60+</Typography>
            <Typography variant="body2">Dedicated Employees</Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h4" fontWeight="bold" color="#95ab63">2</Typography>
            <Typography variant="body2">Offices (PA & ID)</Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h4" fontWeight="bold" color="#95ab63">EBMS</Typography>
            <Typography variant="body2">Flagship Product</Typography>
          </Grid>
        </Grid>
        <Typography variant="body2" sx={{ mt: 4, opacity: 0.8 }}>
          Headquartered in Lancaster, Pennsylvania, with our West Coast office in Moscow, Idaho.
        </Typography>
      </Box>
    </Container>
  );
};

export default History;