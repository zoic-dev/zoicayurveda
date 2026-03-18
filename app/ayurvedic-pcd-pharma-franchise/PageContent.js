"use client";

import Link from "next/link";
import React from "react";
import {
    Box,
    Container,
    Grid,
    Typography,
    Button,
    Card,
    CardContent,
    Chip,
    Accordion,
    AccordionSummary,
    AccordionDetails,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Divider,
    Stack
} from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import PlaceIcon from '@mui/icons-material/Place';
import EmailIcon from '@mui/icons-material/Email';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

// Place this file at /app/pcd-franchise/page.jsx (or /pages/pcd-franchise.jsx for pages router)
// Uses MUI components and Next.js Link. Adapt imports if you use TypeScript.

const PRIMARY = "#1F6A36"; // brand pink
const BG = "#F3FFF8"; // soft mint background
const ACCENT_GRADIENT = `linear-gradient(135deg, ${PRIMARY} 0%, #60B04A 100%)`;

const productCategories = [
    "Acidity & Digestive Care",
    "Acne & Skin Care",
    "Allergy Relief",
    "Arthritis & Joint Pain",
    "Asthma & Respiratory Care",
    "Diabetes Management",
    "Women Wellness",
    "Stress & Sleep",
    "Baby Care",
    "Hair & Scalp Treatments",
    "Immunity & General Wellness",
];

const faqs = [
    {
        q: "How long does it take to start a franchise?",
        a: "Once licenses and documentation are in order, it typically takes around 60–80 days to get your franchise fully operational (may vary by location).",
    },
    {
        q: "Will there be competition from other Zocveda franchisees?",
        a: "No — we provide exclusive monopoly rights for the territory assigned to you to ensure healthy growth without intra-brand competition.",
    },
    {
        q: "What is the typical investment required?",
        a: "Initial working capital usually starts between ₹30,000 – ₹50,000 depending on the order volume and marketing choices.",
    },
    {
        q: "Which documents are required to begin?",
        a: "Basic requirements include Drug Licence (State/Central), GST/TIN, Distributor licence and standard business ID proofs. Our team helps you through the process.",
    },
];

export default function PageContent() {
    return (
        <Box sx={{ minHeight: '100vh', backgroundColor: BG, py: { xs: 6, md: 12 } }}>
            <Container maxWidth="lg">

                {/* Hero */}
                <Card sx={{ borderRadius: 4, p: { xs: 3, md: 6 }, boxShadow: 6, mb: 6 }}>
                    <Grid container spacing={4} alignItems="center">
                        <Grid size={{ xs: 12, md: 7 }}>
                            <Typography variant="h3" sx={{ color: PRIMARY, fontWeight: 800, mb: 2 }}>
                                Ayurvedic PCD Pharma Franchise
                            </Typography>
                            <Typography sx={{ fontSize: 18, color: '#334', mb: 3 }}>
                                Join <strong>Zocveda Wellness</strong> — trusted Ayurvedic manufacturers and franchise partners. Get monopoly rights, premium products, and full marketing support to build a profitable herbal business.
                            </Typography>

                            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                                <Link href="/contact" passHref>
                                    <Button
                                        sx={{
                                            px: 5,
                                            py: 1.5,
                                            background: ACCENT_GRADIENT,
                                            color: '#fff',
                                            fontWeight: 700,
                                            borderRadius: 3,
                                            boxShadow: '0 6px 18px rgba(31,106,54,0.32)',
                                            '&:hover': { transform: 'translateY(-3px)' }
                                        }}
                                    >
                                        Enquire Now
                                    </Button>
                                </Link>

                                <Button
                                    onClick={() => {
                                        const el = document.getElementById('franchise-details');
                                        if (el) el.scrollIntoView({ behavior: 'smooth' });
                                    }}
                                    sx={{
                                        px: 5,
                                        py: 1.5,
                                        borderRadius: 3,
                                        border: `1px solid ${PRIMARY}`,
                                        color: PRIMARY,
                                        backgroundColor: 'transparent',
                                        fontWeight: 700,
                                        '&:hover': { backgroundColor: 'rgba(229,44,134,0.06)' }
                                    }}
                                >
                                    Learn More
                                </Button>
                            </Stack>
                        </Grid>

                        <Grid size={{ xs: 12, md: 5 }}>
                            <Card sx={{ p: 3, borderRadius: 3, boxShadow: 3 }}>
                                <Typography variant="h6" sx={{ fontWeight: 700, color: PRIMARY, mb: 2 }}>
                                    Quick Franchise Snapshot
                                </Typography>
                                <List>
                                    <ListItem>
                                        <ListItemIcon>
                                            <CheckCircleIcon sx={{ color: PRIMARY }} />
                                        </ListItemIcon>
                                        <ListItemText primary="WHO–GMP Manufacturing" />
                                    </ListItem>
                                    <ListItem>
                                        <ListItemIcon>
                                            <CheckCircleIcon sx={{ color: PRIMARY }} />
                                        </ListItemIcon>
                                        <ListItemText primary="FSSAI Approved Products" />
                                    </ListItem>
                                    <ListItem>
                                        <ListItemIcon>
                                            <CheckCircleIcon sx={{ color: PRIMARY }} />
                                        </ListItemIcon>
                                        <ListItemText primary="Monopoly Rights (Territory)" />
                                    </ListItem>
                                </List>
                                <Divider sx={{ my: 2 }} />
                                <Typography sx={{ fontSize: 14, color: '#555' }}>Contact our Franchise Manager</Typography>
                                <Box sx={{ mt: 1 }}>
                                    <Button
                                        component={Link}
                                        href="tel:9815620908"
                                        fullWidth
                                        sx={{
                                            mt: 1,
                                            background: ACCENT_GRADIENT,
                                            color: '#fff',
                                            fontWeight: 700
                                        }}
                                    >
                                        Call: 9815620908
                                    </Button>
                                </Box>
                            </Card>
                        </Grid>
                    </Grid>
                </Card>

                {/* Why Choose */}
                <Grid container spacing={4} sx={{ mb: 10 }}>
                    <Grid size={{ xs: 12, md: 6 }}>
                        <Card sx={{ p: 4, borderRadius: 3, boxShadow: 3 }}>
                            <Typography variant="h5" sx={{ color: PRIMARY, fontWeight: 800, mb: 2 }}>
                                Why Partner with Zocveda
                            </Typography>
                            <Typography sx={{ color: '#444', mb: 2 }}>
                                We combine proven Ayurvedic heritage with modern manufacturing standards to give you products customers trust — and keep coming back for.
                            </Typography>
                            <List>
                                <ListItem>
                                    <ListItemIcon>
                                        <CheckCircleIcon sx={{ color: PRIMARY }} />
                                    </ListItemIcon>
                                    <ListItemText primary="PAN-India distribution & 250+ partners" />
                                </ListItem>
                                <ListItem>
                                    <ListItemIcon>
                                        <CheckCircleIcon sx={{ color: PRIMARY }} />
                                    </ListItemIcon>
                                    <ListItemText primary="Free marketing support & attractive margins" />
                                </ListItem>
                                <ListItem>
                                    <ListItemIcon>
                                        <CheckCircleIcon sx={{ color: PRIMARY }} />
                                    </ListItemIcon>
                                    <ListItemText primary="Quality control & on-time dispatch" />
                                </ListItem>
                            </List>
                        </Card>
                    </Grid>

                    <Grid size={{ xs: 12, md: 6 }}>
                        <Card sx={{ p: 3, borderRadius: 3, boxShadow: 3, height: '100%' }}>
                            <Typography variant="h6" sx={{ color: PRIMARY, fontWeight: 700, mb: 2 }}>Product Highlights</Typography>
                            <Typography sx={{ color: '#444', mb: 2 }}>A curated selection from our portfolio — perfect for launch packs and refill orders.</Typography>
                            <Grid container spacing={1}>
                                {productCategories.map((p, i) => (
                                    <Grid key={i} item xs={6} sm={4}>
                                        <Chip label={p} sx={{ width: '100%', textAlign: 'left', borderRadius: 2, bgcolor: 'transparent', border: '1px solid #eee' }} />
                                    </Grid>
                                ))}
                            </Grid>
                        </Card>
                    </Grid>
                </Grid>

                {/* Franchise Details / Benefits */}
                <Box id="franchise-details" sx={{ mb: 6 }}>
                    <Typography variant="h4" sx={{ color: PRIMARY, fontWeight: 800, mb: 3 }}>Benefits of Investing</Typography>

                    <Grid container spacing={3}>
                        <Grid size={{ xs: 12, md: 4 }}>
                            <Card sx={{ p: 3, borderRadius: 3, boxShadow: 3 }}>
                                <Typography sx={{ fontWeight: 700, color: PRIMARY, mb: 1 }}>Monopoly Rights</Typography>
                                <Typography sx={{ fontSize: 14, color: '#555' }}>Exclusive rights in your area so you can build the business without intra-brand competition.</Typography>
                            </Card>
                        </Grid>

                        <Grid size={{ xs: 12, md: 4 }}>
                            <Card sx={{ p: 3, borderRadius: 3, boxShadow: 3 }}>
                                <Typography sx={{ fontWeight: 700, color: PRIMARY, mb: 1 }}>Quality & Compliance</Typography>
                                <Typography sx={{ fontSize: 14, color: '#555' }}>WHO–GMP manufacturing, FSSAI approved products and strict QC checks at every stage.</Typography>
                            </Card>
                        </Grid>

                        <Grid size={{ xs: 12, md: 4 }}>
                            <Card sx={{ p: 3, borderRadius: 3, boxShadow: 3 }}>
                                <Typography sx={{ fontWeight: 700, color: PRIMARY, mb: 1 }}>Marketing Support</Typography>
                                <Typography sx={{ fontSize: 14, color: '#555' }}>Branded packaging, promotional material, catalogs, and digital creatives to help you sell fast.</Typography>
                            </Card>
                        </Grid>
                    </Grid>
                </Box>

                {/* Market Opportunity */}
                <Card sx={{ p: 4, borderRadius: 3, boxShadow: 3, mb: 6 }}>
                    <Typography variant="h5" sx={{ color: PRIMARY, fontWeight: 800, mb: 2 }}>Market Opportunity</Typography>
                    <Typography sx={{ color: '#333', mb: 2 }}>The herbal & ayurvedic market in India is growing rapidly — driven by rising consumer preference for natural products and government support for traditional medicine.</Typography>

                    <Grid container spacing={2}>
                        <Grid size={{ xs: 12, md: 4 }}>
                            <Card sx={{ p: 3, borderRadius: 2 }}>
                                <Typography variant="h6" sx={{ fontWeight: 800 }}>40%</Typography>
                                <Typography sx={{ fontSize: 13 }}>surge in demand during pandemic months</Typography>
                            </Card>
                        </Grid>
                        <Grid size={{ xs: 12, md: 4 }}>
                            <Card sx={{ p: 3, borderRadius: 2 }}>
                                <Typography variant="h6" sx={{ fontWeight: 800 }}>15% CAGR</Typography>
                                <Typography sx={{ fontSize: 13 }}>expected sector growth</Typography>
                            </Card>
                        </Grid>
                        <Grid size={{ xs: 12, md: 4 }}>
                            <Card sx={{ p: 3, borderRadius: 2 }}>
                                <Typography variant="h6" sx={{ fontWeight: 800 }}>80%</Typography>
                                <Typography sx={{ fontSize: 13 }}>household preference for herbal products</Typography>
                            </Card>
                        </Grid>
                    </Grid>
                </Card>

                {/* Docs & T&C */}
                <Grid container spacing={4} sx={{ mb: 6 }}>
                    <Grid size={{ xs: 12, md: 6 }}>
                        <Card sx={{ p: 4, borderRadius: 3, boxShadow: 3 }}>
                            <Typography sx={{ fontWeight: 800, color: PRIMARY, mb: 2 }}>Documents Required</Typography>
                            <List>
                                <ListItem>
                                    <ListItemIcon><CheckCircleIcon sx={{ color: PRIMARY }} /></ListItemIcon>
                                    <ListItemText primary="Central / State Drug Licence" />
                                </ListItem>
                                <ListItem>
                                    <ListItemIcon><CheckCircleIcon sx={{ color: PRIMARY }} /></ListItemIcon>
                                    <ListItemText primary="GST / TIN / Distributor’s Licence" />
                                </ListItem>
                                <ListItem>
                                    <ListItemIcon><CheckCircleIcon sx={{ color: PRIMARY }} /></ListItemIcon>
                                    <ListItemText primary="Basic Business ID Proofs" />
                                </ListItem>
                            </List>
                        </Card>
                    </Grid>

                    <Grid size={{ xs: 12, md: 6 }}>
                        <Card sx={{ p: 4, borderRadius: 3, boxShadow: 3 }}>
                            <Typography sx={{ fontWeight: 800, color: PRIMARY, mb: 2 }}>Terms & Conditions (Highlights)</Typography>
                            <List>
                                <ListItem>
                                    <ListItemIcon><CheckCircleIcon sx={{ color: PRIMARY }} /></ListItemIcon>
                                    <ListItemText primary="Orders must be placed in written form (Email/WhatsApp)." />
                                </ListItem>
                                <ListItem>
                                    <ListItemIcon><CheckCircleIcon sx={{ color: PRIMARY }} /></ListItemIcon>
                                    <ListItemText primary="Advance payment required for order confirmation." />
                                </ListItem>
                                <ListItem>
                                    <ListItemIcon><CheckCircleIcon sx={{ color: PRIMARY }} /></ListItemIcon>
                                    <ListItemText primary="Processing & dispatch within 7–12 days of order confirmation." />
                                </ListItem>
                            </List>
                        </Card>
                    </Grid>
                </Grid>

                {/* FAQ */}
                <Box sx={{ mb: 6 }}>
                    <Typography variant="h5" sx={{ color: PRIMARY, fontWeight: 800, mb: 2 }}>Frequently Asked Questions</Typography>
                    {faqs.map((f, idx) => (
                        <Accordion key={idx} sx={{ mb: 1, borderRadius: 2 }}>
                            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                                <Typography sx={{ fontWeight: 700 }}>{f.q}</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography sx={{ color: '#444' }}>{f.a}</Typography>
                            </AccordionDetails>
                        </Accordion>
                    ))}
                </Box>

                {/* Contact / CTA Footer */}
                <Card sx={{ p: 4, borderRadius: 3, boxShadow: 6, mb: 10 }}>
                    <Grid container spacing={2} alignItems="center">
                        <Grid size={{ xs: 12, md: 8 }}>
                            <Typography variant="h6" sx={{ color: PRIMARY, fontWeight: 800 }}>Ready to start your Ayurvedic PCD Franchise?</Typography>
                            <Typography sx={{ color: '#444' }}>Contact Zocveda Wellness today — we’ll help you with documentation, product selection and launch strategy.</Typography>

                            <Box sx={{ mt: 2 }}>
                                <List sx={{ display: 'flex', gap: 3 }}>
                                    <ListItem sx={{ width: 'auto' }}>
                                        <ListItemIcon><LocalPhoneIcon sx={{ color: PRIMARY }} /></ListItemIcon>
                                        <ListItemText primary="9815620908" />
                                    </ListItem>
                                    <ListItem sx={{ width: 'auto' }}>
                                        <ListItemIcon><EmailIcon sx={{ color: PRIMARY }} /></ListItemIcon>
                                        <ListItemText primary="contact@zoicpharma.com" />
                                    </ListItem>
                                </List>
                            </Box>
                        </Grid>

                        <Grid size={{ xs: 12, md: 4 }}>
                            <Card sx={{ p: 2, textAlign: 'center', borderRadius: 2, background: '#fff' }}>
                                <Typography sx={{ fontWeight: 700, color: PRIMARY }}>Zocveda Wellness</Typography>
                                <Typography sx={{ fontSize: 13, color: '#666' }}>Plot No. 194, Industrial Area, Sector 82, Mohali</Typography>
                                <Button
                                    component={Link}
                                    href="/contact"
                                    sx={{
                                        mt: 2,
                                        background: ACCENT_GRADIENT,
                                        color: '#fff',
                                        fontWeight: 700
                                    }}
                                    fullWidth
                                >
                                    Get Started
                                </Button>
                            </Card>
                        </Grid>
                    </Grid>
                </Card>

            </Container>
        </Box>
    );
}
