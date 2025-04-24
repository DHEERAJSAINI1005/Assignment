import { Avatar, Box, Button, Grid, List, ListItem, ListItemAvatar, ListItemText, Paper, Tab, Tabs, Typography } from '@mui/material'
import React from 'react'
import TransitionsModal from '../../upload/uploadModal';

const billData = Array.from({ length: 8 }, (_, i) => ({
  title: `Bill ${i + 1}`,
  date: "Nov 1, 2019",
  amount: "£ 50.59",
  image: "https://via.placeholder.com/40", // You can replace with invoice icons
}));

const MainBody = () => {
    return (
        <Paper variant={1} sx={{ background: "white", m:3 }}>
            <Box justifyContent={"end"} display={"flex"} m={2}>
            <TransitionsModal/>
                <Button variant="contained" justifyContent={"end"} sx={{ background: "#6c4cf1", textTransform: "capitalize" }}>
                    Add to Expenses Report
                </Button>
            </Box>
            <Box sx={{ mb: 2, display: "flex", justifyContent: "space-between" }}>
                <Tabs value={1} sx={{ textTransform: "capitalize" }}>
                    <Tab sx={{ textTransform: "capitalize" }} label="All Document" />
                    <Tab sx={{ textTransform: "capitalize" }} label="Bills" />
                    <Tab sx={{ textTransform: "capitalize" }} label="Receipts" />
                </Tabs>

            </Box>

            <Grid container spacing={2} sx={{ height: "100%" }}>
                {/* Left Panel */}
                <Grid item size={4}>
                    <Paper sx={{ overflowY: "auto", p: 2 }}>
                        <List>
                            {billData.map((bill, idx) => (
                                <ListItem key={idx} alignItems="flex-start" divider>
                                    <ListItemAvatar>
                                        <Avatar
                                            variant="square"
                                            src={bill.image}
                                            alt="invoice"
                                            sx={{ width: 40, height: 40 }}
                                        />
                                    </ListItemAvatar>
                                    <ListItemText
                                        primary={
                                            <Typography
                                                sx={{
                                                    color: idx === 0 ? "#6c4cf1" : "black",
                                                    fontWeight: idx === 0 ? "bold" : "normal",
                                                }}
                                            >
                                                {bill.title}
                                            </Typography>
                                        }
                                        secondary={
                                            <>
                                                <Typography variant="body2">Date: {bill.date}</Typography>
                                                <Typography variant="body2">{bill.amount}</Typography>
                                            </>
                                        }
                                    />
                                </ListItem>
                            ))}
                        </List>
                    </Paper>
                </Grid>

                {/* Invoice Preview */}
                <Grid item size={2}>    
                    <img
                        height={'600px'}
                        width={'500px'}
                        src='/bodyImage.png'
                    />

                </Grid>
            </Grid>
        </Paper>
    )
}

export default MainBody
