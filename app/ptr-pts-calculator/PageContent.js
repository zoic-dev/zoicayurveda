"use client";

import { useState, useEffect } from "react";
import {
    Box,
    Container,
    Typography,
    TextField,
    Grid,
    Card,
    CardContent,
    Button,
    MenuItem,
    Divider,
    Stack,
} from "@mui/material";

export default function PageContent() {
    const [mrp, setMrp] = useState(100);
    const [gst, setGst] = useState(5);
    const [retailerMargin, setRetailerMargin] = useState(20);
    const [stockistMargin, setStockistMargin] = useState(10);
    const [ptr, setPtr] = useState(0);
    const [pts, setPts] = useState(0);

    useEffect(() => {
        calculate();
    }, [mrp, gst, retailerMargin, stockistMargin]);

    const calculate = () => {
        if (!mrp){
            setPtr(0);
            setPts(0);
            return;
        }

        const ptrValue =
            ((mrp - (mrp * retailerMargin) / 100) / (100 + gst)) * 100;

        const ptsValue = ptrValue - (ptrValue * stockistMargin) / 100;

        setPtr(ptrValue.toFixed(2));
        setPts(ptsValue.toFixed(2));
    };

    return (
        <Box sx={{ bgcolor: "#f4f7fb" }}>
            {/* HERO SECTION */}
            <Box
                sx={{
                    py: 8,
                    background: "linear-gradient(135deg, #E42527 0%, #E42527 100%)",
                    color: "white",
                    textAlign: "center",
                }}
            >
                <Container maxWidth="md">
                    <Typography variant="h3" fontWeight="bold" gutterBottom>
                        PTR & PTS Calculator
                    </Typography>
                    <Typography variant="h6" sx={{ opacity: 0.9 }}>
                        Calculate Pharma Retailer & Stockist Margins Instantly
                    </Typography>
                </Container>
            </Box>

            {/* CALCULATOR SECTION */}
            <Container maxWidth="md" sx={{ py: 8 }}>
                <Card sx={{ p: 4, borderRadius: 3, boxShadow: 4 }}>
                    <CardContent>
                        <Typography
                            variant="h5"
                            fontWeight="bold"
                            gutterBottom
                            textAlign="center"
                            mb={5}
                        >
                            PTR & PTS Calculator
                        </Typography>

                        <Grid container spacing={3} sx={{ mt: 1 }}>
                            <Grid size={{ xs: 12, sm: 6 }}>
                                <TextField
                                    fullWidth
                                    label="MRP"
                                    type="number"
                                    value={mrp}
                                    onChange={(e) => setMrp(Number(e.target.value))}
                                />
                            </Grid>

                            <Grid size={{ xs: 12, sm: 6 }}>
                                <TextField
                                    select
                                    fullWidth
                                    label="GST %"
                                    value={gst}
                                    onChange={(e) => setGst(Number(e.target.value))}
                                >
                                    <MenuItem value={5}>5%</MenuItem>
                                    <MenuItem value={12}>12%</MenuItem>
                                    <MenuItem value={18}>18%</MenuItem>
                                </TextField>
                            </Grid>

                            <Grid size={{ xs: 12, sm: 6 }}>
                                <TextField
                                    fullWidth
                                    label="Retailer Margin %"
                                    type="number"
                                    value={retailerMargin}
                                    onChange={(e) => setRetailerMargin(Number(e.target.value))}
                                />
                            </Grid>

                            <Grid size={{ xs: 12, sm: 6 }}>
                                <TextField
                                    fullWidth
                                    label="Stockist Margin %"
                                    type="number"
                                    value={stockistMargin}
                                    onChange={(e) => setStockistMargin(Number(e.target.value))}
                                />
                            </Grid>
                        </Grid>

                        <Divider sx={{ my: 4 }} />

                        <Stack spacing={2} textAlign="center">
                            <Typography variant="h6">
                                PTR (Price to Retailer)
                            </Typography>
                            <Typography
                                variant="h4"
                                fontWeight="bold"
                                color="primary"
                            >
                                ₹ {ptr}
                            </Typography>

                            <Typography variant="h6" sx={{ mt: 2 }}>
                                PTS (Price to Stockist)
                            </Typography>
                            <Typography
                                variant="h4"
                                fontWeight="bold"
                                color="secondary"
                            >
                                ₹ {pts}
                            </Typography>
                        </Stack>
                    </CardContent>
                </Card>
            </Container>

            {/* INFO SECTION */}
            <Box sx={{ bgcolor: "#ffffff", py: 8 }}>
                <Container maxWidth="lg">
                    <Typography variant="h4" fontWeight="bold" gutterBottom>
                        How It Works
                    </Typography>

                    <Typography variant="body1" paragraph color="text.secondary">
                        With GST implementation, Pharma pricing calculations have changed.
                        This calculator gives you a clear idea of how to calculate PTR
                        (Price to Retailer) and PTS (Price to Stockist).
                    </Typography>

                    <Typography variant="body1" paragraph>
                        <strong>Formula:</strong>
                    </Typography>

                    <Typography variant="body2" paragraph>
                        P.T.R = (MRP – Retailer Margin) ÷ (100 + GST) × 100
                    </Typography>

                    <Typography variant="body2">
                        P.T.S = PTR – Stockist Margin %
                    </Typography>
                </Container>
            </Box>
        </Box>
    );
}