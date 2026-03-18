"use client";

import {
    Box,
    Container,
    Typography,
    Grid,
    Card,
    CardContent,
    Stack,
    Divider,
} from "@mui/material";
import PublicIcon from "@mui/icons-material/Public";
import VerifiedIcon from "@mui/icons-material/Verified";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";

export default function PageContent() {
    return (
        <Box sx={{ bgcolor: "#f7f9fc" }}>
            {/* HERO SECTION */}
            <Box
                sx={{
                    py: 10,
                    background: "linear-gradient(135deg, #E42527 0%, #E42527 100%)",
                    color: "white",
                    textAlign: "center",
                }}
            >
                <Container maxWidth="md">
                    <Typography variant="h3" fontWeight="bold" gutterBottom>
                        Zoic Biotech
                    </Typography>
                    <Typography variant="h6" sx={{ opacity: 0.9 }}>
                        Leading Pharma Third-Party Manufacturing Company Since 1990
                    </Typography>
                </Container>
            </Box>

            {/* ABOUT CONTENT */}
            <Container maxWidth="lg" sx={{ py: 5 }}>
                <Typography variant="h4" fontWeight="bold" gutterBottom>
                    About Us
                </Typography>

                <Typography variant="body1" color="text.secondary" paragraph>
                    Established in 1990, Zoic Biotech is committed to improving quality of
                    life through world-class pharmaceutical manufacturing. With a strong
                    Quality Management System (QMS), we implement Total Quality
                    Management across all operations.
                </Typography>

                <Typography variant="body1" color="text.secondary" paragraph>
                    Our unit is certified with ISO 9001:2008 and accredited with
                    WHO-GMP certification. Our continuous focus on quality, hygiene,
                    innovation, and ethical standards has positioned us as a trusted name
                    in the pharmaceutical industry. Currently, we manufacture more than
                    1000 formulations.
                </Typography>
            </Container>

            {/* CORE VALUES SECTION */}
            <Container maxWidth="lg" sx={{ pb: 8 }}>
                <Grid container spacing={4}>
                    {/* Global Presence */}
                    <Grid size={{ xs: 12, md: 4 }}>
                        <Card
                            sx={{
                                pt: 3,
                                height: "100%",
                                textAlign: "center",
                                borderTop: "5px solid #e53935",
                                boxShadow: 4
                            }}
                        >
                            <PublicIcon sx={{ fontSize: 50, color: "#e53935" }} />
                            <CardContent>
                                <Typography variant="h6" fontWeight="bold" gutterBottom>
                                    Global Presence
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    To be the best in the business and serve clients worldwide
                                    with premium quality products at competitive prices.
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>

                    {/* Our Quality */}
                    <Grid size={{ xs: 12, md: 4 }}>
                        <Card
                            sx={{
                                pt: 3,
                                height: "100%",
                                textAlign: "center",
                                borderTop: "5px solid #1565c0",
                                boxShadow: 4
                            }}
                        >
                            <VerifiedIcon sx={{ fontSize: 50, color: "#1565c0" }} />
                            <CardContent>
                                <Typography variant="h6" fontWeight="bold" gutterBottom>
                                    Our Quality
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Committed to global wellness by delivering high-quality
                                    healthcare and personal care products backed by strict GMP
                                    standards.
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>

                    {/* Our Strengths */}
                    <Grid size={{ xs: 12, md: 4 }}>
                        <Card
                            sx={{
                                pt: 3,
                                height: "100%",
                                textAlign: "center",
                                borderTop: "5px solid #43a047",
                                boxShadow: 4
                            }}
                        >
                            <WorkspacePremiumIcon
                                sx={{ fontSize: 50, color: "#43a047" }}
                            />
                            <CardContent>
                                <Typography variant="h6" fontWeight="bold" gutterBottom>
                                    Our Strengths
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Zero-debt company with strong infrastructure capabilities to
                                    support customized client requirements and future expansion.
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Container>

            <Divider />

            {/* CREATION SECTION */}
            <Container maxWidth="lg" sx={{ py: 8 }}>
                <Typography variant="h4" fontWeight="bold" gutterBottom>
                    Manufacturing Excellence
                </Typography>

                <Typography variant="body1" color="text.secondary" paragraph>
                    Our processing unit is equipped with advanced manufacturing
                    technologies to ensure efficiency and scalability while preserving
                    the purity of ingredients.
                </Typography>

                <Typography variant="body1" color="text.secondary">
                    All procedures strictly follow WHO-GMP guidelines and ISO 9001:2008
                    quality standards to ensure safety, consistency, and reliability.
                </Typography>
            </Container>

            {/* PACKAGING SECTION */}
            <Box sx={{ bgcolor: "#ffffff" }}>
                <Container maxWidth="lg" sx={{ py: 8 }}>
                    <Typography variant="h4" fontWeight="bold" gutterBottom>
                        Packaging & Quality Control
                    </Typography>

                    <Typography variant="body1" color="text.secondary" paragraph>
                        Our bottling and packaging segment adheres to strict international
                        quality norms. Every product undergoes rigorous testing before
                        packaging to ensure safety and effectiveness.
                    </Typography>

                    <Typography variant="body1" color="text.secondary">
                        With precision filling equipment and a modern Quality Control lab,
                        we monitor raw materials and finished products to maintain the
                        highest pharmaceutical standards.
                    </Typography>
                </Container>
            </Box>
        </Box>
    );
}