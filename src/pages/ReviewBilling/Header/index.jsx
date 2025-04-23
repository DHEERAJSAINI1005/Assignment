import { Box, Button, MenuItem, Select, Typography } from '@mui/material';
import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SettingsIcon from '@mui/icons-material/Settings';
import MainBody from '../MainBody';

const Header = () => {
  return (
    <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column', mb: 2 }}>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        p={2}
        flexWrap="wrap"
      >
        <Box display="flex" alignItems="center" gap={1} flexWrap="wrap">
          <Typography fontWeight={600} color='#000000'>Review</Typography>
          <Select
            defaultValue="Google"
            size="small"
            sx={{ width: "160px", borderRadius: "8px" }}
          >
            <MenuItem value="Google">Google</MenuItem>
            <MenuItem value="Microsoft">Microsoft</MenuItem>
          </Select>
          <Button
            sx={{
              textTransform: "capitalize",
              background: "#ecfcff",
              color: "#2CA01D",
              fontSize: "12px",
              px: 1.5,
              py: 0.5,
              minWidth: 'auto',
              whiteSpace: 'nowrap'
            }}
          >
            Quickbook's Data
          </Button>
        </Box>

        <Box
          display="flex"
          alignItems="center"
          gap={1}
          flexWrap="nowrap"
          overflow="auto"
        >
          <Button variant="outlined" sx={buttonStyle}><SearchIcon sx={{ fontSize: 18 }} /></Button>
          <Button variant="outlined" sx={buttonStyle}>Export</Button>
          <Button variant="outlined" sx={buttonStyle}>Add</Button>
          <Button variant="outlined" sx={buttonStyle}>Connect</Button>
          <Button variant="outlined" sx={buttonStyle}><NotificationsIcon sx={{ fontSize: 18 }} /></Button>
          <Button variant="outlined" sx={buttonStyle}><SettingsIcon sx={{ fontSize: 18 }} /></Button>
        </Box>
      </Box>

      <MainBody />
    </Box>
  );
};

const buttonStyle = {
  background: "#efebfc",
  textTransform: "capitalize",
  fontSize: "12px",
  px: 1.5,
  py: 0.5,
  minWidth: 'auto',
  whiteSpace: 'nowrap'
};

export default Header;
