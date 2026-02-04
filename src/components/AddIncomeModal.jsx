import React from "react";
import { Box, Button, Modal, Stack, TextField, Typography } from "@mui/material";

// Define the style object that was missing
const modalStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: { xs: '90%', sm: 400 }, // Responsive width for mobile
  bgcolor: 'background.paper',
  borderRadius: 4,
  boxShadow: 24,
  p: 4,
  color: 'text.primary'
};

const AddIncomeModal = ({ isOpen, handleClose, setBalance }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const amount = Number(formData.get('amount'));
    
    if (amount > 0) {
      setBalance(prev => prev + amount);
      handleClose();
    }
  };

  return (
    <Modal open={isOpen} onClose={handleClose}>
      <Box sx={modalStyle}>
        <Typography variant="h6" mb={2} sx={{ fontWeight: 'bold' }}>
          Add Balance
        </Typography>
        <form onSubmit={handleSubmit}>
          <Stack spacing={3}>
            <TextField 
              label="Income Amount" 
              name="amount" 
              type="number" 
              placeholder="Income Amount" 
              fullWidth 
              required 
              autoFocus
            />
            <Stack direction="row" spacing={2}>
              <Button 
                variant="contained" 
                type="submit" 
                sx={{ bgcolor: '#FF9304', '&:hover': { bgcolor: '#e68503' } }} 
                fullWidth
              >
                Add Balance
              </Button>
              <Button 
                variant="outlined" 
                onClick={handleClose} 
                sx={{ color: '#000', borderColor: '#ddd' }}
                fullWidth
              >
                Cancel
              </Button>
            </Stack>
          </Stack>
        </form>
      </Box>
    </Modal>
  );
};

export default AddIncomeModal;