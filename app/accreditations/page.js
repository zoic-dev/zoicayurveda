"use client";

import React from "react";
import { Box, Container, Typography, Grid, Card } from "@mui/material";

const PRIMARY = "#1F6A36";
const BG = "#F3FFF8";

const accreditationImages = [
    { src: "/accreditations/FSSAI.jpg", alt: "FSSAI Certificate" },
    { src: "/accreditations/HALAL.jpg", alt: "Halal Certification" },
    { src: "/accreditations/ISO-scaled.jpg", alt: "ISO Certificate" },
    { src: "/accreditations/WHO-GMP-CERTIFICATE.jpg", alt: "WHO-GMP Certificate" },
    { src: "/accreditations/GMP-pic.jpg", alt: "GMP Certificate" },
    { src: "/accreditations/certificate3.jpg", alt: "Other Certificate" }
];

export default function AccreditationsPage() {
    return (
        <Box sx={{ minHeight: '100vh', py: { xs: 6, md: 12 } }}>
            <Container maxWidth="lg">

                {/* Hero Section */}
                <Box textAlign="center" mb={6}>
                    <Typography variant="h3" sx={{ color: PRIMARY, fontWeight: 800, mb: 2 }}>
                        Our Accreditations & Certifications
                    </Typography>
                    <Typography sx={{ fontSize: 18, color: '#4A4A4A', maxWidth: 800, margin: '0 auto' }}>
                        Zocveda Wellness is committed to quality, safety, and compliance. Our certifications reflect our dedication to manufacturing premium Ayurvedic and herbal products in adherence to global standards.
                    </Typography>
                </Box>

                {/* Accreditations Grid */}
                <Grid container spacing={4} justifyContent="center">
                    {accreditationImages.map((img, index) => (
                        <Grid key={index} size={{ xs: 12, sm: 6, md: 4 }}>
                            <Card sx={{ p: 2, borderRadius: 3, boxShadow: 3, display: 'flex', justifyContent: 'center', alignItems: 'center', height: "auto" }}>
                                <img src={img.src} alt={img.alt} style={{ maxHeight: '100%', maxWidth: '100%', objectFit: 'contain' }} />
                            </Card>
                        </Grid>
                    ))}
                </Grid>

                {/* Optional Description Section */}
                <Box sx={{ mt: 6, textAlign: 'center' }}>
                    <Typography sx={{ fontSize: 18, color: '#4A4A4A', maxWidth: 900, margin: '0 auto' }}>
                        Each certification and accreditation is a testament to our rigorous quality control, adherence to global standards, and commitment to producing safe, effective, and trustworthy Ayurvedic products. By following WHO-GMP, ISO, FSSAI, and other standards, we ensure that our products meet the highest levels of safety and efficacy.
                    </Typography>
                </Box>

            </Container>
        </Box>
    );
}
