"use client";

import React, { useState } from "react";
import {
    AppBar,
    Toolbar,
    IconButton,
    Drawer,
    List,
    ListItem,
    Button,
    Stack,
    Divider,
    Box,
    Collapse,
    useMediaQuery,
    useTheme,
    Typography,
} from "@mui/material";
import { List as ListIcon, X, CaretDown, CaretUp } from "phosphor-react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { styled } from "@mui/system";
import { Email, Facebook, LinkedIn, Phone, X as TwitterX, YouTube } from "@mui/icons-material";

// === Styled Components ===
const NavbarContainer = styled(AppBar)`
  background-color: #FFFFFF;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.08);
  backdrop-filter: blur(8px);
  overflow: visible !important;
  position: sticky;
`;

const NavLink = styled("span")(({ active }) => ({
    color: active ? "#28711D" : "#000",
    fontSize: "16px",
    fontWeight: 500,
    transition: "color 0.3s ease",
    textDecoration: "none",
    cursor: "pointer",
    "&:hover": {
        color: "#28711D",
    },
}));

const DropdownMenu = styled("div")`
  position: absolute;
  top: calc(100% + 8px);
  left: 50%;
  transform: translateX(-50%);
  background: #fff;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
  border-radius: 8px;
  z-index: 9999;
  min-width: 200px;
  padding: 8px 0;
  opacity: ${({ open }) => (open ? 1 : 0)};
  visibility: ${({ open }) => (open ? "visible" : "hidden")};
  transform: translate(-50%, ${({ open }) => (open ? "0" : "-10px")});
  transition: all 0.25s ease;

  a {
    display: block;
    color: #000;
    padding: 10px 16px;
    font-size: 15px;
    font-weight: 500;
    text-align: left;
    text-decoration: none;

    &:hover {
      background-color: #f8f8f8;
      color: #28711D;
    }
  }
`;

export default function Navbar() {
    const pathname = usePathname();
    const [openDrawer, setOpenDrawer] = useState(false);
    const [openProducts, setOpenProducts] = useState(false); // for desktop dropdown
    const [drawerProducts, setDrawerProducts] = useState(false); // for mobile collapse

    const isMobile = useMediaQuery("(max-width:1000px)");

    const toggleDrawer = () => {
        setOpenDrawer(!openDrawer);
        setDrawerProducts(false);
    };
    const toggleDrawerProducts = () => setDrawerProducts(!drawerProducts);

    const navLinks = [
        { label: "Home", href: "/" },
        { label: "About", href: "/about" },
        { label: "Ayurveda", href: "/ayurveda" },
        {
            label: "Products", href: "/products",
            dropdown: [
                { label: "Churnas", href: "/product/category/digestive-care" },
                { label: "Capsules", href: "/product/category/pain-and-bone-care" },
                { label: "Tablets", href: "/product/category/mental-and-sleep-care" },
                { label: "Syrups", href: "/product/category/mens-health" },
                { label: "Juices", href: "/product/category/womens-health" },
                { label: "Oils, Balms & Lotions", href: "/product/category/hair-and-skin-care" },
                { label: "Personal Care", href: "/product/category/kids-health" },
                { label: "OTC Products", href: "/product/category/detox-and-cleaning-wellness" },
            ],
        },
        { label: "Accreditations", href: "/accreditations" },
        { label: "FAQs", href: "/frequently-asked-questions" },
        { label: "Contact", href: "/contact" },
    ];

    return (
        <>
            {/* === Navbar === */}

            {/* <Box
                px={2}
                py={0.5}
                sx={{
                    background: "#28711D",
                    color: "white",
                    display: "flex",
                    alignItems: "center",
                }}
            >
                <Stack
                    direction={{ xs: "column", sm: "row" }}
                    spacing={{ xs: 1, sm: 3 }}
                    alignItems="center"
                    justifyContent="space-between"
                    width="100%"
                >
                    
                    <Stack
                        direction={{ xs: "column", sm: "row" }}
                        spacing={{ xs: 0.5, sm: 3 }}
                        alignItems="center"
                        flexWrap="wrap"
                    >
                        
                        <Stack direction="row" spacing={0.5} alignItems="center">
                            <Phone fontSize="small" sx={{ color: "white" }} />
                            <Link
                                href="tel:+919876800625"
                                underline="none"
                                sx={{ color: "white", fontSize: "0.9rem" }}
                            >
                                +91 9876800625
                            </Link>
                        </Stack>

                        
                        <Stack direction="row" spacing={0.5} alignItems="center">
                            <Phone fontSize="small" sx={{ color: "white" }} />
                            <Link
                                href="tel:+919876800626"
                                underline="none"
                                sx={{ color: "white", fontSize: "0.9rem" }}
                            >
                                +91 9876800626
                            </Link>
                        </Stack>

                        
                        <Stack direction="row" spacing={0.5} alignItems="center">
                            <Email fontSize="small" sx={{ color: "white" }} />
                            <Link
                                href="mailto:info@biozoc.com"
                                underline="none"
                                sx={{ color: "white", fontSize: "0.9rem" }}
                            >
                                info@biozoc.com
                            </Link>
                        </Stack>
                    </Stack>

                    
                    <Stack direction="row" spacing={1} alignItems="center">
                        <IconButton size="small" href="https://www.facebook.com/biozoc/" sx={{ color: "white" }}>
                            <Facebook fontSize="small" />
                        </IconButton>

                        <IconButton size="small" href="https://twitter.com/biozoc" sx={{ color: "white" }}>
                            <TwitterX fontSize="small" />
                        </IconButton>

                        <IconButton size="small" href="https://www.youtube.com/channel/UCE2PX3YCrJzwWMxkNnkdXxw" sx={{ color: "white" }}>
                            <YouTube fontSize="small" />
                        </IconButton>

                        <IconButton size="small" href="https://www.linkedin.com/in/biozoc-pharma-53b4a6193/" sx={{ color: "white" }}>
                            <LinkedIn fontSize="small" />
                        </IconButton>
                    </Stack>
                </Stack>
            </Box> */}


            <NavbarContainer position="sticky" sx={{ py: 1 }}>
                <Toolbar
                    sx={{
                        display: "flex",
                        justifyContent: isMobile ? "space-between" : "space-around",
                        alignItems: "center",
                        px: { xs: 2, sm: 4 },
                        overflow: "visible",
                    }}
                >
                    {/* Logo */}
                    <Box>
                        <Link href="/">
                            <Image
                                src="/logo.png"
                                alt="Zoic Ayurveda Logo"
                                width={82}
                                height={80}
                                priority
                            />
                        </Link>
                    </Box>

                    {/* Desktop Menu */}
                    {!isMobile && (
                        <Stack
                            direction="row"
                            spacing={3}
                            alignItems="center"
                            sx={{
                                overflow: "visible",
                            }}
                        >
                            {navLinks.map((link, i) =>
                                link.dropdown ? (
                                    <Box
                                        key={i}
                                        onMouseEnter={() => setOpenProducts(true)}
                                        onMouseLeave={() => setOpenProducts(false)}
                                        onClick={() => setOpenProducts(!openProducts)} // ✅ for tablets
                                        sx={{ position: "relative" }}
                                    >
                                        <NavLink
                                            as={Link}
                                            href={link.href}
                                            style={{ cursor: "pointer", display: "inline-flex", alignItems: "center", fontSize: '16px' }}
                                        >
                                            Products{" "}
                                            <CaretDown
                                                size={16}
                                                style={{
                                                    marginLeft: 4,
                                                    transform: openProducts ? "rotate(180deg)" : "rotate(0deg)",
                                                    transition: "0.2s",
                                                }}
                                            />
                                        </NavLink>

                                        <DropdownMenu open={openProducts}>
                                            {link.dropdown.map((sub, j) => (
                                                <Link key={j} href={sub.href}>
                                                    {sub.label}
                                                </Link>
                                            ))}
                                        </DropdownMenu>
                                    </Box>
                                ) : (
                                    <Link key={i} href={link.href} passHref>
                                        <NavLink active={pathname === link.href ? 1 : 0} sx={{ fontSize: '16px' }}>
                                            {link.label}
                                        </NavLink>
                                    </Link>
                                )
                            )}
                        </Stack>
                    )}

                    {!isMobile && (
                        <Button
                            component={Link}
                            href="/contact"
                            variant="outlined"
                            sx={{
                                borderColor: "#28711D",
                                color: "#28711D",
                                fontFamily: '"Montserrat", sans-serif',
                                fontWeight: 600,
                                "&:hover": { backgroundColor: "#28711D", color: "#fff" },
                            }}
                        >
                            ENQUIRE NOW
                        </Button>
                    )}

                    {/* Mobile Drawer Button */}
                    {isMobile && (
                        <IconButton onClick={toggleDrawer}>
                            <ListIcon color="black" size={28} />
                        </IconButton>
                    )}
                </Toolbar>
            </NavbarContainer>

            {/* === Mobile Drawer === */}
            <Drawer
                anchor="left"
                open={openDrawer}
                onClose={toggleDrawer}
                sx={{
                    "& .MuiDrawer-paper": {
                        width: 260,
                        background: "#fff",
                        p: 2,
                    },
                }}
            >
                <Box
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                    mb={2}
                >
                    <Image src="/logo.png" alt="Logo" width={62} height={60} />
                    <IconButton onClick={toggleDrawer}>
                        <X size={24} />
                    </IconButton>
                </Box>

                <Divider sx={{ mb: 1 }} />

                <List>
                    {navLinks.map((link, i) =>
                        link.dropdown ? (
                            <Box key={i}>
                                <ListItem
                                    onClick={toggleDrawerProducts}
                                    sx={{
                                        display: "flex",
                                        justifyContent: "space-between",
                                        alignItems: "center",
                                        cursor: "pointer",
                                        color: "#28711D",
                                        fontWeight: 600,
                                    }}
                                >
                                    Products
                                    {drawerProducts ? (
                                        <CaretUp size={18} />
                                    ) : (
                                        <CaretDown size={18} />
                                    )}
                                </ListItem>

                                <Collapse in={drawerProducts} timeout="auto" unmountOnExit>
                                    {link.dropdown.map((sub, j) => (
                                        <ListItem key={j} sx={{ pl: 4 }}>
                                            <Link href={sub.href}>
                                                <NavLink sx={{ fontSize: '14px' }}>{sub.label}</NavLink>
                                            </Link>
                                        </ListItem>
                                    ))}
                                </Collapse>
                            </Box>
                        ) : (
                            <ListItem key={i} onClick={toggleDrawer}>
                                <Link href={link.href}>
                                    <NavLink active={pathname === link.href ? 1 : 0}>
                                        {link.label}
                                    </NavLink>
                                </Link>
                            </ListItem>
                        )
                    )}
                </List>

                <Divider sx={{ my: 1 }} />

                <Button
                    fullWidth
                    variant="contained"
                    sx={{
                        backgroundColor: "#28711D",
                        color: "#fff",
                        fontWeight: 600,
                        "&:hover": { backgroundColor: "#28711D" },
                    }}
                >
                    ENQUIRE NOW
                </Button>
            </Drawer>
        </>
    );
}
