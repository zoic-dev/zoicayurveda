// app/shipping-and-delivery/page.js

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
    title: "Shipping and Delivery Policy | Ayurvedic Products",
    description:
        "Learn about shipping and delivery terms for Ayurvedic product orders, including order handling, delivery guidelines, and customer responsibilities.",
    robots: "index, follow",
    alternates: {
        canonical: "https://www.ayurveda.com/shipping-and-delivery",
    },
};

export default function ShippingAndDeliveryPage() {
    return (
        <Container maxWidth="md" sx={{ py: { xs: 6, md: 10 } }}>
            {/* Header */}
            <Typography variant="h3" component="h1" fontWeight={700} gutterBottom>
                Shipping & Delivery Policy
            </Typography>

            <Typography variant="body2" color="text.secondary" sx={{ mb: 4 }}>
                Zoic Pharmaceuticals Pvt. Ltd.
            </Typography>

            <Divider sx={{ mb: 5 }} />

            {/* Return & Exchange */}
            <Box sx={{ mb: 5 }}>
                <Typography variant="h5" fontWeight={600} gutterBottom>
                    Return & Exchange
                </Typography>

                <Typography variant="body1" paragraph>
                    Any defect or complaint can be reported to our customer care at
                    <strong> +91 9815846085</strong> or via email at
                    <strong> info@zoicpharmaceuticals.com</strong>.
                </Typography>

                <Typography variant="body1" paragraph>
                    Products may be returned within <strong>7 days</strong> of receipt
                    in case of defects by raising a complaint and returning the product
                    on a <strong>“freight to pay”</strong> basis.
                </Typography>

                <Typography variant="body1">
                    Please include order number, customer name, product name, and reason
                    for return. Refunds will be processed after deducting freight and
                    handling charges where applicable.
                </Typography>
            </Box>

            {/* Non Returnable */}
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
                        <ListItemText primary="Return requests outside the specified time frame" />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="Products with tampered or missing labels, serial numbers, or price tags" />
                    </ListItem>
                </List>
            </Box>

            {/* User Agreement */}
            <Box sx={{ mb: 5 }}>
                <Typography variant="h5" fontWeight={600} gutterBottom>
                    User Agreement & Responsibilities
                </Typography>

                <Typography variant="body1" paragraph>
                    By using this Website, you agree and confirm that:
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
                        <ListItemText primary="You will provide accurate and complete information during transactions." />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="Incorrect address or details may result in additional delivery charges." />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="You are using the Website at your own risk and judgment." />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="All deliveries will be made to the address provided by you." />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="You will review product details before placing an order." />
                    </ListItem>
                </List>
            </Box>

            {/* Prohibited Uses */}
            <Box sx={{ mb: 5 }}>
                <Typography variant="h5" fontWeight={600} gutterBottom>
                    Prohibited Uses
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
                        <ListItemText primary="Posting unlawful, abusive, or harmful content" />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="Engaging in fraudulent or illegal activities" />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="Unauthorized access to systems or networks" />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="Disrupting Website operations or services" />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="Copying or misusing copyrighted content without permission" />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="Providing false or misleading information" />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="Impersonating any person or entity" />
                    </ListItem>
                </List>
            </Box>

            {/* Colours */}
            <Box sx={{ mb: 5 }}>
                <Typography variant="h5" fontWeight={600} gutterBottom>
                    Product Display & Colours
                </Typography>

                <Typography variant="body1">
                    We strive to display product colours as accurately as possible.
                    However, actual colours may vary depending on your screen or device,
                    and we cannot guarantee exact colour accuracy.
                </Typography>
            </Box>

            {/* Modification */}
            <Box sx={{ mb: 5 }}>
                <Typography variant="h5" fontWeight={600} gutterBottom>
                    Modification of Terms
                </Typography>

                <Typography variant="body1">
                    Zoic Pharmaceuticals reserves the right to update or modify these
                    terms at any time without prior notice. Continued use of the Website
                    constitutes acceptance of the updated terms.
                </Typography>
            </Box>

            {/* Governing Law */}
            <Box>
                <Typography variant="h5" fontWeight={600} gutterBottom>
                    Governing Law & Jurisdiction
                </Typography>

                <Typography variant="body1">
                    This agreement shall be governed by the laws of India. Courts in
                    Mohali shall have exclusive jurisdiction. Any disputes shall be
                    resolved through arbitration under the Arbitration and Conciliation
                    Act, 1996, with proceedings held in Mohali.
                </Typography>
            </Box>
        </Container>
    );
}