import React from 'react';
import { Box, Button, Typography, Paper } from '@mui/material';
import { CloudUpload } from '@mui/icons-material';

const PDFViewer = ({ pdfUrl }) => {

  if (!pdfUrl) {
    return (
      <Box sx={{ textAlign: 'center', mt: 10 }}>
        <CloudUpload sx={{ fontSize: 60, color: 'gray' }} />
        <Typography variant="h6">No PDF Selected</Typography>
        <Button variant="contained" component="label" sx={{ mt: 2 }}>
          Upload PDF
          <input type="file" hidden accept=".pdf" />
        </Button>
      </Box>
    );
  }

  return (
    <Paper sx={{ height: '80vh', mt: 2, overflow: 'hidden' }}>
      <iframe
        src={`${pdfUrl}#toolbar=0`} 
        width="100%"
        height="100%"
        style={{ border: 'none' }}
        title="PDF Document"
      />
    </Paper>
  );
};

export default PDFViewer;