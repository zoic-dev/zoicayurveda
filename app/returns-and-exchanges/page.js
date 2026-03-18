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
    title: "Returns & Exchanges | Zoic Ayurveda",
    description:
        "Learn about Zoic Ayurveda's return, refund, exchange, and cancellation policies.",
    robots: "index, follow",
    alternates: {
        canonical: "https://www.ayurveda.com/returns-and-exchanges",
    },
};

export default function ReturnsAndExchangesPage() {
    return (
        <Container maxWidth="md" sx={{ py: { xs: 6, md: 10 } }}>
            {/* Header */}
            <Typography variant="h3" component="h1" fontWeight={700} gutterBottom>
                Returns & Exchanges
            </Typography>

            <Typography variant="body2" color="text.secondary" sx={{ mb: 4 }}>
                Zoic Pharmaceuticals Pvt. Ltd.
            </Typography>

            <Divider sx={{ mb: 5 }} />

            {/* Complaints */}
            <Box sx={{ mb: 5 }}>
                <Typography variant="h5" fontWeight={600} gutterBottom>
                    Complaints & Support
                </Typography>

                <Typography variant="body1">
                    Any defect or complaint can be reported to our customer care at
                    <strong> +91 9815846085</strong> or via email at
                    <strong> info@zoicpharmaceuticals.com</strong>.
                    All complaints will be addressed as soon as possible.
                </Typography>
            </Box>

            {/* Returns */}
            <Box sx={{ mb: 5 }}>
                <Typography variant="h5" fontWeight={600} gutterBottom>
                    Return Policy
                </Typography>

                <Typography variant="body1" paragraph>
                    Products may be returned within <strong>7 days</strong> of receipt
                    in case of defects. Returns must be initiated by raising a complaint
                    and sending the product on a <strong>“freight to pay”</strong> basis.
                </Typography>

                <Typography variant="body1">
                    While returning goods, please include:
                </Typography>

                <List
                    sx={{
                        listStyleType: "disc",
                        pl: 4,
                        "& .MuiListItem-root": {
                            display: "list-item",
                            paddingLeft: 0,
                        },
                    }}
                >
                    <ListItem>
                        <ListItemText primary="Order number" />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="Customer name" />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="Product name" />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="Reason for return" />
                    </ListItem>
                </List>

                <Typography variant="body1" sx={{ mt: 2 }}>
                    Refunds will be processed after deducting freight charges.
                    For unfulfilled orders, the collected amount will be refunded
                    after deducting shipping and handling charges.
                </Typography>
            </Box>

            {/* Non-returnable */}
            <Box sx={{ mb: 5 }}>
                <Typography variant="h5" fontWeight={600} gutterBottom>
                    Non-Returnable Cases
                </Typography>

                <List
                    sx={{
                        listStyleType: "disc",
                        pl: 4,
                        "& .MuiListItem-root": {
                            display: "list-item",
                            paddingLeft: 0,
                        },
                    }}
                >
                    <ListItem>
                        <ListItemText primary="Used products" />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="Return requests made after the specified time period" />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="Products with tampered or missing labels, serial numbers, or price tags" />
                    </ListItem>
                </List>
            </Box>

            {/* Refunds & Chargebacks */}
            <Box sx={{ mb: 5 }}>
                <Typography variant="h5" fontWeight={600} gutterBottom>
                    Refunds & Chargebacks
                </Typography>

                <Typography variant="body1" paragraph>
                    For any chargeback claims, users must directly contact Zoic Pharmaceuticals
                    customer care. Refunds, if applicable, will be processed only by Zoic
                    Pharmaceuticals via payment gateway or other suitable methods.
                </Typography>

                <Typography variant="body1">
                    Users must not raise chargeback requests with payment service providers.
                    Any such claims will not be entertained.
                </Typography>
            </Box>

            {/* Fraud & Transactions */}
            <Box sx={{ mb: 5 }}>
                <Typography variant="h5" fontWeight={600} gutterBottom>
                    Fraudulent or Duplicate Transactions
                </Typography>

                <Typography variant="body1">
                    Users must contact Zoic Pharmaceuticals for any fraudulent or duplicate
                    transactions. Sharing OTP or confidential information with third parties
                    will make the user solely responsible for such transactions.
                </Typography>
            </Box>

            {/* Payment Issues */}
            <Box sx={{ mb: 5 }}>
                <Typography variant="h5" fontWeight={600} gutterBottom>
                    Payment Issues (Server / Timeout)
                </Typography>

                <Typography variant="body1" paragraph>
                    In case of payment failure or delay:
                </Typography>

                <List
                    sx={{
                        listStyleType: "disc",
                        pl: 4,
                        "& .MuiListItem-root": {
                            display: "list-item",
                            paddingLeft: 0,
                        },
                    }}
                >
                    <ListItem>
                        <ListItemText primary="If debited, do not retry payment and contact support." />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="If not debited, retry the transaction." />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="If debited but not credited, contact your bank." />
                    </ListItem>
                </List>
            </Box>

            {/* Liability */}
            <Box sx={{ mb: 5 }}>
                <Typography variant="h5" fontWeight={600} gutterBottom>
                    Limitation of Liability
                </Typography>

                <Typography variant="body1">
                    Zoic Pharmaceuticals shall not be liable for any errors, delays,
                    interruptions, or damages arising from the use of the Website,
                    payment gateway, or services. Use of services is at the user’s own risk.
                </Typography>
            </Box>

            {/* Misc */}
            <Box sx={{ mb: 5 }}>
                <Typography variant="h5" fontWeight={600} gutterBottom>
                    Miscellaneous Conditions
                </Typography>

                <Typography variant="body1">
                    Users are responsible for maintaining the confidentiality of their
                    login credentials. Zoic Pharmaceuticals is not responsible for misuse,
                    hacking, or unauthorized access beyond reasonable control.
                </Typography>
            </Box>

            {/* Payment Details */}
            <Box sx={{ mb: 5 }}>
                <Typography variant="h5" fontWeight={600} gutterBottom>
                    Payment Information
                </Typography>

                <Typography variant="body1">
                    Users must ensure that all payment details provided are valid and authorized.
                    The user is responsible for ensuring sufficient balance and accuracy of details
                    while making payments.
                </Typography>
            </Box>

            {/* Personal Info */}
            <Box sx={{ mb: 5 }}>
                <Typography variant="h5" fontWeight={600} gutterBottom>
                    Personal Information
                </Typography>

                <Typography variant="body1">
                    Personal data may be collected and used as per applicable laws.
                    By using the Website, users consent to such data processing.
                </Typography>
            </Box>

            {/* Disclaimer */}
            <Box>
                <Typography variant="h5" fontWeight={600} gutterBottom>
                    Payment Gateway Disclaimer
                </Typography>

                <Typography variant="body1">
                    All payment services are used at the user’s own risk. Zoic Pharmaceuticals
                    and payment service providers make no guarantees regarding uninterrupted
                    or error-free operation of payment systems.
                </Typography>
            </Box>
        </Container>
    );
}