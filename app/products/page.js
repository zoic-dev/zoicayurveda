// /app/products/page.js
import { Suspense } from "react";
import PageContent from "./PageContent";

// ⭐ Basic SEO Setup
export const metadata = {
    title: "Our Products | Nutraceutical Products Manufacturer in India",
    description: "Browse a wide range of nutraceutical products manufactured in India, including high-quality dietary supplements, custom formulations and third-party solutions."
};

export default function Page() {
    return (
        <Suspense fallback={<div>Loading products...</div>}>
            <PageContent />
        </Suspense>
    );
}
