// app/disclaimer/page.js

import {
    Container,
    Typography,
    Box,
    Divider,
} from "@mui/material";

/* =========================
   SEO – Next.js App Router
========================= */
export const metadata = {
    title: "Disclaimer | Zoic Ayurveda",
    description:
        "Read the disclaimer and limitation of liability for Zoic Ayurveda website usage.",
    robots: "index, follow",
    alternates: {
        canonical: "https://www.ayurveda.com/disclaimer",
    },
};

export default function DisclaimerPage() {
    return (
        <Container maxWidth="md" sx={{ py: { xs: 6, md: 10 } }}>
            {/* Header */}
            <Typography variant="h3" component="h1" fontWeight={700} gutterBottom>
                Disclaimer
            </Typography>

            <Typography variant="body2" color="text.secondary" sx={{ mb: 4 }}>
                Zoic Pharmaceuticals Pvt. Ltd.
            </Typography>

            <Divider sx={{ mb: 5 }} />

            {/* Disclaimer */}
            <Box sx={{ mb: 5 }}>
                <Typography variant="h5" fontWeight={600} gutterBottom>
                    General Disclaimer
                </Typography>

                <Typography variant="body1" paragraph>
                    All content on this Website is provided on an <strong>“as is”</strong> basis
                    without any warranties, either express or implied. Zoic Pharmaceuticals
                    makes no representations regarding the accuracy, reliability, or
                    suitability of the content available on the Website.
                </Typography>

                <Typography variant="body1" paragraph>
                    We do not guarantee originality, purity, freshness, or fitness
                    for a particular purpose of any information or product displayed.
                </Typography>

                <Typography variant="body1">
                    By using this Website, you acknowledge and agree that your use
                    is solely at your own risk. We do not guarantee that the Website
                    will function without interruption, errors, or technical issues.
                </Typography>
            </Box>

            {/* Limitation of Liability */}
            <Box sx={{ mb: 5 }}>
                <Typography variant="h5" fontWeight={600} gutterBottom>
                    Limitation of Liability
                </Typography>

                <Typography variant="body1" paragraph>
                    You agree that neither Zoic Pharmaceuticals nor its affiliates,
                    employees, directors, officers, or agents shall be liable for any
                    direct, indirect, incidental, special, or consequential damages
                    arising from the use of or inability to use the Website.
                </Typography>

                <Typography variant="body1" paragraph>
                    This includes, but is not limited to, damages resulting from
                    loss of data, inaccuracies, or system failures.
                </Typography>

                <Typography variant="body1">
                    In no event shall our total liability exceed the amount paid by you,
                    if any, for accessing or using the Website.
                </Typography>
            </Box>

            {/* Termination */}
            <Box>
                <Typography variant="h5" fontWeight={600} gutterBottom>
                    Termination
                </Typography>

                <Typography variant="body1" paragraph>
                    This User Agreement shall remain effective unless terminated by us.
                    We reserve the right to terminate access to the Website at any time,
                    without prior notice and without liability.
                </Typography>

                <Typography variant="body1" paragraph>
                    Upon termination, you must destroy all materials obtained from the
                    Website, including copies stored in any form.
                </Typography>

                <Typography variant="body1">
                    Any obligations incurred prior to termination, including payments
                    for orders placed, shall remain enforceable.
                </Typography>
            </Box>
        </Container>
    );
}