// app/why-choose-us/page.js

import {
    Container,
    Typography,
    Box,
    Divider,
    List,
    ListItem,
    ListItemText,
    Grid,
    Paper,
} from "@mui/material";

/* =========================
   SEO – Next.js App Router
========================= */
export const metadata = {
    title: "Why Choose Zoic Biotech | Third Party Pharma Manufacturing Company",
    description:
        "Discover why Zoic Biotech is a trusted third party pharma manufacturing company offering quality products, cost efficiency, timely delivery, and strong customer relationships across India.",
    robots: "index, follow",
    alternates: {
        canonical: "https://www.zoicbiotech.com/why-choose-us",
    },
};

export default function WhyChooseUsPage() {
    return (
        <Container maxWidth="lg" sx={{ py: { xs: 6, md: 10 } }}>
            {/* Page Header */}
            <Typography variant="h3" component="h1" gutterBottom fontWeight={700}>
                Why Choose Zoic Biotech?
            </Typography>

            <Typography variant="h6" color="text.secondary" sx={{ mb: 4 }}>
                Trusted Third Party Pharma Manufacturing Services in India
            </Typography>

            <Divider sx={{ mb: 6 }} />

            {/* Introduction */}
            <Box sx={{ mb: 6 }}>
                <Typography variant="body1" paragraph>
                    Zoic Biotech is a leading third party pharma manufacturing company
                    committed to delivering high-quality pharmaceutical products with
                    consistency, affordability, and reliability. Our manufacturing
                    infrastructure, quality control systems, and customer-focused approach
                    make us a preferred partner for pharma brands across India.
                </Typography>

                <Typography variant="body1">
                    Below are the key reasons why pharmaceutical companies trust us
                    for third-party manufacturing services.
                </Typography>
            </Box>

            {/* Grid Section */}
            <Grid container spacing={4}>
                {/* Quality Product */}
                <Grid size={{ xs: 12, md: 6 }}>
                    <Paper elevation={3} sx={{ p: 4 }}>
                        <Typography variant="h5" fontWeight={600} gutterBottom>
                            Quality Products
                        </Typography>

                        <Typography variant="body1" paragraph>
                            We have a dedicated Quality Assurance (QA) and Quality
                            Control (QC) team that ensures strict monitoring at every
                            stage of the manufacturing process.
                        </Typography>

                        <Typography variant="body1" paragraph>
                            Our modern, high-tech, and automated manufacturing units
                            maintain consistency, accuracy, and hygiene in production.
                        </Typography>

                        <List
                            sx={{
                                listStyleType: "disc",
                                pl: 3,
                                "& .MuiListItem-root": {
                                    display: "list-item",
                                    paddingLeft: 0,
                                },
                            }}
                        >
                            <ListItem>
                                <ListItemText primary="WHO & GMP compliant manufacturing practices" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Strict raw material testing procedures" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Batch-wise quality verification" />
                            </ListItem>
                        </List>
                    </Paper>
                </Grid>

                {/* Cost Efficiency */}
                <Grid size={{ xs: 12, md: 6 }}>
                    <Paper elevation={3} sx={{ p: 4 }}>
                        <Typography variant="h5" fontWeight={600} gutterBottom>
                            Cost Efficiency
                        </Typography>

                        <Typography variant="body1" paragraph>
                            Our mission is to provide high-quality medicines at
                            affordable prices. We use cost-effective manufacturing
                            processes without compromising product quality.
                        </Typography>

                        <Typography variant="body1" paragraph>
                            Efficient production planning and optimized supply chain
                            management help us reduce operational costs and pass
                            those benefits to our clients.
                        </Typography>

                        <List
                            sx={{
                                listStyleType: "disc",
                                pl: 3,
                                "& .MuiListItem-root": {
                                    display: "list-item",
                                    paddingLeft: 0,
                                },
                            }}
                        >
                            <ListItem>
                                <ListItemText primary="Competitive pricing structure" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Bulk production advantages" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="High return on investment for pharma brands" />
                            </ListItem>
                        </List>
                    </Paper>
                </Grid>

                {/* Timely Delivery */}
                <Grid size={{ xs: 12, md: 6 }}>
                    <Paper elevation={3} sx={{ p: 4 }}>
                        <Typography variant="h5" fontWeight={600} gutterBottom>
                            Timely Delivery
                        </Typography>

                        <Typography variant="body1" paragraph>
                            We understand that in the pharmaceutical industry,
                            time is critical. Delays can impact business operations
                            and market availability.
                        </Typography>

                        <Typography variant="body1" paragraph>
                            Our streamlined production workflow and efficient
                            logistics network ensure that all products are delivered
                            on schedule across India.
                        </Typography>

                        <List
                            sx={{
                                listStyleType: "disc",
                                pl: 3,
                                "& .MuiListItem-root": {
                                    display: "list-item",
                                    paddingLeft: 0,
                                },
                            }}
                        >
                            <ListItem>
                                <ListItemText primary="Fast order processing" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Pan-India distribution network" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Reliable dispatch commitments" />
                            </ListItem>
                        </List>
                    </Paper>
                </Grid>

                {/* Strong Customer Relationship */}
                <Grid size={{ xs: 12, md: 6 }}>
                    <Paper elevation={3} sx={{ p: 4 }}>
                        <Typography variant="h5" fontWeight={600} gutterBottom>
                            Strong Customer Relationships
                        </Typography>

                        <Typography variant="body1" paragraph>
                            Success in third-party manufacturing depends on
                            transparency, communication, and mutual trust.
                        </Typography>

                        <Typography variant="body1" paragraph>
                            We carefully understand our clients’ requirements and
                            provide customized manufacturing solutions tailored
                            to their brand goals.
                        </Typography>

                        <List
                            sx={{
                                listStyleType: "disc",
                                pl: 3,
                                "& .MuiListItem-root": {
                                    display: "list-item",
                                    paddingLeft: 0,
                                },
                            }}
                        >
                            <ListItem>
                                <ListItemText primary="Dedicated client support team" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Transparent communication process" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Long-term business partnerships" />
                            </ListItem>
                        </List>
                    </Paper>
                </Grid>
            </Grid>

            {/* CTA Section – Red Brand Gradient */}
            <Box
                sx={{
                    mt: 6,
                    borderRadius: 4,
                    background: "linear-gradient(135deg, #b71c1c 0%, #e42527 60%, #c62828 100%)",
                    color: "white",
                    textAlign: "center",
                    px: { xs: 3, md: 8 },
                    py: { xs: 6, md: 8 },
                    boxShadow: "0 15px 35px rgba(228,37,39,0.25)",
                }}
            >
                <Typography
                    variant="h4"
                    fontWeight={700}
                    gutterBottom
                >
                    Ready to Partner With Zoic Biotech?
                </Typography>

                <Typography
                    variant="body1"
                    sx={{
                        maxWidth: 750,
                        mx: "auto",
                        mb: 4,
                        opacity: 0.95,
                    }}
                >
                    Choose a trusted third party pharma manufacturing company
                    that delivers consistent quality, competitive pricing,
                    and timely delivery across India.
                </Typography>

                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        gap: 2,
                        flexWrap: "wrap",
                    }}
                >
                    {/* Primary Button */}
                    <Box
                        component="a"
                        href="/contact-us"
                        sx={{
                            backgroundColor: "white",
                            color: "#e42527",
                            px: 4,
                            py: 1.5,
                            borderRadius: 2,
                            fontWeight: 700,
                            textDecoration: "none",
                            transition: "all 0.3s ease",
                            "&:hover": {
                                backgroundColor: "#f5f5f5",
                                transform: "translateY(-2px)",
                            },
                        }}
                    >
                        Get a Quote
                    </Box>

                    {/* Secondary Button */}
                    <Box
                        component="a"
                        href="tel:+919815620908"
                        sx={{
                            border: "2px solid white",
                            px: 4,
                            py: 1.5,
                            borderRadius: 2,
                            fontWeight: 600,
                            textDecoration: "none",
                            color: "white",
                            transition: "all 0.3s ease",
                            "&:hover": {
                                backgroundColor: "rgba(255,255,255,0.15)",
                                transform: "translateY(-2px)",
                            },
                        }}
                    >
                        Call Now
                    </Box>
                </Box>
            </Box>
        </Container>
    );
}