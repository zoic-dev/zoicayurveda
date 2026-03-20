"use client";

import {
  Box,
  Container,
  Typography,
  Grid,
  Button,
  Card,
  CardContent,
  Avatar,
} from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import SimpleSlider from "@/components/SimpleSlider";

export default function HomePage() {
  return (
    <Box>

      <SimpleSlider/>

      {/* ================= ABOUT SECTION ================= */}
      <Box sx={{ py: 6 }}>
        <Container maxWidth="lg">

          <Grid container spacing={6} alignItems="center">

            {/* LEFT CONTENT */}
            <Grid size={{ xs: 12, md: 7 }}>
              <Typography
                variant="h4"
                fontWeight={700}
                gutterBottom
              >
                About Zoic Ayurveda
              </Typography>

              <Typography sx={{ color: "#555", mb: 2 }}>
                Zoic Group began its journey over three decades ago with the vision
                of delivering high-quality Ayurvedic healthcare solutions. Today,
                Zoic stands as a leading Ayurvedic third-party manufacturing and
                PCD company with a strong presence across India.
              </Typography>

              <Typography sx={{ color: "#555", mb: 2 }}>
                Our product portfolio is a blend of classical Ayurvedic formulations
                and proprietary innovations developed through extensive research
                and clinical understanding. We cater to a wide range of health
                concerns across all age groups.
              </Typography>

              <Typography sx={{ color: "#555" }}>
                With 600+ registered products and certifications including GMP,
                ISO 9001:2015, and FSSAI, we ensure unmatched quality through a
                robust Total Quality Management system.
              </Typography>
            </Grid>

            {/* RIGHT IMAGE */}
            <Grid size={{ xs: 12, md: 5 }}>
              <Box
                component="img"
                src="/about-ayurveda.jpg"
                alt="Ayurveda Manufacturing"
                sx={{
                  width: "100%",
                  borderRadius: 4,
                  boxShadow: 3,
                }}
              />
            </Grid>

          </Grid>
        </Container>
      </Box>

      {/* ================= PROCESS SECTION ================= */}
      <Box sx={{ py: 12, background: "#f9fafb" }}>
        <Container>

          <Typography
            variant="h4"
            align="center"
            fontWeight={700}
            gutterBottom
          >
            From Idea to Finished Product
          </Typography>

          <Typography
            align="center"
            sx={{ color: "#666", maxWidth: 700, mx: "auto", mb: 8 }}
          >
            A streamlined process to transform your Ayurvedic concept into a
            high-quality, market-ready product.
          </Typography>

          <Grid container spacing={4} alignItems="center">

            {[
              {
                title: "Choose Health Concern",
                img: "/process/health.jpg",
              },
              {
                title: "Select Dosage Form",
                img: "/process/dosage.jpg",
              },
              {
                title: "Packaging & Branding",
                img: "/process/packaging.jpg",
              },
              {
                title: "Final Product Delivery",
                img: "/process/final.jpg",
              },
            ].map((step, index) => (
              <Grid key={index} size={{ xs: 12, md: 3 }}>
                <Box sx={{ position: "relative", textAlign: "center" }}>

                  {/* CONNECTOR LINE (DESKTOP ONLY) */}
                  {index !== 3 && (
                    <Box
                      sx={{
                        display: { xs: "none", md: "block" },
                        position: "absolute",
                        top: "50%",
                        right: "-100%",
                        width: "100%",
                        height: "2px",
                        background: "#c8e6c9",
                        zIndex: 0,
                      }}
                    />
                  )}

                  {/* STEP NUMBER */}
                  <Box
                    sx={{
                      position: "absolute",
                      top: -20,
                      left: "50%",
                      transform: "translateX(-50%)",
                      background: "#198754",
                      color: "#fff",
                      width: 40,
                      height: 40,
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontWeight: 700,
                      zIndex: 2,
                    }}
                  >
                    {index + 1}
                  </Box>

                  {/* CARD */}
                  <Card
                    sx={{
                      pt: 6,
                      pb: 3,
                      px: 2,
                      borderRadius: 4,
                      boxShadow: 3,
                      transition: "0.3s",
                      "&:hover": {
                        transform: "translateY(-8px)",
                        boxShadow: 6,
                      },
                    }}
                  >
                    {/* <Box
                      component="img"
                      src={step.img}
                      alt={step.title}
                      sx={{
                        width: "100%",
                        height: 140,
                        objectFit: "cover",
                        borderRadius: 2,
                        mb: 2,
                      }}
                    /> */}

                    <Typography fontWeight={600}>
                      {step.title}
                    </Typography>
                  </Card>
                </Box>
              </Grid>
            ))}

          </Grid>
        </Container>
      </Box>

      {/* ================= PRODUCT CATEGORIES ================= */}
      <Box sx={{ backgroundColor: "#f8f9fa", py: 6 }}>
        <Container>
          <Typography
            variant="h4"
            align="center"
            fontWeight={700}
            gutterBottom
          >
            Our Product Categories
          </Typography>

          <Grid container spacing={4} mt={2}>
            {[
              "Churnas",
              "Capsules",
              "Tablets",
              "Syrups",
              "Juices",
              "Oils, Balms & Lotions",
              "Personal Care",
              "OTC Products",
            ].map((item, i) => (
              <Grid key={i} size={{ xs: 6, md: 3 }}>
                <Card
                  sx={{
                    textAlign: "center",
                    borderRadius: 3,
                    p: 3,
                    transition: "0.3s",
                    "&:hover": {
                      transform: "translateY(-5px)",
                      boxShadow: 6,
                    },
                  }}
                >
                  <Avatar
                    src={`/categories/${i+1}.jpg`}
                    sx={{ width: 150, height: 150, mx: "auto", mb: 2 }}
                  />
                  <Typography fontWeight={600}>{item}</Typography>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* ================= WHY CHOOSE US ================= */}
      <Container sx={{ py: 10 }}>
        <Typography
          variant="h4"
          align="center"
          fontWeight={700}
          gutterBottom
        >
          Why Choose Zoic Ayurveda
        </Typography>

        <Grid container spacing={4} mt={2}>
          {[
            "GMP & ISO Certified Manufacturing",
            "35+ Years Industry Experience",
            "Custom Formulation Support",
            "Pan India & Export Capability",
          ].map((item, i) => (
            <Grid key={i} size={{ xs: 12, md: 3 }}>
              <Card sx={{ p: 3, textAlign: "center", borderRadius: 3 }}>
                <Typography fontWeight={600}>{item}</Typography>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* ================= STATS SECTION ================= */}
      <Box
        sx={{
          backgroundColor: "#198754",
          color: "#fff",
          py: 8,
        }}
      >
        <Container>
          <Grid container spacing={4} textAlign="center">
            {[
              { label: "Years Experience", value: "35+" },
              { label: "Products", value: "600+" },
              { label: "Clients", value: "1000+" },
              { label: "Certifications", value: "GMP, ISO" },
            ].map((item, i) => (
              <Grid key={i} size={{ xs: 6, md: 3 }}>
                <Typography variant="h4" fontWeight={700} color="white">
                  {item.value}
                </Typography>
                <Typography>{item.label}</Typography>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* ================= MISSION VISION SECTION ================= */}
      <Box sx={{ py: 10, background: "#f8f9fa" }}>
        <Container>

          <Grid container spacing={4}>

            {[
              {
                title: "Our Mission",
                content:
                  "To provide standardized and researched herbal healthcare products through continuous innovation, creating healthier lives and delivering value to customers.",
                color: "#198754",
                icon: "🎯",
              },
              {
                title: "Our Vision",
                content:
                  "To become a leading international herbal manufacturing company, building trust through quality and excellence in Ayurvedic healthcare.",
                color: "#2c3e50",
                icon: "👁️",
              },
              {
                title: "Quality Policy",
                content:
                  "We are committed to continuous improvement, innovation, and transparency, ensuring the highest standards of quality in every product.",
                color: "#0f172a",
                icon: "✔️",
              },
            ].map((item, i) => (
              <Grid key={i} size={{ xs: 12, md: 4 }}>
                <Card
                  sx={{
                    p: 4,
                    height: "100%",
                    borderRadius: 4,
                    background: item.color,
                    color: "#fff",
                    transition: "0.3s",
                    "&:hover": {
                      transform: "translateY(-8px)",
                      boxShadow: 6,
                    },
                  }}
                >
                  <Typography fontSize={40} mb={2}>
                    {item.icon}
                  </Typography>

                  <Typography variant="h5" fontWeight={700} gutterBottom color="white">
                    {item.title}
                  </Typography>

                  <Typography sx={{ opacity: 0.9 }}>
                    {item.content}
                  </Typography>
                </Card>
              </Grid>
            ))}

          </Grid>
        </Container>
      </Box>

      {/* ================= MD MESSAGE ================= */}
      <Container sx={{ py: 12 }}>
        <Grid container spacing={6} alignItems="center">

          {/* IMAGE */}
          <Grid size={{ xs: 12, md: 3 }}>
            <Box sx={{ textAlign: "center" }}>
              <Avatar
                src="/md-desk.jpg"
                sx={{
                  width: 160,
                  height: 160,
                  mx: "auto",
                  mb: 2,
                  boxShadow: 3,
                }}
              />
              <Typography fontWeight={700}>Vivek Singla</Typography>
              <Typography variant="body2" color="text.secondary">
                Managing Director
              </Typography>
            </Box>
          </Grid>

          {/* CONTENT */}
          <Grid size={{ xs: 12, md: 9 }}>
            <Typography variant="h4" fontWeight={700} gutterBottom>
              From the MD’s Desk
            </Typography>

            <Typography sx={{ color: "#555", mb: 2 }}>
              I take this opportunity to thank our valued customers, whose confidence
              in our products inspires us to extend the best of our services and
              continuously deliver value for their trust.
            </Typography>

            <Typography sx={{ color: "#555", mb: 2 }}>
              Our relentless emphasis on quality, hygiene, traditional Ayurvedic
              principles, and modern technology has helped us establish a strong and
              respected position in the Ayurvedic medicine industry. With over three
              decades of excellence, Zoic has grown into a trusted name, manufacturing
              more than 650 specialized Ayurvedic products.
            </Typography>

            <Typography sx={{ color: "#555", mb: 2 }}>
              At Zoic, quality is not just a standard — it is a promise. Our brand
              stands for trust, consistency, and dependability. Backed by a strong
              team and a transparent management system, we empower every individual
              within our organization to contribute towards delivering the best.
            </Typography>
          </Grid>

        </Grid>

        <Typography sx={{ color: "#555", mb: 2 }}>
          Our strength lies in our people, our processes, and our commitment to
          excellence. All our products are developed under stringent GMP
          conditions, ensuring safety, effectiveness, and reliability while
          adhering to ethical manufacturing practices.
        </Typography>

        <Typography sx={{ color: "#555" }}>
          We firmly believe that good health should be accessible to everyone.
          Through science-driven herbal healthcare, we continue to move forward
          with dedication and purpose. I sincerely seek the continued support of
          our customers, partners, and employees who have been instrumental in
          our journey.
        </Typography>
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
            Ready to Launch Your Ayurvedic Brand?
          </Typography>

          <Typography sx={{ mb: 3 }}>
            Partner with us for high-quality manufacturing & private labeling
          </Typography>

          <Button
            variant="contained"
            size="large"
            endIcon={<ArrowForwardIcon />}
            sx={{ backgroundColor: "#198754" }}
          >
            Contact Us
          </Button>
        </Container>
      </Box>
    </Box>
  );
}