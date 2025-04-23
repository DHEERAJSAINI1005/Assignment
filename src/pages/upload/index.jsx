import React, { useState } from "react";
import { Box, Button, Select, MenuItem, InputLabel, FormControl, Typography, Tab, Tabs, Divider } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import "./style.css"; 
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import BackupIcon from '@mui/icons-material/Backup';

const UploadComponent = () => {
  const [activeTab, setActiveTab] = useState("Receipts");
  const [selectedFile, setSelectedFile] = useState(null);
  const [client, setClient] = useState("Client 1");

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  return (
    <Box className="upload-container" sx={{textAlign:"left"}}>
      {/* Tabs */}
      <Box className="tabs-container">
        <Tabs
          value={activeTab}
          onChange={(e, newValue) => setActiveTab(newValue)}
          textColor="primary"
          indicatorColor="primary"
        >
          {["EasyUpload", "Bills", "Receipts", "Bank"].map((tab) => (
            <Tab
              key={tab}
              label={tab}
              value={tab}
              className={`tab-button ${activeTab === tab ? "active" : ""}`}
              sx={{textTransform:"capitalize",justifyItems:"flex-start", textAlign:"left"}}
            />
          ))}
        </Tabs>
        <Button color="default">
          <CloseIcon sx={{color:"black"}} fontSize="30" />
        </Button>
      </Box>

      {/* Document Owner & Client */}
      <Box 
      sx={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        gap: 4, 
        mb: 4 
      }}
    >
      {/* Document Owner */}
        <Box display={'flex'} sx={{borderBottom:"1px solid grey"}} flexDirection={'row'} width={'100%'} p={2}>
          <Box sx={{ flex: 0.7 }} display={'flex'} flexDirection={'column'} gap={2}>
            <Typography fontSize="14px" fontWeight={400} color="#8181A5">
              Document Owner
            </Typography>
            <Typography color="#000000" fontSize="14px" fontWeight={700}>
              Accountant 01
            </Typography>
            {/* <Divider/> */}
          </Box>

          {/* Client Select */}
          <Box sx={{ flex: 1 }}>
            <Typography fontSize="14px" fontWeight={400} color="#8181A5" mb={0.5}>
              Client
            </Typography>
            <FormControl fullWidth size="small">
            <Select
                labelId="demo-simple-select-filled-label"
                id="demo-simple-select-filled"
                value={client}
              >
                <MenuItem value="">Select Client</MenuItem>
                <MenuItem value="Client 1">Client 1</MenuItem>
                <MenuItem value="Client 2">Client 2</MenuItem>
              </Select>
            </FormControl>
          </Box>
          </Box>
          {/* <Divider/> */}
        </Box>

      {/* File Upload Box */}
      <Box className="file-upload-box" sx={{textAlign:"center"}}>
        <label htmlFor="file-upload">
          {/* <input type="file" id="file-upload" className="hidden" onChange={handleFileChange} /> */}
          <Box className="flex flex-col items-center">
            <Box>
              <Typography sx={{color:"#603AE5"}} variant="body2" className="file-upload-text">
                <b>Drag & Drop or Choose file to upload</b>
              </Typography>
              <Typography sx={{color:"#603AE5"}} variant="caption" className="file-upload-info">
                JPG, PNG, PDF, CVS
              </Typography>
            </Box>
          </Box>
        </label>
      </Box>

      {/* Add Receipt Button */}
      <Box textAlign="center">
        <Button variant="contained" className="add-receipt-btn" sx={{textTransform:"capitalize", background:"#603AE5"}}>
          Add Receipt
        </Button>
      </Box>

      {/* Email Section */}
      <Box className="email-section">
        <Typography variant="body2" className="email-text" sx={{color:"#8181A5", fontSize:"14px", fontWeight:400}}>
          Send Over Email
        </Typography>
        <Box className="flex items-center gap-4 mb-4" sx={{pt:1,  mb:4}} >
          <Typography sx={{color:"#603AE5"}} variant="body2" className="email-link" alignItems={"center"}>
          <b style={{ color: "black" }}>Single :</b> abc.single@gmail.com <ContentCopyIcon fontSize="20"/>
          </Typography>
          <Typography sx={{color:"#603AE5", pt:1}} variant="body2" className="email-link" alignItems={"center"}>
            <b style={{ color: "black" }}>Multiple :</b> abc.single@gmail.com <ContentCopyIcon fontSize="20"/>
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default UploadComponent;
