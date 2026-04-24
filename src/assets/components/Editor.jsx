import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Collaboration from '@tiptap/extension-collaboration';
import * as Y from 'yjs';
import { Box, Paper, Divider } from '@mui/material';

// 1. Setup the Yjs document (the shared state)
const ydoc = new Y.Doc();

const Editor = () => {
  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        // Disable history because Collaboration has its own undo manager
        history: false,
      }),
      Collaboration.configure({
        document: ydoc,
      }),
    ],
    content: `<h3>Resource Title</h3><p>Start typing your documentation here...</p>`,
    editorProps: {
      attributes: {
        style: 'outline: none; min-height: 500px; padding: 20px;',
      },
    },
  });

  return (
    <Paper variant="outlined" sx={{ mt: 2, borderRadius: 2 }}>
      <Box sx={{ p: 1, backgroundColor: '#f5f5f5', borderBottom: '1px solid #ddd' }}>
        {/* You can add MUI Buttons here for Bold, Italic, etc. */}
        <strong>Editor Toolbar</strong>
      </Box>
      <EditorContent editor={editor} />
    </Paper>
  );
};

export default Editor;