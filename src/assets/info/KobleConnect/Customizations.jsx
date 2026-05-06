import React, { useState } from 'react';
import { 
  Container, Typography, Box, Grid, Card, CardContent, 
  Stack, Divider, Paper, Avatar, Chip, Button,
  Dialog, DialogTitle, DialogContent, DialogActions, IconButton
} from '@mui/material';
import { 
  DashboardCustomize, AutoFixHigh, Analytics, Handshake, 
  Construction, Close, Business, ReportProblem, Build, CheckCircle
} from '@mui/icons-material';
import PageNavigation from '../../components/PageNavigation';

const Customizations = ({darkMode}) => {
  // State for Dialog
  const [open, setOpen] = useState(false);
  const [selectedCase, setSelectedCase] = useState(null);

  const handleOpen = (useCase) => {
    setSelectedCase(useCase);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedCase(null);
  };

  const useCases = [
    { 
      client: "Old Station", 
      contact: "Emerson", 
      status: "Active",
      business: "Outdoor Landscaping",
      problem: "Manual calculation of pallet deposits on every order. Reps couldn't give immediate quotes and often had to call back to adjust prices due to errors.",
      solution: "Automatic calculation of pallet quantities based on line items, automatically adding refundable deposit line items to the order.",
      result: "Reps give accurate, immediate pricing over the phone. Human error is eliminated and customer experience is vastly improved."
    },
    { 
      client: "LuxCraft", 
      contact: "Brian", 
      status: "Active",
      business: "Furniture Manufacturing",
      problem: "Massive inventory volumes that were difficult to organize, track, and verify for shipment readiness.",
      solution: "Custom report that generates 1x4 barcode labels upon receiving. Similar system used for customer-specific collection to verify everything is ready for shipment.",
      result: "Tedious tasks are automated, efficiency is improved, and they now have total control over inventory readiness for shipping."
    },
    { 
      client: "Berlin Seeds", 
      contact: "Brenton", 
      status: "Active", 
      business: "Premium Home Goods & Seeds",
      problem: "Manual submission of purchase orders to vendors was a major bottleneck and prone to inaccuracy.",
      solution: "Automated process that batches all products needed from a specific vendor and exports them into a compatible format for file-upload submission.",
      result: "Manual steps removed from ordering stage. Ordering is faster, more efficient, and significantly more accurate."
    },
    { 
      client: "CAM Mutual Aid", 
      status: "Specialized",
      business: "Mutual Aid Insurance",
      problem: "Lacked software tools to manage insurance policies, premiums, and claims specific to the Anabaptist community.",
      solution: "Built a suite of tools for data management and custom formatted reports for policyholders.",
      result: "They now use EBMS to create policies, bill premiums, issue claim payments, and print professional customer reports."
    },
    { 
      client: "Axle Boy", 
      status: "Active",
      business: "Jeep Service & Accessories",
      problem: "Used multiple disparate spreadsheets to manage shop schedules and bonuses because EBMS settings were insufficient.",
      solution: "Added custom fields and logic within EBMS to manage shop scheduling, then fed that data live back into a centralized master spreadsheet.",
      result: "Massive timesaver. Data is now mined directly from EBMS, eliminating manual spreadsheet maintenance and allowing for advanced reporting."
    },
    { 
      client: "Millcreek Manufacturing", 
      status: "Active",
      business: "Manufacturing",
      problem: "Time-consuming to identify if a low bin needed a vendor PO or an internal manufacturing batch created.",
      solution: "Barcode scanning on Kanban cards that automatically identifies the replenishment type and creates the correct EBMS document with the right quantity.",
      result: "Streamlined workflow. Workers no longer have to 'think' about the document type—they just scan and the system manages the inventory logic."
    }
  ];

  return (
    <Container maxWidth="lg" sx={{ mt: 5, mb: 8 }}>
      <Box sx={{ mb: 8, display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}>
        <Typography variant="h3" fontWeight="800" color="#1f3a30" gutterBottom>
          Customization Strategy
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ fontSize: '1.1rem', maxWidth: 800 }}>
          Bridging the gap between general ERP power and your unique business workflows.
        </Typography>
      </Box>

      <Grid container justifyContent="center" sx={{ mb: 8, justifyContent: 'center' }}>
        <Grid item xs={12} md={10}>
          <Paper elevation={0} sx={{ p: 4, bgcolor: darkMode ? '#b9b8b8' : '#f4f7f4', borderRadius: 4, border: '1px solid #e0e0e0', textAlign: 'center' }}>
            <AutoFixHigh sx={{ color: '#95ab63', mb: 2, fontSize: 40 }} />
            <Typography variant="h5" fontWeight="bold" gutterBottom color="#1f3a30">
              Adapting Core Power to Unique Needs
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.8, maxWidth: 850, mx: 'auto' }}>
              The <strong>Customizations Team at Koble</strong> takes common core functionality and 
              adjusts features to better fit a customer's specific workflow and industry needs. 
              We ensure the system fits the business, not the other way around.
            </Typography>
          </Paper>
        </Grid>
      </Grid>

      <Grid container spacing={4}  sx={{ mb: 8, justifyContent: 'center' }}>
        <Grid item xs={12} sm={6} md={4}>
          <Card variant="outlined" sx={{ height: '100%', width:"250px",textAlign: 'center', borderRadius: 4, bgcolor: darkMode ? '#b9b8b8' : '#f9fbf9' }}>
            <CardContent>
              <Analytics color="primary" sx={{ mb: 1 }} />
              <Typography variant="h6" fontWeight="bold">Monthly Target</Typography>
              <Typography variant="h4" fontWeight="800" color="#1f3a30" sx={{ my: 1 }}>
                $35,000
              </Typography>
              <Typography variant="caption" color="text.secondary">
                Revenue Goal (Nov/Dec)
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      <Divider sx={{ mb: 8 }} />

      <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
        
      <Typography variant="h4" fontWeight="bold" textAlign="center" sx={{ mb: 2 }}>
        Use Cases & Success Stories
      </Typography>
      <Typography variant="body2" textAlign="center" color="text.secondary" sx={{ mb: 5 }}>
        Click a card to view the specific problem and customization solution.
      </Typography>
      
      <Grid container spacing={3}  sx={{ mb: 6, justifyContent: 'center' }}>
        {useCases.map((item, index) => (
            <Grid item xs={12} sm={6}  key={index} sx={{ 
        display: 'flex', 
        justifyContent: 'center',
        flex: '0 0 auto', 
        width: { xs: '100%', sm: '320px' } // 280px card + 40px for spacing
      }}>
            <Card 
              onClick={() => handleOpen(item)}
              variant="outlined" 
              sx={{ 
                height:"200px",
                width: '300px', 
                borderRadius: 4, 
                textAlign: 'center', 
                cursor: 'pointer',
                transition: '0.3s',
                bgcolor: darkMode ? '#b9b8b8' : '#f9fbf9',
                '&:hover': { bgcolor: '#f4f7f4', transform: 'translateY(-4px)', boxShadow: '0 4px 20px rgba(0,0,0,0.1)' }
            }}
            >
              <CardContent sx={{justifyContent: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100%'}}>
                <Avatar sx={{ mx: 'auto', mb: 2, bgcolor: '#1f3a30' }}>
                  {item.contact ? item.contact[0] : item.client[0]}
                </Avatar>
                <Typography variant="subtitle1" fontWeight="bold">{item.client}</Typography>
                <Typography variant="caption" color="text.secondary" display="block">
                  {item.business}
                </Typography>
                <Chip label={item.status} size="small" sx={{ mt: 2, pointerEvents: 'none' }} />
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      </Box>

      <Dialog 
        open={open} 
        onClose={handleClose} 
        maxWidth="sm" 
        fullWidth
        PaperProps={{ sx: { borderRadius: 4, p: 2 } }}
      >
        {selectedCase && (
          <>
            <DialogTitle sx={{ textAlign: 'center', fontWeight: 'bold', fontSize: '1.5rem', color: '#1f3a30' }}>
              {selectedCase.client}
              <IconButton onClick={handleClose} sx={{ position: 'absolute', right: 16, top: 16 }}>
                <Close />
              </IconButton>
            </DialogTitle>
            <DialogContent>
              <Stack spacing={3} sx={{ mt: 1 }}>
                <Box>
                  <Stack direction="row" spacing={1} alignItems="center" color="primary.main" sx={{ mb: 1 }}>
                    <Business fontSize="small" />
                    <Typography variant="subtitle2" fontWeight="bold">BUSINESS</Typography>
                  </Stack>
                  <Typography variant="body2">{selectedCase.business}</Typography>
                </Box>
                
                <Divider />

                <Box>
                  <Stack direction="row" spacing={1} alignItems="center" color="error.main" sx={{ mb: 1 }}>
                    <ReportProblem fontSize="small" />
                    <Typography variant="subtitle2" fontWeight="bold">THE PROBLEM</Typography>
                  </Stack>
                  <Typography variant="body2">{selectedCase.problem}</Typography>
                </Box>

                <Box>
                  <Stack direction="row" spacing={1} alignItems="center" color="info.main" sx={{ mb: 1 }}>
                    <Build fontSize="small" />
                    <Typography variant="subtitle2" fontWeight="bold">CUSTOMIZATION SOLUTION</Typography>
                  </Stack>
                  <Typography variant="body2">{selectedCase.solution}</Typography>
                </Box>

                <Box sx={{ p: 2, bgcolor: '#f4f7f4', borderRadius: 2 }}>
                  <Stack direction="row" spacing={1} alignItems="center" color="success.main" sx={{ mb: 1 }}>
                    <CheckCircle fontSize="small" />
                    <Typography variant="subtitle2" fontWeight="bold">THE RESULT</Typography>
                  </Stack>
                  <Typography variant="body2" fontWeight="500">{selectedCase.result}</Typography>
                </Box>
              </Stack>
            </DialogContent>
            <DialogActions sx={{ justifyContent: 'center', pb: 2 }}>
              <Button onClick={handleClose} variant="contained" sx={{ bgcolor: '#1f3a30', borderRadius: 2, px: 4 }}>
                Close
              </Button>
            </DialogActions>
          </>
        )}
      </Dialog>

      <Paper sx={{ p: 4, bgcolor: '#1f3a30', color: 'white', borderRadius: 4, textAlign: 'center' }}>
        <Construction sx={{ fontSize: 40, color: '#95ab63', mb: 2 }} />
        <Typography variant="h5" fontWeight="bold" gutterBottom>Ongoing Research</Typography>
        <Typography variant="body2" sx={{ opacity: 0.8, maxWidth: 600, mx: 'auto' }}>
          Identifying common patterns to further streamline our development process.
        </Typography>
      </Paper>
    </Container>
  );
};

export default Customizations;