import React from 'react';
import { 
  Container, 
  Typography, 
  Box, 
  Grid, 
  Card, 
  CardContent, 
  Chip, 
  Divider, 
  Stack 
} from '@mui/material';
import { 
  SettingsSuggest, 
  AccountBalance, 
  Payments, 
  Storage, 
  CloudDone, 
  Phonelink 
} from '@mui/icons-material';

const Products = () => {
  const products = [
    {
      title: "EBMS",
      subtitle: "Eagle Business Management Software",
      description: "Our flagship ERP system designed for small to mid-sized businesses in manufacturing, distribution, and automotive. A comprehensive solution for complex workflows.",
      features: ["Accounting & Inventory", "Order Management", "Purchasing", "Customizable Workflows"],
      type: "On-Premises",
      icon: <SettingsSuggest fontSize="large" sx={{ color: '#1f3a30' }} />,
      typeIcon: <Storage fontSize="small" />
    },
    {
      title: "Koble Accounting",
      subtitle: "Finance Specific Solution",
      description: "Streamline finance processes with automation. Ensure compliance and gain real-time insights into your company's financial health with seamless cross-department integration.",
      features: ["General Ledger", "AP/AR & Budgeting", "Financial Reporting", "Tax Management"],
      type: "Integrated",
      icon: <AccountBalance fontSize="large" sx={{ color: '#1f3a30' }} />,
      typeIcon: <CloudDone fontSize="small" />
    },
    {
      title: "Koble Payments",
      subtitle: "Payment Processing Solution",
      description: "A native platform solution to streamline transactions. Process credit and gift cards through phone, web portal, or in-person devices with built-in fraud detection.",
      features: ["Credit & Gift Cards", "Payment Tracking", "Fraud Detection", "Web & Phone Payments"],
      type: "Native Platform",
      icon: <Payments fontSize="large" sx={{ color: '#1f3a30' }} />,
      typeIcon: <Phonelink fontSize="small" />
    }
  ];

  return (
    <Container maxWidth="lg" sx={{ mt: 5, mb: 8, }}>
      <Box sx={{ mb: 6, display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}>
        <Typography variant="h3" fontWeight="800" color="#1f3a30" gutterBottom>
          Our Products
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ fontSize: '1.1rem', maxWidth: 800 }}>
          Koble provides a suite of tools designed to help individuals and organizations thrive 
          through robust ERP functionality, financial precision, and seamless payment processing.
        </Typography>
      </Box>

      <Grid container spacing={4}>
        {products.map((product, index) => (
          <Grid item xs={12} key={index} >
            <Card 
              variant="outlined" 
              sx={{ 
                borderRadius: 4, 
                transition: '0.3s', 
                '&:hover': { boxShadow: '0 4px 20px rgba(0,0,0,0.08)' },
                overflow: 'visible',
                position: 'relative',
              }}
            >
              <CardContent sx={{ p: 4, }}>
                <Grid container spacing={4} alignItems="center"  >
                 
                  
                  <Grid item xs={12} md={7} >
                    <Stack direction="row" spacing={1} alignItems="center" sx={{ mb: 1, }}>
                      <Typography variant="h4" fontWeight="bold" color="#1f3a30">
                        {product.title}
                      </Typography>
                      <Chip 
                        icon={product.typeIcon} 
                        label={product.type} 
                        variant="outlined" 
                        size="small" 
                        sx={{ color: '#1f3a30', borderColor: '#95ab63' }} 
                      />
                    </Stack>
                    <Typography variant="subtitle1" fontWeight="bold" color="primary" gutterBottom>
                      {product.subtitle}
                    </Typography>
                    <Typography variant="body1" color="text.secondary" sx={{ mt: 2, lineHeight: 1.7 }}>
                      {product.description}
                    </Typography>
                  </Grid>

                  <Grid item xs={12} md={4}>
                    <Box sx={{ bgcolor: '#f4f7f4', p: 3, borderRadius: 3, border: '1px solid #e0e0e0' }}>
                      <Typography variant="subtitle2" fontWeight="bold" gutterBottom>
                        Key Capabilities:
                      </Typography>
                      <ul style={{ margin: 0, paddingLeft: '1.2rem', color: '#444' }}>
                        {product.features.map((feat, i) => (
                          <li key={i} style={{ marginBottom: '4px' }}>
                            <Typography variant="body2">{feat}</Typography>
                          </li>
                        ))}
                      </ul>
                    </Box>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Box sx={{ mt: 8, p: 4, bgcolor: '#1f3a30', color: 'white', borderRadius: 4, textAlign: 'center' }}>
        <Typography variant="h5" gutterBottom fontWeight="bold">
          Future Innovation: ACH Support
        </Typography>
        <Typography variant="body1" sx={{ opacity: 0.9 }}>
          We are actively working toward supporting ACH payments in Koble Payments to further 
          improve cash flow management for our customers.
        </Typography>
      </Box>
    </Container>
  );
};

export default Products;