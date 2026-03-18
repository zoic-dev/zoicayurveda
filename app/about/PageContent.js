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
import FactoryIcon from "@mui/icons-material/Factory";
import ScienceIcon from "@mui/icons-material/Science";
import PublicIcon from "@mui/icons-material/Public";
import VerifiedIcon from "@mui/icons-material/Verified";

export default function PageContent() {
    return (
        <Box sx={{ bgcolor: "#f8faf8" }}>

            {/* HERO */}
            <Box
                sx={{
                    py: 10,
                    background:
                        "linear-gradient(rgba(15,61,46,0.85), rgba(15,61,46,0.85)), url('/images/herbal-bg.jpg')",
                    backgroundSize: "cover",
                    color: "#fff",
                    textAlign: "center",
                }}
            >
                <Container maxWidth="md">
                    <Typography variant="h3" fontWeight={700} gutterBottom>
                        About Zoic Group
                    </Typography>
                    <Typography variant="h6" sx={{ opacity: 0.9 }}>
                        Since 1990 – Improving Quality of Life through Ayurvedic & Pharmaceutical Excellence
                    </Typography>
                </Container>
            </Box>

            {/* INTRO */}
            <Container maxWidth="lg" sx={{ py: 8 }}>
                <Typography variant="h4" fontWeight={700} gutterBottom>
                    Our Journey
                </Typography>

                <Typography paragraph color="text.secondary">
                    Zoic was started in the year 1990 with a vision to be a Leading National Healthcare Company, improving Quality of Life. The mission of Zoic is to provide standardized and researched Ayurvedic healthcare products. We have a sturdy QMS system which implements the Total Quality Management in our entire group concerns.
                </Typography>

                <Typography paragraph color="text.secondary">
                    Our relentless emphasis on quality, hygiene, traditional values and latest technologies along with continuous up-gradation of the unit and upholding high ethical standards has ensured us pre-eminent position in the Ayurvedic & Pharma market. We at ZOIC GROUP are determined to take Medicines to the realms of scientific research, development and production.
                </Typography>
            </Container>

            <Divider />

            {/* MANUFACTURING UNITS */}
            <Container maxWidth="lg" sx={{ py: 8 }}>
                <Typography variant="h4" fontWeight={700} gutterBottom>
                    ZOIC Group Manufacturing Units
                </Typography>

                <Typography color="text.secondary" paragraph>
                    At present, Zoic Group is manufacturing all kinds of Ayurvedic Medicines, Herbal Personal care products, Food supplements/Neutraceuticals and allopathic drugs.
                </Typography>

                <Grid container spacing={4}>

                    {/* UNIT 1 */}
                    <Grid size={{ xs: 12, md: 4 }}>
                        <Card sx={{ height: "100%", boxShadow: 4 }}>
                            <CardContent>
                                <FactoryIcon sx={{ fontSize: 40, color: "#2e7d32" }} />
                                <Typography variant="h6" fontWeight={700} mt={1}>
                                    UNIT 1: ZOIC Pharmaceuticals
                                </Typography>

                                <Typography variant="body2" color="text.secondary" mt={1}>
                                    (Herbal Medicines & Personal Care Products)
                                </Typography>

                                <Typography mt={2}>
                                    SECTIONS: SYRUP , CAPSULES , TABLETS , POWDERS , OILS , OINTMENTS, SOAPS & COMPLETE COSMETIC RANGE
                                </Typography>

                                <Typography mt={2} variant="body2">
                                    Plot No. 194, Industrial Area, Sector 82 (JLPL), Mohali (Punjab)
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>

                    {/* UNIT 2 */}
                    <Grid size={{ xs: 12, md: 4 }}>
                        <Card sx={{ height: "100%", boxShadow: 4 }}>
                            <CardContent>
                                <ScienceIcon sx={{ fontSize: 40, color: "#1565c0" }} />
                                <Typography variant="h6" fontWeight={700} mt={1}>
                                    UNIT 2: VZOIC Healthcare Pvt. Ltd.
                                </Typography>

                                <Typography variant="body2" color="text.secondary" mt={1}>
                                    (Nutraceuticals/ Dietary Supplements)
                                </Typography>

                                <Typography mt={2}>
                                    SECTIONS: SYRUP , CAPSULES , TABLETS & POWDERS
                                </Typography>

                                <Typography mt={2} variant="body2">
                                    Plot No. 195, Industrial Area, Sector 82 (JLPL), Mohali (Punjab)
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>

                    {/* UNIT 3 */}
                    <Grid size={{ xs: 12, md: 4 }}>
                        <Card sx={{ height: "100%", boxShadow: 4 }}>
                            <CardContent>
                                <VerifiedIcon sx={{ fontSize: 40, color: "#c62828" }} />
                                <Typography variant="h6" fontWeight={700} mt={1}>
                                    UNIT 3: VZOIC Healthcare Pvt. Ltd.
                                </Typography>

                                <Typography variant="body2" color="text.secondary" mt={1}>
                                    (Allopathic Drugs / Non Beta)
                                </Typography>

                                <Typography mt={2}>
                                    SECTIONS: SYRUP , CAPSULES , TABLETS & OINTMENTS
                                </Typography>

                                <Typography mt={2} variant="body2">
                                    Plot No. 236, Ind. Area, Ph-9, Mohali (Punjab)
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>

                </Grid>
            </Container>

            <Divider />

            {/* SERVICES */}
            <Container maxWidth="lg" sx={{ py: 8 }}>
                <Grid container spacing={6}>

                    <Grid size={{ xs: 12, md: 6 }}>
                        <Typography variant="h5" fontWeight={700} gutterBottom>
                            Partner With Us – PCD/Franchise
                        </Typography>

                        <Typography color="text.secondary">
                            The Zoic Group intends to partner with marketing & distribution companies for Ayurvedic/Herbal products to further expand our franchise into new National/International markets.
                        </Typography>
                    </Grid>

                    <Grid size={{ xs: 12, md: 6 }}>
                        <Typography variant="h5" fontWeight={700} gutterBottom>
                            Contract Manufacturing
                        </Typography>

                        <Typography color="text.secondary">
                            We deal in Contract/Third Party manufacturing of all kinds of Ayurvedic Medicines, Herbal Personal care products, Food supplements/Neutraceuticals and allopathic drugs. We are completely flexible with our services which means everything from formulation to packaging can be done according to the buyer’s requirement. We also offer the most competitive MOQ (Minimum Order Quantity) in the industry.
                        </Typography>
                    </Grid>

                </Grid>
            </Container>

            <Divider />

            {/* ACCREDITATIONS */}
            <Box sx={{ bgcolor: "#eef5ef" }}>
                <Container maxWidth="lg" sx={{ py: 8, textAlign: "center" }}>
                    <Typography variant="h4" fontWeight={700} gutterBottom>
                        Accreditations
                    </Typography>

                    <Typography color="text.secondary">
                        All our units are accredited with ISO 9001:2015 certification and W.H.O -G.M.P Certified.
                    </Typography>
                </Container>
            </Box>

            <Divider />

            {/* BUSINESS OPERATIONS */}
            <Container maxWidth="lg" sx={{ py: 8 }}>
                <Stack direction="row" spacing={2} alignItems="center">
                    <PublicIcon sx={{ fontSize: 40, color: "#2e7d32" }} />
                    <Typography variant="h5" fontWeight={700}>
                        Business Operations
                    </Typography>
                </Stack>

                <Typography mt={2} color="text.secondary">
                    ZOIC’s business operations spread all over India. Our supply chain is through Redistribution Stockists in various states.
                </Typography>
            </Container>

        </Box>
    );
}