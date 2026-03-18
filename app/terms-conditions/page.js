// app/terms-and-conditions/page.js

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
    title: "Terms & Conditions | Zoic Ayurveda",
    description:
        "Read the Terms and Conditions governing the use of Zoic Ayurveda's website and services.",
    robots: "index, follow",
    alternates: {
        canonical: "https://www.ayurveda.com/terms-and-conditions",
    },
};

export default function TermsAndConditionsPage() {
    return (
        <Container maxWidth="md" sx={{ py: { xs: 6, md: 10 } }}>
            {/* Header */}
            <Typography variant="h3" component="h1" fontWeight={700} gutterBottom>
                Terms & Conditions
            </Typography>

            <Typography variant="body2" color="text.secondary" sx={{ mb: 4 }}>
                Effective Date: {new Date().getFullYear()}
            </Typography>

            <Divider sx={{ mb: 5 }} />

            {/* Introduction */}
            <Box sx={{ mb: 5 }}>
                <Typography variant="h5" fontWeight={600} gutterBottom>
                    Terms of Service
                </Typography>

                <Typography variant="body1" paragraph>
                    This website (<strong>Zoic Ayurveda</strong>) (collectively referred to as the “Site”)
                    is owned and operated by <strong>Zoic Pharmaceuticals</strong>.
                </Typography>

                <Typography variant="body1" paragraph>
                    By using and accessing our Site, you (“you”, “user” or “end user”)
                    agree to these Terms of Service (collectively, the “Terms of Service”
                    or “Agreement”).
                </Typography>
            </Box>

            {/* Intellectual Property */}
            <Box sx={{ mb: 5 }}>
                <Typography variant="h5" fontWeight={600} gutterBottom>
                    Intellectual Property
                </Typography>

                <Typography variant="body1">
                    You acknowledge and agree that all content and information on the Site
                    is protected by proprietary rights and applicable laws. You agree not
                    to modify, copy, distribute, transmit, display, perform, reproduce,
                    publish, license, transfer, create derivative works from, sell or
                    re-sell any content or information obtained from or through the Site.
                </Typography>
            </Box>

            {/* Third-party Sites */}
            <Box sx={{ mb: 5 }}>
                <Typography variant="h5" fontWeight={600} gutterBottom>
                    Third-party Sites
                </Typography>

                <Typography variant="body1">
                    The Site may contain links to other websites maintained by third parties.
                    These links are provided solely as a convenience and do not imply
                    endorsement of, or association with, such third parties.
                </Typography>
            </Box>

            {/* Modifications */}
            <Box sx={{ mb: 5 }}>
                <Typography variant="h5" fontWeight={600} gutterBottom>
                    Modifications to this Agreement
                </Typography>

                <Typography variant="body1" paragraph>
                    Zoic Ayurveda reserves the right to change or modify any of the terms
                    and conditions contained in this Agreement at any time.
                </Typography>

                <Typography variant="body1" paragraph>
                    You acknowledge and agree that it is your responsibility to review
                    the Site and these Terms of Service periodically.
                </Typography>

                <Typography variant="body1">
                    Your continued use of the Site after such modifications constitutes
                    your acknowledgment of the modified Terms of Service and agreement
                    to abide and be bound by them.
                </Typography>
            </Box>

            {/* Termination */}
            <Box sx={{ mb: 5 }}>
                <Typography variant="h5" fontWeight={600} gutterBottom>
                    Termination of Use
                </Typography>

                <Typography variant="body1">
                    Zoic Ayurveda reserves the right to immediately terminate or suspend,
                    at its sole discretion, your access to all or part of the Site with or
                    without notice for any reason.
                </Typography>
            </Box>

            {/* Disclaimer */}
            <Box sx={{ mb: 5 }}>
                <Typography variant="h5" fontWeight={600} gutterBottom>
                    Disclaimer
                </Typography>

                <Typography variant="body1" paragraph>
                    You expressly agree that use of the Site is at your sole risk and discretion.
                </Typography>

                <Typography variant="body1" paragraph>
                    The Site and all content and other information are provided on an “AS IS”
                    and “AS AVAILABLE” basis without warranty of any kind, whether express
                    or implied.
                </Typography>

                <Typography variant="body1" paragraph>
                    Zoic Ayurveda makes no warranty that (i) the Site or its content will
                    be uninterrupted, timely, secure, or error-free, or (ii) the results
                    obtained from using the Site will be accurate or reliable.
                </Typography>

                <Typography variant="body1">
                    The Site may include technical mistakes, inaccuracies, or typographical
                    errors. Zoic Ayurveda reserves the right to update or change content
                    at any time without notice.
                </Typography>
            </Box>

            {/* Governing Law */}
            <Box sx={{ mb: 5 }}>
                <Typography variant="h5" fontWeight={600} gutterBottom>
                    Governing Law
                </Typography>

                <Typography variant="body1">
                    Any disputes arising out of or related to these Terms of Service
                    and/or your use of the Site shall be governed by the laws of India,
                    without regard to conflict of law provisions.
                </Typography>
            </Box>

            {/* Contact */}
            <Box>
                <Typography variant="h5" fontWeight={600} gutterBottom>
                    Contact Us
                </Typography>

                <Typography variant="body1">
                    If you have any questions regarding these Terms & Conditions,
                    please contact:
                    <br /><br />
                    <strong>Zoic Ayurveda</strong><br />
                    Operated by Zoic Pharmaceuticals<br />
                    Website: https://www.ayurveda.com<br />
                    Email: contact@zoicpharma.com<br />
                    Phone: +91-98156-20908
                </Typography>
            </Box>
        </Container>
    );
}