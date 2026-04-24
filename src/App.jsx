import React, { useState } from 'react';
import { Box, Drawer, AppBar, Toolbar, List, Typography, ListItem, ListItemButton, ListItemIcon, ListItemText, CssBaseline } from '@mui/material';
import { Description, PictureAsPdf, Folder } from '@mui/icons-material';
import Editor from './assets/components/Editor';
import PDFViewer from './assets/components/PdfViewer';

// Basic components (we will build these out next)
const EditorView = () => <Box p={3}><Editor /></Box>;
const PDFView = () => <Box p={3}><PDFViewer /></Box>;

const drawerWidth = 240;

export default function App() {
  const [view, setView] = useState('doc');

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            Resource Hub 2026
          </Typography>
        </Toolbar>
      </AppBar>

      
    </Box>
  );
}