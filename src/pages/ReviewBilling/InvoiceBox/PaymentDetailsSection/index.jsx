import {
    Accordion,
    AccordionSummary,
    AccordionDetails,
    Box,
    Typography,
    TextField,
    FormControl,
    Select,
    MenuItem,
    Radio,
    RadioGroup,
    FormControlLabel,
    IconButton,
    Button,
  } from '@mui/material';
  import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
  import LinkIcon from '@mui/icons-material/Link';
  import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
  import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
  
  const PaymentDetailsSection = () => {
    return (
      <Box width="100%" maxWidth="400px" mx="auto" p={2}>
        {/* Payment Details Accordion */}
        <Accordion defaultExpanded>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography fontWeight={600}>Payment Details</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <RadioGroup row sx={{ mb: 1 }}>
              <FormControlLabel value="paid" control={<Radio color="primary" />} label="Paid" />
              <FormControlLabel value="unpaid" control={<Radio color="primary" />} label="Unpaid" />
            </RadioGroup>
  
            <TextField fullWidth size="small" label="Bill Number" margin="dense" />
            <TextField fullWidth size="small" label="Bill Date" margin="dense" />
            <TextField fullWidth size="small" label="Paid Amount" margin="dense" defaultValue="₹ 9000.00" />
  
            <Box display="flex" alignItems="center" gap={1}>
              <TextField fullWidth size="small" label="Paid Date" margin="dense" />
              <svg width="76" height="76" viewBox="0 0 76 76" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g filter="url(#filter0_d_1_1182)">
                <rect x="10" y="8" width="56" height="56" rx="8" fill="#9C85ED"/>
                <path d="M42.0682 30.7513H42.0775M45.5682 30.7513H45.5775M49.6609 30.4981C49.6609 33.5805 47.0487 36.0795 43.8275 36.0795C43.448 36.0795 43.0719 36.0445 42.6994 35.9745C42.431 35.9243 42.2969 35.8998 42.2035 35.9138C42.1102 35.9278 41.9772 35.9978 41.7135 36.139C40.9586 36.5413 40.0899 36.6766 39.2484 36.5228C39.57 36.1254 39.7881 35.6544 39.883 35.152C39.9414 34.8428 39.7967 34.543 39.5797 34.3236C38.5673 33.3076 37.9974 31.9325 37.9942 30.4981C37.9942 27.417 40.6064 24.918 43.8275 24.918C47.0487 24.918 49.6609 27.417 49.6609 30.4981ZM32.7465 47.0846H29.4985C29.1217 47.0846 28.7425 47.031 28.396 46.8828C27.269 46.3986 26.6962 45.7581 26.4302 45.358C26.358 45.2471 26.3226 45.1164 26.3288 44.9842C26.3351 44.8521 26.3828 44.7253 26.4652 44.6218C27.7719 42.8858 30.8052 41.8381 32.7524 41.8381C34.6984 41.8381 37.727 42.8858 39.0337 44.6218C39.1982 44.84 39.2204 45.1305 39.0687 45.358C38.8015 45.7581 38.2287 46.3986 37.1017 46.8828C36.7516 47.0237 36.3766 47.0924 35.9992 47.0846H32.7465ZM35.9945 35.7551C35.9939 36.1804 35.9096 36.6015 35.7462 36.9942C35.5829 37.3869 35.3438 37.7435 35.0427 38.0439C34.7415 38.3442 34.3841 38.5822 33.991 38.7444C33.5978 38.9066 33.1765 38.9897 32.7512 38.9891C31.8927 38.9898 31.069 38.6495 30.4613 38.043C29.8535 37.4366 29.5115 36.6137 29.5102 35.7551C29.5107 35.3298 29.5949 34.9088 29.7581 34.516C29.9213 34.1233 30.1602 33.7665 30.4613 33.4661C30.7623 33.1657 31.1196 32.9275 31.5127 32.7652C31.9058 32.6028 32.3271 32.5195 32.7524 32.52C33.1777 32.5195 33.5989 32.6028 33.992 32.7652C34.3851 32.9275 34.7424 33.1657 35.0435 33.4661C35.3446 33.7665 35.5835 34.1233 35.7467 34.516C35.9099 34.9088 35.9941 35.3298 35.9945 35.7551Z" stroke="white" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"/>
                </g>
                <defs>
                <filter id="filter0_d_1_1182" x="0" y="0" width="76" height="76" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                <feOffset dy="2"/>
                <feGaussianBlur stdDeviation="5"/>
                <feComposite in2="hardAlpha" operator="out"/>
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_1182"/>
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_1182" result="shape"/>
                </filter>
                </defs>
                </svg>
            </Box>
  
            <TextField fullWidth size="small" label="Due Date" margin="dense" />
  
            <FormControl fullWidth margin="dense" size="small">
              <Select displayEmpty defaultValue="">
                <MenuItem value="">Select Payment Mode</MenuItem>
                <MenuItem value="card">Card</MenuItem>
                <MenuItem value="bank">Bank</MenuItem>
              </Select>
            </FormControl>
  
            <FormControl fullWidth margin="dense" size="small">
              <Select displayEmpty defaultValue="">
                <MenuItem value="">Select Currency</MenuItem>
                <MenuItem value="USD">USD</MenuItem>
                <MenuItem value="GBP">GBP</MenuItem>
              </Select>
            </FormControl>
  
            <TextField fullWidth size="small" label="Bank Transaction Ref" margin="dense" />
            <TextField fullWidth size="small" label="Total Amount" margin="dense" />
            <TextField fullWidth size="small" label="Tax Amount" margin="dense" />
            <TextField fullWidth size="small" label="Total Amount (GBP)" margin="dense" />
            <TextField fullWidth size="small" label="Tax Amount (GBP)" margin="dense" />
            <TextField fullWidth size="small" label="FX Rate" margin="dense" />
          </AccordionDetails>
        </Accordion>
  
        {/* Description Accordion */}
        <Accordion defaultExpanded sx={{ mt: 1 }}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography fontWeight={600}>Description</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography fontWeight={500} sx={{ mb: 1, color:"#8181A5", textAlign:"left" }}>Line Item</Typography>
            <RadioGroup row sx={{ mb: 2 }}>
              <FormControlLabel value="single" control={<Radio color="primary" />} label="Single" />
              <FormControlLabel value="multiple" control={<Radio color="primary" />} label="Multiple" />
            </RadioGroup>
  
            <TextField
              fullWidth
              size="small"
              label="Description"
              margin="dense"
              placeholder="Enter Description"
              multiline
              rows={3}
            />
          </AccordionDetails>
        </Accordion>
  
        {/* Pagination & Actions */}
        <Box display="flex" justifyContent="space-between" alignItems="center" mt={3}>
          <IconButton><ArrowBackIosNewIcon fontSize="small" /></IconButton>
          <Box
            sx={{
              height: 6,
              width: 6,
              borderRadius: '50%',
              backgroundColor: '#8e44fd',
            }}
          />
          <IconButton><ArrowForwardIosIcon fontSize="small" /></IconButton>
        </Box>
  
        <Box display="flex" flexDirection="column" mt={2} gap={1}>
          <Button variant="contained" disabled sx={{ textTransform: 'none', bgcolor: '#e6e6f7' }}>
            Save
          </Button>
          <Button variant="contained" sx={{ textTransform: 'none', bgcolor: '#7c4dff' }}>
            Publish
          </Button>
        </Box>
      </Box>
    );
  };
  
  export default PaymentDetailsSection;
  