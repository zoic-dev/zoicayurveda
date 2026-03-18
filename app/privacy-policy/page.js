// app/privacy-policy/page.js

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
    title: "Privacy Policy | Zoic Ayurveda",
    description:
        "Read how Zoic Ayurveda and Zoic Pharmaceuticals collect, use, and protect your personal information.",
    robots: "index, follow",
    alternates: {
        canonical: "https://www.ayurveda.com/privacy-policy",
    },
};

export default function PrivacyPolicyPage() {
    return (
        <Container maxWidth="md" sx={{ py: { xs: 6, md: 10 } }}>
            {/* Header */}
            <Typography variant="h3" component="h1" gutterBottom fontWeight={700}>
                Privacy Policy
            </Typography>

            <Typography variant="body2" color="text.secondary" sx={{ mb: 4 }}>
                Zoic Pharmaceuticals Pvt. Ltd.
            </Typography>

            <Divider sx={{ mb: 4 }} />

            {/* Introduction */}
            <Box sx={{ mb: 5 }}>
                <Typography variant="body1" paragraph>
                    This Privacy Policy and user agreement is published in compliance
                    with the Information Technology Act, 2000 and applicable rules.
                    By accessing <strong>www.zoicpharmaceuticals.com</strong>, you agree
                    to the terms outlined in this Agreement. If you do not agree, you
                    may choose not to use the Website.
                </Typography>
            </Box>

            {/* Use of Personal Information */}
            <Box sx={{ mb: 5 }}>
                <Typography variant="h5" fontWeight={600} gutterBottom>
                    Use of Personal Information
                </Typography>

                <Typography variant="body1" paragraph>
                    This Website is owned and controlled by <strong>Zoic Pharmaceuticals Pvt. Ltd.</strong>.
                    We respect your privacy and take due care in protecting your personal information.
                </Typography>

                <Typography variant="body1">
                    By using this Website, you consent to the collection and use of your
                    data in accordance with this Privacy Policy.
                </Typography>
            </Box>

            {/* Services Overview */}
            <Box sx={{ mb: 5 }}>
                <Typography variant="h5" fontWeight={600} gutterBottom>
                    Information We Collect
                </Typography>

                <Typography variant="body1">
                    We may collect personal information such as your name, email,
                    phone number, address, demographic details, and browsing behavior
                    including pages visited, links clicked, and frequency of visits.
                </Typography>
            </Box>

            {/* Website Access */}
            <Box sx={{ mb: 5 }}>
                <Typography variant="h5" fontWeight={600} gutterBottom>
                    Website Access & Usage
                </Typography>

                <Typography variant="body1">
                    You are granted limited access to use this Website for personal use only.
                    Unauthorized use including copying, resale, data extraction, or misuse
                    of content without written permission is strictly prohibited.
                </Typography>
            </Box>

            {/* Account */}
            <Box sx={{ mb: 5 }}>
                <Typography variant="h5" fontWeight={600} gutterBottom>
                    Account & Registration
                </Typography>

                <Typography variant="body1" paragraph>
                    Users may be required to register to place orders. You agree to provide
                    accurate information and keep it updated.
                </Typography>

                <Typography variant="body1">
                    By registering, you consent to receive promotional communications,
                    which you may opt out of at any time.
                </Typography>
            </Box>

            {/* Pricing */}
            <Box sx={{ mb: 5 }}>
                <Typography variant="h5" fontWeight={600} gutterBottom>
                    Pricing
                </Typography>

                <Typography variant="body1">
                    All products are sold at MRP unless stated otherwise. Prices applicable
                    at the time of order will be charged at delivery.
                </Typography>
            </Box>

            {/* Cancellation */}
            <Box sx={{ mb: 5 }}>
                <Typography variant="h5" fontWeight={600} gutterBottom>
                    Cancellation Policy
                </Typography>

                <Typography variant="body1">
                    Orders can be cancelled before the cut-off time. We reserve the right
                    to cancel suspicious or fraudulent transactions without notice and
                    may restrict access to such users.
                </Typography>
            </Box>

            {/* Reviews */}
            <Box sx={{ mb: 5 }}>
                <Typography variant="h5" fontWeight={600} gutterBottom>
                    Reviews & User Submissions
                </Typography>

                <Typography variant="body1">
                    Any feedback, comments, or submissions provided by users become the
                    property of Zoic Pharmaceuticals. We reserve the right to use, modify,
                    publish, or distribute such content without restriction or compensation.
                </Typography>
            </Box>

            {/* Copyright */}
            <Box sx={{ mb: 5 }}>
                <Typography variant="h5" fontWeight={600} gutterBottom>
                    Copyright & Trademark
                </Typography>

                <Typography variant="body1">
                    All intellectual property on this Website, including content, logos,
                    and designs, is owned by Zoic Pharmaceuticals or its licensors.
                    Unauthorized use is strictly prohibited.
                </Typography>
            </Box>

            {/* Objectionable Content */}
            <Box sx={{ mb: 5 }}>
                <Typography variant="h5" fontWeight={600} gutterBottom>
                    Objectionable Material
                </Typography>

                <Typography variant="body1">
                    You may encounter content that is offensive or objectionable.
                    Use of the Website is at your own risk and we are not liable
                    for such content.
                </Typography>
            </Box>

            {/* Indemnity */}
            <Box sx={{ mb: 5 }}>
                <Typography variant="h5" fontWeight={600} gutterBottom>
                    Indemnity
                </Typography>

                <Typography variant="body1">
                    You agree to indemnify and hold harmless Zoic Pharmaceuticals,
                    its affiliates, employees, and agents from any claims or liabilities
                    arising from your use of the Website or violation of these terms.
                </Typography>
            </Box>

            {/* Communications */}
            <Box sx={{ mb: 5 }}>
                <Typography variant="h5" fontWeight={600} gutterBottom>
                    Communications
                </Typography>

                <Typography variant="body1">
                    By using the Website, you consent to receive communications
                    electronically via email or other methods as required.
                </Typography>
            </Box>

            {/* Reservations */}
            <Box sx={{ mb: 5 }}>
                <Typography variant="h5" fontWeight={600} gutterBottom>
                    Reservations
                </Typography>

                <Typography variant="body1">
                    We reserve the right to limit transactions, refuse service,
                    delay processing, or cancel orders at our discretion, especially
                    in cases of suspicious activity or policy violations.
                </Typography>
            </Box>

            {/* Contact */}
            <Box>
                <Typography variant="h5" fontWeight={600} gutterBottom>
                    Contact Information
                </Typography>

                <Typography variant="body1">
                    <strong>Zoic Ayurveda</strong>
                    <br />
                    Operated by Zoic Pharmaceuticals Pvt. Ltd.
                    <br />
                    Website: https://www.ayurveda.com
                    <br />
                    Email: contact@zoicpharma.com
                    <br />
                    Phone: +91-98156-20908
                </Typography>
            </Box>
        </Container>
    );
}