import React from "react";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {
  Box,
  Typography,
  Button,
  Tabs,
  Tab,
  Paper,
  Grid,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
  TextField,
  RadioGroup,
  FormControlLabel,
  Radio,
  Select,
  MenuItem,
  Checkbox,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  FormControl,
  Container,
} from "@mui/material";
import PaymentDetailsSection from "./PaymentDetailsSection";

export default function InvoiceBox() {
  return (
    <Box maxWidth="800px" mx="auto">
    <Box p={2} sx={{ border: '1px solid #E0E0E0', borderRadius: 2, backgroundColor: '#fff' }}>
      {/* Quickbook Info */}
      <Box p={2} sx={{ border: '1px solid #E0E0E0', borderRadius: 2, backgroundColor: '#fff' }}>
        <Grid container justifyContent="space-between">
          <Box display="flex" gap={1}>
            <Avatar alt="Quickbook" sx={{ width: 32, height: 32, background: "green" }}>
              {/* Your SVG */}
            </Avatar>
            <Box textAlign="left">
              <Typography fontWeight="bold" color="black" fontSize="14px">Quickbook</Typography>
              <Typography variant="caption" color="text.secondary">16 June, 2024</Typography><br />
              <Typography variant="caption" color="text.secondary">8:15 PM</Typography>
            </Box>
          </Box>

          <Box textAlign="right">
            <Typography fontSize="12px" color="text.secondary">Publishing...</Typography>
            <Typography fontSize="12px" color="primary">Jimmy Jason</Typography>
          </Box>
        </Grid>

        {/* Checkboxes */}
        <Box mt={2} display="flex" gap={2}>
          <FormControlLabel
            control={<Checkbox defaultChecked sx={{ color: '#7C3AED', '&.Mui-checked': { color: '#7C3AED' } }} />}
            label="Auto-sync"
            sx={{ color: '#000', fontWeight: 600 }}
          />
          <FormControlLabel
            control={<Checkbox defaultChecked sx={{ color: '#7C3AED', '&.Mui-checked': { color: '#7C3AED' } }} />}
            label="Save Config"
            sx={{ color: '#000' }}
          />
        </Box>
      </Box>

      {/* Comment Area */}
      <Box mt={2}>
        <Box display={'flex'} justifyContent={'space-between'} mx={4}>
            <Button size="small" variant="outlined" sx={{textTransform:'capitalize'}}>Comment</Button>
            <Button size="small" sx={{color:'grey', textTransform:'capitalize'}}>Query</Button>
        </Box>
        <Box my={4}>
            <Typography mt={1} fontSize="18px" fontWeight={400} color="grey" textAlign={'left'}><b>Type Comment</b></Typography>
            <TextField sx={{mt:1}} fullWidth multiline rows={4} size="small" placeholder="Start typing..." variant="standard" />
        </Box>
        <Button fullWidth sx={{ mt: 2, textTransform:'capitalize' }} variant="outlined" disabled>Add Comment</Button>
        <Button fullWidth sx={{ mt: 1, textTransform:'capitalize' }} variant="contained">View Line Items</Button>
      </Box>
        <PaymentDetailsSection/>
    </Box>
  </Box>
  );
}
