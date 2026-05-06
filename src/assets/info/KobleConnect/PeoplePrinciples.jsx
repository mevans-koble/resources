import React from 'react';
import { 
  Container, 
  Typography, 
  Box, 
  Grid, 
  Card, 
  CardContent, 
  Button, 
  Divider,
  Paper,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Stack
} from '@mui/material';
import { 
  AccountTree, 
  ExpandMore, 
  Psychology, 
  OpenInNew, 
  Groups 
} from '@mui/icons-material';
import PageNavigation from '../../components/PageNavigation';

const OrgStructure = ({ darkMode }) => {
  const principles = [
    { title: "Lead from the front", desc: "Leaders cheerfully go first. They take the initiative and leave an example that others will want to follow, asking the questions that need to be asked, and leading the charge towards the end goal (even if it isn’t a sure win)." },
    { title: "Embrace a bias for action", desc: "Leaders understand that speed matters. They embrace calculated risks, recognizing progress doesn’t happen in the meeting room but in the laboratory of customer interaction." },
    { title: "Deliver value", desc: "Leaders define done as value delivered to the customer. They recognize their work isn’t done until the customer receives the value promised." },
    { title: "Know when to let go", desc: "Leaders are quick to kill sacred cows when their time is past. They understand that “that’s how it has always been done” is never a good reason for continuing." },
    { title: "Embrace the “real” reality", desc: "Leaders make decisions based on what is true and not based on what they want to be true. They understand there are always tradeoffs and face them head on." },
    { title: "Use the difficulty", desc: "Leaders see opportunities where others see excuses. They recognize their constraints and find ways to turn it to their advantage." },
    { title: "Speak the truth in love", desc: "Leaders are honest and direct. They never talk about someone behind their back but seek resolution by bringing any conflict directly to the source." },
    { title: "Share their gratitude", desc: "Leaders are thankful for their customers, the work they get to do, and those they get to do it with. They set the tone for genuine camaraderie." },
    { title: "Roll up their sleeves and do the work", desc: "Leaders recognize there is no category of work that is beneath them. They have a cheerful service mindset and humbly do the work that is most impactful." },
    { title: "Are always learning", desc: "Leaders are quick to run retros, listen to a podcast, pick up a book, or take a class. They never waste success or failure." },
    { title: "Think like an owner", desc: "Leaders spend company time and company money like owners – they measure success by the impact and quality of results." },
    { title: "Have a backbone; disagree and commit", desc: "Leaders speak up respectfully to challenge decisions. When a decision is made, they commit wholly and own it as their own." },
    { title: "Know when to stop", desc: "Leaders recognize that work at Koble is not their only responsibility in life. They know when to put work away and focus on other good things." }
  ];

  return (
    <Container maxWidth="md" sx={{ mt: 5, mb: 8 }}>
      <PageNavigation 
          darkMode={darkMode}
          prevPath="/mission" 
          prevLabel=" Mission & Pillars" 
          nextPath="/products" 
          nextLabel=" Our Products" 
        />
      <Box sx={{ mb: 6, display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}>
        <Typography variant="h3" fontWeight="800" color="#1f3a30" gutterBottom>
          Structure & Leadership
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ fontSize: '1.1rem', lineHeight: 1.8 }}>
          At the heart of our organization is a commitment to growth, collaboration, and excellence. 
          Below you can explore how our team works together and the principles that define our culture.
        </Typography>
      </Box>

      <Paper 
        elevation={0} 
        sx={{ 
          p: 4, 
          mb: 8, 
          bgcolor: '#f4f7f4', 
          border: '1px solid #e0e0e0', 
          borderRadius: 4,
          display: 'flex',
          flexDirection: { xs: 'column', sm: 'row' },
          alignItems: 'center',
          justifyContent: 'space-between'
        }}
      >
        <Box sx={{ mb: { xs: 2, sm: 0 } }}>
          <Stack direction="row" spacing={1} alignItems="center" sx={{ mb: 1 }}>
            <AccountTree color="primary" />
            <Typography variant="h5" fontWeight="bold">Organizational Chart</Typography>
          </Stack>
          <Typography variant="body2" color="text.secondary">
            View the live Miro board to see team structures and reporting lines.
          </Typography>
        </Box>
        <Button 
          variant="contained" 
          href="https://miro.com/app/board/uXjVKNl3iUs=/" 
          target="_blank"
          startIcon={<OpenInNew />}
          sx={{ bgcolor: '#1f3a30', '&:hover': { bgcolor: '#2c5143' }, borderRadius: 2 }}
        >
          View Miro Board
        </Button>
      </Paper>

      <Box sx={{ mb: 4 }}>
        <Stack direction="row" spacing={1} alignItems="center" sx={{ mb: 2 }}>
          <Psychology sx={{ fontSize: 32, color: '#1f3a30' }} />
          <Typography variant="h4" fontWeight="bold">Leadership Principles</Typography>
        </Stack>
        <Typography variant="body1" color="text.secondary" paragraph>
          These 13 principles are a day-to-day approach to acting out Koble's values of blessing customers, 
          honoring each other, and building our communities.
        </Typography>
      </Box>

      {/* PRINCIPLES LIST */}
      <Box>
        {principles.map((principle, index) => (
          <Accordion 
            key={index} 
            elevation={0} 
            sx={{ 
              '&:before': { display: 'none' }, 
              borderBottom: '1px solid #e0e0e0',
              '&.Mui-expanded': { mb: 1 } 
            }}
          >
            <AccordionSummary expandIcon={<ExpandMore />}>
              <Typography fontWeight="bold" color="#1f3a30">
                {index + 1}. {principle.title}
              </Typography>
            </AccordionSummary>
            <AccordionDetails sx={{ pt: 0, pb: 3 }}>
              <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.7 }}>
                {principle.desc}
              </Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Box>

     
    </Container>
  );
};

export default OrgStructure;