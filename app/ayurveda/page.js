"use client";

import { Box, Typography, Container, Grid, Card, CardContent, Button } from "@mui/material";
import Link from "next/link";

export default function AyurvedaPage() {
    return (
        <Box sx={{ pt: 6, pb: 10 }}>
            <Container maxWidth="lg">

                {/* Header Section */}
                <Box textAlign="center" mb={6}>
                    <img
                        src="/dosha.png"
                        alt="Zocveda Wellness Logo"
                        style={{ width: 200, marginBottom: 20 }}
                    />

                    <Typography
                        variant="h3"
                        sx={{
                            fontWeight: 700,
                            color: "#1F6A36",
                            mb: 2
                        }}
                    >
                        Ayurveda – The Science of Life
                    </Typography>

                    <Typography
                        variant="h6"
                        sx={{
                            maxWidth: 800,
                            margin: "0 auto",
                            color: "#4A4A4A"
                        }}
                    >
                        Ayurveda is one of the world’s oldest holistic healing systems,
                        focusing on balancing the mind, body, and spirit to achieve complete wellness.
                    </Typography>
                </Box>

                {/* Section: Introduction */}
                <Box mb={8}>
                    <Typography
                        variant="h4"
                        sx={{
                            color: "#1F6A36",
                            fontWeight: 700,
                            mb: 3
                        }}
                    >
                        What is Ayurveda?
                    </Typography>

                    <Typography sx={{ fontSize: 18, color: "#4A4A4A", lineHeight: 1.8 }}>
                        Originating over <strong>5,000 years ago</strong> during the Vedic period in India,
                        Ayurveda is a comprehensive natural healing system that focuses on prevention and
                        maintenance of health. The word “Ayurveda” translates to
                        <strong> “Knowledge of Life”</strong> in Sanskrit, highlighting its purpose—helping
                        humans live in harmony with nature.
                        <br /><br />
                        Ayurveda teaches that health is achieved by understanding the natural rhythms
                        of the universe and aligning our bodies with them. Everything in existence,
                        including humans, is made of the five universal elements—Space, Air, Fire, Water, and Earth.
                        These combine to form **three doshas** that influence our physical and emotional characteristics.
                    </Typography>
                </Box>

                {/* Section: Benefits */}
                <Box mb={8}>
                    <Typography
                        variant="h4"
                        sx={{
                            color: "#1F6A36",
                            fontWeight: 700,
                            mb: 3
                        }}
                    >
                        Benefits of Living the Ayurvedic Way
                    </Typography>

                    <Grid container spacing={3}>
                        {[
                            "Boosts immunity and strengthens natural healing.",
                            "Promotes digestion, metabolism, and detoxification.",
                            "Enhances mental clarity, focus, and emotional balance.",
                            "Improves sleep quality and reduces stress.",
                            "Relies on natural herbs with minimal or no side effects.",
                            "Encourages routines that align your body with nature’s cycles."
                        ].map((item, index) => (
                            <Grid key={index} size={{ xs: 12, sm: 6, md: 4 }}>
                                <Card
                                    sx={{
                                        height: "100%",
                                        borderRadius: "16px",
                                        border: "1px solid #e3e3e3",
                                        transition: "0.3s",
                                        "&:hover": { boxShadow: 4 }
                                    }}
                                >
                                    <CardContent>
                                        <Typography
                                            sx={{
                                                fontSize: 17,
                                                fontWeight: 500,
                                                color: "#1F6A36",
                                            }}
                                        >
                                            {item}
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Box>

                {/* Section: The 3 Doshas */}
                <Box>
                    <Typography
                        variant="h4"
                        sx={{
                            color: "#1F6A36",
                            fontWeight: 700,
                            mb: 3
                        }}
                    >
                        The Three Doshas
                    </Typography>

                    <Typography
                        sx={{
                            fontSize: 18,
                            color: "#4A4A4A",
                            lineHeight: 1.8,
                            mb: 4
                        }}
                    >
                        Doshas are the biological energies governing the body and mind. They regulate
                        bodily functions, emotions, and the creation & destruction of tissues.
                    </Typography>

                    <Grid container spacing={3}>
                        {/* Vata */}
                        <Grid size={{ xs: 12, sm: 6, md: 4 }}>
                            <Card
                                sx={{
                                    borderRadius: "16px",
                                    border: "1px solid #e3e3e3",
                                    "&:hover": { boxShadow: 4 }
                                }}
                            >
                                <CardContent>
                                    <Typography
                                        variant="h5"
                                        sx={{ fontWeight: 700, color: "#1F6A36", mb: 1 }}
                                    >
                                        Vata (Air + Space)
                                    </Typography>
                                    <Typography sx={{ color: "#4A4A4A" }}>
                                        Controls movement, breathing, heartbeat, creativity, thoughts, and flexibility.
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>

                        {/* Pitta */}
                        <Grid size={{ xs: 12, sm: 6, md: 4 }}>
                            <Card
                                sx={{
                                    borderRadius: "16px",
                                    border: "1px solid #e3e3e3",
                                    "&:hover": { boxShadow: 4 }
                                }}
                            >
                                <CardContent>
                                    <Typography
                                        variant="h5"
                                        sx={{ fontWeight: 700, color: "#1F6A36", mb: 1 }}
                                    >
                                        Pitta (Fire + Water)
                                    </Typography>
                                    <Typography sx={{ color: "#4A4A4A" }}>
                                        Governs digestion, metabolism, body temperature, intelligence, and ambition.
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>

                        {/* Kapha */}
                        <Grid size={{ xs: 12, sm: 6, md: 4 }}>
                            <Card
                                sx={{
                                    borderRadius: "16px",
                                    border: "1px solid #e3e3e3",
                                    "&:hover": { boxShadow: 4 }
                                }}
                            >
                                <CardContent>
                                    <Typography
                                        variant="h5"
                                        sx={{ fontWeight: 700, color: "#1F6A36", mb: 1 }}
                                    >
                                        Kapha (Earth + Water)
                                    </Typography>
                                    <Typography sx={{ color: "#4A4A4A" }}>
                                        Provides stability, strength, immunity, hydration, calmness, and emotional grounding.
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    </Grid>
                </Box>

                <Box textAlign="center" mt={6}>
                    <Link href="/know-your-dosha" passHref>
                        <Button
                            variant="contained"
                            sx={{
                                fontSize: 16, px: 4, py: 1.5,
                                backgroundColor: "#fff",
                                border:"1px solid #1F6A36",
                                color: "#1F6A36",
                                fontWeight: 600,
                                "&:hover": { backgroundColor: "#1F6A36", color:"#fff" },
                            }}
                        >
                            Take the Dosha Quiz
                        </Button>
                    </Link>
                </Box>


            </Container>
        </Box>
    );
}
