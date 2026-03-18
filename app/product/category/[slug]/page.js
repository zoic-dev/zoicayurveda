// app/product/category/[slug]/page.jsx
import { Box, Grid, Card, CardMedia, CardContent, Typography, Container } from "@mui/material";
import Link from "next/link";
import { fetchProductsBySubcategories } from "@/lib/fetchProductsBySubcategories";
import { mainCategoryMap } from "@/app/api/products/category/[slug]/route";
import FAQComponent from "@/components/FAQComponent";
import { PAGE_FAQS } from "@/data/faqsdata";

export const revalidate = 60; // ISR: regenerate every 60 seconds

async function fetchCategoryProducts(slug) {
    const subcategoryIds = mainCategoryMap[slug] || [];
    if (!subcategoryIds.length) return [];
    const products = await fetchProductsBySubcategories(subcategoryIds, 12);
    return products;
}

export default async function CategoryPage({ params }) {
    const { slug } = await params;
    const products = await fetchCategoryProducts(slug);

    return (
        <Container sx={{ p: { xs: 2, md: 4 } }}>
            <Typography
                variant="h4"
                fontWeight={700}
                mb={5}
                textAlign="center"
                color="text.primary"
            >
                {slug.replace(/-/g, " ").replace(/\b\w/g, (char, index) => index === 0 ? char.toUpperCase() : char.toLowerCase())} Products
            </Typography>

            <Grid container spacing={4}>
                {products.map((product) => (
                    <Grid key={product.id} size={{ xs: 12, sm: 4, md: 3 }}>
                        <Link href={`/product/${product.slug}`} passHref>
                            <Card
                                sx={{
                                    height: "100%",
                                    borderRadius: 3,
                                    overflow: "hidden",
                                    boxShadow: 3,
                                    transition: "transform 0.25s ease, box-shadow 0.25s ease",
                                    "&:hover": {
                                        transform: "translateY(-5px)",
                                        boxShadow: 6,
                                    },
                                }}
                            >
                                <CardMedia
                                    component="img"
                                    image={product.images?.[0]?.src || "/placeholder.jpg"}
                                    alt={product.name}
                                    sx={{
                                        width: "100%",        // take full card width
                                        aspectRatio: "1 / 1", // keep square
                                        objectFit: "cover",   // fill square, may crop slightly
                                        bgcolor: "#fafafa",
                                    }}
                                />

                                <CardContent>
                                    <Typography
                                        variant="subtitle1"
                                        fontWeight={600}
                                        gutterBottom
                                        noWrap
                                        title={product.name}
                                    >
                                        {product.name}
                                    </Typography>

                                    {product.short_description && (
                                        <Box
                                            sx={{
                                                fontSize: "0.85rem",
                                                color: "text.secondary",
                                                "& p": { m: 0 },
                                                "& ul": { pl: 2, mt: 0, mb: 0 },
                                                "& li": { lineHeight: 1.4 },
                                                "& strong": { fontWeight: 600 },
                                                overflow: "hidden",
                                                display: "-webkit-box",
                                                WebkitBoxOrient: "vertical",
                                                WebkitLineClamp: 3,
                                            }}
                                            dangerouslySetInnerHTML={{
                                                __html: product.short_description,
                                            }}
                                        />
                                    )}
                                </CardContent>
                            </Card>
                        </Link>
                    </Grid>
                ))}
            </Grid>

            <FAQComponent faqs={PAGE_FAQS[slug] || []} />
        </Container>
    );
}
