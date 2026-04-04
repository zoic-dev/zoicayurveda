// app/returns-and-exchanges/page.js

import {
    Container,
    Typography,
    Box,
    Divider,
    List,
    ListItem,
    ListItemText,
} from "@mui/material";

/* =========================
   SEO – Next.js App Router
========================= */
export const metadata = {
    title: "Ayurvedic Manufacturing Certificates and Industry Awards",
    description:
        "Our certificates and awards demonstrate trusted quality standards in Ayurvedic medicine and herbal cosmetic manufacturing with certified facilities.",
    robots: "index, follow",
    alternates: {
        canonical: "https://www.ayurveda.com/certificate-and-awards",
    },
};

export default function CertificateAndAwards() {
    return (
        <>
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
                    <Typography variant="h3" fontWeight={700} gutterBottom color="white">
                        Certificate and Awards
                    </Typography>
                    <Typography variant="h6" sx={{ opacity: 0.9 }} color="white">
                        Since 1990 – Improving Quality of Life through Ayurvedic & Pharmaceutical Excellence
                    </Typography>
                </Container>
            </Box>

            <Container maxWidth="md" sx={{ py: { xs: 6, md: 10 } }}>
                <img src={"/awards.jpg"} style={{ width: '100%' }} />
            </Container>
        </>
    );
}