// /app/products/page.js
import { Suspense } from "react";
import PageContent from "./PageContent";

// ⭐ Basic SEO Setup
export const metadata = {
    title: "Herbal and Ayurvedic Products | Natural Healthcare Formulation",
    description: "Browse Ayurvedic and herbal healthcare products, including immunity, digestion, liver care, and wellness formulations made using traditional herbal ingredients."
};

export default function Page() {
    return (
        <Suspense fallback={<div>Loading products...</div>}>
            <PageContent />
        </Suspense>
    );
}
