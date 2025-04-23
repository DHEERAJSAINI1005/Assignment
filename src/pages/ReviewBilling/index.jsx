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
import SideBar from "./SideBar";
import Header from "./Header";
import InvoiceBox from "./InvoiceBox/InvoiceBox";

export default function InvoiceReview() {
  return (
    <Box sx={{ background: "#f5f7fa", minHeight: "100vh" }}>
      <Grid container>
        {/* Sidebar */}
        <Grid size ={1}>
          <SideBar />
        </Grid>

        {/* Main Content Area */}
        <Grid size ={8}>
              <Header />
        </Grid>
        <Grid size ={3}>
            <InvoiceBox/>
        </Grid>
      </Grid>
    </Box>
  );
}
