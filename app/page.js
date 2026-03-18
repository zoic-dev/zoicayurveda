"use client";

import FAQComponent from "@/components/FAQComponent";
import { PAGE_FAQS } from "@/data/faqsdata";
import { Business, CalendarToday, EmojiEvents, Gavel, Groups, Handshake, Inventory2, MedicalServices, ReceiptLong, TrendingUp, Verified, Visibility } from "@mui/icons-material";
import { Button, Container, Grid, Stack, Typography, Card, Toolbar, Box, Skeleton } from "@mui/material";
import Link from "next/link";
import { useState } from "react";

const manufacturingUnits = [
  { title: "Zoic Biotech Pvt. Ltd.", desc: "WHO-GMP certified formulation facility." },
  { title: "Zoic Pharmaceuticals", desc: "Advanced tablet & capsule production." },
  { title: "Zoic Softgels Pvt. Ltd.", desc: "Specialized softgel manufacturing unit." },
];

const productCategories = [
  {
    label: "Tablets",
    img: "/categories/tablets.jpg",
    link: "/product/category/tablets/244"
  },
  {
    label: "Capsules",
    img: "/categories/capsules.jpg",
    link: "/product/category/capsules/282"
  },
  {
    label: "Syrup",
    img: "/categories/syrup.jpg",
    link: "/product/category/syrup/314"
  },
  {
    label: "Drops",
    img: "/categories/drops.jpg",
    link: "/product/category/drops/290"
  },
  {
    label: "Shampoo",
    img: "/categories/shampoo.jpg",
    link: "/product/category/shampoo/629"
  },
  {
    label: "Sachets",
    img: "/categories/sachets.jpg",
    link: "/product/category/sachets/350"
  },
  {
    label: "Powders & Granules",
    img: "/categories/protein.jpg",
    link: "/product/category/powders-and-granules/396"
  },
  {
    label: "Ointments",
    img: "/categories/ointments.jpg",
    link: "/product/category/ointments/358"
  },
  {
    label: "OTC Products",
    img: "/categories/otc.jpg",
    link: "/product/category/otc/361"
  },
  {
    label: "Oils",
    img: "/categories/oils.jpg",
    link: "/product/category/oil/351"
  },
  {
    label: "Lotions",
    img: "/categories/lotions.jpg",
    link: "/product/category/lotion/625"
  },
  {
    label: "Juices",
    img: "/categories/juices.jpg",
    link: "/product/category/juice/370"
  },
  // {
  //   label: "Face Wash",
  //   img: "/categories/face-wash.jpg",
  //   link: "/product/category/face-wash/628"
  // },
  {
    label: "Energy Drink",
    img: "/categories/energy-drinks.jpg",
    link: "/product/category/enery-drink/398"
  },
  // {
  //   label: "Cream",
  //   img: "/categories/cream.jpg",
  //   link: "/product/category/cream/286"
  // },
  {
    label: "Medicine",
    img: "/categories/medicine.jpg",
    link: "/product/category/medicine/15"
  },
  // {
  //   label: "Churans",
  //   img: "/categories/churans.jpg",
  //   link: "/product/category/churan/347"
  // },
];

export default function Home() {
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      <Box sx={{ width: "100%", position: "relative" }}>
        {/* Skeleton while video loads */}
        {!loaded && (
          <Skeleton
            variant="rectangular"
            animation="pulse"
            sx={{
              width: "100%",
              borderRadius: 2,
              height: {
                xs: 225,
                sm: 300,
                md: 350,
                lg: 500,
                xl: 620
              }
            }}
          />
        )}

        {/* HERO VIDEO */}
        <Box
          component="video"
          src="/homepage.mp4"
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          onLoadedData={() => setLoaded(true)}
          sx={{
            width: "100%",
            height: "auto",
            display: loaded ? "block" : "none"
          }}
        />
      </Box>

      {/* RED INTRO STRIP */}
      <Stack sx={{ background: "#e42527", py: 6, color: "white" }}>
        <Container>
          <Grid container spacing={4} alignItems="center">
            <Grid size={{ xs: 12, md: 5 }}>
              <Typography variant="h4" fontWeight={700}>
                Pharma Third Party Manufacturing
              </Typography>
            </Grid>
            <Grid size={{ xs: 12, md: 7 }}>
              <Typography variant="body1">
                Zoic Biotech is a WHO-GMP certified pharmaceutical company
                delivering high-quality medicines, nutraceuticals, and
                healthcare products across India with world-class
                manufacturing standards.
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Stack>

      <Toolbar />

      {/* MANUFACTURING UNITS */}
      <Container>
        <Stack spacing={6}>
          <Typography variant="h4" fontWeight={700} textAlign="center">
            Our Manufacturing Units
          </Typography>

          <Grid container spacing={4}>
            {manufacturingUnits.map((unit, i) => (
              <Grid key={i} size={{ xs: 12, md: 4 }}>
                <Card
                  sx={{
                    p: 4,
                    borderRadius: 3,
                    boxShadow: "0px 4px 20px rgba(0,0,0,0.08)",
                    transition: "0.3s",
                    "&:hover": {
                      transform: "translateY(-6px)",
                      boxShadow: "0px 8px 30px rgba(0,0,0,0.15)"
                    }
                  }}
                >
                  <Typography variant="h6" fontWeight={600}>
                    {unit.title}
                  </Typography>
                  <Typography variant="body2" sx={{ mt: 1 }}>
                    {unit.desc}
                  </Typography>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Stack>
      </Container>

      <Toolbar />

      {/* PRODUCT CATEGORIES */}
      <Container>
        <Stack spacing={6}>
          <Typography variant="h4" fontWeight={700} textAlign="center">
            Our Product Range
          </Typography>

          <Grid container spacing={2} justifyContent="center">
            {productCategories.map((item, index) => (
              <Grid key={index} size={{ xs: 6, sm: 4, md: 3 }}>
                <Link href={item.link || "#"}>
                  <Card
                    sx={{
                      p: 2,
                      borderRadius: 3,
                      textAlign: "center",
                      boxShadow: "0px 4px 15px rgba(0,0,0,0.08)",
                      transition: "0.3s",
                      "&:hover": {
                        transform: "translateY(-6px)",
                        boxShadow: "0px 8px 25px rgba(0,0,0,0.15)"
                      }
                    }}
                  >
                    <img
                      src={item.img}
                      alt={item.label}
                      style={{ width: "100%", height: "auto", marginBottom: 16 }}
                    />
                    <Typography fontWeight={600}>
                      {item.label}
                    </Typography>
                  </Card>
                </Link>
              </Grid>
            ))}
          </Grid>
        </Stack>
      </Container>

      <Toolbar />

      {/* MISSION VISION VALUES */}
      <Stack sx={{ py: 8, background: "#f5f5f5" }}>
        <Container>
          <Typography variant="h4" fontWeight={700} textAlign="center" mb={8}>
            MISSION, VISION & VALUES
          </Typography>

          <Grid container spacing={6}>
            {[
              {
                icon: <Handshake sx={{ fontSize: 40, color: "white" }} />,
                title: "MISSION",
                text: "Our administration and workforce focus on delivering quality medicines with protected and viable manufacturing practices.",
              },
              {
                icon: <Visibility sx={{ fontSize: 40, color: "white" }} />,
                title: "VISION",
                text: "To become a leading pharmaceutical manufacturer providing world-class quality medicines with modern standards.",
              },
              {
                icon: <EmojiEvents sx={{ fontSize: 40, color: "white" }} />,
                title: "OUR VALUES",
                text: "Committed to innovation, ethics, compliance and delivering excellence in pharmaceutical manufacturing.",
              },
            ].map((item, i) => (
              <Grid key={i} size={{ xs: 12, md: 4 }}>
                <Card
                  sx={{
                    borderRadius: 4,
                    textAlign: "center",
                    boxShadow: 3,
                    height: "100%",
                  }}
                >
                  <Stack spacing={3} p={4} alignItems="center">
                    <Stack
                      sx={{
                        width: 80,
                        height: 80,
                        borderRadius: "50%",
                        background: "#e42527",
                        alignItems: "center",
                        justifyContent: "center",
                        display: "flex",
                      }}
                    >
                      {item.icon}
                    </Stack>

                    <Typography variant="h6" fontWeight={700}>
                      {item.title}
                    </Typography>

                    <Typography variant="body2" color="text.secondary">
                      {item.text}
                    </Typography>
                  </Stack>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Stack>

      {/* WHY CHOOSE ZOIC - STATS SECTION */}
      <Stack
        sx={{
          position: "relative",
          py: 12,
          backgroundImage: "url('/why-bg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Stack
          sx={{
            position: "absolute",
            inset: 0,
            backgroundColor: "rgba(0,0,0,0.4)",
          }}
        />

        <Container sx={{ position: "relative", zIndex: 2 }}>
          <Typography
            variant="h4"
            fontWeight={700}
            textAlign="center"
            sx={{ color: "white", mb: 8 }}
          >
            WHY CHOOSE ZOIC BIOTECH FOR THIRD PARTY MANUFACTURING
          </Typography>

          <Grid container spacing={6}>
            {[
              {
                icon: <MedicalServices sx={{ fontSize: 40, color: "#e42527" }} />,
                title: "Nature of Business",
                value: "Manufacturer",
              },
              {
                icon: <Groups sx={{ fontSize: 40, color: "#e42527" }} />,
                title: "Total Number of Employees",
                value: "400 to 500 People",
              },
              {
                icon: <CalendarToday sx={{ fontSize: 40, color: "#e42527" }} />,
                title: "Year of Establishment",
                value: "1990",
              },
              {
                icon: <Business sx={{ fontSize: 40, color: "#e42527" }} />,
                title: "Our Divisions",
                value: "4 Specialty Divisions",
              },
              {
                icon: <TrendingUp sx={{ fontSize: 40, color: "#e42527" }} />,
                title: "Annual Turnover",
                value: "Rs. 100-120 Crore",
              },
              {
                icon: <ReceiptLong sx={{ fontSize: 40, color: "#e42527" }} />,
                title: "GST No.",
                value: "03AATFB5857H1Z5",
              },
            ].map((item, i) => (
              <Grid key={i} size={{ xs: 12, md: 4 }}>
                <Card
                  sx={{
                    p: 5,
                    borderRadius: 4,
                    textAlign: "center",
                    boxShadow: 3,
                  }}
                >
                  <Stack alignItems="center" spacing={2}>
                    {item.icon}
                    <Typography variant="h6" fontWeight={600}>
                      {item.title}
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                      {item.value}
                    </Typography>
                  </Stack>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Stack>

      <Toolbar />

      {/* CLIENT LOGOS */}
      <Container>
        <Stack spacing={6} sx={{ pb: 10 }}>
          <Typography variant="h4" fontWeight={700} textAlign="center">
            Our Trusted Clients
          </Typography>

          <Grid container spacing={4} justifyContent="center">
            {["/clients/unimarck.png", "/clients/elder.png", "/clients/concept.png", "/clients/aarti.png", "/clients/vlcc.png"].map((logo, i) => (
              <Grid key={i} size={{ xs: 6, md: 2 }}>
                <Card
                  sx={{
                    p: 2,
                    textAlign: "center",
                    boxShadow: "0px 4px 15px rgba(0,0,0,0.05)"
                  }}
                >
                  <img
                    src={logo}
                    alt="client"
                    style={{ width: "100%", height: "auto" }}
                  />
                </Card>
              </Grid>
            ))}
          </Grid>
        </Stack>
      </Container>

      {/* QUALITY SECTION */}
      <Stack
        sx={{
          py: 12,
          backgroundImage: "url('/quality-bg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "relative",
        }}
      >
        {/* Dark Overlay */}
        <Stack
          sx={{
            position: "absolute",
            inset: 0,
            backgroundColor: "rgba(0,0,0,0.55)",
          }}
        />

        <Container sx={{ position: "relative", zIndex: 2 }}>
          <Grid container spacing={6}>
            {[
              {
                image: "/Icon-01.png",
                title: "ISO Certified",
                text: "Committed to high quality pharmaceutical manufacturing standards.",
              },
              {
                image: "/Icon-02.png",
                title: "Dedicated Workforce",
                text: "Highly experienced professionals ensuring excellence.",
              },
              {
                image: "/Icon-03.png",
                title: "Ethics & Compliance",
                text: "Strict adherence to pharma industry regulations.",
              },
              {
                image: "/Icon-04.png",
                title: "Awards & Achievements",
                text: "Recognized for quality medicine formulation.",
              },
              {
                image: "/Icon-05.png",
                title: "Packaging",
                text: "Advanced packaging ensuring leak-proof delivery.",
              },
              {
                image: "/Icon-06.png",
                title: "Our Quality Approach",
                text: "Committed to follow the quality norms for manufacturing products.",
              },
            ].map((item, i) => (
              <Grid key={i} size={{ xs: 12, md: 4 }}>
                <Stack direction="row" spacing={3} alignItems="flex-start">

                  {/* PERFECT ICON WRAPPER */}
                  <Stack
                    sx={{
                      width: 82,
                      height: 82,
                      minWidth: 82,
                      borderRadius: "50%",
                      backgroundColor: "#e42527",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                      overflow: "hidden",
                    }}
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "contain",
                      }}
                    />
                  </Stack>

                  {/* TEXT */}
                  <Stack spacing={1}>
                    <Typography
                      variant="h6"
                      fontWeight={600}
                      sx={{ color: "white" }}
                    >
                      {item.title}
                    </Typography>

                    <Typography
                      variant="body2"
                      sx={{ color: "#ddd", lineHeight: 1.6 }}
                    >
                      {item.text}
                    </Typography>
                  </Stack>

                </Stack>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Stack>

      <Toolbar />

      <Container>
        <Stack spacing={6} sx={{ pb: 10 }}>
          <Typography variant="h4" fontWeight={700} textAlign="center">
            Our Marketing Divisions
          </Typography>

          <Grid container spacing={4} justifyContent="center" alignItems={"center"}>
            {["/biozoc.png", "/zocveda.png", "/gladfem.png"].map((logo, i) => (
              <Grid key={i} size={{ xs: 6, sm: 4, md: 3 }}>
                <Card
                  sx={{
                    p: { xs: 1, sm: 3 },
                    textAlign: "center",
                    boxShadow: "0px 0px 0px rgba(0,0,0,0.05)"
                  }}
                >
                  <img
                    src={logo}
                    alt="client"
                    style={{ width: "100%", height: "auto" }}
                  />
                </Card>
              </Grid>
            ))}
          </Grid>
        </Stack>
      </Container>

      {/* CTA SECTION */}
      <Container>
        <Stack
          spacing={3}
          sx={{
            background: "#f5f5f5",
            p: 6,
            borderRadius: 4,
            textAlign: "center",
            alignItems: "center"
          }}
        >
          <Typography variant="h4" fontWeight={700}>
            Start Your Pharma Business With Us
          </Typography>
          <Typography variant="body1">
            Partner with Zoic Biotech for reliable third party manufacturing
            and PCD pharma franchise opportunities.
          </Typography>
          <Button
            component={Link}
            href="/contact"
            variant="contained"
            sx={{
              backgroundColor: "#e42527",
              "&:hover": { backgroundColor: "#c81f21" },
              fontWeight: 600,
              width: "fit-content",
              mx: "auto"
            }}
          >
            Contact Us
          </Button>
        </Stack>
      </Container>

      <Toolbar />

      <Container>
        <FAQComponent faqs={PAGE_FAQS.home} />
      </Container>

    </>
  );
}
