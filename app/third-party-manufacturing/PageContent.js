"use client";

import {
    Box,
    Container,
    Typography,
    Divider,
    Grid,
    Stack,
} from "@mui/material";

/* DATA (FULL CONTENT PRESERVED) */

const products = [
    "Syrups",
    "Tablets",
    "Capsules",
    "Lotions",
    "Powder",
    "Juices",
    "Ointments",
    "Oil",
];

const healthConcerns = [
    "Acne", "Acidity", "Arthiritis",
    "Asthma", "Allergy", "Anxiety",
    "Anti-aging", "Anal Fistula", "Anemia",
    "Baby Health issues", "Blood Pressure", "Bed Wetting",
    "Back Pain", "Cough, cold & Flu", "Constipation",
    "Cervical Spondylosis", "Cracked Heals", "Dandruff",
    "Dengue", "Dermatosis", "Diabates",
    "Detoxification", "Digestion", "Dental Problems",
    "Dry skin", "Depression", "Erectile Dysfunction",
    "Fatty Liver", "Fever", "Female Health",
    "Gout", "Grey Hair", "Hair Loss",
    "Halitosis(Bad Breath)", "Heart Problems", "Hypertension",
    "Irritable Bowel Syndrome (IBS)", "Impotence", "Inflammation",
    "Insomnia", "Joint Pains", "Kidney Disorders",
    "Lactation Issues", "Leucorrhea", "Liver Diseases",
    "Low Bone Density", "Low Immunity", "Low Sperm Count",
    "Low Memory", "Menopause", "Migraine",
    "Nutritional Deficiency", "Oral Hygeine", "Osteoarthiritis",
    "Obesity", "Personal Hygeine", "Piles",
    "Platelet Dysfunction", "Premature Ejaculation", "Prostate Disorders",
    "Respiratory Disorders", "Renal Problems", "Rheumatoid Arthiritis",
    "Skin Problems", "Stomach Disorders", "Sagging Breasts",
    "Stress", "Tanning", "Thyroid disorders",
    "Urticaria", "Uric Acid", "Urinary Tract Infections (UTIs)",
    "Weight Loss", "Weakness"
];

const packaging = [
    { name: "Blister", img: "/images/packaging/blister.jpg" },
    { name: "Pharma Pet Bottle Pack", img: "/images/packaging/bottle.jpg" },
    { name: "Alu Alu", img: "/images/packaging/alu.jpg" },
    { name: "HDPE attractive jars", img: "/images/packaging/hdpe.jpg" },
    { name: "Lami tube", img: "/images/packaging/tube.jpg" },
    { name: "Plastic jars", img: "/images/packaging/jar.jpg" },
];

const documents = [
    "With machinery and equipment, two copies of the layout of the premises",
    "Two copies of ownership or rental documents and must be attested",
    "From the Director/Partner/Proprietor Declaration in the form of Affidavit-I",
    "Two attested copies of the MoA and AoA/Partnership Deed",
    "A detailed list of products to be manufactured is required.",
    "For a full-time technical supervisor an Appointment letter",
    "Experience certificate form along with attested copies of academic qualification certificates",
    "Declarations of Technical Staff with photos",
    "List of Shastric Medicines",
    "Xerox copies of references signed by FTS",
    "Two passport size photos of the FTS and Director/Partner/Proprietor",
    "Sales pack draft labels",
    "Clinical trial reports from three Ayurvedic Practitioners on at least 30 patients",
    "The minimum area required is 1200 sq. ft.",
    "The premises must adhere to the rules specified in Schedule T of the Drug and Cosmetic Act."
];

const faqs = [
    {
        q: "Q1.) What is the diverse Ayurvedic Range offered by Zoic Ayurveda?",
        a: "Ans1.) Zoic Ayurveda deals in Syrups, Tablets, Capsules, Lotions, Powder, Juices, Ointments, and Oil."
    },
    {
        q: "Q2.) Why go for ayurvedic products?",
        a: "Ans2.) Ayurvedic products are all-natural and a lot effective as well, hence safe and best to use."
    },
    {
        q: "Q3.) What qualities one must observe while choosing a third-party ayurvedic manufacturing company?",
        a: "Ans3.) The quality of the products, safety, accessibility, and price are the main criteria you must observe to select the company."
    },
    {
        q: "Q4.) Why Go for third party Ayurveda manufacturing?",
        a: "Ans4.) Third party manufacturing saves money on the fixed assets of manufacturing and also provides enough time for planning business strategies."
    },
    {
        q: "Q5.) What is the scope of Ayurvedic Products In India?",
        a: "Ans5.) The demand for ayurvedic products is increasing day by day due to the purity and safety it offers hence it has a wider scope."
    }
];

const terms = [
    "Herbal Third Party Manufacturing Company",
    "Third Party Manufacturing of Ayurvedic Products",
    "Ayurvedic medicine third party manufacturing",
    "Herbal Third Party Manufacturing",
    "Herbal products Third Party Manufacturers",
    "Ayurvedic third party manufacturers",
    "WHO & GMP Certified Ayurvedic third party manufacturers"
];

export default function Page() {
    return (
        <Box sx={{ lineHeight: 2 }}>

            {/* HERO */}
            <Box sx={{
                background: "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('/images/herbal-bg.jpg')",
                backgroundSize: "cover",
                color: "#fff",
                backgroundRepeat: "no-repeat",
                py: 12,
                textAlign: "center"
            }}>
                <Container maxWidth="md">
                    <Typography variant="h3" fontWeight={700} color="white">
                        Third Party Manufacturing Of Ayurvedic Products | Herbal Medicine 3rd party Manufacturers
                    </Typography>
                </Container>
            </Box>

            <Container maxWidth="lg" sx={{ py: 8 }}>

                {/* INTRO */}
                <Typography paragraph>
                    Ayurvedic Third party manufacturing company in India - Zoic Ayurveda, with quality production offers the best ayurvedic third party manufacturing opportunities. We deal in all sorts of ayurvedic medicines and products, produced under the guidance of well-experienced practitioners, with superlative quality of herbs. This often leads you towards the great heights of business success. Join hands with us at Zoic Ayurveda for the top 3rd party manufacturing of ayurvedic products. Herbal products are the ones for which people are more heading towards, as these products are 100% safe made up of the natural herbs. The other chemicalized products somewhere harm the health harshly this is why herbal products are the most preferred. This way the business of herbal products and medicines increasing day by day. We at Zoic Ayurveda are the best herbal 3rd party manufacturers in India.
                </Typography>

                <Divider sx={{ my: 4 }} />

                {/* AGENDA */}
                <Section title="Our Agenda">
                    To provide standardized and researched herbal healthcare products, through continuous innovation, creating healthy lives and delivering outstanding values to our customers and business associates To be a Leading International Herbal Healthcare Company; developing people's trust in quality & excellence not only in our products but Ayurvedic Healing. We want a successful business that delights customers and team members. Our core values guide us to achieve the mission of our vision. We continuously grow and improve our business, develop and motivate our people, innovate new solutions for being different, and work with honesty and transparency.
                </Section>

                {/* PRODUCTION */}
                <Section title="PRODUCTION SECTION">
                    Equipped with the latest technologies our processing section complements the manufacturing process. Though all process religiously follows the instruction mentioned in ancient manuscripts, the incorporation of modern technologies enables us to enhance production capacity and retains the purity of the herbs and plants used, without compromising quality.
                </Section>

                <Typography paragraph>
                    According to Good Manufacturing Practice (G.M.P.) guidelines, our every process is carried out specified by W.H.O. and QMS as per ISO 9001:2008 standards.
                </Typography>

                {/* RAW */}
                <Section title="RAW MATERIAL SECTION">
                    From natural sources, all raw materials are derived to make herbal formulas or medicines. They may be from plant sources, animal sources or minerals. During any phase of processing the Synthetically prepared ingredients are not incorporated. From genuine cultivators located all over the country, the natural herbs are sourced and that undergo stringent quality checks before approval for production.
                </Section>

                {/* WHY */}
                <Section title="Why Ayurveda?">
                    Ayurveda has a history as long as human civilization and even beyond, it is known as the science of life and longevity. Herbal medicines are highly beneficial as they help to effectively cure our body, and also revive our mind and soul. These deal with permanently healing the person and effectively treating the disease.
                </Section>

                <Typography paragraph>
                    Made up of natural herbs and extracts of fruits, vegetables, spices, etc the ayurvedic medicines and products help in curing diseases without any side effects.
                </Typography>

                <Typography paragraph>
                    Ayurvedic medicines focus to work on the root cause of the problem to cure the specific system of our body, and hence we can maintain good health for a long time. Herbal Contract Manufacturing Company or Ayurvedic/Herbal Third Party Pharma Manufacturer.
                </Typography>

                {/* CUSTOM */}
                <Section title="CUSTOM LABELING SOLUTIONS FOR YOUR BUSINESS">
                    Zoic Pharmaceuticals provides 3rd party manufacturing facility for reputed marketing company in India & overseas. We try to make the outsourcing activity easy for our partners which means we are completely flexible with our services which means everything from formulation to packaging can be done according to the buyer’s requirement.
                </Section>

                <Typography paragraph>
                    We offer contract manufacturing of various dosage forms namely – Syrups, Drops, Capsules, herbal Tablets, Ayurvedic Oils, Powder, Tea, Juices, Balm, Lotion, Gel, Roll-on, Cream, Spray, Face Wash, Soaps, Shampoo, Conditioner & Scrub, etc. We also offer the most competitive MOQ (Minimum Order Quantity) in the industry.
                </Typography>

                <Typography paragraph>
                    We manufacture the qualitative herbal medicines and products as the raw material used is only sourced from certified suppliers and after that, every single ingredient is tested in our in house laboratory.
                </Typography>

                {/* PRODUCTS */}
                <Section title="Zoic Ayurveda Herbal Products Manufacturers">
                    The quality medicine and products that Zoic Ayurveda manufactures are unmatchable this is why we stand above as the best ayurvedic medicine third party manufacturers in India. With years of research and experience, our practitioners offer the superlative quality of herbal medicine that is 100% pure and safe. We offer distinctive herbal medicines and products with complete hygiene and safety like:
                </Section>

                <ul>
                    {products.map((p) => <li key={p}>{p}</li>)}
                </ul>

                {/* HEALTH */}
                <Typography variant="h5" fontWeight={700} mt={6}>
                    Major Health Concerns covered by Zoic Pharmaceuticals :
                </Typography>

                <Grid container spacing={1} mt={2}>
                    {healthConcerns.map((item) => (
                        <Grid key={item} size={{ xs: 6, md: 3 }}>
                            <Typography variant="body2">• {item}</Typography>
                        </Grid>
                    ))}
                </Grid>

                {/* PACKAGING (CREATIVE) */}
                <Typography variant="h5" fontWeight={700} mt={6}>
                    Various Packing Types offered by Zoic Pharmaceuticals:
                </Typography>

                <Grid container spacing={3} mt={2}>
                    {packaging.map((item) => (
                        <Grid key={item.name} size={{ xs: 6, md: 4 }}>
                            <Box sx={{ borderRadius: 3, overflow: "hidden", boxShadow: 3 }}>
                                <Box component="img" src={item.img} sx={{ width: "100%", height: "auto", objectFit: "cover" }} />
                                <Box sx={{ p: 2 }}>
                                    <Typography fontWeight={600}>{item.name}</Typography>
                                </Box>
                            </Box>
                        </Grid>
                    ))}
                </Grid>

                {/* WHY CHOOSE */}
                <Section title="Why Choose Zoic Ayurveda As Best Ayurvedic Third Party Manufacturers in India?">
                    Zoic Ayurveda is the best ayurvedic third party manufacturers in India. The reason that Zoic Ayurveda stands above is its quality of medicines and products. The 100% safety aspect is our priority that is why we strike at the top. We produce a broad range of herbal medicines for all sorts of purposes. You will get various other services as 3rd Party manufacturing opportunities as well with Zoic Ayurveda. With our highly experienced and knowledgeable practitioner's team, we produce produces effective and safe herbal medicine. The major aim of Zoic Ayurveda is to make accessible herbal health products supply. Choosing us as the best Ayurvedic third party manufacturing company in India will bring you the following benefits.
                </Section>

                <ul>
                    <li>Superior quality.</li>
                    <li>Safe and hygiene herbal products.</li>
                    <li>Easily accessible.</li>
                    <li>Optimum prices.</li>
                </ul>

                {/* DOCUMENTS */}
                <Typography variant="h5" fontWeight={700} mt={6}>
                    Document Required for Manufacturing Ayurvedic Medicines
                </Typography>

                <ol>
                    {documents.map((d) => <li key={d}>{d}</li>)}
                </ol>

                {/* FAQ */}
                <Typography variant="h5" fontWeight={700} mt={6}>
                    Frequently asked Questions
                </Typography>

                {faqs.map((f, i) => (
                    <Box key={i} mt={2}>
                        <Typography fontWeight={600}>{f.q}</Typography>
                        <Typography>{f.a}</Typography>
                    </Box>
                ))}

                {/* CONTACT */}
                <Typography variant="h6" mt={6}>
                    Contact Details
                </Typography>

                <Typography>Name - Zoic Ayurveda</Typography>
                <Typography>Email - info@zoicpharmaceuticals.com</Typography>
                <Typography>Contact - +919815846085</Typography>

                {/* TERMS */}
                {/* <Typography variant="h6" mt={6}>
                    Most Searched Terms
                </Typography>

                <ol>
                    {terms.map((t) => <li key={t}>{t}</li>)}
                </ol> */}

            </Container>
        </Box>
    );
}

/* SECTION COMPONENT */
function Section({ title, children }) {
    return (
        <Box mt={6}>
            <Typography variant="h5" fontWeight={700} gutterBottom>
                {title}
            </Typography>
            <Typography paragraph>{children}</Typography>
        </Box>
    );
}