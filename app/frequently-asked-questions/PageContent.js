"use client";

import React, { useState, useMemo } from "react";
import {
  Box,
  Container,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  TextField,
  InputAdornment,
  IconButton,
  Stack,
  Chip,
  Divider,
  Paper,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import SearchIcon from "@mui/icons-material/Search";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import Link from "next/link";

const PRIMARY = "#1F6A36";
const BG = "#F3FFF8";

const FAQS = [
  {
    q: "What is third-party pharma manufacturing?",
    a: "Third-party pharma manufacturing is a process where a company outsources the manufacturing of its products to a certified manufacturer, then sells them under its own brand name. The manufacturing partner handles production, packaging, and quality testing, which allows businesses to focus on marketing and distribution without investing in infrastructure.",
    tag: "General Third-Party Manufacturing",
  },
  {
    q: "Who can start third-party manufacturing?",
    a: "Entrepreneurs, startups, distributors, healthcare professionals, and pharma companies can start third-party manufacturing. It is suitable for anyone who wants to launch their own product line without having to set up a manufacturing facility.",
    tag: "General Third-Party Manufacturing"
  },
  {
    q: "Is third-party manufacturing profitable?",
    a: "Yes, it is considered profitable because it reduces operational costs and eliminates the need for factory investment. Businesses can focus more on brand building and sales, which improves profit potential.",
    tag: "General Third-Party Manufacturing"
  },
  {
    q: "Do I need prior experience to start?",
    a: "No prior experience is required. Manufacturers usually provide complete guidance, including product selection, documentation, and packaging support, making it easier for new businesses to enter the industry.",
    tag: "General Third-Party Manufacturing"
  },
  {
    q: "What types of products do you manufacture?",
    a: "Products include nutraceutical supplements, softgel capsules, gummies, herbal products, skincare, and personal care items. Multiple dosage forms are available depending on market needs and brand requirements.",
    tag: "Product Range & Quality Assurance"
  },
  {
    q: "Are your products manufactured under certified facilities?",
    a: "Yes, products are manufactured in certified facilities following quality standards such as GMP and ISO guidelines to ensure safety, consistency, and compliance.",
    tag: "Product Range & Quality Assurance"
  },
  {
    q: "How is product quality ensured?",
    a: "Quality is maintained through strict testing procedures, including raw material inspection, in-process checks, and final product testing before delivery to ensure safety and effectiveness.",
    tag: "Product Range & Quality Assurance"
  },
  {
    q: "Do you use high-quality ingredients?",
    a: "Yes, ingredients are sourced from trusted suppliers and tested before production to ensure purity, potency, and safety standards are met.",
    tag: "Product Range & Quality Assurance"
  },
  {
    q: "Can I create my own product formulation?",
    a: "Yes, customized formulations can be developed based on your brand needs, ingredient preferences, and target market requirements with expert support.",
    tag: "Product & Formulation"
  },
  {
    q: "Can products be customized in flavor and packaging?",
    a: "Yes, customization options include flavor, color, fragrance, dosage strength, and packaging design to match your brand identity and customer preferences.",
    tag: "Product & Formulation"
  },
  {
    q: "Do you help in selecting trending products?",
    a: "Yes, manufacturers often provide guidance on market trends and high-demand products to help businesses choose profitable options.",
    tag: "Product & Formulation"
  },
  {
    q: "Why are softgel capsules popular?",
    a: "Softgels are easy to swallow, offer better absorption, and protect sensitive ingredients from environmental factors, making them a preferred choice for supplements.",
    tag: "Softgel, Gummies & Nutraceutical Manufacturing"
  },
  {
    q: "Are nutraceutical gummies effective?",
    a: "Yes, when properly formulated, gummies deliver nutrients effectively and improve consumer compliance due to their taste and convenience.",
    tag: "Softgel, Gummies & Nutraceutical Manufacturing"
  },
  {
    q: "What nutraceutical dosage forms are available?",
    a: "Available forms include tablets, capsules, softgels, powders, sachets, syrups, and gummies, allowing businesses to select products based on their target audience.",
    tag: "Softgel, Gummies & Nutraceutical Manufacturing"
  },
  {
    q: "Can gummies be made for kids and adults?",
    a: "Yes, formulations can be adjusted for different age groups with suitable ingredients and dosage levels.",
    tag: "Softgel, Gummies & Nutraceutical Manufacturing"
  },
  {
    q: "What cosmetic products can be manufactured?",
    a: "Products include skincare creams, lotions, face wash, shampoos, serums, oils, and herbal personal care products designed for various consumer needs.",
    tag: "Cosmetics & Personal Care Manufacturing"
  },
  {
    q: "Are cosmetic products tested for safety?",
    a: "Yes, products undergo safety and stability testing to ensure they meet quality standards and are safe for consumer use.",
    tag: "Cosmetics & Personal Care Manufacturing"
  },
  {
    q: "Can I launch my own cosmetic brand?",
    a: "Yes, private labeling allows you to sell cosmetic products under your brand name while the manufacturer handles production and packaging.",
    tag: "Cosmetics & Personal Care Manufacturing"
  },
  {
    q: "Do you provide packaging and label design support?",
    a: "Yes, packaging solutions include bottle selection, label design, printing, and product box development to create professional branding.",
    tag: "Branding, Label Design & Private Labeling"
  },
  {
    q: "Can I use my own brand name?",
    a: "Yes, products are manufactured and packed under your brand name, allowing you to build your own market identity.",
    tag: "Branding, Label Design & Private Labeling"
  },
  {
    q: "Do you help with branding strategy?",
    a: "Yes, guidance is provided to help position your products effectively through packaging and product selection strategies.",
    tag: "Branding, Label Design & Private Labeling"
  },
  {
    q: "What is the minimum order quantity (MOQ)?",
    a: "MOQ depends on product type, packaging requirements, and formulation complexity. Flexible options are often available for startups.",
    tag: "Financial, Pricing & Investment"
  },
  {
    q: "What factors affect manufacturing cost?",
    a: "Costs depend on ingredients, packaging materials, customization level, and order quantity. Bulk production usually reduces per-unit cost.",
    tag: "Financial, Pricing & Investment"
  },
  {
    q: "What documents are required to start?",
    a: "Documents typically include GST registration, company details, PAN card, and relevant licenses, depending on the product category.",
    tag: "Process & Documentation"
  },
  {
    q: "How long does manufacturing take?",
    a: "Production usually takes around 30 to 50 days, depending on product type, customization, and order quantity.",
    tag: "Process & Documentation"
  },
  {
    q: "What is the manufacturing process?",
    a: "The process includes requirement discussion, formulation finalization, packaging approval, production, quality testing, and delivery.",
    tag: "Process & Documentation"
  },
  {
    q: "Do you deliver products across India?",
    a: "Yes, products are delivered nationwide through reliable logistics networks with proper packaging and safety measures.",
    tag: "Logistics, Delivery & Support"
  },
  {
    q: "Do you provide after-sales support?",
    a: "Yes, ongoing support is provided for reorders, product queries, and future product development needs.",
    tag: "Logistics, Delivery & Support"
  },
  {
    q: "Can I reorder products easily?",
    a: "Yes, manufacturers maintain formulation records, making repeat orders simple and faster.",
    tag: "Logistics, Delivery & Support"
  },
  {
    q: "Do you support startups?",
    a: "Yes, flexible MOQs, product guidance, and documentation support are provided to help startups enter the market smoothly.",
    tag: "Business Partnership & Growth"
  },
  {
    q: "Can I launch multiple products at once?",
    a: "Yes, multiple products can be manufactured together depending on production planning and requirements.",
    tag: "Business Partnership & Growth"
  },
  {
    q: "How do I start working with your company?",
    a: "You can contact the team with your requirements, finalize product details, complete documentation, and begin production after approval.",
    tag: "Business Partnership & Growth"
  }
];

export default function FaqPage() {
  const [query, setQuery] = useState("");
  const [activeTag, setActiveTag] = useState("All");
  const [expanded, setExpanded] = useState(false);

  const tags = useMemo(() => {
    const s = new Set(FAQS.map((f) => f.tag));
    return ["All", ...Array.from(s)];
  }, []);

  const filtered = useMemo(() => {
    return FAQS.filter((f) => {
      const matchesTag = activeTag === "All" ? true : f.tag === activeTag;
      const matchesQuery = `${f.q} ${f.a}`.toLowerCase().includes(query.toLowerCase());
      return matchesTag && matchesQuery;
    });
  }, [query, activeTag]);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Box sx={{ minHeight: "100%", py: 8 }}>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: "center", mb: 4 }}>
          <Typography variant="h3" sx={{ color: PRIMARY, fontWeight: 900, mb: 1 }}>
            Frequently Asked Questions
          </Typography>
          <Typography sx={{ fontSize: 18, color: "#4A4A4A", maxWidth: 900, mx: "auto" }}>
            Find quick answers to common questions about orders, shipping, payments, and more. Use the
            search or filter chips to narrow results.
          </Typography>
        </Box>

        <Paper elevation={3} sx={{ p: { xs: 2, md: 3 }, borderRadius: 3 }}>
          <Stack direction={{ xs: "column", md: "row" }} spacing={2} alignItems="center" sx={{ mb: 2 }}>
            <TextField
              fullWidth
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search FAQs — try: 'shipping', 'refund', 'invoice'"
              variant="outlined"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
            />

            <IconButton
              onClick={() => {
                setQuery("");
                setActiveTag("All");
                setExpanded(false);
              }}
              sx={{ bgcolor: "white", borderRadius: 2 }}
              aria-label="reset"
            >
              <InfoOutlinedIcon sx={{ color: PRIMARY }} />
            </IconButton>
          </Stack>

          <Box sx={{ mb: 2 }}>
            <Stack direction="row" gap={1} flexWrap="wrap">
              {tags.map((t) => (
                <Chip
                  key={t}
                  label={t}
                  clickable
                  onClick={() => setActiveTag(t)}
                  variant={activeTag === t ? "filled" : "outlined"}
                  sx={{
                    borderColor: PRIMARY,
                    color: activeTag === t ? "white" : PRIMARY,
                    bgcolor: activeTag === t ? PRIMARY : "transparent",
                    fontWeight: 600,
                    "&:hover": {
                      bgcolor: activeTag === t ? PRIMARY : "rgba(0, 0, 0, 0.04)",
                      color: activeTag === t ? "white" : PRIMARY,
                      borderColor: PRIMARY,
                    }
                  }}
                />
              ))}
            </Stack>
          </Box>

          <Divider sx={{ mb: 2 }} />

          <Box>
            {filtered.length === 0 ? (
              <Box sx={{ py: 6, textAlign: "center" }}>
                <Typography sx={{ color: "#666" }}>No results match your search.</Typography>
              </Box>
            ) : (
              filtered.map((item, index) => {
                const id = `panel-${index}`;
                return (
                  <Accordion
                    key={id}
                    expanded={expanded === id}
                    onChange={handleChange(id)}
                    sx={{
                      mb: 1,
                      borderRadius: 2,
                      boxShadow: "none",
                      border: "1px solid rgba(0,0,0,0.06)",
                      '& .MuiAccordionSummary-root': { minHeight: 64 },
                    }}
                  >
                    <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: PRIMARY }} />}>
                      <Stack direction="row" alignItems="center" spacing={2} sx={{ width: "100%" }}>
                        <Box
                          sx={{
                            width: 10,
                            height: 10,
                            borderRadius: "50%",
                            bgcolor: PRIMARY,
                            boxShadow: "0 2px 6px rgba(0,0,0,0.08)",
                          }}
                        />
                        <Typography sx={{ fontWeight: 700 }}>{item.q}</Typography>
                        <Box sx={{ flex: 1 }} />
                        <Chip
                          label={item.tag}
                          size="small"
                          sx={{
                            borderColor: PRIMARY,
                            color: PRIMARY,
                            fontWeight: 600
                          }}
                        />
                      </Stack>
                    </AccordionSummary>

                    <AccordionDetails sx={{ background: "rgba(31,106,54,0.03)", borderRadius: 0, pt: 2 }}>
                      <Typography
                        sx={{ color: "#333" }}
                        component="div"
                        dangerouslySetInnerHTML={{ __html: item.a }}
                      />
                    </AccordionDetails>
                  </Accordion>
                );
              })
            )}
          </Box>

          <Box sx={{ mt: 3, textAlign: "center" }}>
            <Link href={"/contact"}>
              <Typography sx={{ color: "#666" }}>
                Didn’t find what you were looking for? Contact our support and we’ll help you out.
              </Typography>
            </Link>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
}
