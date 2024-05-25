import React, { useState, useEffect } from 'react';
import { Drawer, Button, TextField, Box, Typography } from '@mui/material';
import MapWithMultipleStops from './MapWithMultipleStops';

const NavigationPage = () => {
  const [open, setOpen] = useState(false);
  const stops = [
    { lng: 79.4192, lat: 28.4478 }, // Bareilly, India
    { lng: 72.8777, lat: 19.076 }, // Mumbai, India
    { lng: 77.5946, lat: 12.9716 }, // Bangalore, India
    { lng: 80.2707, lat: 13.0827 } // Chennai, India
  ];

  const toggleDrawer = (isOpen) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setOpen(isOpen);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    
    console.log('Form submitted');
  };

  const drawerContent = (
    <Box
      sx={{
        width: 260,
        marginTop: 10,
        padding: 2,
      }}
      color='white'
      fontWeight='bold'
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
    <p className="mb-10 text-[1.45rem] leading-[1.375rem] text-richblack-5">
      Flight Details
    </p>
      <form onSubmit={handleSubmit}>
      <label className="w-full">
        <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5">
          Registeration <sup className="text-pink-200">*</sup>
        </p>
        <input
          required
          type="text"
          name="email"
          placeholder="Enter Aircraft Reg. No."
          className="mb-7 form-style w-full"
        />
      </label>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          sx={{ mt: 2 }}
        >
          Submit
        </Button>
      </form>
    </Box>
  );


  return (
    <div>
      <Drawer PaperProps={{
        sx: {
          backgroundColor: '#161d29',
          color: "white",
          textDecorationColor: "white",
        }}}  variant="permanent" open={open}>
        {drawerContent}
      </Drawer>
      <div>
        <h1>Embedding a Website using an Iframe</h1>
        <MapWithMultipleStops stops={stops}/>
      </div>
    </div>
  );
};

export default NavigationPage;
