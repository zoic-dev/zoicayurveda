// lib/fetchProductsBySubcategories.js
import fetch from "node-fetch";

export async function fetchProductsBySubcategories(subcategoryIds, perPage = 8) {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL;
  const auth = `Basic ${Buffer.from(
    `${process.env.WP_USERNAME}:${process.env.WP_APP_PASSWORD}`
  ).toString("base64")}`;

  // Fetch all subcategories in parallel
  const allResponses = await Promise.all(
    subcategoryIds.map(async (id) => {
      const url = `${baseUrl}/wp-json/wc/v3/products?category=${id}&per_page=${perPage}`;
      const res = await fetch(url, {
        headers: { Authorization: auth },
        cache: "no-store",
      });

      if (!res.ok) {
        console.error(`Error fetching category ${id}: ${res.statusText}`);
        return [];
      }

      return res.json();
    })
  );

  // Flatten and remove duplicate products
  const allProducts = allResponses.flat();
  const uniqueProducts = Array.from(new Map(allProducts.map(p => [p.id, p])).values());

  return uniqueProducts;
}
