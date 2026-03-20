"use client";

import {
    Box,
    Container,
    Typography,
    Grid,
    Card,
    CardContent,
} from "@mui/material";

export default function PageContent() {
    return (
        <Box>

            {/* ================= HERO ================= */}
            <Box
                sx={{
                    py: 12,
                    background:
                        "linear-gradient(135deg, #0f172a 0%, #1f2937 100%)",
                    color: "#fff",
                }}
            >
                <Container>
                    <Typography variant="h3" fontWeight={700}>
                        Ayurveda
                    </Typography>
                    <Typography sx={{ color: "#9ca3af", mt: 1 }}>
                        Home • Ayurveda
                    </Typography>
                </Container>
            </Box>

            {/* ================= INTRO ================= */}
            <Container sx={{ py: 10, textAlign: "center" }}>
                <Typography variant="h4" fontWeight={700} gutterBottom>
                    Ayurveda – The Ancient Science of Life
                </Typography>

                <Typography sx={{ color: "#555", maxWidth: 800, mx: "auto" }}>
                    Ayurveda is one of the oldest systems of natural healing,
                    originating in India thousands of years ago. It focuses on
                    balancing the body, mind, and spirit through natural therapies,
                    herbs, and lifestyle practices.
                </Typography>
            </Container>

            {/* ================= DOSHAS ================= */}
            <Container sx={{ pb: 10 }}>
                <Grid container spacing={4}>

                    {[
                        {
                            title: "Vata (Air & Space)",
                            desc: "Controls movement, circulation, and nervous system functions. Imbalance may cause dryness, anxiety, and joint issues.",
                            img: "/dosha/vata.png",
                        },
                        {
                            title: "Pitta (Fire & Water)",
                            desc: "Regulates metabolism, digestion, and energy production. Imbalance may lead to heat, anger, and digestive problems.",
                            img: "/dosha/pitta.png",
                        },
                        {
                            title: "Kapha (Earth & Water)",
                            desc: "Provides structure, stability, and lubrication. Imbalance may cause weight gain, lethargy, and congestion.",
                            img: "/dosha/kapha.png",
                        },
                    ].map((item, i) => (
                        <Grid key={i} size={{ xs: 12, md: 4 }}>
                            <Card
                                sx={{
                                    textAlign: "center",
                                    p: 3,
                                    borderRadius: 4,
                                    boxShadow: 3,
                                    transition: "0.3s",
                                    "&:hover": {
                                        transform: "translateY(-8px)",
                                        boxShadow: 6,
                                    },
                                }}
                            >
                                <Box
                                    component="img"
                                    src={item.img}
                                    alt={item.title}
                                    sx={{ width: 80, mb: 2 }}
                                />
                                <Typography variant="h6" fontWeight={700}>
                                    {item.title}
                                </Typography>
                                <Typography sx={{ color: "#555", mt: 1 }}>
                                    {item.desc}
                                </Typography>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>

            {/* ================= AYURVEDA CORE PHILOSOPHY (WITH DIAGRAM) ================= */}
            <Box
                sx={{
                    py: 12,
                    background: "#f1f5f2",
                }}
            >
                <Container maxWidth="md" sx={{ textAlign: "center" }}>

                    {/* DIAGRAM */}
                    <Box
                        component="img"
                        src="/ayurveda-diagram.png"
                        alt="Ayurveda Elements Diagram"
                        sx={{
                            width: "100%",
                            maxWidth: 420,
                            mx: "auto",
                            mb: 5,
                        }}
                    />

                    {/* MAIN TEXT */}
                    <Typography
                        sx={{
                            fontStyle: "italic",
                            color: "#374151",
                            lineHeight: 1.8,
                            mb: 2,
                        }}
                    >
                        Ayurveda is an ancient approach to medicine & beauty deeply rooted in India.
                    </Typography>

                    <Typography
                        sx={{
                            fontStyle: "italic",
                            color: "#374151",
                            lineHeight: 1.8,
                            mb: 4,
                        }}
                    >
                        It is a consciousness-based system of health — a spiritual science that
                        recognizes the connection in every grain, every seed, all life, and every living being.
                    </Typography>

                    {/* SUBTITLE */}
                    <Typography
                        variant="h6"
                        fontWeight={700}
                        sx={{ letterSpacing: 1, mb: 2 }}
                    >
                        THE THREE DOSHAS
                    </Typography>

                    {/* QUOTE ICON */}
                    <Typography
                        sx={{
                            fontSize: 40,
                            color: "#198754",
                            lineHeight: 1,
                        }}
                    >
                        “
                    </Typography>

                </Container>
            </Box>

            {/* ================= ASHTAANG ================= */}
            <Container sx={{ py: 10 }}>
                <Typography
                    variant="h4"
                    align="center"
                    fontWeight={700}
                    gutterBottom
                >
                    Ashtaang Ayurveda
                </Typography>

                <Grid container spacing={6} alignItems="center">

                    {/* IMAGE */}
                    <Grid size={{ xs: 12, md: 6 }}>
                        <Box
                            component="img"
                            src="/ashtaang.jpg"
                            alt="Ashtaang Ayurveda"
                            sx={{ width: "100%" }}
                        />
                    </Grid>

                    {/* LIST */}
                    <Grid size={{ xs: 12, md: 6 }}>
                        <Box>
                            {[
                                "Kaya Chikitsa (Internal Medicine)",
                                "Shalakya Tantra (ENT)",
                                "Shalya Tantra (Surgery)",
                                "Agad Tantra (Toxicology)",
                                "Kaumarbhritya (Pediatrics)",
                                "Bhuta Vidya (Psychiatry)",
                                "Rasayana (Rejuvenation)",
                                "Vajikarana (Vitality)",
                            ].map((item, i) => (
                                <Typography key={i} sx={{ mb: 1 }}>
                                    ✔ {item}
                                </Typography>
                            ))}
                        </Box>
                    </Grid>

                </Grid>
            </Container>

            {/* ================= CTA ================= */}
            <Box
                sx={{
                    py: 10,
                    textAlign: "center",
                    background:
                        "linear-gradient(135deg, #e8f5e9 0%, #c8e6c9 100%)",
                }}
            >
                <Container>
                    <Typography variant="h4" fontWeight={700} gutterBottom>
                        Explore the Power of Ayurveda
                    </Typography>

                    <Typography sx={{ mb: 3 }}>
                        Partner with Zoic Ayurveda for premium herbal solutions
                    </Typography>
                </Container>
            </Box>

        </Box>
    );
}