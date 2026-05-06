import React from 'react';
import { 
  Container, 
  Typography, 
  Box, 
  Paper, 
  Accordion, 
  AccordionSummary, 
  AccordionDetails, 
  Divider,
  Chip,
  Stack
} from '@mui/material';
import { 
  ExpandMore, 
  MenuBook, 
  ShoppingCart, 
  Factory, 
  AccountBalance, 
  Terminal, 
  Handshake 
} from '@mui/icons-material';
import PageNavigation from '../../components/PageNavigation';

const Term = ({ title, definition, abbreviation }) => (
  <Box sx={{ mb: 2 }}>
    <Stack direction="row" spacing={1} alignItems="center" sx={{ mb: 0.5 }}>
      <Typography variant="subtitle1" fontWeight="bold" color="#1f3a30">
        {title}
      </Typography>
      {abbreviation && (
        <Chip label={abbreviation} size="small" sx={{ bgcolor: '#e8f0e6', fontWeight: 'bold' }} />
      )}
    </Stack>
    <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.6 }}>
      {definition}
    </Typography>
  </Box>
);

const Glossary = ( { darkMode }) => {
  const sections = [
    {
      title: "Sales & Order Processing",
      icon: <ShoppingCart sx={{ mr: 2, color: '#1f3a30' }} />,
      terms: [
        { title: "Purchase Order", abbreviation: "PO", definition: "A document sent by a buyer to a seller outlining goods, quantity, price, and terms." },
        { title: "Sales Order", abbreviation: "SO", definition: "A document created by a seller to confirm a customer's purchase." },
        { title: "Quote/Proposal", definition: "A preliminary estimate provided to a potential customer before a purchase is made." },
        { title: "Change Order", definition: "A formal document that modifies an existing contract or order." }
      ]
    },
    {
      title: "Inventory & Manufacturing",
      icon: <Factory sx={{ mr: 2, color: '#1f3a30' }} />,
      terms: [
        { title: "Kitting", definition: "Combining related items into a single package (kit) for shipping." },
        { title: "Material Requirements Planning", abbreviation: "MRP", definition: "Advanced software for complex manufacturing processes that tracks the entire production lifecycle beyond simple sub-assemblies." },
        { title: "Manufacturing", abbreviation: "MFG", definition: "The process of producing goods through labor, machines, and tools." },
        { title: "Made to Order", abbreviation: "MTO", definition: "Products manufactured only after a specific order is placed." },
        { title: "Made to Stock", abbreviation: "MTS", definition: "Products manufactured in advance and stored as inventory." }
      ]
    },
    {
      title: "Payment & Financial",
      icon: <AccountBalance sx={{ mr: 2, color: '#1f3a30' }} />,
      terms: [
        { title: "Merchant Service Provider", abbreviation: "MSP", definition: "The entity that facilitates credit card networks and payment processing for businesses." },
        { title: "Payment Processing", definition: "The system that enables businesses to accept payments; portals are typically provided by the MSP." },
        { title: "Profit and Loss Statement", abbreviation: "P&L", definition: "An accounting document used to determine a business’s profitability over a specific period." }
      ]
    },
    {
      title: "Business & Software",
      icon: <Terminal sx={{ mr: 2, color: '#1f3a30' }} />,
      terms: [
        { title: "Enterprise Resource Planning", abbreviation: "ERP", definition: "Software that centralizes and manages all company data and core business processes." },
        { title: "Eagle Business Management Software", abbreviation: "EBMS", definition: "The flagship ERP product developed by Koble Systems." },
        { title: "Application Programming Interface", abbreviation: "API", definition: "Technology that allows different software applications to integrate and talk to each other." },
        { title: "Point of Sale", abbreviation: "POS", definition: "The system used for processing retail sales transactions." },
        { title: "Business Intelligence", abbreviation: "BI", definition: "Insight and analytics that help businesses make data-driven decisions." }
      ]
    },
    {
      title: "Partner & Support",
      icon: <Handshake sx={{ mr: 2, color: '#1f3a30' }} />,
      terms: [
        { title: "Value Added Reseller", abbreviation: "VAR", definition: "Businesses that sell, implement, and support EBMS on behalf of Koble Systems." },
        { title: "Remote Desktop Application", definition: "Software that allows branches or users to access a system securely from a remote location." }
      ]
    }
  ];

  return (
    <Container maxWidth="md" sx={{ mt: 5, mb: 8 }}>
      <PageNavigation 
          darkMode={darkMode}
          prevPath="/history" 
          prevLabel=" Our History" 
          nextPath="/business" 
          nextLabel=" Business Processes" 
        />
      <Box sx={{ mb: 6, textAlign: 'center' }}>
        <Typography variant="h3" fontWeight="800" color="#1f3a30" gutterBottom>
          Glossary of Terms
        </Typography>
        <Typography variant="body1" color="text.secondary">
          A centralized reference for the terminology used across Koble and EBMS.
        </Typography>
      </Box>

      <Box>
        {sections.map((section, index) => (
          <Accordion 
            key={index} 
            elevation={0} 
            sx={{ 
              border: '1px solid #e0e0e0', 
              mb: 2, 
              borderRadius: '8px !important',
              '&:before': { display: 'none' } 
            }}
          >
            <AccordionSummary expandIcon={<ExpandMore />}>
              <Stack direction="row" alignItems="center">
                {section.icon}
                <Typography variant="h6" fontWeight="bold">{section.title}</Typography>
              </Stack>
            </AccordionSummary>
            <AccordionDetails>
              <Divider sx={{ mb: 2 }} />
              {section.terms.map((term, i) => (
                <Term 
                  key={i} 
                  title={term.title} 
                  abbreviation={term.abbreviation} 
                  definition={term.definition} 
                />
              ))}
            </AccordionDetails>
          </Accordion>
        ))}
      </Box>

      <Paper sx={{ mt: 6, p: 3, bgcolor: '#f4f7f4', borderRadius: 2 }}>
        <Typography variant="subtitle2" fontWeight="bold" color="#1f3a30" gutterBottom>
          Quick Comparison:
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <strong>Sales Order vs Quote:</strong> A quote is a preliminary estimate; a sales order is a binding commitment.<br />
          <strong>Sales Order vs Purchase Order:</strong> A PO is a buyer's request; an SO is a supplier's confirmation.
        </Typography>
      </Paper>
    </Container>
  );
};

export default Glossary;