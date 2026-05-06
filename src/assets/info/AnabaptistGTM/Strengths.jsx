import React from 'react';
import { 
  Container, Typography, Box, Grid, Card, CardContent, 
  Stack, Divider, Paper, Avatar, List, ListItem, ListItemIcon, ListItemText 
} from '@mui/material';
import { 
  Verified, Handshake, Speed, Storage, SettingsSuggest, 
  Groups, Construction, 
} from '@mui/icons-material';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import PageNavigation from '../../components/PageNavigation';

const StrengthBlock = ({ icon, title, description, testimonial, author, company, color = "#1f3a30" }) => (
  <Box sx={{ mb: 10, width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', }}>
    <Stack direction="column" alignItems="center" spacing={2} sx={{ textAlign: 'center', mb: 4 }}>
      {/* <Box sx={{ p: 2, bgcolor: `${color}15`, color: color, borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center', }}>
        {icon}
      </Box> */}
      <Typography variant="h4" fontWeight="bold" color="#1f3a30">
        {title}
      </Typography>
      <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 800, lineHeight: 1.7 }}>
        {description}
      </Typography>
    </Stack>

    <Grid container justifyContent="center" sx={{justifyContent: 'center', alignItems: 'center', }}>
      <Grid item xs={12} md={10} lg={8}>
        <Paper 
          variant="outlined" 
          sx={{ 
            p: 4, 
            borderRadius: 4, 
            bgcolor: '#f9fbf9', 
            position: 'relative',
            borderLeft: `6px solid ${color}`
          }}
        >
          <FormatQuoteIcon sx={{ position: 'absolute', top: 20, right: 20, opacity: 0.1, fontSize: 60 }} />
          <Typography variant="overline" color="primary" fontWeight="bold" gutterBottom sx={{ display: 'block' }}>
            Verified by Customer
          </Typography>
          <Typography variant="body1" sx={{ fontStyle: 'italic', mb: 3, lineHeight: 1.8 }}>
            "{testimonial}"
          </Typography>
          <Stack direction="row" spacing={2} alignItems="center" justifyContent="center">
            <Avatar sx={{ bgcolor: color }}>{author[0]}</Avatar>
            <Box sx={{ textAlign: 'left' }}>
              <Typography variant="subtitle2" fontWeight="bold">{author}</Typography>
              <Typography variant="caption" color="text.secondary">{company}</Typography>
            </Box>
          </Stack>
        </Paper>
      </Grid>
    </Grid>
  </Box>
);

const Strengths = ({ darkMode }) => {
  return (
    <Container maxWidth="md" sx={{ mt: 5, mb: 8,  }}>
      <PageNavigation 
          darkMode={darkMode}
          prevPath="/gtm-compland" 
          prevLabel=" Competitive Landscape" 
          nextPath="/" 
          nextLabel=" Home" 
        />
      <Box sx={{ mb: 10, display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", }}>
        <Typography variant="h3" fontWeight="800" color="#1f3a30" gutterBottom>
          Our Key Strengths
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ fontSize: '1.2rem', maxWidth: 800 }}>
          Why businesses choose Koble Systems to eliminate barriers to expansion and build more productive teams.
        </Typography>
      </Box>

      <StrengthBlock 
        icon={<Handshake fontSize="large" />}
        title="Shared Roots"
        description="We understand your values natively—you won’t spend time explaining why you do things the way you do. We've been a trusted resource for the Anabaptist community since 1989."
        testimonial="Personally, what I like best about EBMS is that it comes from the same culture I do. A small company with a strong work ethic. We seem to understand each other."
        author="Henry Zook"
        company="Millcreek Manufacturing"
      />

      <StrengthBlock 
        icon={<SettingsSuggest fontSize="large" />}
        title="Robust & Scalable ERP"
        description="EBMS is a proven, all-in-one system that ties sales, purchasing, and finances together, eliminating double entry and manual sheets of paper."
        testimonial="EBMS generates parts and material lists for us through a system that was repeatable and could scale. Before, team members spent hours handwriting POs with so much human error involved."
        author="Stoll Industries Representative"
        company="Stoll Industries"
      />

      <StrengthBlock 
        icon={<Construction fontSize="large" />}
        title="Fits a Scrappy Business"
        description="Most ERPs force a segregation of duties that is onerous for small teams. EBMS allows people to wear multiple hats while providing the power to add safeguards as you grow."
        testimonial="Netsuite made it super onerous to have a scrappy business and role switch. We decided some things were better handled manually, and our Consultant respected that decision."
        author="Raymond Petersheim"
        company="S&L Spindles"
      />

      <StrengthBlock 
        icon={<Storage fontSize="large" />}
        title="Freedom to Do Business Your Way"
        description="With an on-premise solution, you have the choice. You can use the internet, but you are not forced to. This is vital for those with cultural beliefs or locations that limit connectivity."
        testimonial="The freedom to operate without forced internet was a key factor for us. We keep control over our data and our security."
        author="Multiple Clients"
        company="Rod and Staff, Rolling Ridge Metals, Prairie State Metals"
      />

      <StrengthBlock 
        icon={<Speed fontSize="large" />}
        title="Successful Implementations"
        description="ERP implementations are more likely to fail than succeed. Koble implements on-time, on-budget, and with all features as promised."
        testimonial="The overall implementation was absolutely stellar. The team at Koble is fantastic – a great group of people that are very easy to work with and very willing to take time."
        author="Tony Beachy"
        company="Precision Hydraulics"
      />

      <StrengthBlock 
        icon={<Groups fontSize="large" />}
        title="Stellar Client Experience"
        description="We partner with you as you grow. With a dedicated team that understands your specific needs, you are never just a ticket number."
        testimonial="Having my own dedicated team has definitely been a plus. I get to work with a set group of people that know how I use my software and understand my needs."
        author="Durrel Horst"
        company="Home Butchering Supplies"
      />
    </Container>
  );
};

export default Strengths;