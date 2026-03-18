// app/api/products/category/[slug]/route.js
import { NextResponse } from "next/server";
import { fetchProductsBySubcategories } from "@/lib/fetchProductsBySubcategories";

export const mainCategoryMap = {
    "digestive-care": [70, 82, 90, 105, 119, 135, 122, 95, 128, 76],
    "pain-and-bone-care": [80, 71, 73, 125, 139, 112, 83, 108, 123, 131],
    "mental-and-sleep-care": [74, 93, 116, 111, 127, 131],
    "mens-health": [94, 140, 133, 126, 132],
    "womens-health": [77, 97, 129, 118, 120, 106],
    "hair-and-skin-care": [100, 99, 85, 92, 75, 84, 121, 136, 138, 101, 69, 87, 113, 115],
    "kids-health": [78, 96, 86],
    "detox-and-cleaning-wellness": [86, 89, 102, 103, 98, 110, 104, 124, 134],
    "respiratory-care": [72, 81, 130],
    "diabetes-and-metabolic-wellness": [88, 107, 114, 137, 79],
    "kidney-and-urinary-care": [117, 109],
    "dental-and-oral-care": [91]
};

export async function GET(req, context) {
    const { params } = await context;
    const slug = params?.slug;
    const { searchParams } = new URL(req.url);
    const perPage = searchParams.get("per_page") || 12;

    if (!slug || !mainCategoryMap[slug]) {
        return NextResponse.json({ error: "Invalid category slug" }, { status: 400 });
    }

    try {
        const subcategoryIds = mainCategoryMap[slug];
        const products = await fetchProductsBySubcategories(subcategoryIds, perPage);

        return NextResponse.json({ products, totalProducts: products.length });
    } catch (error) {
        console.error("❌ API route error:", error);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
