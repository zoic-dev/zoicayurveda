"use client";
import React from "react";
import {
    Box,
    Container,
    Grid,
    Typography,
    Link as MUILink,
    Stack,
    Divider,
    IconButton,
} from "@mui/material";
import Link from "next/link";
import { Email, Facebook, LinkedIn, LocationPin, Phone, Pinterest, X, YouTube } from "@mui/icons-material";

const productLinks1 = [
    {
        label: 'Digestive Care',
        href: '/product/category/digestive-care'
    },
    {
        label: 'Pain & Bone Care',
        href: '/product/category/pain-and-bone-care'
    },
    {
        label: 'Mental & Sleep Care',
        href: '/product/category/mental-and-sleep-care'
    },
    {
        label: "Men's Health",
        href: '/product/category/mens-health'
    },
    {
        label: "Women's Health",
        href: '/product/category/womens-health'
    },
    {
        label: 'Hair and Skin Care',
        href: '/product/category/hair-and-skin-care'
    }
];

const productLinks2 = [
    {
        label: 'Kids health',
        href: '/product/category/kids-health'
    },
    {
        label: 'Detox & Cleaning Wellness',
        href: '/product/category/detox-and-cleaning-wellness'
    },
    {
        label: 'Respiratory Care',
        href: '/product/category/respiratory-care'
    },
    {
        label: 'Diabetes & Metabolic Wellness',
        href: '/product/category/diabetes-and-metabolic-wellness'
    },
    {
        label: 'Kidney & Urinary Care',
        href: '/product/category/kidney-and-urinary-care'
    },
    {
        label: 'Dental & Oral Care',
        href: '/product/category/dental-and-oral-care'
    }
];

const additionalLinks = [
    {
        label: 'About Us',
        href: '/about'
    },
    {
        label: 'Contact Us',
        href: '/contact'
    },
    {
        label: 'Blog',
        href: '/blog'
    },
    {
        label: 'FAQs',
        href: '/frequently-asked-questions'
    },
    {
        label: 'Services',
        href: '/services'
    },
    {
        label: 'Why Choose Us?',
        href: '/why-choose-us'
    },
];

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <Box
            component="footer"
            sx={{
                bgcolor: "rgba(0, 0, 0, 1)",
                color: "#fff",
                pt: { xs: 6, md: 10 },
                pb: { xs: 4, md: 8 },
            }}
        >
            <Container>
                <Grid container spacing={8}>

                    <Grid size={{ xs: 12, sm: 5, md: 5 }}>

                        <Typography
                            sx={{
                                color: "#acacac",
                                fontSize: 16,
                                textAlign:'justify'
                            }}
                        >
                            Zoic was started in the year 1990 with a vision to be a Leading National Healthcare Company, improving Quality of Life. The mission of Zoic is to provide standardized and researched herbal healthcare products. We have a sturdy QMS system which implements the Total Quality Management in our entire group concerns. Our unit is accredited with ISO 9001:2008 certification and has been awarded with W.H.O -G.M.P Certificate.
                        </Typography><br/>

                        <Grid container spacing={2}>
                            <Grid size={{ xs: 12, sm: 6, md: 4 }}>
                                <img src={"/who.png"} width={100} height={100} />
                            </Grid>
                            <Grid size={{ xs: 12, sm: 6, md: 4 }}>
                                <img src={"/iso.png"} width={100} height={100} />
                            </Grid>
                            <Grid size={{ xs: 12, sm: 6, md: 4 }}>
                                <img src={"/gmp.png"} width={100} height={100} />
                            </Grid>
                        </Grid>
                    </Grid>

                    {/* Company Links */}
                    <Grid size={{ xs: 12, sm: 6, md: 3 }}>
                        <Typography
                            variant="h6"
                            sx={{ letterSpacing: 1, fontWeight: 500, mb: 2, color: "#E42527" }}
                        >
                            Company
                        </Typography>
                        <Stack spacing={2}>
                            {additionalLinks.map((item, i) => (
                                <MUILink
                                    key={i}
                                    component={Link}
                                    href={item.href}
                                    underline="none"
                                    sx={{
                                        color: "#acacac",
                                        fontSize: 16,
                                        transition: "0.3s",
                                        "&:hover": { color: "#E42527" },
                                    }}
                                >
                                    {item.label}
                                </MUILink>
                            ))}
                        </Stack>
                    </Grid>

                    {/* Contact Us */}
                    <Grid size={{ xs: 12, sm: 6, md: 4 }}>
                        <Typography
                            variant="h6"
                            sx={{
                                letterSpacing: 1,
                                fontWeight: 500,
                                mb: 2,
                                color: "#E42527",
                            }}
                        >
                            Contact Us
                        </Typography>
                        <Stack spacing={2} mb={2}>
                            <Stack direction={"row"} spacing={1}>
                                <Email fontSize="small" />

                                <MUILink
                                    component={Link}
                                    href={"mailto:info@zoicpharmaceuticals.com"}
                                    underline="none"
                                    sx={{
                                        color: "#acacac",
                                        fontSize: 16,
                                        transition: "0.3s",
                                        "&:hover": { color: "#E42527" },
                                    }}
                                >
                                    info@zoicpharmaceuticals.com
                                </MUILink>
                            </Stack>

                            <Stack direction={"row"} spacing={1}>
                                <Phone fontSize="small" />
                                <MUILink
                                    component={Link}
                                    href={"tel:9815846085"}
                                    underline="none"
                                    sx={{
                                        color: "#acacac",
                                        fontSize: 16,
                                        transition: "0.3s",
                                        "&:hover": { color: "#E42527" },
                                    }}
                                >
                                    +91 98158-46085
                                </MUILink>
                            </Stack>

                            <Stack direction={"row"} spacing={1}>
                                <LocationPin fontSize="small" />
                                <MUILink
                                    component={Link}
                                    target="_blank"
                                    href={"https://maps.app.goo.gl/oLwpgL12XkZWpPsk9"}
                                    underline="none"
                                    sx={{
                                        color: "#acacac",
                                        fontSize: 16,
                                        transition: "0.3s",
                                        lineHeight: '1.25',
                                        "&:hover": { color: "#E42527" },
                                    }}
                                >
                                    PLOT NO. 193, Sector 82, JLPL Industrial Area, Mohali
                                </MUILink>
                            </Stack>
                        </Stack>

                        <Stack direction="row" spacing={1} justifyContent="start" mt={3}>
                            <IconButton
                                href="https://www.facebook.com/Zocveda-Wellness-104944051707522"
                                target="_blank"
                                sx={{
                                    color: "#fff",
                                    backgroundColor: "#1877F2",
                                    "&:hover": { backgroundColor: "#1877F2" },
                                }}
                            >
                                <Facebook />
                            </IconButton>
                            <IconButton
                                href="https://twitter.com/VivekSi37745896"
                                target="_blank"
                                sx={{
                                    color: "#fff",
                                    backgroundColor: "rgba(128,128,128,0.2)",
                                    "&:hover": { backgroundColor: "rgba(128,128,128,0.2)" },
                                }}
                            >
                                <X />
                            </IconButton>
                            <IconButton
                                href="https://in.pinterest.com/zocveda141/_saved/"
                                target="_blank"
                                sx={{
                                    color: "#fff",
                                    backgroundColor: "#E60023",
                                    "&:hover": { backgroundColor: "#E60023" },
                                }}
                            >
                                <Pinterest />
                            </IconButton>
                            <IconButton
                                href="https://www.linkedin.com/in/Zocveda"
                                target="_blank"
                                sx={{
                                    color: "#fff",
                                    backgroundColor: "#0077B5",
                                    "&:hover": { backgroundColor: "#0077B5" },
                                }}
                            >
                                <LinkedIn />
                            </IconButton>
                        </Stack>
                    </Grid>
                </Grid>
            </Container>

            {/* Divider / Gradient Line */}
            <Divider
                sx={{
                    mt: 6,
                    mb: 2,
                    borderColor: "rgba(255, 255, 255, 0.25)",
                    width: "80%",
                    mx: "auto",
                }}
            />

            {/* Copyright Section */}
            <Box
                sx={{
                    bgcolor: "rgba(0, 0, 0, 0.7)",
                    py: 2,
                    mt: 3,
                }}
            >
                <Container>
                    <Grid container alignItems="center">
                        <Grid size={{ xs: 12, md: 12 }}>
                            <Typography
                                variant="body2"
                                textAlign={"center"}
                                sx={{ color: "#acacac", mt: { xs: 2, md: 0 } }}
                            >
                                © Zoic Biotech Pvt. Ltd. {currentYear}. All Rights Reserved
                            </Typography>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </Box>
    );
};

export default Footer;
