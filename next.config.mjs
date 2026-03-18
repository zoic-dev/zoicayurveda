/** @type {import('next').NextConfig} */
const nextConfig = {
  reactCompiler: true,

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "zoicbiotech.com",
        pathname: "/wp-content/uploads/**",
      },
      {
        protocol: "https",
        hostname: "*.zoicbiotech.com", // allows cms., cdn., media., files., etc.
        pathname: "/wp-content/uploads/**",
      }
    ],
  },

  async redirects() {
    return [
      {
        "source": "/pharma-third-party-manufacturers-in-karnataka/",
        "destination": "/blog/pharma-third-party-manufacturers-in-karnataka",
        "permanent": true
      },
      {
        "source": "/third-party-pharma-manufacturing-company-in-surat/",
        "destination": "/blog/third-party-pharma-manufacturing-company-in-surat",
        "permanent": true
      },
      {
        "source": "/third-party-pharma-manufacturing-company-in-goa/",
        "destination": "/blog/third-party-pharma-manufacturing-company-in-goa",
        "permanent": true
      },
      {
        "source": "/third-party-pharma-manufacturing-company-in-kolkata/",
        "destination": "/blog/third-party-pharma-manufacturing-company-in-kolkata",
        "permanent": true
      },
      {
        "source": "/third-party-pharma-manufacturing-company-in-panipat/",
        "destination": "/blog/third-party-pharma-manufacturing-company-in-panipat",
        "permanent": true
      },
      {
        "source": "/pharma-third-party-manufacturers-in-mumbai/",
        "destination": "/blog/pharma-third-party-manufacturers-in-mumbai",
        "permanent": true
      },
      {
        "source": "/third-party-pharma-manufacturing-company-in-jamshedpur/",
        "destination": "/blog/third-party-pharma-manufacturing-company-in-jamshedpur",
        "permanent": true
      },
      {
        "source": "/third-party-pharma-manufacturing-company-in-nashik/",
        "destination": "/blog/third-party-pharma-manufacturing-company-in-nashik",
        "permanent": true
      },
      {
        "source": "/third-party-pharma-manufacturing-company-in-pondicherry/",
        "destination": "/blog/third-party-pharma-manufacturing-company-in-pondicherry",
        "permanent": true
      },
      {
        "source": "/third-party-pharma-manufacturing-company-in-moradabad/",
        "destination": "/blog/third-party-pharma-manufacturing-company-in-moradabad",
        "permanent": true
      },
      {
        "source": "/third-party-pharma-manufacturing-company-in-mangalore/",
        "destination": "/blog/third-party-pharma-manufacturing-company-in-mangalore",
        "permanent": true
      },
      {
        "source": "/third-party-pharma-manufacturing-company-in-allahabad/",
        "destination": "/blog/third-party-pharma-manufacturing-company-in-allahabad",
        "permanent": true
      },
      {
        "source": "/third-party-pharma-manufacturing-company-in-shimoga/",
        "destination": "/blog/third-party-pharma-manufacturing-company-in-shimoga",
        "permanent": true
      },
      {
        "source": "/third-party-pharma-manufacturing-company-in-ranchi/",
        "destination": "/blog/third-party-pharma-manufacturing-company-in-ranchi",
        "permanent": true
      },
      {
        "source": "/third-party-pharma-manufacturing-company-in-patiala/",
        "destination": "/blog/third-party-pharma-manufacturing-company-in-patiala",
        "permanent": true
      },
      {
        "source": "/third-party-pharma-manufacturing-company-in-uttar-pradesh/",
        "destination": "/blog/third-party-pharma-manufacturing-company-in-uttar-pradesh",
        "permanent": true
      },
      {
        "source": "/third-party-pharma-manufacturing-company-ludhiana/",
        "destination": "/blog/third-party-pharma-manufacturing-company-ludhiana",
        "permanent": true
      },
      {
        "source": "/third-party-pharma-manufacturing-company-in-amritsar/",
        "destination": "/blog/third-party-pharma-manufacturing-company-in-amritsar",
        "permanent": true
      },
      {
        "source": "/third-party-pharma-manufacturing-company-in-jammu-kashmir/",
        "destination": "/blog/third-party-pharma-manufacturing-company-in-jammu-kashmir",
        "permanent": true
      },
      {
        "source": "/third-party-pharma-manufacturing-company-in-aurangabad/",
        "destination": "/blog/third-party-pharma-manufacturing-company-in-aurangabad",
        "permanent": true
      },
      {
        "source": "/third-party-pharma-manufacturing-company-in-firozabad/",
        "destination": "/blog/third-party-pharma-manufacturing-company-in-firozabad",
        "permanent": true
      },
      {
        "source": "/third-party-pharma-manufacturing-company-in-saharanpur/",
        "destination": "/blog/third-party-pharma-manufacturing-company-in-saharanpur",
        "permanent": true
      },
      {
        "source": "/third-party-pharma-manufacturing-company-in-kochi/",
        "destination": "/blog/third-party-pharma-manufacturing-company-in-kochi",
        "permanent": true
      },
      {
        "source": "/third-party-pharma-manufacturing-company-in-haridwar/",
        "destination": "/blog/third-party-pharma-manufacturing-company-in-haridwar",
        "permanent": true
      },
      {
        "source": "/third-party-pharma-manufacturing-company-in-ambala/",
        "destination": "/blog/third-party-pharma-manufacturing-company-in-ambala",
        "permanent": true
      },
      {
        "source": "/third-party-pharma-manufacturing-company-in-sonipat/",
        "destination": "/blog/third-party-pharma-manufacturing-company-in-sonipat",
        "permanent": true
      },
      {
        "source": "/third-party-pharma-manufacturing-company-in-gwalior/",
        "destination": "/blog/third-party-pharma-manufacturing-company-in-gwalior",
        "permanent": true
      },
      {
        "source": "/third-party-pharma-manufacturing-company-in-bathinda/",
        "destination": "/blog/third-party-pharma-manufacturing-company-in-bathinda",
        "permanent": true
      },
      {
        "source": "/third-party-pharma-manufacturing-company-in-vadodara/",
        "destination": "/blog/third-party-pharma-manufacturing-company-in-vadodara",
        "permanent": true
      },
      {
        "source": "/third-party-pharma-manufacturing-company-in-bhubaneswar/",
        "destination": "/blog/third-party-pharma-manufacturing-company-in-bhubaneswar",
        "permanent": true
      },
      {
        "source": "/third-party-pharma-manufacturing-company-in-faridabad/",
        "destination": "/blog/third-party-pharma-manufacturing-company-in-faridabad",
        "permanent": true
      },
      {
        "source": "/third-party-pharma-manufacturing-company-in-jharkhand/",
        "destination": "/blog/third-party-pharma-manufacturing-company-in-jharkhand",
        "permanent": true
      },
      {
        "source": "/third-party-pharma-manufacturing-company-in-ghaziabad/",
        "destination": "/blog/third-party-pharma-manufacturing-company-in-ghaziabad",
        "permanent": true
      },
      {
        "source": "/third-party-pharma-manufacturing-company-in-trivandrum/",
        "destination": "/blog/third-party-pharma-manufacturing-company-in-trivandrum",
        "permanent": true
      },
      {
        "source": "/third-party-pharma-manufacturing-company-in-haryana/",
        "destination": "/blog/third-party-pharma-manufacturing-company-in-haryana",
        "permanent": true
      },
      {
        "source": "/third-party-pharma-manufacturing-company-in-daman-diu/",
        "destination": "/blog/third-party-pharma-manufacturing-company-in-daman-diu",
        "permanent": true
      },
      {
        "source": "/third-party-pharma-manufacturing-company-in-punjab/",
        "destination": "/blog/third-party-pharma-manufacturing-company-in-punjab",
        "permanent": true
      },
      {
        "source": "/third-party-pharma-manufacturing-company-in-mizoram/",
        "destination": "/blog/third-party-pharma-manufacturing-company-in-mizoram",
        "permanent": true
      },
      {
        "source": "/third-party-pharma-manufacturing-company-in-nagaland/",
        "destination": "/blog/third-party-pharma-manufacturing-company-in-nagaland",
        "permanent": true
      },
      {
        "source": "/third-party-pharma-manufacturing-company-in-firozpur/",
        "destination": "/blog/third-party-pharma-manufacturing-company-in-firozpur",
        "permanent": true
      },
      {
        "source": "/third-party-pharma-manufacturing-company-in-aligarh/",
        "destination": "/blog/third-party-pharma-manufacturing-company-in-aligarh",
        "permanent": true
      },
      {
        "source": "/third-party-pharma-manufacturing-company-in-ajmer/",
        "destination": "/blog/third-party-pharma-manufacturing-company-in-ajmer",
        "permanent": true
      },
      {
        "source": "/third-party-pharma-manufacturing-company-in-jhansi/",
        "destination": "/blog/third-party-pharma-manufacturing-company-in-jhansi",
        "permanent": true
      },
      {
        "source": "/third-party-pharma-manufacturing-company-in-vishakhapatnam/",
        "destination": "/blog/third-party-pharma-manufacturing-company-in-vishakhapatnam",
        "permanent": true
      },
      {
        "source": "/third-party-pharma-manufacturing-company-in-vijayawada/",
        "destination": "/blog/third-party-pharma-manufacturing-company-in-vijayawada",
        "permanent": true
      },
      {
        "source": "/third-party-pharma-manufacturing-company-in-kurukshetra/",
        "destination": "/blog/third-party-pharma-manufacturing-company-in-kurukshetra",
        "permanent": true
      },
      {
        "source": "/third-party-pharma-manufacturing-company-in-sikkim/",
        "destination": "/blog/third-party-pharma-manufacturing-company-in-sikkim",
        "permanent": true
      },
      {
        "source": "/third-party-pharma-manufacturing-company-in-muzaffarnagar/",
        "destination": "/blog/third-party-pharma-manufacturing-company-in-muzaffarnagar",
        "permanent": true
      },
      {
        "source": "/third-party-pharma-manufacturing-company-in-andhra-pradesh/",
        "destination": "/blog/third-party-pharma-manufacturing-company-in-andhra-pradesh",
        "permanent": true
      },
      {
        "source": "/third-party-pharma-manufacturing-company-in-thiruvananthapuram/",
        "destination": "/blog/third-party-pharma-manufacturing-company-in-thiruvananthapuram",
        "permanent": true
      },
      {
        "source": "/third-party-pharma-manufacturing-company-in-kozhikode/",
        "destination": "/blog/third-party-pharma-manufacturing-company-in-kozhikode",
        "permanent": true
      },
      {
        "source": "/third-party-pharma-manufacturing-company-in-alappuzha/",
        "destination": "/blog/third-party-pharma-manufacturing-company-in-alappuzha",
        "permanent": true
      },
      {
        "source": "/third-party-pharma-manufacturing-company-in-udaipur/",
        "destination": "/blog/third-party-pharma-manufacturing-company-in-udaipur",
        "permanent": true
      },
      {
        "source": "/third-party-pharma-manufacturing-company-in-jaipur/",
        "destination": "/blog/third-party-pharma-manufacturing-company-in-jaipur",
        "permanent": true
      },
      {
        "source": "/third-party-pharma-manufacturing-company-in-rajkot/",
        "destination": "/blog/third-party-pharma-manufacturing-company-in-rajkot",
        "permanent": true
      },
      {
        "source": "/third-party-pharma-manufacturing-company-in-prayagraj/",
        "destination": "/blog/third-party-pharma-manufacturing-company-in-prayagraj",
        "permanent": true
      },
      {
        "source": "/third-party-pharma-manufacturing-company-in-kollam/",
        "destination": "/blog/third-party-pharma-manufacturing-company-in-kollam",
        "permanent": true
      },
      {
        "source": "/third-party-pharma-manufacturing-company-in-jodhpur/",
        "destination": "/blog/third-party-pharma-manufacturing-company-in-jodhpur",
        "permanent": true
      },
      {
        "source": "/third-party-pharma-manufacturing-company-in-kota/",
        "destination": "/blog/third-party-pharma-manufacturing-company-in-kota",
        "permanent": true
      },
      {
        "source": "/third-party-pharma-manufacturing-company-in-lucknow/",
        "destination": "/blog/third-party-pharma-manufacturing-company-in-lucknow",
        "permanent": true
      },
      {
        "source": "/private-label-medicine-manufacturer-in-india/",
        "destination": "/blog/private-label-medicine-manufacturer-in-india",
        "permanent": true
      },
      {
        "source": "/third-party-manufacturing-company-in-bareilly/",
        "destination": "/blog/third-party-manufacturing-company-in-bareilly",
        "permanent": true
      },
      {
        "source": "/third-party-manufacturing-company-in-kolhapur/",
        "destination": "/blog/third-party-manufacturing-company-in-kolhapur",
        "permanent": true
      },
      {
        "source": "/third-party-pharma-manufacturing-company-in-meghalaya/",
        "destination": "/blog/third-party-pharma-manufacturing-company-in-meghalaya",
        "permanent": true
      },
      {
        "source": "/third-party-pharma-manufacturing-company-in-manipur/",
        "destination": "/blog/third-party-pharma-manufacturing-company-in-manipur",
        "permanent": true
      },
      {
        "source": "/third-party-pharma-manufacturing-company-in-indore/",
        "destination": "/blog/third-party-pharma-manufacturing-company-in-indore",
        "permanent": true
      },
      {
        "source": "/nutraceutical-companies-in-bangalore/",
        "destination": "/blog/nutraceutical-companies-in-bangalore",
        "permanent": true
      },
      {
        "source": "/nutraceutical-companies-in-hyderabad/",
        "destination": "/blog/nutraceutical-companies-in-hyderabad",
        "permanent": true
      },
      {
        "source": "/nutraceutical-companies-in-mumbai/",
        "destination": "/blog/nutraceutical-companies-in-mumbai",
        "permanent": true
      },
      {
        "source": "/softgel-capsules-manufacturers-in-baddi/",
        "destination": "/blog/softgel-capsules-manufacturers-in-baddi",
        "permanent": true
      },
      {
        "source": "/nutraceutical-formulation-companies-in-tamil-nadu/",
        "destination": "/blog/nutraceutical-formulation-companies-in-tamil-nadu",
        "permanent": true
      },
      {
        "source": "/third-party-pharma-manufacturing-company-in-mumbai/",
        "destination": "/blog/third-party-pharma-manufacturing-company-in-mumbai",
        "permanent": true
      },
      {
        "source": "/third-party-pharma-manufacturing-company-in-tamil-nadu/",
        "destination": "/blog/third-party-pharma-manufacturing-company-in-tamil-nadu",
        "permanent": true
      },
      {
        "source": "/third-party-pharma-manufacturing-company-in-odisha/",
        "destination": "/blog/third-party-pharma-manufacturing-company-in-odisha",
        "permanent": true
      },
      {
        "source": "/pharma-third-party-manufacturers-in-kerala/",
        "destination": "/blog/pharma-third-party-manufacturers-in-kerala",
        "permanent": true
      },
      {
        "source": "/molnupiravir-capsules-manufacturers-in-india/",
        "destination": "/blog/molnupiravir-capsules-manufacturers-in-india",
        "permanent": true
      },
      {
        "source": "/multivitamin-manufacturers-in-india/",
        "destination": "/blog/multivitamin-manufacturers-in-india",
        "permanent": true
      },
      {
        "source": "/zinc-tablet-manufacturers-in-india/",
        "destination": "/blog/zinc-tablet-manufacturers-in-india",
        "permanent": true
      },
      {
        "source": "/third-party-pharma-manufacturing-company-in-noida/",
        "destination": "/blog/third-party-pharma-manufacturing-company-in-noida",
        "permanent": true
      },
      {
        "source": "/third-party-manufacturing-company-in-tripura/",
        "destination": "/blog/third-party-manufacturing-company-in-tripura",
        "permanent": true
      },
      {
        "source": "/third-party-manufacturing-company-in-telangana/",
        "destination": "/blog/third-party-manufacturing-company-in-telangana",
        "permanent": true
      },
      {
        "source": "/third-party-pharma-manufacturing-company-in-madhya-pradesh/",
        "destination": "/blog/third-party-pharma-manufacturing-company-in-madhya-pradesh",
        "permanent": true
      },
      {
        "source": "/third-party-manufacturing-company-in-varanasi/",
        "destination": "/blog/third-party-manufacturing-company-in-varanasi",
        "permanent": true
      },
      {
        "source": "/third-party-manufacturing-company-in-nagpur/",
        "destination": "/blog/third-party-manufacturing-company-in-nagpur",
        "permanent": true
      },
      {
        "source": "/third-party-manufacturing-company-in-ujjain/",
        "destination": "/blog/third-party-manufacturing-company-in-ujjain",
        "permanent": true
      },
      {
        "source": "/third-party-manufacturing-company-in-madurai/",
        "destination": "/blog/third-party-manufacturing-company-in-madurai",
        "permanent": true
      },
      {
        "source": "/third-party-manufacturing-company-in-thrissur/",
        "destination": "/blog/third-party-manufacturing-company-in-thrissur",
        "permanent": true
      },
      {
        "source": "/third-party-pharma-manufacturing-company-in-bihar/",
        "destination": "/blog/third-party-pharma-manufacturing-company-in-bihar",
        "permanent": true
      },
      {
        "source": "/third-party-manufacturing-company-in-gaya/",
        "destination": "/blog/third-party-manufacturing-company-in-gaya",
        "permanent": true
      },
      {
        "source": "/third-party-manufacturing-company-in-jind/",
        "destination": "/blog/third-party-manufacturing-company-in-jind",
        "permanent": true
      },
      {
        "source": "/third-party-manufacturing-company-in-vasai/",
        "destination": "/blog/third-party-manufacturing-company-in-vasai",
        "permanent": true
      },
      {
        "source": "/third-party-manufacturing-company-in-warangal/",
        "destination": "/blog/third-party-manufacturing-company-in-warangal",
        "permanent": true
      },
      {
        "source": "/third-party-pharma-manufacturing-company-in-yamuna-nagar/",
        "destination": "/blog/third-party-pharma-manufacturing-company-in-yamuna-nagar",
        "permanent": true
      },
      {
        "source": "/third-party-pharma-manufacturing-company-in-kanpur/",
        "destination": "/blog/third-party-pharma-manufacturing-company-in-kanpur",
        "permanent": true
      },
      {
        "source": "/third-party-manufacturing-company-in-bhind/",
        "destination": "/blog/third-party-manufacturing-company-in-bhind",
        "permanent": true
      },
      {
        "source": "/third-party-manufacturing-company-in-sangrur/",
        "destination": "/blog/third-party-manufacturing-company-in-sangrur",
        "permanent": true
      },
      {
        "source": "/third-party-manufacturing-company-in-siliguri/",
        "destination": "/blog/third-party-manufacturing-company-in-siliguri",
        "permanent": true
      },
      {
        "source": "/third-party-manufacturing-company-in-guwahati/",
        "destination": "/blog/third-party-manufacturing-company-in-guwahati",
        "permanent": true
      },
      {
        "source": "/third-party-manufacturing-company-in-burhanpur/",
        "destination": "/blog/third-party-manufacturing-company-in-burhanpur",
        "permanent": true
      },
      {
        "source": "/third-party-manufacturing-company-in-hisar/",
        "destination": "/blog/third-party-manufacturing-company-in-hisar",
        "permanent": true
      },
      {
        "source": "/third-party-manufacturing-company-in-port-blair/",
        "destination": "/blog/third-party-manufacturing-company-in-port-blair",
        "permanent": true
      },
      {
        "source": "/third-party-manufacturing-company-in-fatehpur-sikri/",
        "destination": "/blog/third-party-manufacturing-company-in-fatehpur-sikri",
        "permanent": true
      },
      {
        "source": "/third-party-pharma-manufacturing-company-in-karnal/",
        "destination": "/blog/third-party-pharma-manufacturing-company-in-karnal",
        "permanent": true
      },
      {
        "source": "/third-party-manufacturing-company-in-panaji/",
        "destination": "/blog/third-party-manufacturing-company-in-panaji",
        "permanent": true
      },
      {
        "source": "/third-party-manufacturing-company-in-jalandhar/",
        "destination": "/blog/third-party-manufacturing-company-in-jalandhar",
        "permanent": true
      },
      {
        "source": "/third-party-manufacturing-company-in-chakan/",
        "destination": "/blog/third-party-manufacturing-company-in-chakan",
        "permanent": true
      },
      {
        "source": "/gummies-manufacturers-in-india/",
        "destination": "/blog/gummies-manufacturers-in-india",
        "permanent": true
      },
      {
        "source": "/top-derma-product-manufacturers-in-baddi/",
        "destination": "/blog/top-derma-product-manufacturers-in-baddi",
        "permanent": true
      },
      {
        "source": "/top-derma-products-manufacturers-in-india/",
        "destination": "/blog/top-derma-products-manufacturers-in-india",
        "permanent": true
      },
      {
        "source": "/injection-manufacturers-in-baddi/",
        "destination": "/blog/injection-manufacturers-in-baddi",
        "permanent": true
      },
      {
        "source": "/third-party-manufacturing-company-in-guntur/",
        "destination": "/blog/third-party-manufacturing-company-in-guntur",
        "permanent": true
      },
      {
        "source": "/pharma-third-party-manufacturing-in-hindi/",
        "destination": "/blog/pharma-third-party-manufacturing-in-hindi",
        "permanent": true
      },
      {
        "source": "/top-otc-product-manufacturers-in-india/",
        "destination": "/blog/top-otc-product-manufacturers-in-india",
        "permanent": true
      },
      {
        "source": "/top-ortho-product-manufacturers-in-india/",
        "destination": "/blog/top-ortho-product-manufacturers-in-india",
        "permanent": true
      },
      {
        "source": "/top-injection-manufacturers-in-india/",
        "destination": "/blog/top-injection-manufacturers-in-india",
        "permanent": true
      },
      {
        "source": "/cardiac-diabetic-products-manufacturers-in-india/",
        "destination": "/blog/cardiac-diabetic-products-manufacturers-in-india",
        "permanent": true
      },
      {
        "source": "/gummy-vitamin-contract-manufacturers/",
        "destination": "/blog/gummy-vitamin-contract-manufacturers",
        "permanent": true
      },
      {
        "source": "/top-gummies-manufacturers-in-hyderabad/",
        "destination": "/blog/top-gummies-manufacturers-in-hyderabad",
        "permanent": true
      },
      {
        "source": "/custom-gummy-candy-manufacturers/",
        "destination": "/blog/custom-gummy-candy-manufacturers",
        "permanent": true
      },
      {
        "source": "/top-nutraceutical-manufacturers-in-india/",
        "destination": "/blog/top-nutraceutical-manufacturers-in-india",
        "permanent": true
      },
      {
        "source": "/top-cosmetic-manufacturers-in-india/",
        "destination": "/blog/top-cosmetic-manufacturers-in-india",
        "permanent": true
      },
      {
        "source": "/private-label-medicine-manufacturers-in-india/",
        "destination": "/blog/private-label-medicine-manufacturers-in-india",
        "permanent": true
      },
      {
        "source": "/vitamin-c-tablets-manufacturers-in-india/",
        "destination": "/blog/vitamin-c-tablets-manufacturers-in-india",
        "permanent": true
      },
      {
        "source": "/third-party-pharma-manufacturing-company-in-rajasthan/",
        "destination": "/blog/third-party-pharma-manufacturing-company-in-rajasthan",
        "permanent": true
      },
      {
        "source": "/third-party-pharma-manufacturing-company-in-chhattisgarh/",
        "destination": "/blog/third-party-pharma-manufacturing-company-in-chhattisgarh",
        "permanent": true
      },
      {
        "source": "/third-party-pharma-manufacturing-company-in-arunachal-pradesh/",
        "destination": "/blog/third-party-pharma-manufacturing-company-in-arunachal-pradesh",
        "permanent": true
      },
      {
        "source": "/top-10-medicine-manufacturers-in-india-in-hindi/",
        "destination": "/blog/top-10-medicine-manufacturers-in-india-in-hindi",
        "permanent": true
      },
      {
        "source": "/top-softgel-capsules-manufacturers-in-india-in-hindi/",
        "destination": "/blog/top-softgel-capsules-manufacturers-in-india-in-hindi",
        "permanent": true
      },
      {
        "source": "/ors-manufacturers-in-india/",
        "destination": "/blog/ors-manufacturers-in-india",
        "permanent": true
      },
      {
        "source": "/oral-manufacturers-in-india-in-hindi/",
        "destination": "/blog/oral-manufacturers-in-india-in-hindi",
        "permanent": true
      },
      {
        "source": "/third-party-manufacturing-company-in-nalagarh/",
        "destination": "/blog/third-party-manufacturing-company-in-nalagarh",
        "permanent": true
      },
      {
        "source": "/third-party-manufacturing-company-in-thane/",
        "destination": "/blog/third-party-manufacturing-company-in-thane",
        "permanent": true
      },
      {
        "source": "/third-party-manufacturing-company-in-gurgaon/",
        "destination": "/blog/third-party-manufacturing-company-in-gurgaon",
        "permanent": true
      },
      {
        "source": "/third-party-pharma-manufacturing-company-in-assam/",
        "destination": "/blog/third-party-pharma-manufacturing-company-in-assam",
        "permanent": true
      },
      {
        "source": "/top-cardiology-medicine-manufacturers-in-india/",
        "destination": "/blog/top-cardiology-medicine-manufacturers-in-india",
        "permanent": true
      },
      {
        "source": "/top-cardiology-medicine-manufacturers-in-india-in-hindi/",
        "destination": "/blog/top-cardiology-medicine-manufacturers-in-india-in-hindi",
        "permanent": true
      },
      {
        "source": "/top-pediatric-medicine-manufacturers-in-india-in-hindi/",
        "destination": "/blog/top-pediatric-medicine-manufacturers-in-india-in-hindi",
        "permanent": true
      },
      {
        "source": "/top-pediatric-medicine-manufacturers-in-india/",
        "destination": "/blog/top-pediatric-medicine-manufacturers-in-india",
        "permanent": true
      },
      {
        "source": "/top-neurology-medicine-manufacturers-in-india-in-hindi/",
        "destination": "/blog/top-neurology-medicine-manufacturers-in-india-in-hindi",
        "permanent": true
      },
      {
        "source": "/top-neurology-medicine-manufacturers-in-india/",
        "destination": "/blog/top-neurology-medicine-manufacturers-in-india",
        "permanent": true
      },
      {
        "source": "/top-derma-products-manufacturers-in-india-in-hindi/",
        "destination": "/blog/top-derma-products-manufacturers-in-india-in-hindi",
        "permanent": true
      },
      {
        "source": "/drug-price-control-order-act-dpco-act/",
        "destination": "/blog/drug-price-control-order-act-dpco-act",
        "permanent": true
      },
      {
        "source": "/nutraceutical-manufacturers-in-ahemdabad/",
        "destination": "/blog/nutraceutical-manufacturers-in-ahemdabad",
        "permanent": true
      },
      {
        "source": "/top-nutraceutical-companies-in-gujarat/",
        "destination": "/blog/top-nutraceutical-companies-in-gujarat",
        "permanent": true
      },
      {
        "source": "/third-party-manufacturing-company-in-moga/",
        "destination": "/blog/third-party-manufacturing-company-in-moga",
        "permanent": true
      },
      {
        "source": "/injection-manufacturer-in-chandigarh/",
        "destination": "/blog/injection-manufacturer-in-chandigarh",
        "permanent": true
      },
      {
        "source": "/injection-manufacturer-in-baddi/",
        "destination": "/blog/injection-manufacturer-in-baddi",
        "permanent": true
      },
      {
        "source": "/injection-manufacturer-in-gujarat/",
        "destination": "/blog/injection-manufacturer-in-gujarat",
        "permanent": true
      },
      {
        "source": "/third-party-manufacturing-company-in-nizamabad/",
        "destination": "/blog/third-party-manufacturing-company-in-nizamabad",
        "permanent": true
      },
      {
        "source": "/third-party-manufacturing-company-in-srinagar/",
        "destination": "/blog/third-party-manufacturing-company-in-srinagar",
        "permanent": true
      },
      {
        "source": "/how-much-investment-needed-to-start-third-party-manufacturing-company/",
        "destination": "/blog/how-much-investment-needed-to-start-third-party-manufacturing-company",
        "permanent": true
      },
      {
        "source": "/how-to-start-third-party-manufacturing-company-in-india/",
        "destination": "/blog/how-to-start-third-party-manufacturing-company-in-india",
        "permanent": true
      },
      {
        "source": "/top-10-medicine-manufacturers-in-india/",
        "destination": "/blog/top-10-medicine-manufacturers-in-india",
        "permanent": true
      },
      {
        "source": "/top-10-pharma-contract-manufacturing-companies-in-india/",
        "destination": "/blog/top-10-pharma-contract-manufacturing-companies-in-india",
        "permanent": true
      },
      {
        "source": "/top-pharma-manufacturing-companies-in-india/",
        "destination": "/blog/top-pharma-manufacturing-companies-in-india",
        "permanent": true
      },
      {
        "source": "/top-10-third-party-pharma-manufacturing-companies-in-india/",
        "destination": "/blog/top-10-third-party-pharma-manufacturing-companies-in-india",
        "permanent": true
      },
      {
        "source": "/third-party-pharma-manufacturing-company-in-andaman-nicobar/",
        "destination": "/blog/third-party-pharma-manufacturing-company-in-andaman-nicobar",
        "permanent": true
      },
      {
        "source": "/third-party-pharma-manufacturing-company-in-coimbatore/",
        "destination": "/blog/third-party-pharma-manufacturing-company-in-coimbatore",
        "permanent": true
      },
      {
        "source": "/third-party-pharma-manufacturing-company-in-west-bengal/",
        "destination": "/blog/third-party-pharma-manufacturing-company-in-west-bengal",
        "permanent": true
      },
      {
        "source": "/third-party-pharma-manufacturing-company-in-leh-ladakh/",
        "destination": "/blog/third-party-pharma-manufacturing-company-in-leh-ladakh",
        "permanent": true
      },
      {
        "source": "/top-10-pharma-contract-manufacturing-companies-in-india-in-hindi/",
        "destination": "/blog/top-10-pharma-contract-manufacturing-companies-in-india-in-hindi",
        "permanent": true
      },
      {
        "source": "/top-pharma-manufacturing-companies-in-india-in-hindi/",
        "destination": "/blog/top-pharma-manufacturing-companies-in-india-in-hindi",
        "permanent": true
      },
      {
        "source": "/third-party-manufacturing-company-in-tarn-taran/",
        "destination": "/blog/third-party-manufacturing-company-in-tarn-taran",
        "permanent": true
      },
      {
        "source": "/third-party-manufacturing-company-in-gorakhpur/",
        "destination": "/blog/third-party-manufacturing-company-in-gorakhpur",
        "permanent": true
      },
      {
        "source": "/third-party-manufacturing-company-in-bilaspur/",
        "destination": "/blog/third-party-manufacturing-company-in-bilaspur",
        "permanent": true
      },
      {
        "source": "/third-party-manufacturing-company-in-hoshiarpur/",
        "destination": "/blog/third-party-manufacturing-company-in-hoshiarpur",
        "permanent": true
      },
      {
        "source": "/third-party-manufacturing-company-in-dhanbad/",
        "destination": "/blog/third-party-manufacturing-company-in-dhanbad",
        "permanent": true
      },
      {
        "source": "/third-party-manufacturing-company-in-cuttack/",
        "destination": "/blog/third-party-manufacturing-company-in-cuttack",
        "permanent": true
      },
      {
        "source": "/third-party-manufacturing-company-in-bhubaneswar/",
        "destination": "/blog/third-party-manufacturing-company-in-bhubaneswar",
        "permanent": true
      },
      {
        "source": "/top-softgel-capsules-manufacturers-in-india/",
        "destination": "/blog/top-softgel-capsules-manufacturers-in-india",
        "permanent": true
      },
      {
        "source": "/third-party-pharma-manufacturing-company-in-uttarakhand/",
        "destination": "/blog/third-party-pharma-manufacturing-company-in-uttarakhand",
        "permanent": true
      },
      {
        "source": "/pharma-third-party-manufacturers-in-baddi/",
        "destination": "/blog/pharma-third-party-manufacturers-in-baddi",
        "permanent": true
      },
      {
        "source": "/third-party-pharma-manufacturing-in-dehradun/",
        "destination": "/blog/third-party-pharma-manufacturing-in-dehradun",
        "permanent": true
      },
      {
        "source": "/pharma-third-party-manufacturers-in-pune/",
        "destination": "/blog/pharma-third-party-manufacturers-in-pune",
        "permanent": true
      },
      {
        "source": "/third-party-manufacturing-company-roorkee/",
        "destination": "/blog/third-party-manufacturing-company-roorkee",
        "permanent": true
      },
      {
        "source": "/pharma-third-party-manufacturers-in-gujarat/",
        "destination": "/blog/pharma-third-party-manufacturers-in-gujarat",
        "permanent": true
      },
      {
        "source": "/third-party-manufacturing-company-in-ahmedabad/",
        "destination": "/blog/third-party-manufacturing-company-in-ahmedabad",
        "permanent": true
      },
      {
        "source": "/third-party-pharma-manufacturing-company-in-chandigarh/",
        "destination": "/blog/third-party-pharma-manufacturing-company-in-chandigarh",
        "permanent": true
      },
      {
        "source": "/third-party-pharma-manufacturing-company-in-bangalore/",
        "destination": "/blog/third-party-pharma-manufacturing-company-in-bangalore",
        "permanent": true
      },
      {
        "source": "/pharma-third-party-manufacturers-in-chennai/",
        "destination": "/blog/pharma-third-party-manufacturers-in-chennai",
        "permanent": true
      },
      {
        "source": "/pharma-third-party-manufacturers-in-delhi/",
        "destination": "/blog/pharma-third-party-manufacturers-in-delhi",
        "permanent": true
      },
      {
        "source": "/third-party-pharma-manufacturing-company-in-ahmedabad/",
        "destination": "/blog/third-party-pharma-manufacturing-company-in-ahmedabad",
        "permanent": true
      },
      {
        "source": "/third-party-pharma-manufacturing-company-in-himachal-pradesh/",
        "destination": "/blog/third-party-pharma-manufacturing-company-in-himachal-pradesh",
        "permanent": true
      },
      {
        "source": "/third-party-pharma-manufacturing-company-in-hyderabad/",
        "destination": "/blog/third-party-pharma-manufacturing-company-in-hyderabad",
        "permanent": true
      },
      {
        "source": "/pharma-third-party-manufacturers-in-maharashtra/",
        "destination": "/blog/pharma-third-party-manufacturers-in-maharashtra",
        "permanent": true
      },
      {
        "source": "/third-party-manufacturing-company-in-durgapur/",
        "destination": "/blog/third-party-manufacturing-company-in-durgapur",
        "permanent": true
      },
      {
        "source": "/third-party-manufacturing-company-in-gangtok/",
        "destination": "/blog/third-party-manufacturing-company-in-gangtok",
        "permanent": true
      },
      {
        "source": "/third-party-manufacturing-company-in-aizawl/",
        "destination": "/blog/third-party-manufacturing-company-in-aizawl",
        "permanent": true
      },
      {
        "source": "/third-party-manufacturing-company-in-jabalpur/",
        "destination": "/blog/third-party-manufacturing-company-in-jabalpur",
        "permanent": true
      },
      {
        "source": "/top-cardiac-diabetic-manufacturers-in-india/",
        "destination": "/blog/top-cardiac-diabetic-manufacturers-in-india",
        "permanent": true
      },
      {
        "source": "/who-gmp-certified-third-party-pharma-manufacturer/",
        "destination": "/blog/who-gmp-certified-third-party-pharma-manufacturer",
        "permanent": true
      },
      {
        "source": "/gynae-tablet-manufacturers-in-india/",
        "destination": "/blog/gynae-tablet-manufacturers-in-india",
        "permanent": true
      },
      {
        "source": "/psychiatric-products-manufacturers-in-india/",
        "destination": "/blog/psychiatric-products-manufacturers-in-india",
        "permanent": true
      },
      {
        "source": "/progesterone-tablet-manufacturers-in-india/",
        "destination": "/blog/progesterone-tablet-manufacturers-in-india",
        "permanent": true
      },
      {
        "source": "/hormone-tablets-manufacturers/",
        "destination": "/blog/hormone-tablets-manufacturers",
        "permanent": true
      },
      {
        "source": "/contact-us/",
        "destination": "/contact",
        "permanent": true
      },
      {
        "source": "/about-us/",
        "destination": "/about",
        "permanent": true
      },
      {
        "source": "/manufacturers/allopathic-drugs-medicine-manufacturer-in-hisar/",
        "destination": "/blog/third-party-manufacturing-company-in-hisar/",
        "permanent": true
      },
      {
        "source": "/manufacturers/assam-based-third-party-pharma-manufacturing-company/",
        "destination": "/blog/third-party-pharma-manufacturing-company-in-assam/",
        "permanent": true
      },
      {
        "source": "/manufacturers/ayurvedic-third-party-manufacturers-in-guwahati/",
        "destination": "/blog/third-party-manufacturing-company-in-guwahati/",
        "permanent": true
      },
      {
        "source": "/manufacturers/bareillys-best-third-party-manufacturing-company/",
        "destination": "/blog/third-party-manufacturing-company-in-bareilly/",
        "permanent": true
      },
      {
        "source": "/manufacturers/best-gynae-medicine-manufacturer-in-india/",
        "destination": "/blog/gynae-tablet-manufacturers-in-india/",
        "permanent": true
      },
      {
        "source": "/manufacturers/best-injection-manufacturer-companies-in-gujarat/",
        "destination": "/blog/injection-manufacturer-in-gujarat/",
        "permanent": true
      },
      {
        "source": "/manufacturers/best-injection-manufacturer-in-baddi/",
        "destination": "/blog/injection-manufacturer-in-baddi/",
        "permanent": true
      },
      {
        "source": "/manufacturers/best-injection-manufacturer-in-chandigarh/",
        "destination": "/blog/injection-manufacturer-in-chandigarh/",
        "permanent": true
      },
      {
        "source": "/manufacturers/best-injection-manufacturer-in-gujarat/",
        "destination": "/blog/injection-manufacturer-in-gujarat/",
        "permanent": true
      },
      {
        "source": "/manufacturers/best-manufacturer-companies-in-bhind/",
        "destination": "/blog/best-manufacturer-companies-in-bhind/",
        "permanent": true
      },
      {
        "source": "/manufacturers/best-molnupiravir-dealer-in-india/",
        "destination": "/blog/best-molnupiravir-dealer-in-india/",
        "permanent": true
      },
      {
        "source": "/manufacturers/best-molnupiravir-manufacturer-in-india/",
        "destination": "/blog/best-molnupiravir-manufacturer-in-india/",
        "permanent": true
      },
      {
        "source": "/manufacturers/best-multivitamin-manufacturers-in-india/",
        "destination": "/blog/best-multivitamin-manufacturers-in-india/",
        "permanent": true
      },
      {
        "source": "/manufacturers/best-nutraceutical-company-in-gujarat/",
        "destination": "/blog/top-nutraceutical-companies-in-gujarat/",
        "permanent": true
      },
      {
        "source": "/manufacturers/best-ors-manufacturers-in-india/",
        "destination": "/blog/ors-manufacturers-in-india/",
        "permanent": true
      },
      {
        "source": "/manufacturers/best-pharma-manufacturing-company-in-ajmer/",
        "destination": "/blog/third-party-pharma-manufacturing-company-in-ajmer/",
        "permanent": true
      },
      {
        "source": "/manufacturers/best-pharma-manufacturing-company-in-jhansi/",
        "destination": "/blog/third-party-pharma-manufacturing-company-in-jhansi/",
        "permanent": true
      },
      {
        "source": "/manufacturers/best-pharma-manufacturing-company-in-nashik/",
        "destination": "/blog/third-party-pharma-manufacturing-company-in-nashik/",
        "permanent": true
      },
      {
        "source": "/manufacturers/best-private-label-medicine-manufacturer-in-india/",
        "destination": "/blog/private-label-medicine-manufacturer-in-india/",
        "permanent": true
      },
      {
        "source": "/manufacturers/best-private-label-medicine-manufacturers-in-india/",
        "destination": "/blog/private-label-medicine-manufacturers-in-india/",
        "permanent": true
      },
      {
        "source": "/manufacturers/best-third-party-manufacturers-in-bangalore/",
        "destination": "/blog/third-party-pharma-manufacturing-company-in-bangalore/",
        "permanent": true
      },
      {
        "source": "/manufacturers/best-third-party-manufacturing-company-in-bilaspur/",
        "destination": "/blog/third-party-manufacturing-company-in-bilaspur/",
        "permanent": true
      },
      {
        "source": "/manufacturers/best-third-party-manufacturing-company-in-gurgaon/",
        "destination": "/blog/third-party-manufacturing-company-in-gurgaon/",
        "permanent": true
      },
      {
        "source": "/manufacturers/best-third-party-manufacturing-company-in-hisar/",
        "destination": "/blog/third-party-manufacturing-company-in-hisar/",
        "permanent": true
      },
      {
        "source": "/manufacturers/best-third-party-manufacturing-company-in-moga/",
        "destination": "/blog/best-third-party-manufacturing-company-in-moga/",
        "permanent": true
      },
      {
        "source": "/manufacturers/best-third-party-manufacturing-company-in-nagpur/",
        "destination": "/blog/third-party-manufacturing-company-in-nagpur/",
        "permanent": true
      },
      {
        "source": "/manufacturers/best-third-party-manufacturing-company-in-nizamabad/",
        "destination": "/blog/third-party-manufacturing-company-in-nizamabad/",
        "permanent": true
      },
      {
        "source": "/manufacturers/best-third-party-manufacturing-company-in-srinagar/",
        "destination": "/blog/third-party-manufacturing-company-in-srinagar/",
        "permanent": true
      },
      {
        "source": "/manufacturers/best-third-party-manufacturing-company-in-tarn-taran/",
        "destination": "/blog/third-party-manufacturing-company-in-tarn-taran/",
        "permanent": true
      },
      {
        "source": "/manufacturers/best-third-party-manufacturing-company-in-telangana/",
        "destination": "/blog/third-party-manufacturing-company-in-telangana/",
        "permanent": true
      },
      {
        "source": "/manufacturers/best-third-party-manufacturing-company-in-varanasi/",
        "destination": "/blog/third-party-manufacturing-company-in-varanasi/",
        "permanent": true
      },
      {
        "source": "/manufacturers/best-third-party-manufacturing-pharma-companies-in-tripura/",
        "destination": "/blog/third-party-manufacturing-company-in-tripura/",
        "permanent": true
      },
      {
        "source": "/manufacturers/best-third-party-manufacturing-pharma-company-in-chakan/",
        "destination": "/blog/third-party-manufacturing-company-in-chakan/",
        "permanent": true
      },
      {
        "source": "/manufacturers/best-third-party-manufacturing-pharma-company-in-cuttack/",
        "destination": "/blog/third-party-manufacturing-company-in-cuttack/",
        "permanent": true
      },
      {
        "source": "/manufacturers/best-third-party-manufacturing-pharma-company-in-gangtok/",
        "destination": "/blog/third-party-manufacturing-company-in-gangtok/",
        "permanent": true
      },
      {
        "source": "/manufacturers/best-third-party-manufacturing-pharma-company-in-guntur/",
        "destination": "/blog/third-party-manufacturing-company-in-guntur/",
        "permanent": true
      },
      {
        "source": "/manufacturers/best-third-party-manufacturing-pharma-company-in-jabalpur/",
        "destination": "/blog/third-party-manufacturing-company-in-jabalpur/",
        "permanent": true
      },
      {
        "source": "/manufacturers/best-third-party-manufacturing-pharma-company-in-jalandhar/",
        "destination": "/blog/third-party-manufacturing-company-in-jalandhar/",
        "permanent": true
      },
      {
        "source": "/manufacturers/best-third-party-manufacturing-pharma-company-in-port-blair/",
        "destination": "/blog/third-party-manufacturing-company-in-port-blair/",
        "permanent": true
      },
      {
        "source": "/manufacturers/best-third-party-pharma-manufacturer-in-surat/",
        "destination": "/blog/third-party-pharma-manufacturing-company-in-surat/",
        "permanent": true
      },
      {
        "source": "/manufacturers/best-third-party-pharma-manufacturer-in-vishakhapatnam/",
        "destination": "/blog/third-party-pharma-manufacturing-company-in-vishakhapatnam/",
        "permanent": true
      },
      {
        "source": "/manufacturers/best-third-party-pharma-manufacturers-in-aligarh/",
        "destination": "/blog/third-party-pharma-manufacturing-company-in-aligarh/",
        "permanent": true
      },
      {
        "source": "/manufacturers/best-third-party-pharma-manufacturers-in-baddi/",
        "destination": "/blog/pharma-third-party-manufacturers-in-baddi/",
        "permanent": true
      },
      {
        "source": "/manufacturers/best-third-party-pharma-manufacturers-in-chakan/",
        "destination": "/blog/third-party-manufacturing-company-in-chakan/",
        "permanent": true
      },
      {
        "source": "/manufacturers/best-third-party-pharma-manufacturers-in-dehradun/",
        "destination": "/blog/third-party-pharma-manufacturing-in-dehradun/",
        "permanent": true
      },
      {
        "source": "/manufacturers/best-third-party-pharma-manufacturers-in-hyderabad/",
        "destination": "/blog/third-party-pharma-manufacturing-company-in-hyderabad/",
        "permanent": true
      },
      {
        "source": "/manufacturers/best-third-party-pharma-manufacturers-in-indore/",
        "destination": "/blog/third-party-pharma-manufacturing-company-in-indore/",
        "permanent": true
      },
      {
        "source": "/manufacturers/best-third-party-pharma-manufacturers-in-kolkata/",
        "destination": "/blog/third-party-pharma-manufacturing-company-in-kolkata/",
        "permanent": true
      },
      {
        "source": "/manufacturers/best-third-party-pharma-manufacturers-in-sikkim/",
        "destination": "/blog/third-party-pharma-manufacturing-company-in-sikkim/",
        "permanent": true
      },
      {
        "source": "/manufacturers/best-third-party-pharma-manufacturers-in-siliguri/",
        "destination": "/blog/third-party-manufacturing-company-in-siliguri/",
        "permanent": true
      },
      {
        "source": "/manufacturers/best-third-party-pharma-manufacturers-in-vijayawada/",
        "destination": "/blog/third-party-pharma-manufacturing-company-in-vijayawada/",
        "permanent": true
      },
      {
        "source": "/manufacturers/best-third-party-pharma-manufacturing-company-in-ajmer/",
        "destination": "/blog/third-party-pharma-manufacturing-company-in-ajmer/",
        "permanent": true
      },
      {
        "source": "/manufacturers/best-third-party-pharma-manufacturing-company-in-aligarh/",
        "destination": "/blog/third-party-pharma-manufacturing-company-in-aligarh/",
        "permanent": true
      },
      {
        "source": "/manufacturers/best-third-party-pharma-manufacturing-company-in-goa/",
        "destination": "/blog/third-party-pharma-manufacturing-company-in-goa/",
        "permanent": true
      },
      {
        "source": "/manufacturers/best-third-party-pharma-manufacturing-company-in-hyderabad/",
        "destination": "/blog/third-party-pharma-manufacturing-company-in-hyderabad/",
        "permanent": true
      },
      {
        "source": "/manufacturers/best-third-party-pharma-manufacturing-company-in-indore/",
        "destination": "/blog/third-party-pharma-manufacturing-company-in-indore/",
        "permanent": true
      },
      {
        "source": "/manufacturers/best-third-party-pharma-manufacturing-company-in-jamshedpur/",
        "destination": "/blog/third-party-pharma-manufacturing-company-in-jamshedpur/",
        "permanent": true
      },
      {
        "source": "/manufacturers/best-third-party-pharma-manufacturing-company-in-jhansi/",
        "destination": "/blog/third-party-pharma-manufacturing-company-in-jhansi/",
        "permanent": true
      },
      {
        "source": "/manufacturers/best-third-party-pharma-manufacturing-company-in-kolkata/",
        "destination": "/blog/third-party-pharma-manufacturing-company-in-kolkata/",
        "permanent": true
      },
      {
        "source": "/manufacturers/best-third-party-pharma-manufacturing-company-in-kurukshetra/",
        "destination": "/blog/third-party-pharma-manufacturing-company-in-kurukshetra/",
        "permanent": true
      },
      {
        "source": "/manufacturers/best-third-party-pharma-manufacturing-company-in-mangalore/",
        "destination": "/blog/third-party-pharma-manufacturing-company-in-mangalore/",
        "permanent": true
      },
      {
        "source": "/manufacturers/best-third-party-pharma-manufacturing-company-in-surat/",
        "destination": "/blog/third-party-pharma-manufacturing-company-in-surat/",
        "permanent": true
      },
      {
        "source": "/manufacturers/best-third-party-pharma-manufacturing-company-in-vijayawada/",
        "destination": "/blog/third-party-pharma-manufacturing-company-in-vijayawada/",
        "permanent": true
      },
      {
        "source": "/manufacturers/best-third-party-pharma-manufacturing-company-in-vishakhapatnam/",
        "destination": "/blog/third-party-pharma-manufacturing-company-in-vishakhapatnam/",
        "permanent": true
      },
      {
        "source": "/manufacturers/best-third-party-pharmaceutical-company-in-goa/",
        "destination": "/blog/third-party-pharma-manufacturing-company-in-goa/",
        "permanent": true
      },
      {
        "source": "/manufacturers/best-third-party-manufacturing-company-in-nashik/",
        "destination": "/blog/third-party-pharma-manufacturing-company-in-nashik/",
        "permanent": true
      },
      {
        "source": "/manufacturers/best-third-party-pharma-manufacturers-in-himachal-pradesh/",
        "destination": "/blog/third-party-pharma-manufacturing-company-in-himachal-pradesh/",
        "permanent": true
      },
      {
        "source": "/manufacturers/best-third-party-pharma-manufacturers-in-india/",
        "destination": "/blog/third-party-pharma-manufacturing-company-in-kurukshetra/",
        "permanent": true
      },
      {
        "source": "/manufacturers/best-third-party-pharma-manufacturers-in-mangalore/",
        "destination": "/blog/third-party-pharma-manufacturing-company-in-mangalore/",
        "permanent": true
      },
      {
        "source": "/manufacturers/best-third-party-pharma-manufacturers-in-moradabad/",
        "destination": "/blog/third-party-pharma-manufacturing-company-in-moradabad/",
        "permanent": true
      },
      {
        "source": "/manufacturers/best-third-party-pharma-manufacturing-company-in-allahabad/",
        "destination": "/blog/third-party-pharma-manufacturing-company-in-allahabad/",
        "permanent": true
      },
      {
        "source": "/manufacturers/best-third-party-pharma-manufacturing-company-in-himachal-pradesh/",
        "destination": "/blog/third-party-pharma-manufacturing-company-in-himachal-pradesh/",
        "permanent": true
      },
      {
        "source": "/manufacturers/best-third-party-pharma-manufacturing-company-in-moradabad/",
        "destination": "/blog/third-party-pharma-manufacturing-company-in-moradabad/",
        "permanent": true
      },
      {
        "source": "/manufacturers/best-third-party-pharma-manufacturing-company-in-sikkim/",
        "destination": "/blog/third-party-pharma-manufacturing-company-in-sikkim/",
        "permanent": true
      },
      {
        "source": "/manufacturers/best-top-derma-products-manufacturers-in-india/",
        "destination": "/blog/top-derma-products-manufacturers-in-india/",
        "permanent": true
      },
      {
        "source": "/manufacturers/best-top-third-party-manufacturing-pharma-company-in-kota/",
        "destination": "/blog/third-party-pharma-manufacturing-company-in-kota/",
        "permanent": true
      },
      {
        "source": "/manufacturers/best-vitamin-c-tablets-in-india/",
        "destination": "/blog/vitamin-c-tablets-manufacturers-in-india/",
        "permanent": true
      },
      {
        "source": "/manufacturers/capsule-manufacturers-in-baddi/",
        "destination": "/blog/softgel-capsules-manufacturers-in-baddi/",
        "permanent": true
      },
      {
        "source": "/manufacturers/capsule-manufacturing-companies-in-baddi/",
        "destination": "/blog/softgel-capsules-manufacturers-in-baddi/",
        "permanent": true
      },
      {
        "source": "/manufacturers/cardiac-diabetic-medicine-manufacturers-in-india/",
        "destination": "/blog/cardiac-diabetic-products-manufacturers-in-india/",
        "permanent": true
      },
      {
        "source": "/manufacturers/cardiac-diabetic-medicines-manufacturing-companies/",
        "destination": "/blog/top-cardiology-medicine-manufacturers-in-india/",
        "permanent": true
      },
      {
        "source": "/manufacturers/contract-manufacturer-in-bathinda/",
        "destination": "/blog/third-party-pharma-manufacturing-company-in-bathinda/",
        "permanent": true
      },
      {
        "source": "/manufacturers/contract-manufacturer-in-gwalior/",
        "destination": "/blog/third-party-pharma-manufacturing-company-in-gwalior/",
        "permanent": true
      },
      {
        "source": "/manufacturers/contract-manufacturers-in-alappuzha/",
        "destination": "/blog/third-party-pharma-manufacturing-company-in-alappuzha/",
        "permanent": true
      },
      {
        "source": "/manufacturers/contract-manufacturers-in-ambala/",
        "destination": "/blog/third-party-pharma-manufacturing-company-in-ambala/",
        "permanent": true
      },
      {
        "source": "/manufacturers/contract-manufacturers-in-daman-diu/",
        "destination": "/blog/third-party-pharma-manufacturing-company-in-daman-diu/",
        "permanent": true
      },
      {
        "source": "/manufacturers/contract-manufacturers-in-haryana/",
        "destination": "/blog/third-party-pharma-manufacturing-company-in-haryana/",
        "permanent": true
      },
      {
        "source": "/manufacturers/contract-manufacturers-in-india/",
        "destination": "/blog/top-10-pharma-contract-manufacturing-companies-in-india/",
        "permanent": true
      },
      {
        "source": "/manufacturers/contract-manufacturers-in-jaipur/",
        "destination": "/blog/third-party-pharma-manufacturing-company-in-jaipur/",
        "permanent": true
      },
      {
        "source": "/manufacturers/contract-manufacturers-in-jodhpur/",
        "destination": "/blog/third-party-pharma-manufacturing-company-in-jodhpur/",
        "permanent": true
      },
      {
        "source": "/manufacturers/contract-manufacturers-in-kollam/",
        "destination": "/blog/third-party-pharma-manufacturing-company-in-kollam/",
        "permanent": true
      },
      {
        "source": "/manufacturers/contract-manufacturers-in-prayagraj/",
        "destination": "/blog/third-party-pharma-manufacturing-company-in-prayagraj/",
        "permanent": true
      },
      {
        "source": "/manufacturers/contract-manufacturers-in-thiruvananthapuram/",
        "destination": "/blog/third-party-pharma-manufacturing-company-in-thiruvananthapuram/",
        "permanent": true
      },
      {
        "source": "/manufacturers/contract-manufacturers-in-thrissur/",
        "destination": "/blog/third-party-manufacturing-company-in-thrissur/",
        "permanent": true
      },
      {
        "source": "/manufacturers/contract-manufacturers-in-udaipur/",
        "destination": "/blog/third-party-pharma-manufacturing-company-in-udaipur/",
        "permanent": true
      },
      {
        "source": "/manufacturers/contract-manufacturers-in-vadodara/",
        "destination": "/blog/third-party-pharma-manufacturing-company-in-vadodara/",
        "permanent": true
      },
      {
        "source": "/manufacturers/contract-manufacturers-in-warangal/",
        "destination": "/blog/third-party-manufacturing-company-in-warangal/",
        "permanent": true
      },
      {
        "source": "/manufacturers/contract-manufacturers-pharmaceuticals-in-india/",
        "destination": "/blog/private-label-medicine-manufacturer-in-india/",
        "permanent": true
      },
      {
        "source": "/manufacturers/contract-manufacturing-companies-in-alappuzha/",
        "destination": "/blog/third-party-pharma-manufacturing-company-in-alappuzha/",
        "permanent": true
      },
      {
        "source": "/manufacturers/contract-manufacturing-companies-in-andaman-nicobar/",
        "destination": "/blog/third-party-pharma-manufacturing-company-in-andaman-nicobar/",
        "permanent": true
      },
      {
        "source": "/manufacturers/contract-manufacturing-companies-in-firozabad/",
        "destination": "/blog/third-party-pharma-manufacturing-company-in-firozabad/",
        "permanent": true
      },
      {
        "source": "/manufacturers/contract-manufacturing-companies-in-firozpur/",
        "destination": "/blog/third-party-pharma-manufacturing-company-in-firozpur/",
        "permanent": true
      },
      {
        "source": "/manufacturers/contract-manufacturing-companies-in-gaya/",
        "destination": "/blog/third-party-manufacturing-company-in-gaya/",
        "permanent": true
      },
      {
        "source": "/manufacturers/contract-manufacturing-companies-in-jind/",
        "destination": "/blog/third-party-manufacturing-company-in-jind/",
        "permanent": true
      },
      {
        "source": "/manufacturers/contract-manufacturing-companies-in-manipur/",
        "destination": "/blog/third-party-pharma-manufacturing-company-in-manipur/",
        "permanent": true
      },
      {
        "source": "/manufacturers/contract-manufacturing-companies-in-meghalaya/",
        "destination": "/blog/third-party-pharma-manufacturing-company-in-meghalaya/",
        "permanent": true
      },
      {
        "source": "/manufacturers/contract-manufacturing-companies-in-mizoram/",
        "destination": "/blog/third-party-pharma-manufacturing-company-in-mizoram/",
        "permanent": true
      },
      {
        "source": "/manufacturers/contract-manufacturing-companies-in-udaipur/",
        "destination": "/blog/third-party-pharma-manufacturing-company-in-udaipur/",
        "permanent": true
      },
      {
        "source": "/manufacturers/contract-manufacturing-companies-in-ujjain/",
        "destination": "/blog/third-party-manufacturing-company-in-ujjain/",
        "permanent": true
      },
      {
        "source": "/manufacturers/contract-manufacturing-company-in-rajkot/",
        "destination": "/blog/third-party-pharma-manufacturing-company-in-rajkot/",
        "permanent": true
      },
      {
        "source": "/manufacturers/contract-manufacturing-company-in-thane/",
        "destination": "/blog/third-party-manufacturing-company-in-thane/",
        "permanent": true
      },
      {
        "source": "/manufacturers/contract-manufacturing-pharma-companies-in-india/",
        "destination": "/blog/top-10-pharma-contract-manufacturing-companies-in-india/",
        "permanent": true
      },
      {
        "source": "/manufacturers/contract-pharma-manufacturers-in-mizoram/",
        "destination": "/blog/third-party-pharma-manufacturing-company-in-mizoram/",
        "permanent": true
      },
      {
        "source": "/manufacturers/contract-pharma-manufacturing-in-prayagraj/",
        "destination": "/blog/third-party-pharma-manufacturing-company-in-prayagraj/",
        "permanent": true
      },
      {
        "source": "/manufacturers/cosmetic-manufacturing-companiesin-india/",
        "destination": "/blog/top-cosmetic-manufacturers-in-india/",
        "permanent": true
      },
      {
        "source": "/manufacturers/cosmetics-derma-manufacturing-in-baddi/",
        "destination": "/blog/top-derma-product-manufacturers-in-baddi/",
        "permanent": true
      },
      {
        "source": "/manufacturers/derma-company-in-baddi/",
        "destination": "/blog/top-derma-product-manufacturers-in-baddi/",
        "permanent": true
      },
      {
        "source": "/manufacturers/derma-manufacturing-company-in-baddi/",
        "destination": "/blog/top-derma-product-manufacturers-in-baddi/",
        "permanent": true
      },
      {
        "source": "/manufacturers/derma-third-party-manufacturing-companies-in-india/",
        "destination": "/blog/top-derma-products-manufacturers-in-india/",
        "permanent": true
      },
      {
        "source": "/manufacturers/drug-price-control-order-act/",
        "destination": "/blog/drug-price-control-order-act-dpco-act/",
        "permanent": true
      },
      {
        "source": "/manufacturers/drug-price-control-order-act-dpco-act/",
        "destination": "/blog/drug-price-control-order-act-dpco-act/",
        "permanent": true
      },
      {
        "source": "/manufacturers/female-hormone-tablets/",
        "destination": "/blog/hormone-tablets-manufacturers/",
        "permanent": true
      },
      {
        "source": "/manufacturers/generic-medicine-manufacturers-in-sonipat/",
        "destination": "/blog/third-party-pharma-manufacturing-company-in-sonipat/",
        "permanent": true
      },
      {
        "source": "/manufacturers/gummies-manufacturers-in-india/",
        "destination": "/blog/gummy-vitamin-contract-manufacturers/",
        "permanent": true
      },
      {
        "source": "/manufacturers/gummy-candies-manufacturers-suppliers/",
        "destination": "/blog/custom-gummy-candy-manufacturers/",
        "permanent": true
      },
      {
        "source": "/manufacturers/gummy-candy-supplier/",
        "destination": "/blog/custom-gummy-candy-manufacturers/",
        "permanent": true
      },
      {
        "source": "/manufacturers/gummy-manufacturing-company-in-india/",
        "destination": "/blog/gummies-manufacturers-in-india/",
        "permanent": true
      },
      {
        "source": "/manufacturers/gummy-vitamin-manufacturing/",
        "destination": "/blog/gummy-vitamin-contract-manufacturers/",
        "permanent": true
      },
      {
        "source": "/manufacturers/gummy-candy-custom-manufacturers-suppliers/",
        "destination": "/blog/custom-gummy-candy-manufacturers/",
        "permanent": true
      },
      {
        "source": "/manufacturers/gynecology-medicine-manufacturing-companies-in-india/",
        "destination": "/blog/gynae-tablet-manufacturers-in-india/",
        "permanent": true
      },
      {
        "source": "/manufacturers/gynecology-product-manufacturers-in-india/",
        "destination": "/blog/gynae-tablet-manufacturers-in-india/",
        "permanent": true
      },
      {
        "source": "/manufacturers/healthy-gummies-manufacturers/",
        "destination": "/blog/gummies-manufacturers-in-india/",
        "permanent": true
      },
      {
        "source": "/manufacturers/hormonal-medicine-manufacturers-in-india/",
        "destination": "/blog/hormone-tablets-manufacturers/",
        "permanent": true
      },
      {
        "source": "/manufacturers/hormone-tablet-manufacturers-suppliers-in-india/",
        "destination": "/blog/hormone-tablets-manufacturers/",
        "permanent": true
      },
      {
        "source": "/manufacturers/hormone-tablets-indian-manufacturers/",
        "destination": "/blog/hormone-tablets-manufacturers/",
        "permanent": true
      },
      {
        "source": "/manufacturers/how-can-i-start-a-third-party-manufacturing-business-in-india/",
        "destination": "/blog/how-to-start-third-party-manufacturing-company-in-india/",
        "permanent": true
      },
      {
        "source": "/manufacturers/how-to-start-third-party-pharma-manufacturing/",
        "destination": "/blog/how-to-start-third-party-manufacturing-company-in-india/",
        "permanent": true
      },
      {
        "source": "/manufacturers/india-based-top-10-medicine-manufacturers/",
        "destination": "/blog/top-10-medicine-manufacturers-in-india/",
        "permanent": true
      },
      {
        "source": "/manufacturers/injectable-third-party-manufacturer-in-baddi/",
        "destination": "/blog/injection-manufacturers-in-baddi/",
        "permanent": true
      },
      {
        "source": "/manufacturers/injection-manufacturer-and-exporter-india/",
        "destination": "/blog/injection-manufacturer-in-chandigarh/",
        "permanent": true
      },
      {
        "source": "/manufacturers/injection-manufacturer-in-baddi/",
        "destination": "/blog/injection-manufacturer-in-baddi/",
        "permanent": true
      },
      {
        "source": "/manufacturers/injection-manufacturer-in-gujarat/",
        "destination": "/blog/injection-manufacturer-in-gujarat/",
        "permanent": true
      },
      {
        "source": "/manufacturers/investment-needed-to-start-third-party-manufacturing-business/",
        "destination": "/blog/how-much-investment-needed-to-start-third-party-manufacturing-company/",
        "permanent": true
      },
      {
        "source": "/manufacturers/iso-certified-third-party-manufacturers-in-india/",
        "destination": "/blog/who-gmp-certified-third-party-pharma-manufacturer/",
        "permanent": true
      },
      {
        "source": "/manufacturers/kolhapur-based-third-party-manufacturing-companies/",
        "destination": "/blog/third-party-manufacturing-company-in-kolhapur/",
        "permanent": true
      },
      {
        "source": "/manufacturers/kolhapurs-best-third-party-manufacturing-companies/",
        "destination": "/blog/third-party-manufacturing-company-in-kolhapur/",
        "permanent": true
      },
      {
        "source": "/manufacturers/leading-contract-manufacturers-in-jaipur/",
        "destination": "/blog/third-party-pharma-manufacturing-company-in-jaipur/",
        "permanent": true
      },
      {
        "source": "/manufacturers/leading-cosmetic-manufacturers-in-india/",
        "destination": "/blog/top-cosmetic-manufacturers-in-india/",
        "permanent": true
      },
      {
        "source": "/manufacturers/leading-nutraceutical-companies-in-hyderabad/",
        "destination": "/blog/nutraceutical-companies-in-hyderabad/",
        "permanent": true
      },
      {
        "source": "/manufacturers/leading-ors-manufacturers-in-india/",
        "destination": "/blog/ors-manufacturers-in-india/",
        "permanent": true
      },
      {
        "source": "/manufacturers/leading-private-label-medicine-manufacturer-in-india/",
        "destination": "/blog/private-label-medicine-manufacturer-in-india/",
        "permanent": true
      },
      {
        "source": "/manufacturers/leading-private-label-medicine-manufacturers-in-india/",
        "destination": "/blog/private-label-medicine-manufacturers-in-india/",
        "permanent": true
      },
      {
        "source": "/manufacturers/leading-progesterone-tablet-manufacturers-in-india/",
        "destination": "/blog/progesterone-tablet-manufacturers-in-india/",
        "permanent": true
      },
      {
        "source": "/manufacturers/leading-softgel-capsules-manufacturers-in-baddi/",
        "destination": "/blog/softgel-capsules-manufacturers-in-baddi/",
        "permanent": true
      },
      {
        "source": "/manufacturers/leading-third-party-manufacturers-in-bangalore/",
        "destination": "/blog/third-party-pharma-manufacturing-company-in-bangalore/",
        "permanent": true
      },
      {
        "source": "/manufacturers/leading-third-party-manufacturers-in-thiruvananthapuram/",
        "destination": "/blog/third-party-pharma-manufacturing-company-in-thiruvananthapuram/",
        "permanent": true
      },
      {
        "source": "/manufacturers/leading-third-party-manufacturing-company-in-gurgaon/",
        "destination": "/blog/third-party-manufacturing-company-in-gurgaon/",
        "permanent": true
      },
      {
        "source": "/manufacturers/leading-third-party-manufacturing-company-in-guwahati/",
        "destination": "/blog/third-party-manufacturing-company-in-guwahati/",
        "permanent": true
      },
      {
        "source": "/manufacturers/leading-third-party-manufacturing-company-in-nagpur/",
        "destination": "/blog/third-party-manufacturing-company-in-nagpur/",
        "permanent": true
      },
      {
        "source": "/manufacturers/leading-third-party-manufacturing-company-in-telangana/",
        "destination": "/blog/third-party-manufacturing-company-in-telangana/",
        "permanent": true
      },
      {
        "source": "/manufacturers/leading-third-party-manufacturing-company-in-varanasi/",
        "destination": "/blog/third-party-manufacturing-company-in-varanasi/",
        "permanent": true
      },
      {
        "source": "/manufacturers/leading-third-party-pharma-companies-in-hyderabad/",
        "destination": "/blog/third-party-pharma-manufacturing-company-in-hyderabad/",
        "permanent": true
      },
      {
        "source": "/manufacturers/leading-third-party-pharma-manufacturers-in-kolkata/",
        "destination": "/blog/third-party-pharma-manufacturing-company-in-kolkata/",
        "permanent": true
      },
      {
        "source": "/manufacturers/leading-third-party-pharma-manufacturing-company-in-ajmer/",
        "destination": "/blog/third-party-pharma-manufacturing-company-in-ajmer/",
        "permanent": true
      },
      {
        "source": "/manufacturers/leading-third-party-pharma-manufacturing-company-in-aligarh/",
        "destination": "/blog/third-party-pharma-manufacturing-company-in-aligarh/",
        "permanent": true
      },
      {
        "source": "/manufacturers/leading-third-party-pharma-manufacturing-company-in-andhra-pradesh/",
        "destination": "/blog/third-party-pharma-manufacturing-company-in-andhra-pradesh/",
        "permanent": true
      },
      {
        "source": "/manufacturers/leading-third-party-pharma-manufacturing-company-in-assam/",
        "destination": "/blog/third-party-pharma-manufacturing-company-in-assam/",
        "permanent": true
      },
      {
        "source": "/manufacturers/leading-third-party-pharma-manufacturing-company-in-goa/",
        "destination": "/blog/third-party-pharma-manufacturing-company-in-goa/",
        "permanent": true
      },
      {
        "source": "/manufacturers/leading-third-party-pharma-manufacturing-company-in-hyderabad/",
        "destination": "/blog/third-party-pharma-manufacturing-company-in-hyderabad/",
        "permanent": true
      },
      {
        "source": "/manufacturers/leading-third-party-pharma-manufacturing-company-in-indore/",
        "destination": "/blog/third-party-pharma-manufacturing-company-in-indore/",
        "permanent": true
      },
      {
        "source": "/manufacturers/leading-third-party-pharma-manufacturing-company-in-jhansi/",
        "destination": "/blog/third-party-pharma-manufacturing-company-in-jhansi/",
        "permanent": true
      },
      {
        "source": "/manufacturers/leading-third-party-pharma-manufacturing-company-in-kolkata/",
        "destination": "/blog/third-party-pharma-manufacturing-company-in-kolkata/",
        "permanent": true
      },
      {
        "source": "/manufacturers/leading-third-party-pharma-manufacturing-company-in-kota/",
        "destination": "/blog/third-party-pharma-manufacturing-company-in-kota/",
        "permanent": true
      },
      {
        "source": "/manufacturers/leading-third-party-pharma-manufacturing-company-in-kurukshetra/",
        "destination": "/blog/third-party-pharma-manufacturing-company-in-kurukshetra/",
        "permanent": true
      },
      {
        "source": "/manufacturers/leading-third-party-pharma-manufacturing-company-in-mumbai/",
        "destination": "/blog/third-party-pharma-manufacturing-company-in-mumbai/",
        "permanent": true
      },
      {
        "source": "/manufacturers/leading-third-party-pharma-manufacturing-company-in-surat/",
        "destination": "/blog/third-party-pharma-manufacturing-company-in-surat/",
        "permanent": true
      },
      {
        "source": "/manufacturers/leading-third-party-pharma-manufacturing-company-in-trivandrum/",
        "destination": "/blog/third-party-pharma-manufacturing-company-in-trivandrum/",
        "permanent": true
      },
      {
        "source": "/manufacturers/leading-third-party-pharma-manufacturing-company-in-vijayawada/",
        "destination": "/blog/third-party-pharma-manufacturing-company-in-vijayawada/",
        "permanent": true
      },
      {
        "source": "/manufacturers/leading-third-party-pharma-manufacturing-company-in-vishakhapatnam/",
        "destination": "/blog/third-party-pharma-manufacturing-company-in-vishakhapatnam/",
        "permanent": true
      },
      {
        "source": "/manufacturers/leading-third-party-pharmaceutical-company-in-goa/",
        "destination": "/blog/third-party-pharma-manufacturing-company-in-goa/",
        "permanent": true
      },
      {
        "source": "/manufacturers/leading-third-party-pharma-manufacturing-company/",
        "destination": "/blog/third-party-pharma-manufacturing-company-in-allahabad/",
        "permanent": true
      },
      {
        "source": "/manufacturers/leading-third-party-pharma-manufacturing-company-in-himachal-pradesh/",
        "destination": "/blog/third-party-pharma-manufacturing-company-in-himachal-pradesh/",
        "permanent": true
      },
      {
        "source": "/manufacturers/leading-third-party-pharma-manufacturing-company-in-mangalore/",
        "destination": "/blog/third-party-pharma-manufacturing-company-in-mangalore/",
        "permanent": true
      },
      {
        "source": "/manufacturers/leading-third-party-pharma-manufacturing-company-in-moradabad/",
        "destination": "/blog/third-party-pharma-manufacturing-company-in-moradabad/",
        "permanent": true
      },
      {
        "source": "/manufacturers/leading-third-party-pharma-manufacturing-company-in-nashik/",
        "destination": "/blog/third-party-pharma-manufacturing-company-in-nashik/",
        "permanent": true
      },
      {
        "source": "/manufacturers/leading-third-party-pharma-manufacturing-company-in-sikkim/",
        "destination": "/blog/third-party-pharma-manufacturing-company-in-sikkim/",
        "permanent": true
      },
      {
        "source": "/manufacturers/list-of-cosmetic-manufacturers-in-india/",
        "destination": "/blog/top-cosmetic-manufacturers-in-india/",
        "permanent": true
      },
      {
        "source": "/manufacturers/list-of-nutraceutical-companies-in-gujarat/",
        "destination": "/blog/top-nutraceutical-companies-in-gujarat/",
        "permanent": true
      },
      {
        "source": "/manufacturers/list-of-nutraceutical-companies-in-mumbai/",
        "destination": "/blog/nutraceutical-companies-in-mumbai/",
        "permanent": true
      },
      {
        "source": "/manufacturers/list-of-nutraceutical-formulation-companies-in-tamil-nadu/",
        "destination": "/blog/nutraceutical-formulation-companies-in-tamil-nadu/",
        "permanent": true
      },
      {
        "source": "/manufacturers/list-of-nutraceutical-manufacturers-in-ahemdabad/",
        "destination": "/blog/nutraceutical-manufacturers-in-ahemdabad/",
        "permanent": true
      },
      {
        "source": "/manufacturers/list-of-nutraceutical-manufacturers-in-india/",
        "destination": "/blog/top-nutraceutical-manufacturers-in-india/",
        "permanent": true
      },
      {
        "source": "/manufacturers/list-of-third-party-manufacturers-in-jodhpur/",
        "destination": "/blog/third-party-pharma-manufacturing-company-in-jodhpur/",
        "permanent": true
      },
      {
        "source": "/manufacturers/list-of-third-party-manufacturers-in-udaipur/",
        "destination": "/blog/third-party-pharma-manufacturing-company-in-udaipur/",
        "permanent": true
      },
      {
        "source": "/manufacturers/list-of-third-party-manufacturing-companies-in-warangal/",
        "destination": "/blog/third-party-manufacturing-company-in-warangal/",
        "permanent": true
      },
      {
        "source": "/manufacturers/list-of-top-20-pharmaceutical-companies-in-india-2022/",
        "destination": "/blog/top-pharma-manufacturing-companies-in-india/",
        "permanent": true
      },
      {
        "source": "/manufacturers/manufacturers-of-medicines-in-india/",
        "destination": "/blog/top-10-medicine-manufacturers-in-india/",
        "permanent": true
      },
      {
        "source": "/manufacturers/manufacturing-companies-in-bhind/",
        "destination": "/blog/third-party-manufacturing-company-in-bhind/",
        "permanent": true
      },
      {
        "source": "/manufacturers/manufacturing-companies-in-durgapur/",
        "destination": "/blog/third-party-manufacturing-company-in-durgapur/",
        "permanent": true
      },
      {
        "source": "/manufacturers/manufacturing-companies-in-gangtok/",
        "destination": "/blog/third-party-manufacturing-company-in-gangtok/",
        "permanent": true
      },
      {
        "source": "/manufacturers/manufacturing-companies-in-panaji/",
        "destination": "/blog/third-party-manufacturing-company-in-panaji/",
        "permanent": true
      },
      {
        "source": "/manufacturers/manufacturing-companies-in-sangrur/",
        "destination": "/blog/third-party-manufacturing-company-in-sangrur/",
        "permanent": true
      },
      {
        "source": "/manufacturers/manufacturing-companies-in-siliguri/",
        "destination": "/blog/third-party-manufacturing-company-in-siliguri/",
        "permanent": true
      },
      {
        "source": "/manufacturers/medicine-manufacturer-in-uttarakhand/",
        "destination": "/blog/third-party-pharma-manufacturing-company-in-uttarakhand/",
        "permanent": true
      },
      {
        "source": "/manufacturers/medicine-manufacturers-in-ambala/",
        "destination": "/blog/third-party-pharma-manufacturing-company-in-ambala/",
        "permanent": true
      },
      {
        "source": "/manufacturers/medicine-manufacturers-in-bhind/",
        "destination": "/blog/manufacturers/medicine-manufacturers-in-bhind/",
        "permanent": true
      },
      {
        "source": "/manufacturers/medicine-manufacturers-in-gwalior/",
        "destination": "/blog/third-party-pharma-manufacturing-company-in-gwalior/",
        "permanent": true
      },
      {
        "source": "/manufacturers/medicine-manufacturers-in-india/",
        "destination": "/blog/top-10-medicine-manufacturers-in-india/",
        "permanent": true
      },
      {
        "source": "/manufacturers/medicine-manufacturing-companies-in-bhubaneswar/",
        "destination": "/blog/third-party-pharma-manufacturing-company-in-bhubaneswar/",
        "permanent": true
      },
      {
        "source": "/manufacturers/medicine-manufacturing-companies-in-kanpur/",
        "destination": "/blog/third-party-pharma-manufacturing-company-in-kanpur/",
        "permanent": true
      },
      {
        "source": "/manufacturers/medicine-manufacturing-companies-in-kochi/",
        "destination": "/blog/third-party-pharma-manufacturing-company-in-kochi/",
        "permanent": true
      },
      {
        "source": "/manufacturers/medicine-manufacturing-companies-in-panipat/",
        "destination": "/blog/third-party-pharma-manufacturing-company-in-panipat/",
        "permanent": true
      },
      {
        "source": "/manufacturers/medicine-manufacturing-company/",
        "destination": "/blog/top-pharma-manufacturing-companies-in-india/",
        "permanent": true
      },
      {
        "source": "/manufacturers/medicine-manufacturing-company-in-faridabad/",
        "destination": "/blog/third-party-pharma-manufacturing-company-in-faridabad/",
        "permanent": true
      },
      {
        "source": "/manufacturers/medicine-third-party-manufacturers-in-chhattisgarh/",
        "destination": "/blog/third-party-pharma-manufacturing-company-in-chhattisgarh/",
        "permanent": true
      },
      {
        "source": "/manufacturers/molnupiravir-supplier-and-manufacturer-in-india/",
        "destination": "/blog/molnupiravir-capsules-manufacturers-in-india/",
        "permanent": true
      },
      {
        "source": "/manufacturers/multivitamin-syrup-manufacturers-in-india/",
        "destination": "/blog/multivitamin-manufacturers-in-india/",
        "permanent": true
      },
      {
        "source": "/manufacturers/multivitamin-tablets-manufacturers-in-india/",
        "destination": "/blog/multivitamin-tablets-manufacturers-in-india/",
        "permanent": true
      },
      {
        "source": "/manufacturers/necessary-investment-for-third-party-manufacturing-company/",
        "destination": "/blog/how-much-investment-needed-to-start-third-party-manufacturing-company/",
        "permanent": true
      },
      {
        "source": "/manufacturers/neuropsychiatry-manufacturer-in-india/",
        "destination": "/blog/psychiatric-products-manufacturers-in-india/",
        "permanent": true
      },
      {
        "source": "/manufacturers/neuropsychiatry-pharma-manufacturer/",
        "destination": "/blog/psychiatric-products-manufacturers-in-india/",
        "permanent": true
      },
      {
        "source": "/manufacturers/nutraceutical-companies-in-gujarat/",
        "destination": "/blog/top-nutraceutical-companies-in-gujarat/",
        "permanent": true
      },
      {
        "source": "/manufacturers/nutraceutical-formulation-business-in-tamil-nadu/",
        "destination": "/blog/nutraceutical-formulation-companies-in-tamil-nadu/",
        "permanent": true
      },
      {
        "source": "/manufacturers/nutraceutical-formulation-company-in-tamil-nadu/",
        "destination": "/blog/nutraceutical-formulation-companies-in-tamil-nadu/",
        "permanent": true
      },
      {
        "source": "/manufacturers/nutraceutical-formulation-firm-in-tamil-nadu/",
        "destination": "/blog/nutraceutical-formulation-companies-in-tamil-nadu/",
        "permanent": true
      },
      {
        "source": "/manufacturers/nutraceutical-manufacturers-in-india/",
        "destination": "/blog/top-nutraceutical-manufacturers-in-india/",
        "permanent": true
      },
      {
        "source": "/manufacturers/nutraceutical-manufacturing-companies-in-ahemdabad/",
        "destination": "/blog/nutraceutical-manufacturers-in-ahemdabad/",
        "permanent": true
      },
      {
        "source": "/manufacturers/nutraceutical-manufacturing-companies-in-bangalore/",
        "destination": "/blog/nutraceutical-companies-in-bangalore/",
        "permanent": true
      },
      {
        "source": "/manufacturers/nutraceutical-manufacturing-companies-in-hyderabad/",
        "destination": "/blog/nutraceutical-companies-in-hyderabad/",
        "permanent": true
      },
      {
        "source": "/manufacturers/nutraceutical-manufacturing-companies-in-india/",
        "destination": "/blog/top-nutraceutical-manufacturers-in-india/",
        "permanent": true
      },
      {
        "source": "/manufacturers/nutraceutical-medicine-companies-in-mumbai/",
        "destination": "/blog/nutraceutical-companies-in-mumbai/",
        "permanent": true
      },
      {
        "source": "/manufacturers/nutraceutical-medicine-manufacturers-in-ahemdabad/",
        "destination": "/blog/nutraceutical-manufacturers-in-ahemdabad/",
        "permanent": true
      },
      {
        "source": "/manufacturers/nutraceutical-product-companies-in-bangalore/",
        "destination": "/blog/nutraceutical-companies-in-bangalore/",
        "permanent": true
      },
      {
        "source": "/manufacturers/nutraceutical-product-companies-in-hyderabad/",
        "destination": "/blog/nutraceutical-companies-in-hyderabad/",
        "permanent": true
      },
      {
        "source": "/manufacturers/nutraceutical-product-manufacturers-in-ahemdabad/",
        "destination": "/blog/nutraceutical-manufacturers-in-ahemdabad/",
        "permanent": true
      },
      {
        "source": "/manufacturers/nutraceutical-products-manufacturing-companies-in-bangalore/",
        "destination": "/blog/nutraceutical-companies-in-bangalore/",
        "permanent": true
      },
      {
        "source": "/manufacturers/nutraceutical-products-manufacturing-company-in-hyderabad/",
        "destination": "/blog/nutraceutical-companies-in-hyderabad/",
        "permanent": true
      },
      {
        "source": "/manufacturers/ors-brands-in-india/",
        "destination": "/blog/ors-manufacturers-in-india/",
        "permanent": true
      },
      {
        "source": "/manufacturers/ors-manufacturing-companies-in-india/",
        "destination": "/blog/ors-manufacturers-in-india/",
        "permanent": true
      },
      {
        "source": "/manufacturers/ors-sachets-manufacturers-in-india/",
        "destination": "/blog/ors-manufacturers-in-india/",
        "permanent": true
      },
      {
        "source": "/manufacturers/otc-products-manufacturer-india/",
        "destination": "/blog/top-otc-product-manufacturers-in-india/",
        "permanent": true
      },
      {
        "source": "/manufacturers/pediatric-medicine-manufacturer-in-india/",
        "destination": "/blog/top-pediatric-medicine-manufacturers-in-india/",
        "permanent": true
      },
      {
        "source": "/manufacturers/pharma-contract-manufacturers/",
        "destination": "/blog/top-10-pharma-contract-manufacturing-companies-in-india/",
        "permanent": true
      },
      {
        "source": "/manufacturers/pharma-contract-manufacturers-in-india/",
        "destination": "/blog/top-10-pharma-contract-manufacturing-companies-in-india/",
        "permanent": true
      },
      {
        "source": "/manufacturers/pharma-contract-manufacturers-in-new-delhi/",
        "destination": "/blog/pharma-third-party-manufacturers-in-delhi/",
        "permanent": true
      },
      {
        "source": "/manufacturers/pharma-contract-manufacturers-in-ujjain/",
        "destination": "/blog/third-party-manufacturing-company-in-ujjain/",
        "permanent": true
      },
      {
        "source": "/manufacturers/pharma-contract-manufacturing-companies/",
        "destination": "/blog/top-10-pharma-contract-manufacturing-companies-in-india/",
        "permanent": true
      },
      {
        "source": "/manufacturers/pharma-contract-manufacturing-company-in-ludhiana/",
        "destination": "/blog/third-party-pharma-manufacturing-company-ludhiana/",
        "permanent": true
      },
      {
        "source": "/manufacturers/pharma-franchise-companies-in-ranchi/",
        "destination": "/blog/third-party-pharma-manufacturing-company-in-ranchi/",
        "permanent": true
      },
      {
        "source": "/manufacturers/pharma-injection-manufacturer-in-baddi/",
        "destination": "/blog/injection-manufacturers-in-baddi/",
        "permanent": true
      },
      {
        "source": "/manufacturers/pharma-injection-manufacturers-in-chandigarh/",
        "destination": "/blog/injection-manufacturer-in-chandigarh/",
        "permanent": true
      },
      {
        "source": "/manufacturers/pharma-manufacturer-in-uttarakhand/",
        "destination": "/blog/third-party-pharma-manufacturing-company-in-uttarakhand/",
        "permanent": true
      },
      {
        "source": "/manufacturers/pharma-manufacturers-in-bathinda/",
        "destination": "/blog/third-party-pharma-manufacturing-company-in-bathinda/",
        "permanent": true
      },
      {
        "source": "/manufacturers/pharma-manufacturers-in-bhubaneswar/",
        "destination": "/blog/third-party-pharma-manufacturing-company-in-bhubaneswar/",
        "permanent": true
      },
      {
        "source": "/manufacturers/pharma-manufacturers-in-bihar/",
        "destination": "/blog/third-party-pharma-manufacturing-company-in-bihar/",
        "permanent": true
      },
      {
        "source": "/manufacturers/pharma-manufacturers-in-chandigarh/",
        "destination": "/blog/third-party-pharma-manufacturing-company-in-chandigarh/",
        "permanent": true
      },
      {
        "source": "/manufacturers/pharma-manufacturers-in-faridabad/",
        "destination": "/blog/third-party-pharma-manufacturing-company-in-faridabad/",
        "permanent": true
      },
      {
        "source": "/manufacturers/pharma-manufacturers-in-india/",
        "destination": "/blog/top-pharma-manufacturing-companies-in-india/",
        "permanent": true
      },
      {
        "source": "/manufacturers/pharma-manufacturers-in-kanpur/",
        "destination": "/blog/third-party-pharma-manufacturing-company-in-kanpur/",
        "permanent": true
      },
      {
        "source": "/manufacturers/pharma-manufacturers-in-lucknow/",
        "destination": "/blog/third-party-pharma-manufacturing-company-in-lucknow/",
        "permanent": true
      },
      {
        "source": "/manufacturers/pharma-manufacturers-in-madhya-pradesh/",
        "destination": "/blog/third-party-pharma-manufacturing-company-in-madhya-pradesh/",
        "permanent": true
      },
      {
        "source": "/manufacturers/pharma-manufacturers-in-madurai/",
        "destination": "/blog/third-party-manufacturing-company-in-madurai/",
        "permanent": true
      },
      {
        "source": "/manufacturers/pharma-manufacturers-in-panipat/",
        "destination": "/blog/third-party-pharma-manufacturing-company-in-panipat/",
        "permanent": true
      },
      {
        "source": "/manufacturers/pharma-manufacturers-in-pondicherry/",
        "destination": "/blog/third-party-pharma-manufacturing-company-in-pondicherry/",
        "permanent": true
      },
      {
        "source": "/manufacturers/pharma-manufacturers-in-pune/",
        "destination": "/blog/pharma-third-party-manufacturers-in-pune/",
        "permanent": true
      },
      {
        "source": "/manufacturers/pharma-manufacturers-in-punjab/",
        "destination": "/blog/third-party-pharma-manufacturing-company-in-punjab/",
        "permanent": true
      },
      {
        "source": "/manufacturers/pharma-manufacturers-in-rajasthan/",
        "destination": "/blog/third-party-pharma-manufacturing-company-in-rajasthan/",
        "permanent": true
      },
      {
        "source": "/manufacturers/pharma-manufacturers-in-sonipat/",
        "destination": "/blog/third-party-pharma-manufacturing-company-in-sonipat/",
        "permanent": true
      },
      {
        "source": "/manufacturers/pharma-manufacturers-in-vadodara/",
        "destination": "/blog/third-party-pharma-manufacturing-company-in-vadodara/",
        "permanent": true
      },
      {
        "source": "/manufacturers/pharma-manufacturers-in-west-bengal/",
        "destination": "/blog/third-party-pharma-manufacturing-company-in-west-bengal/",
        "permanent": true
      },
      {
        "source": "/manufacturers/pharma-manufacturing-comany-in-noida/",
        "destination": "/blog/third-party-pharma-manufacturing-company-in-noida/",
        "permanent": true
      },
      {
        "source": "/manufacturers/pharma-manufacturing-companies-in-aurangabad/",
        "destination": "/blog/third-party-pharma-manufacturing-company-in-aurangabad/",
        "permanent": true
      },
      {
        "source": "/manufacturers/pharma-manufacturing-companies-in-coimbatore/",
        "destination": "/blog/third-party-pharma-manufacturing-company-in-coimbatore/",
        "permanent": true
      },
      {
        "source": "/manufacturers/pharma-manufacturing-companies-in-daman-diu/",
        "destination": "/blog/third-party-pharma-manufacturing-company-in-daman-diu/",
        "permanent": true
      },
      {
        "source": "/manufacturers/pharma-manufacturing-companies-in-firozpur/",
        "destination": "/blog/third-party-pharma-manufacturing-company-in-firozpur/",
        "permanent": true
      },
      {
        "source": "/manufacturers/pharma-manufacturing-companies-in-india/",
        "destination": "/blog/third-party-pharma-manufacturing-company-in-yamuna-nagar/",
        "permanent": true
      },
      {
        "source": "/manufacturers/pharma-manufacturing-companies-in-jammu-and-kashmir/",
        "destination": "/blog/third-party-pharma-manufacturing-company-in-jammu-kashmir/",
        "permanent": true
      },
      {
        "source": "/manufacturers/pharma-manufacturing-companies-in-kochi/",
        "destination": "/blog/third-party-pharma-manufacturing-company-in-kochi/",
        "permanent": true
      },
      {
        "source": "/manufacturers/pharma-manufacturing-companies-in-leh-ladakh/",
        "destination": "/blog/third-party-pharma-manufacturing-company-in-leh-ladakh/",
        "permanent": true
      },
      {
        "source": "/manufacturers/pharma-manufacturing-companies-in-muzaffarnagar/",
        "destination": "/blog/third-party-pharma-manufacturing-company-in-muzaffarnagar/",
        "permanent": true
      },
      {
        "source": "/manufacturers/pharma-manufacturing-companies-in-patiala/",
        "destination": "/blog/third-party-pharma-manufacturing-company-in-patiala/",
        "permanent": true
      },
      {
        "source": "/manufacturers/pharma-manufacturing-companies-in-saharanpur/",
        "destination": "/blog/third-party-pharma-manufacturing-company-in-saharanpur/",
        "permanent": true
      },
      {
        "source": "/manufacturers/pharma-manufacturing-companies-in-thrissur/",
        "destination": "/blog/third-party-manufacturing-company-in-thrissur/",
        "permanent": true
      },
      {
        "source": "/manufacturers/pharma-manufacturing-companies-in-uttar-pradesh/",
        "destination": "/blog/third-party-pharma-manufacturing-company-in-uttar-pradesh/",
        "permanent": true
      },
      {
        "source": "/manufacturers/pharma-manufacturing-companies-in-west-bengal/",
        "destination": "/blog/third-party-pharma-manufacturing-company-in-west-bengal/",
        "permanent": true
      },
      {
        "source": "/manufacturers/pharma-manufacturing-companies-jharkhand/",
        "destination": "/blog/third-party-pharma-manufacturing-company-in-jharkhand/",
        "permanent": true
      },
      {
        "source": "/manufacturers/pharma-manufacturing-company-in-amritsar/",
        "destination": "/blog/third-party-pharma-manufacturing-company-in-amritsar/",
        "permanent": true
      },
      {
        "source": "/manufacturers/pharma-manufacturing-company-in-haryana/",
        "destination": "/blog/third-party-pharma-manufacturing-company-in-haryana/",
        "permanent": true
      },
      {
        "source": "/manufacturers/pharma-manufacturing-company-in-ludhiana/",
        "destination": "/blog/third-party-pharma-manufacturing-company-ludhiana/",
        "permanent": true
      },
      {
        "source": "/manufacturers/pharma-manufacturing-company-in-maharashtra/",
        "destination": "/blog/pharma-third-party-manufacturers-in-maharashtra/",
        "permanent": true
      },
      {
        "source": "/manufacturers/pharma-manufacturing-company-in-punjab/",
        "destination": "/blog/third-party-pharma-manufacturing-company-in-punjab/",
        "permanent": true
      },
      {
        "source": "/manufacturers/pharma-manufacturing-company-in-shimoga/",
        "destination": "/blog/third-party-pharma-manufacturing-company-in-shimoga/",
        "permanent": true
      },
      {
        "source": "/manufacturers/pharma-manufacturing-in-amritsar/",
        "destination": "/blog/third-party-pharma-manufacturing-company-in-amritsar/",
        "permanent": true
      },
      {
        "source": "/manufacturers/pharma-manufacturing-services-in-bhubaneswar/",
        "destination": "/blog/third-party-pharma-manufacturing-company-in-bhubaneswar/",
        "permanent": true
      },
      {
        "source": "/manufacturers/pharma-medicine-manufacturers-in-ahmedabad/",
        "destination": "/blog/third-party-pharma-manufacturing-company-in-ahmedabad/",
        "permanent": true
      },
      {
        "source": "/manufacturers/pharma-medicine-manufacturers-in-noida/",
        "destination": "/blog/third-party-pharma-manufacturing-company-in-noida/",
        "permanent": true
      },
      {
        "source": "/manufacturers/pharma-medicine-third-party-company-in-ahmedabad/",
        "destination": "/blog/third-party-pharma-manufacturing-company-in-ahmedabad/",
        "permanent": true
      },
      {
        "source": "/manufacturers/pharma-medicine-third-party-company-in-haridwar/",
        "destination": "/blog/third-party-pharma-manufacturing-company-in-haridwar/",
        "permanent": true
      },
      {
        "source": "/manufacturers/pharma-medicines-for-third-party-manufacturing-services-in-ahmedabad/",
        "destination": "/blog/third-party-pharma-manufacturing-company-in-ahmedabad/",
        "permanent": true
      },
      {
        "source": "/manufacturers/pharma-medicines-for-third-party-manufacturing-services-in-haridwar/",
        "destination": "/blog/third-party-pharma-manufacturing-company-in-haridwar/",
        "permanent": true
      },
      {
        "source": "/manufacturers/pharma-medicines-manufacturing-company-in-pune/",
        "destination": "/blog/pharma-third-party-manufacturers-in-pune/",
        "permanent": true
      },
      {
        "source": "/manufacturers/pharma-pcd-franchise-company-in-burhanpur/",
        "destination": "/blog/third-party-manufacturing-company-in-burhanpur/",
        "permanent": true
      },
      {
        "source": "/manufacturers/pharma-pcd-franchise-company-in-sangrur/",
        "destination": "/blog/third-party-manufacturing-company-in-sangrur/",
        "permanent": true
      },
      {
        "source": "/manufacturers/pharma-product-manufacturing-in-pune/",
        "destination": "/blog/pharma-third-party-manufacturers-in-pune/",
        "permanent": true
      },
      {
        "source": "/manufacturers/pharma-products-manufacturing-companies-in-pondicherry/",
        "destination": "/blog/third-party-pharma-manufacturing-company-in-pondicherry/",
        "permanent": true
      },
      {
        "source": "/manufacturers/pharma-products-manufacturing-in-chandigarh/",
        "destination": "/blog/third-party-pharma-manufacturing-company-in-chandigarh/",
        "permanent": true
      },
      {
        "source": "/manufacturers/pharma-third-party-company-in-karnataka/",
        "destination": "/blog/pharma-third-party-manufacturers-in-karnataka/",
        "permanent": true
      },
      {
        "source": "/manufacturers/pharma-third-party-company-in-tamil-nadu/",
        "destination": "/blog/third-party-pharma-manufacturing-company-in-tamil-nadu/",
        "permanent": true
      },
      {
        "source": "/manufacturers/pharma-third-party-drug-manufacturers-in-gujarat/",
        "destination": "/blog/pharma-third-party-manufacturers-in-gujarat/",
        "permanent": true
      },
      {
        "source": "/manufacturers/pharma-third-party-manufacturer-in-bhind/",
        "destination": "/blog/third-party-manufacturing-company-in-bhind/",
        "permanent": true
      },
      {
        "source": "/manufacturers/pharma-third-party-manufacturers/",
        "destination": "/blog/top-10-third-party-pharma-manufacturing-companies-in-india/",
        "permanent": true
      },
      {
        "source": "/manufacturers/pharma-third-party-manufacturers-in-bareilly/",
        "destination": "/blog/third-party-manufacturing-company-in-bareilly/",
        "permanent": true
      },
      {
        "source": "/manufacturers/pharma-third-party-manufacturers-in-ghaziabad/",
        "destination": "/blog/third-party-pharma-manufacturing-company-in-ghaziabad/",
        "permanent": true
      },
      {
        "source": "/manufacturers/pharma-third-party-manufacturers-in-gorakhpur/",
        "destination": "/blog/third-party-manufacturing-company-in-gorakhpur/",
        "permanent": true
      },
      {
        "source": "/manufacturers/pharma-third-party-manufacturers-in-haridwar/",
        "destination": "/blog/third-party-pharma-manufacturing-company-in-haridwar/",
        "permanent": true
      },
      {
        "source": "/manufacturers/pharma-third-party-manufacturers-in-india/",
        "destination": "/blog/how-to-start-third-party-manufacturing-company-in-india/",
        "permanent": true
      },
      {
        "source": "/manufacturers/pharma-third-party-manufacturers-in-meghalaya/",
        "destination": "/blog/third-party-pharma-manufacturing-company-in-meghalaya/",
        "permanent": true
      },
      {
        "source": "/manufacturers/pharma-third-party-manufacturers-in-mizoram/",
        "destination": "/blog/third-party-pharma-manufacturing-company-in-mizoram/",
        "permanent": true
      },
      {
        "source": "/manufacturers/pharma-third-party-manufacturers-in-moga/",
        "destination": "/blog/third-party-manufacturing-company-in-moga/",
        "permanent": true
      },
      {
        "source": "/manufacturers/pharma-third-party-manufacturers-in-mumbai/",
        "destination": "/blog/pharma-third-party-manufacturers-in-mumbai/",
        "permanent": true
      },
      {
        "source": "/manufacturers/pharma-third-party-manufacturers-in-nagaland/",
        "destination": "/blog/third-party-pharma-manufacturing-company-in-nagaland/",
        "permanent": true
      },
      {
        "source": "/manufacturers/pharma-third-party-manufacturers-in-tamil-nadu/",
        "destination": "/blog/third-party-pharma-manufacturing-company-in-tamil-nadu/",
        "permanent": true
      },
      {
        "source": "/manufacturers/pharma-third-party-manufacturers-in-tarn-taran/",
        "destination": "/blog/third-party-manufacturing-company-in-tarn-taran/",
        "permanent": true
      },
      {
        "source": "/manufacturers/pharma-third-party-manufacturing/",
        "destination": "/blog/top-10-third-party-pharma-manufacturing-companies-in-india/",
        "permanent": true
      },
      {
        "source": "/manufacturers/pharma-third-party-manufacturing-business-in-india/",
        "destination": "/blog/how-much-investment-needed-to-start-third-party-manufacturing-company/",
        "permanent": true
      },
      {
        "source": "/manufacturers/pharma-third-party-manufacturing-company-in-chennai/",
        "destination": "/blog/pharma-third-party-manufacturers-in-chennai/",
        "permanent": true
      },
      {
        "source": "/manufacturers/pharma-third-party-manufacturing-company-in-delhi/",
        "destination": "/blog/pharma-third-party-manufacturers-in-delhi/",
        "permanent": true
      },
      {
        "source": "/manufacturers/pharma-third-party-manufacturing-company-in-nizamabad/",
        "destination": "/blog/third-party-manufacturing-company-in-nizamabad/",
        "permanent": true
      },
      {
        "source": "/manufacturers/pharma-third-party-manufacturing-company-in-srinagar/",
        "destination": "/blog/third-party-manufacturing-company-in-srinagar/",
        "permanent": true
      },
      {
        "source": "/manufacturers/pharma-third-party-manufacturing-company-in-tamil-nadu/",
        "destination": "/blog/third-party-pharma-manufacturing-company-in-tamil-nadu/",
        "permanent": true
      },
      {
        "source": "/manufacturers/pharma-third-party-manufacturing-firm-in-thane/",
        "destination": "/blog/third-party-manufacturing-company-in-thane/",
        "permanent": true
      },
      {
        "source": "/manufacturers/pharma-third-party-manufacturing-for-maharashtra/",
        "destination": "/blog/pharma-third-party-manufacturers-in-maharashtra/",
        "permanent": true
      },
      {
        "source": "/manufacturers/pharma-third-party-manufacturing-in-alappuzha/",
        "destination": "/blog/third-party-pharma-manufacturing-company-in-alappuzha/",
        "permanent": true
      },
      {
        "source": "/manufacturers/pharma-third-party-manufacturing-in-faridabad/",
        "destination": "/blog/third-party-pharma-manufacturing-company-in-faridabad/",
        "permanent": true
      },
      {
        "source": "/manufacturers/pharma-third-party-manufacturing-in-gangtok/",
        "destination": "/blog/third-party-manufacturing-company-in-gangtok/",
        "permanent": true
      },
      {
        "source": "/manufacturers/pharma-third-party-manufacturing-in-gaya/",
        "destination": "/blog/third-party-manufacturing-company-in-gaya/",
        "permanent": true
      },
      {
        "source": "/manufacturers/pharma-third-party-manufacturing-in-india/",
        "destination": "/blog/who-gmp-certified-third-party-pharma-manufacturer/",
        "permanent": true
      },
      {
        "source": "/manufacturers/pharma-third-party-manufacturing-in-jodhpur/",
        "destination": "/blog/third-party-pharma-manufacturing-company-in-jodhpur/",
        "permanent": true
      },
      {
        "source": "/manufacturers/pharma-third-party-manufacturing-in-maharashtra/",
        "destination": "/blog/pharma-third-party-manufacturers-in-maharashtra/",
        "permanent": true
      },
      {
        "source": "/manufacturers/pharma-third-party-manufacturing-opportunities-in-nagaland/",
        "destination": "/blog/third-party-pharma-manufacturing-company-in-nagaland/",
        "permanent": true
      },
      {
        "source": "/manufacturers/pharma-third-party-manufacturing-services-in-ghaziabad/",
        "destination": "/blog/third-party-pharma-manufacturing-company-in-ghaziabad/",
        "permanent": true
      },
      {
        "source": "/manufacturers/pharma-third-party-manufacturing-services-in-nagaland/",
        "destination": "/blog/third-party-pharma-manufacturing-company-in-nagaland/",
        "permanent": true
      },
      {
        "source": "/manufacturers/pharma-third-party-manufacturing-services-in-yamuna-nagar/",
        "destination": "/blog/third-party-pharma-manufacturing-company-in-yamuna-nagar/",
        "permanent": true
      },
      {
        "source": "/manufacturers/pharma-third-party-medicine-manufacturers-in-pune/",
        "destination": "/blog/pharma-third-party-manufacturers-in-pune/",
        "permanent": true
      },
      {
        "source": "/manufacturers/pharma-third-party-products-in-delhi/",
        "destination": "/blog/pharma-third-party-manufacturers-in-delhi/",
        "permanent": true
      },
      {
        "source": "/manufacturers/pharma-third-party-wholesaler-in-uttarakhand/",
        "destination": "/blog/third-party-pharma-manufacturing-company-in-uttarakhand/",
        "permanent": true
      },
      {
        "source": "/manufacturers/pharma-third-party-wholesalers-in-delhi/",
        "destination": "/blog/pharma-third-party-manufacturers-in-delhi/",
        "permanent": true
      },
      {
        "source": "/manufacturers/pharmaceutical-companies-in-ambala/",
        "destination": "/blog/third-party-pharma-manufacturing-company-in-ambala/",
        "permanent": true
      },
      {
        "source": "/manufacturers/pharmaceutical-companies-in-andaman-nicobar/",
        "destination": "/blog/third-party-pharma-manufacturing-company-in-andaman-nicobar/",
        "permanent": true
      },
      {
        "source": "/manufacturers/pharmaceutical-companies-in-arunachal-pradesh/",
        "destination": "/blog/third-party-pharma-manufacturing-company-in-arunachal-pradesh/",
        "permanent": true
      },
      {
        "source": "/manufacturers/pharmaceutical-companies-in-aurangabad/",
        "destination": "/blog/third-party-pharma-manufacturing-company-in-aurangabad/",
        "permanent": true
      },
      {
        "source": "/manufacturers/pharmaceutical-companies-in-bathinda/",
        "destination": "/blog/third-party-pharma-manufacturing-company-in-bathinda/",
        "permanent": true
      },
      {
        "source": "/manufacturers/pharmaceutical-companies-in-companies/",
        "destination": "/blog/third-party-pharma-manufacturing-company-in-coimbatore/",
        "permanent": true
      },
      {
        "source": "/manufacturers/pharmaceutical-companies-in-firozabad/",
        "destination": "/blog/third-party-pharma-manufacturing-company-in-firozabad/",
        "permanent": true
      },
      {
        "source": "/manufacturers/pharmaceutical-companies-in-ghaziabad/",
        "destination": "/blog/third-party-pharma-manufacturing-company-in-ghaziabad/",
        "permanent": true
      },
      {
        "source": "/manufacturers/pharmaceutical-companies-in-gwalior/",
        "destination": "/blog/third-party-pharma-manufacturing-company-in-gwalior/",
        "permanent": true
      },
      {
        "source": "/manufacturers/pharmaceutical-companies-in-jammu-and-kashmir/",
        "destination": "/blog/third-party-pharma-manufacturing-company-in-jammu-kashmir/",
        "permanent": true
      },
      {
        "source": "/manufacturers/pharmaceutical-companies-in-jharkhand/",
        "destination": "/blog/third-party-pharma-manufacturing-company-in-jharkhand/",
        "permanent": true
      },
      {
        "source": "/manufacturers/pharmaceutical-companies-in-kochi/",
        "destination": "/blog/third-party-pharma-manufacturing-company-in-kochi/",
        "permanent": true
      },
      {
        "source": "/manufacturers/pharmaceutical-companies-in-lucknow/",
        "destination": "/blog/third-party-pharma-manufacturing-company-in-lucknow/",
        "permanent": true
      },
      {
        "source": "/manufacturers/pharmaceutical-companies-in-meghalaya/",
        "destination": "/blog/third-party-pharma-manufacturing-company-in-meghalaya/",
        "permanent": true
      },
      {
        "source": "/manufacturers/pharmaceutical-companies-in-patiala/",
        "destination": "/blog/third-party-pharma-manufacturing-company-in-patiala/",
        "permanent": true
      },
      {
        "source": "/manufacturers/pharmaceutical-companies-in-rajasthan/",
        "destination": "/blog/third-party-pharma-manufacturing-company-in-rajasthan/",
        "permanent": true
      },
      {
        "source": "/manufacturers/pharmaceutical-companies-in-ranchi/",
        "destination": "/blog/third-party-pharma-manufacturing-company-in-ranchi/",
        "permanent": true
      },
      {
        "source": "/manufacturers/pharmaceutical-companies-in-saharanpur/",
        "destination": "/blog/third-party-pharma-manufacturing-company-in-saharanpur/",
        "permanent": true
      },
      {
        "source": "/manufacturers/pharmaceutical-companies-in-sonipat/",
        "destination": "/blog/third-party-pharma-manufacturing-company-in-sonipat/",
        "permanent": true
      },
      {
        "source": "/manufacturers/pharmaceutical-companies-in-uttar-pradesh/",
        "destination": "/blog/third-party-pharma-manufacturing-company-in-uttar-pradesh/",
        "permanent": true
      },
      {
        "source": "/manufacturers/pharmaceutical-companies-in-vadodara/",
        "destination": "/blog/third-party-pharma-manufacturing-company-in-vadodara/",
        "permanent": true
      },
      {
        "source": "/manufacturers/pharmaceutical-company-in-amritsar/",
        "destination": "/blog/third-party-pharma-manufacturing-company-in-amritsar/",
        "permanent": true
      },
      {
        "source": "/manufacturers/pharmaceutical-company-in-haryana/",
        "destination": "/blog/third-party-pharma-manufacturing-company-in-haryana/",
        "permanent": true
      },
      {
        "source": "/manufacturers/pharmaceutical-company-in-ludhiana/",
        "destination": "/blog/third-party-pharma-manufacturing-company-ludhiana/",
        "permanent": true
      },
      {
        "source": "/manufacturers/pharmaceutical-company-in-punjab/",
        "destination": "/blog/third-party-pharma-manufacturing-company-in-punjab/",
        "permanent": true
      },
      {
        "source": "/manufacturers/pharmaceutical-company-in-shimoga/",
        "destination": "/blog/third-party-pharma-manufacturing-company-in-shimoga/",
        "permanent": true
      },
      {
        "source": "/manufacturers/pharmaceutical-contract-manufacturing-services-in-burhanpur/",
        "destination": "/blog/third-party-manufacturing-company-in-burhanpur/",
        "permanent": true
      },
      {
        "source": "/manufacturers/pharmaceutical-injectables-manufacturers-in-gujarat/",
        "destination": "/blog/injection-manufacturer-in-gujarat/",
        "permanent": true
      },
      {
        "source": "/manufacturers/pharmaceutical-injection-manufacturer-in-chandigarh/",
        "destination": "/blog/injection-manufacturer-in-chandigarh/",
        "permanent": true
      },
      {
        "source": "/manufacturers/pharmaceutical-manufacturers-in-muzaffarnagar/",
        "destination": "/blog/third-party-pharma-manufacturing-company-in-muzaffarnagar/",
        "permanent": true
      },
      {
        "source": "/manufacturers/pharmaceutical-manufacturers-in-uttar-pradesh/",
        "destination": "/blog/third-party-pharma-manufacturing-company-in-uttar-pradesh/",
        "permanent": true
      },
      {
        "source": "/manufacturers/pharmaceutical-manufacturing-companies-in-siliguri/",
        "destination": "/blog/third-party-manufacturing-company-in-siliguri/",
        "permanent": true
      },
      {
        "source": "/manufacturers/pharmaceutical-manufacturing-company-in-tamil-nadu/",
        "destination": "/blog/third-party-pharma-manufacturing-company-in-tamil-nadu/",
        "permanent": true
      },
      {
        "source": "/manufacturers/pharmaceutical-third-party-company-in-noida/",
        "destination": "/blog/third-party-pharma-manufacturing-company-in-noida/",
        "permanent": true
      },
      {
        "source": "/manufacturers/pharmaceutical-third-party-in-chennai/",
        "destination": "/blog/pharma-third-party-manufacturers-in-chennai/",
        "permanent": true
      },
      {
        "source": "/manufacturers/pharmaceutical-third-party-manufacturer-in-kerala/",
        "destination": "/blog/pharma-third-party-manufacturers-in-kerala/",
        "permanent": true
      },
      {
        "source": "/manufacturers/pharmaceutical-third-party-manufacturers-in-chhattisgarh/",
        "destination": "/blog/third-party-pharma-manufacturing-company-in-chhattisgarh/",
        "permanent": true
      },
      {
        "source": "/manufacturers/pharmaceutical-third-party-manufacturers-in-panaji/",
        "destination": "/blog/third-party-manufacturing-company-in-panaji/",
        "permanent": true
      },
      {
        "source": "/manufacturers/pharmaceutical-third-party-manufacturers-in-pune/",
        "destination": "/blog/pharma-third-party-manufacturers-in-pune/",
        "permanent": true
      },
      {
        "source": "/manufacturers/pharmaceutical-third-party-manufacturing-nalagarh/",
        "destination": "/blog/third-party-manufacturing-company-in-nalagarh/",
        "permanent": true
      },
      {
        "source": "/manufacturers/pharmaceutical-third-party-manufacturing-company-in-ahmedabad/",
        "destination": "/blog/third-party-pharma-manufacturing-company-in-ahmedabad/",
        "permanent": true
      },
      {
        "source": "/manufacturers/pharmaceutical-third-party-manufacturing-in-durgapur/",
        "destination": "/blog/third-party-manufacturing-company-in-durgapur/",
        "permanent": true
      },
      {
        "source": "/manufacturers/pharmaceutical-third-party-manufacturing-in-gorakhpur/",
        "destination": "/blog/third-party-manufacturing-company-in-gorakhpur/",
        "permanent": true
      },
      {
        "source": "/manufacturers/pharmaceutical-third-party-manufacturing-in-guntur/",
        "destination": "/blog/third-party-manufacturing-company-in-guntur/",
        "permanent": true
      },
      {
        "source": "/manufacturers/pharmaceutical-third-party-manufacturing-in-haridwar/",
        "destination": "/blog/third-party-pharma-manufacturing-company-in-haridwar/",
        "permanent": true
      },
      {
        "source": "/manufacturers/pharmaceutical-third-party-manufacturing-in-mumbai/",
        "destination": "/blog/pharma-third-party-manufacturers-in-mumbai/",
        "permanent": true
      },
      {
        "source": "/manufacturers/pharmaceutical-third-party-manufacturing-in-odisha/",
        "destination": "/blog/third-party-pharma-manufacturing-company-in-odisha/",
        "permanent": true
      },
      {
        "source": "/manufacturers/pharmaceutical-third-party-manufacturing-in-roorkee/",
        "destination": "/blog/third-party-manufacturing-company-roorkee/",
        "permanent": true
      },
      {
        "source": "/manufacturers/pharmaceutical-third-party-manufacturing-in-sangrur/",
        "destination": "/blog/third-party-manufacturing-company-in-sangrur/",
        "permanent": true
      },
      {
        "source": "/manufacturers/pharmaceutical-third-party-manufacturing-in-varanasi/",
        "destination": "/blog/third-party-manufacturing-company-in-varanasi/",
        "permanent": true
      },
      {
        "source": "/manufacturers/pharmaceutical-third-party-manufacturing-kerala/",
        "destination": "/blog/pharma-third-party-manufacturers-in-kerala/",
        "permanent": true
      },
      {
        "source": "/manufacturers/pharmaceuticals-third-party-manufacturers-in-chandigarh/",
        "destination": "/blog/third-party-pharma-manufacturing-company-in-chandigarh/",
        "permanent": true
      },
      {
        "source": "/manufacturers/pharmaceuticals-third-party-manufacturers-in-maharashtra/",
        "destination": "/blog/pharma-third-party-manufacturers-in-maharashtra/",
        "permanent": true
      },
      {
        "source": "/manufacturers/pharmaceuticals-third-party-manufacturing-company-in-kota/",
        "destination": "/blog/third-party-pharma-manufacturing-company-in-kota/",
        "permanent": true
      },
      {
        "source": "/manufacturers/pharmceuticals-manufacturers-in-uttarakhand/",
        "destination": "/blog/third-party-pharma-manufacturing-company-in-uttarakhand/",
        "permanent": true
      },
      {
        "source": "/manufacturers/private-label-medicine-manufacturers-in-india/",
        "destination": "/blog/private-label-medicine-manufacturers-in-india/",
        "permanent": true
      },
      {
        "source": "/manufacturers/progesterone-capsules-manufacturers-suppliers-in-india/",
        "destination": "/blog/progesterone-tablet-manufacturers-in-india/",
        "permanent": true
      },
      {
        "source": "/manufacturers/progesterone-capsules-at-best-price-in-india/",
        "destination": "/blog/progesterone-tablet-manufacturers-in-india/",
        "permanent": true
      },
      {
        "source": "/manufacturers/rajkot-based-third-party-manufacturers/",
        "destination": "/blog/third-party-pharma-manufacturing-company-in-rajkot/",
        "permanent": true
      },
      {
        "source": "/manufacturers/soft-gelatin-manufacturing-companies-in-india/",
        "destination": "/blog/top-softgel-capsules-manufacturers-in-india/",
        "permanent": true
      },
      {
        "source": "/manufacturers/softgel-capsule-manufacturers-in-india/",
        "destination": "/blog/top-softgel-capsules-manufacturers-in-india/",
        "permanent": true
      },
      {
        "source": "/manufacturers/softgel-manufacturers-in-baddi/",
        "destination": "/blog/softgel-capsules-manufacturers-in-baddi/",
        "permanent": true
      },
      {
        "source": "/manufacturers/softgel-manufacturing-companies-in-india/",
        "destination": "/blog/top-softgel-capsules-manufacturers-in-india/",
        "permanent": true
      },
      {
        "source": "/manufacturers/start-third-party-pharma-manufacturing-company-in-india/",
        "destination": "/blog/how-to-start-third-party-manufacturing-company-in-india/",
        "permanent": true
      },
      {
        "source": "/manufacturers/th-leading-third-party-manufacturing-company-in-chakan/",
        "destination": "/blog/third-party-manufacturing-company-in-chakan/",
        "permanent": true
      },
      {
        "source": "/manufacturers/the-best-psychiatric-products-manufacturers-in-india/",
        "destination": "/blog/psychiatric-products-manufacturers-in-india/",
        "permanent": true
      },
      {
        "source": "/manufacturers/the-best-third-party-manufacturer-in-guntur/",
        "destination": "/blog/third-party-manufacturing-company-in-guntur/",
        "permanent": true
      },
      {
        "source": "/manufacturers/the-best-third-party-manufacturing-company-in-fatehpur-sikri/",
        "destination": "/blog/third-party-manufacturing-company-in-fatehpur-sikri/",
        "permanent": true
      },
      {
        "source": "/manufacturers/the-best-third-party-manufacturing-company-in-guwahati/",
        "destination": "/blog/third-party-manufacturing-company-in-guwahati/",
        "permanent": true
      },
      {
        "source": "/manufacturers/the-best-third-party-manufacturing-company-in-panaji/",
        "destination": "/blog/third-party-manufacturing-company-in-panaji/",
        "permanent": true
      },
      {
        "source": "/manufacturers/the-best-third-party-manufacturing-company-in-port-blair/",
        "destination": "/blog/third-party-manufacturing-company-in-port-blair/",
        "permanent": true
      },
      {
        "source": "/manufacturers/the-best-third-party-manufacturing-pharma-company-in-burhanpur/",
        "destination": "/blog/third-party-manufacturing-company-in-burhanpur/",
        "permanent": true
      },
      {
        "source": "/manufacturers/the-best-top-cardiac-diabetic-manufacturers-in-india/",
        "destination": "/blog/top-cardiac-diabetic-manufacturers-in-india/",
        "permanent": true
      },
      {
        "source": "/manufacturers/the-best-top-cardiology-medicine-manufacturers-in-india/",
        "destination": "/blog/top-cardiology-medicine-manufacturers-in-india/",
        "permanent": true
      },
      {
        "source": "/manufacturers/the-best-top-gummies-manufacturers-in-hyderabad/",
        "destination": "/blog/top-gummies-manufacturers-in-hyderabad/",
        "permanent": true
      },
      {
        "source": "/manufacturers/the-best-top-neurology-medicine-manufacturers-in-india/",
        "destination": "/blog/top-neurology-medicine-manufacturers-in-india/",
        "permanent": true
      },
      {
        "source": "/manufacturers/the-best-top-ortho-product-manufacturers-in-india/",
        "destination": "/blog/top-ortho-product-manufacturers-in-india/",
        "permanent": true
      },
      {
        "source": "/manufacturers/the-best-top-otc-product-manufacturers-in-india/",
        "destination": "/blog/top-otc-product-manufacturers-in-india/",
        "permanent": true
      },
      {
        "source": "/manufacturers/the-best-top-pediatric-medicine-manufacturers-in-india/",
        "destination": "/blog/top-pediatric-medicine-manufacturers-in-india/",
        "permanent": true
      },
      {
        "source": "/manufacturers/the-best-zinc-tablet-manufacturers-in-india/",
        "destination": "/blog/zinc-tablet-manufacturers-in-india/",
        "permanent": true
      },
      {
        "source": "/manufacturers/the-leading-third-party-manufacturing-company-in-fatehpur-sikri/",
        "destination": "/blog/third-party-manufacturing-company-in-fatehpur-sikri/",
        "permanent": true
      },
      {
        "source": "/manufacturers/the-leading-third-party-manufacturing-company-in-panaji/",
        "destination": "/blog/third-party-manufacturing-company-in-panaji/",
        "permanent": true
      },
      {
        "source": "/manufacturers/the-leading-third-party-manufacturing-company-in-port-blair/",
        "destination": "/blog/third-party-manufacturing-company-in-port-blair/",
        "permanent": true
      },
      {
        "source": "/manufacturers/the-leading-top-cardiac-diabetic-manufacturers-in-india/",
        "destination": "/blog/top-cardiac-diabetic-manufacturers-in-india/",
        "permanent": true
      },
      {
        "source": "/manufacturers/the-leading-top-gummies-manufacturers-in-hyderabad/",
        "destination": "/blog/top-gummies-manufacturers-in-hyderabad/",
        "permanent": true
      },
      {
        "source": "/manufacturers/the-leading-top-neurology-medicine-manufacturers-in-india/",
        "destination": "/blog/top-neurology-medicine-manufacturers-in-india/",
        "permanent": true
      },
      {
        "source": "/manufacturers/the-leading-top-otc-product-manufacturers-in-india/",
        "destination": "/blog/top-otc-product-manufacturers-in-india/",
        "permanent": true
      },
      {
        "source": "/manufacturers/the-leading-zinc-tablet-manufacturers-in-india/",
        "destination": "/blog/zinc-tablet-manufacturers-in-india/",
        "permanent": true
      },
      {
        "source": "/manufacturers/the-top-third-party-manufacturing-company-in-port-blair/",
        "destination": "/blog/third-party-manufacturing-company-in-port-blair/",
        "permanent": true
      },
      {
        "source": "/manufacturers/the-topmost-third-party-manufacturing-company-in-fatehpur-sikri/",
        "destination": "/blog/third-party-manufacturing-company-in-fatehpur-sikri/",
        "permanent": true
      },
      {
        "source": "/manufacturers/third-party-companies-in-warangal/",
        "destination": "/blog/third-party-manufacturing-company-in-warangal/",
        "permanent": true
      },
      {
        "source": "/manufacturers/third-party-dry-injection-manufacturer-baddi/",
        "destination": "/blog/injection-manufacturers-in-baddi/",
        "permanent": true
      },
      {
        "source": "/manufacturers/third-party-manufacturer-company-in-tarn-taran/",
        "destination": "/blog/third-party-manufacturing-company-in-tarn-taran/",
        "permanent": true
      },
      {
        "source": "/manufacturers/third-party-manufacturer-in-ahmedabad/",
        "destination": "/blog/third-party-manufacturing-company-in-ahmedabad/",
        "permanent": true
      },
      {
        "source": "/manufacturers/third-party-manufacturer-in-coimbatore/",
        "destination": "/blog/third-party-pharma-manufacturing-company-in-coimbatore/",
        "permanent": true
      },
      {
        "source": "/manufacturers/third-party-manufacturer-in-dehradun/",
        "destination": "/blog/third-party-pharma-manufacturing-in-dehradun/",
        "permanent": true
      },
      {
        "source": "/manufacturers/third-party-manufacturer-in-dhanbad/",
        "destination": "/blog/third-party-manufacturing-company-in-dhanbad/",
        "permanent": true
      },
      {
        "source": "/manufacturers/third-party-manufacturer-in-gorakhpur/",
        "destination": "/blog/third-party-manufacturing-company-in-gorakhpur/",
        "permanent": true
      },
      {
        "source": "/manufacturers/third-party-manufacturer-in-gwalior/",
        "destination": "/blog/third-party-pharma-manufacturing-company-in-gwalior/",
        "permanent": true
      },
      {
        "source": "/manufacturers/third-party-manufacturer-in-karnataka/",
        "destination": "/blog/pharma-third-party-manufacturers-in-karnataka/",
        "permanent": true
      },
      {
        "source": "/manufacturers/third-party-manufacturer-in-ludhiana/",
        "destination": "/blog/third-party-pharma-manufacturing-company-ludhiana/",
        "permanent": true
      },
      {
        "source": "/manufacturers/third-party-manufacturer-in-mumbai/",
        "destination": "/blog/third-party-pharma-manufacturing-company-in-mumbai/",
        "permanent": true
      },
      {
        "source": "/manufacturers/third-party-manufacturer-in-rajkot/",
        "destination": "/blog/third-party-pharma-manufacturing-company-in-rajkot/",
        "permanent": true
      },
      {
        "source": "/manufacturers/third-party-manufacturers-bilaspur/",
        "destination": "/blog/third-party-manufacturing-company-in-bilaspur/",
        "permanent": true
      },
      {
        "source": "/manufacturers/third-party-manufacturers-in-alappuzha/",
        "destination": "/blog/third-party-pharma-manufacturing-company-in-alappuzha/",
        "permanent": true
      },
      {
        "source": "/manufacturers/third-party-manufacturers-in-ambala/",
        "destination": "/blog/third-party-pharma-manufacturing-company-in-ambala/",
        "permanent": true
      },
      {
        "source": "/manufacturers/third-party-manufacturers-in-andaman-nicobar/",
        "destination": "/blog/third-party-pharma-manufacturing-company-in-andaman-nicobar/",
        "permanent": true
      },
      {
        "source": "/manufacturers/third-party-manufacturers-in-arunachal-pradesh/",
        "destination": "/blog/third-party-pharma-manufacturing-company-in-arunachal-pradesh/",
        "permanent": true
      },
      {
        "source": "/manufacturers/third-party-manufacturers-in-aurangabad/",
        "destination": "/blog/third-party-pharma-manufacturing-company-in-aurangabad/",
        "permanent": true
      },
      {
        "source": "/manufacturers/third-party-manufacturers-in-bareilly/",
        "destination": "/blog/third-party-manufacturing-company-in-bareilly/",
        "permanent": true
      },
      {
        "source": "/manufacturers/third-party-manufacturers-in-bathinda/",
        "destination": "/blog/third-party-pharma-manufacturing-company-in-bathinda/",
        "permanent": true
      },
      {
        "source": "/manufacturers/third-party-manufacturers-in-bhubaneswar/",
        "destination": "/blog/manufacturers/third-party-manufacturers-in-bhubaneswar/",
        "permanent": true
      },
      {
        "source": "/manufacturers/third-party-manufacturers-in-daman-diu/",
        "destination": "/blog/third-party-pharma-manufacturing-company-in-daman-diu/",
        "permanent": true
      },
      {
        "source": "/manufacturers/third-party-manufacturers-in-faridabad/",
        "destination": "/blog/third-party-pharma-manufacturing-company-in-faridabad/",
        "permanent": true
      },
      {
        "source": "/manufacturers/third-party-manufacturers-in-firozabad/",
        "destination": "/blog/third-party-pharma-manufacturing-company-in-firozabad/",
        "permanent": true
      },
      {
        "source": "/manufacturers/third-party-manufacturers-in-firozpur/",
        "destination": "/blog/third-party-pharma-manufacturing-company-in-firozpur/",
        "permanent": true
      },
      {
        "source": "/manufacturers/third-party-manufacturers-in-gurgaon/",
        "destination": "/blog/third-party-manufacturing-company-in-gurgaon/",
        "permanent": true
      },
      {
        "source": "/manufacturers/third-party-manufacturers-in-haryana/",
        "destination": "/blog/third-party-pharma-manufacturing-company-in-haryana/",
        "permanent": true
      },
      {
        "source": "/manufacturers/third-party-manufacturers-in-india/",
        "destination": "/blog/top-10-third-party-pharma-manufacturing-companies-in-india/",
        "permanent": true
      },
      {
        "source": "/manufacturers/third-party-manufacturers-in-jaipur/",
        "destination": "/blog/third-party-pharma-manufacturing-company-in-jaipur/",
        "permanent": true
      },
      {
        "source": "/manufacturers/third-party-manufacturers-in-jharkhand/",
        "destination": "/blog/third-party-pharma-manufacturing-company-in-jharkhand/",
        "permanent": true
      },
      {
        "source": "/manufacturers/third-party-manufacturers-in-jind/",
        "destination": "/blog/third-party-manufacturing-company-in-jind/",
        "permanent": true
      },
      {
        "source": "/manufacturers/third-party-manufacturers-in-jodhpur/",
        "destination": "/blog/third-party-pharma-manufacturing-company-in-jodhpur/",
        "permanent": true
      },
      {
        "source": "/manufacturers/third-party-manufacturers-in-kanpur/",
        "destination": "/blog/third-party-pharma-manufacturing-company-in-kanpur/",
        "permanent": true
      },
      {
        "source": "/manufacturers/third-party-manufacturers-in-karnal/",
        "destination": "/blog/third-party-pharma-manufacturing-company-in-karnal/",
        "permanent": true
      },
      {
        "source": "/manufacturers/third-party-manufacturers-in-kochi/",
        "destination": "/blog/third-party-pharma-manufacturing-company-in-kochi/",
        "permanent": true
      },
      {
        "source": "/manufacturers/third-party-manufacturers-in-kolhapur/",
        "destination": "/blog/third-party-manufacturing-company-in-kolhapur/",
        "permanent": true
      },
      {
        "source": "/manufacturers/third-party-manufacturers-in-kollam/",
        "destination": "/blog/third-party-pharma-manufacturing-company-in-kollam/",
        "permanent": true
      },
      {
        "source": "/manufacturers/third-party-manufacturers-in-kozhikode/",
        "destination": "/blog/third-party-pharma-manufacturing-company-in-kozhikode/",
        "permanent": true
      },
      {
        "source": "/manufacturers/third-party-manufacturers-in-leh-ladakh/",
        "destination": "/blog/third-party-pharma-manufacturing-company-in-leh-ladakh/",
        "permanent": true
      },
      {
        "source": "/manufacturers/third-party-manufacturers-in-lucknow/",
        "destination": "/blog/third-party-pharma-manufacturing-company-in-lucknow/",
        "permanent": true
      },
      {
        "source": "/manufacturers/third-party-manufacturers-in-madhya-pradesh/",
        "destination": "/blog/third-party-pharma-manufacturing-company-in-madhya-pradesh/",
        "permanent": true
      },
      {
        "source": "/manufacturers/third-party-manufacturers-in-madurai/",
        "destination": "/blog/third-party-manufacturing-company-in-madurai/",
        "permanent": true
      },
      {
        "source": "/manufacturers/third-party-manufacturers-in-manipur/",
        "destination": "/blog/manufacturers/third-party-manufacturers-in-manipur/",
        "permanent": true
      },
      {
        "source": "/manufacturers/third-party-manufacturers-in-muzaffarnagar/",
        "destination": "/blog/third-party-pharma-manufacturing-company-in-muzaffarnagar/",
        "permanent": true
      },
      {
        "source": "/manufacturers/third-party-manufacturers-in-panipat/",
        "destination": "/blog/third-party-pharma-manufacturing-company-in-panipat/",
        "permanent": true
      },
      {
        "source": "/manufacturers/third-party-manufacturers-in-patiala/",
        "destination": "/blog/third-party-pharma-manufacturing-company-in-patiala/",
        "permanent": true
      },
      {
        "source": "/manufacturers/third-party-manufacturers-in-pondicherry/",
        "destination": "/blog/third-party-pharma-manufacturing-company-in-pondicherry/",
        "permanent": true
      },
      {
        "source": "/manufacturers/third-party-manufacturers-in-prayagraj/",
        "destination": "/blog/third-party-pharma-manufacturing-company-in-prayagraj/",
        "permanent": true
      },
      {
        "source": "/manufacturers/third-party-manufacturers-in-punjab/",
        "destination": "/blog/third-party-pharma-manufacturing-company-in-punjab/",
        "permanent": true
      },
      {
        "source": "/manufacturers/third-party-manufacturers-in-rajasthan/",
        "destination": "/blog/third-party-pharma-manufacturing-company-in-rajasthan/",
        "permanent": true
      },
      {
        "source": "/manufacturers/third-party-manufacturers-in-ranchi/",
        "destination": "/blog/third-party-pharma-manufacturing-company-in-ranchi/",
        "permanent": true
      },
      {
        "source": "/manufacturers/third-party-manufacturers-in-shimoga/",
        "destination": "/blog/third-party-pharma-manufacturing-company-in-shimoga/",
        "permanent": true
      },
      {
        "source": "/manufacturers/third-party-manufacturers-in-sonipat/",
        "destination": "/blog/third-party-pharma-manufacturing-company-in-sonipat/",
        "permanent": true
      },
      {
        "source": "/manufacturers/third-party-manufacturers-in-thane/",
        "destination": "/blog/third-party-manufacturing-company-in-thane/",
        "permanent": true
      },
      {
        "source": "/manufacturers/third-party-manufacturers-in-thiruvananthapuram/",
        "destination": "/blog/third-party-pharma-manufacturing-company-in-thiruvananthapuram/",
        "permanent": true
      },
      {
        "source": "/manufacturers/third-party-manufacturers-in-udaipur/",
        "destination": "/blog/third-party-pharma-manufacturing-company-in-udaipur/",
        "permanent": true
      },
      {
        "source": "/manufacturers/third-party-manufacturers-in-ujjain/",
        "destination": "/blog/third-party-manufacturing-company-in-ujjain/",
        "permanent": true
      },
      {
        "source": "/manufacturers/third-party-manufacturers-in-uttar-pradesh/",
        "destination": "/blog/third-party-pharma-manufacturing-company-in-uttar-pradesh/",
        "permanent": true
      },
      {
        "source": "/manufacturers/third-party-manufacturers-in-vadodara/",
        "destination": "/blog/third-party-pharma-manufacturing-company-in-vadodara/",
        "permanent": true
      },
      {
        "source": "/manufacturers/third-party-manufacturers-in-vasai/",
        "destination": "/blog/third-party-manufacturing-company-in-vasai/",
        "permanent": true
      },
      {
        "source": "/manufacturers/third-party-manufacturers-in-warangal/",
        "destination": "/blog/third-party-manufacturing-company-in-warangal/",
        "permanent": true
      },
      {
        "source": "/manufacturers/third-party-manufacturers-in-west-bengal/",
        "destination": "/blog/third-party-pharma-manufacturing-company-in-west-bengal/",
        "permanent": true
      },
      {
        "source": "/manufacturers/third-party-manufacturers-sangrur/",
        "destination": "/blog/third-party-manufacturing-company-in-sangrur/",
        "permanent": true
      },
      {
        "source": "/manufacturers/third-party-manufacturing-business-in-gaya/",
        "destination": "/blog/third-party-manufacturing-company-in-gaya/",
        "permanent": true
      },
      {
        "source": "/manufacturers/third-party-manufacturing-companies-in-arunachal-pradesh/",
        "destination": "/blog/third-party-pharma-manufacturing-company-in-arunachal-pradesh/",
        "permanent": true
      },
      {
        "source": "/manufacturers/third-party-manufacturing-companies-in-bihar/",
        "destination": "/blog/third-party-pharma-manufacturing-company-in-bihar/",
        "permanent": true
      },
      {
        "source": "/manufacturers/third-party-manufacturing-companies-in-ghaziabad/",
        "destination": "/blog/third-party-pharma-manufacturing-company-in-ghaziabad/",
        "permanent": true
      },
      {
        "source": "/manufacturers/third-party-manufacturing-companies-in-mizoram/",
        "destination": "/blog/third-party-pharma-manufacturing-company-in-mizoram/",
        "permanent": true
      },
      {
        "source": "/manufacturers/third-party-manufacturing-companies-in-muzaffarnagar/",
        "destination": "/blog/third-party-pharma-manufacturing-company-in-muzaffarnagar/",
        "permanent": true
      },
      {
        "source": "/manufacturers/third-party-manufacturing-companies-in-pondicherry/",
        "destination": "/blog/third-party-pharma-manufacturing-company-in-pondicherry/",
        "permanent": true
      },
      {
        "source": "/manufacturers/third-party-manufacturing-companies-in-ranchi/",
        "destination": "/blog/third-party-pharma-manufacturing-company-in-ranchi/",
        "permanent": true
      },
      {
        "source": "/manufacturers/third-party-manufacturing-companies-in-roorkee/",
        "destination": "/blog/third-party-manufacturing-company-roorkee/",
        "permanent": true
      },
      {
        "source": "/manufacturers/third-party-manufacturing-companies-in-thrissur/",
        "destination": "/blog/third-party-manufacturing-company-in-thrissur/",
        "permanent": true
      },
      {
        "source": "/manufacturers/third-party-manufacturing-companies-in-uttarakhand/",
        "destination": "/blog/third-party-pharma-manufacturing-company-in-uttarakhand/",
        "permanent": true
      },
      {
        "source": "/manufacturers/third-party-manufacturing-companies-in-yamuna-nagar/",
        "destination": "/blog/third-party-pharma-manufacturing-company-in-yamuna-nagar/",
        "permanent": true
      },
      {
        "source": "/manufacturers/third-party-manufacturing-company-in-amritsar/",
        "destination": "/blog/third-party-pharma-manufacturing-company-in-amritsar/",
        "permanent": true
      },
      {
        "source": "/manufacturers/third-party-manufacturing-company-in-gujarat/",
        "destination": "/blog/pharma-third-party-manufacturers-in-gujarat/",
        "permanent": true
      },
      {
        "source": "/manufacturers/third-party-manufacturing-company-in-kozhikode/",
        "destination": "/blog/third-party-pharma-manufacturing-company-in-kozhikode/",
        "permanent": true
      },
      {
        "source": "/manufacturers/third-party-manufacturing-company-in-maharashtra/",
        "destination": "/blog/pharma-third-party-manufacturers-in-maharashtra/",
        "permanent": true
      },
      {
        "source": "/manufacturers/third-party-manufacturing-company-in-moga/",
        "destination": "/blog/third-party-manufacturing-company-in-moga/",
        "permanent": true
      },
      {
        "source": "/manufacturers/third-party-manufacturing-company-in-mumbai/",
        "destination": "/blog/pharma-third-party-manufacturers-in-mumbai/",
        "permanent": true
      },
      {
        "source": "/manufacturers/third-party-manufacturing-company-in-nizamabad/",
        "destination": "/blog/third-party-manufacturing-company-in-nizamabad/",
        "permanent": true
      },
      {
        "source": "/manufacturers/third-party-manufacturing-company-in-odisha/",
        "destination": "/blog/third-party-pharma-manufacturing-company-in-odisha/",
        "permanent": true
      },
      {
        "source": "/manufacturers/third-party-manufacturing-company-in-prayagraj/",
        "destination": "/blog/third-party-pharma-manufacturing-company-in-prayagraj/",
        "permanent": true
      },
      {
        "source": "/manufacturers/third-party-manufacturing-company-in-saharanpur/",
        "destination": "/blog/third-party-pharma-manufacturing-company-in-saharanpur/",
        "permanent": true
      },
      {
        "source": "/manufacturers/third-party-manufacturing-company-in-srinagar/",
        "destination": "/blog/third-party-manufacturing-company-in-srinagar/",
        "permanent": true
      },
      {
        "source": "/manufacturers/third-party-manufacturing-firms-in-shimoga/",
        "destination": "/blog/third-party-pharma-manufacturing-company-in-shimoga/",
        "permanent": true
      },
      {
        "source": "/manufacturers/third-party-manufacturing-firms-in-vasai/",
        "destination": "/blog/third-party-manufacturing-company-in-vasai/",
        "permanent": true
      },
      {
        "source": "/manufacturers/third-party-manufacturing-in-aizawl/",
        "destination": "/blog/third-party-manufacturing-company-in-aizawl/",
        "permanent": true
      },
      {
        "source": "/manufacturers/third-party-manufacturing-in-amritsar/",
        "destination": "/blog/third-party-pharma-manufacturing-company-in-amritsar/",
        "permanent": true
      },
      {
        "source": "/manufacturers/third-party-manufacturing-in-leh-ladakh/",
        "destination": "/blog/third-party-pharma-manufacturing-company-in-leh-ladakh/",
        "permanent": true
      },
      {
        "source": "/manufacturers/third-party-manufacturing-in-meghalaya/",
        "destination": "/blog/third-party-pharma-manufacturing-company-in-meghalaya/",
        "permanent": true
      },
      {
        "source": "/manufacturers/third-party-manufacturing-in-roorkee/",
        "destination": "/blog/third-party-manufacturing-company-roorkee/",
        "permanent": true
      },
      {
        "source": "/manufacturers/third-party-manufacturing-in-tamil-nadu/",
        "destination": "/blog/pharma-third-party-manufacturers-in-chennai/",
        "permanent": true
      },
      {
        "source": "/manufacturers/third-party-manufacturing-in-tripura/",
        "destination": "/blog/third-party-manufacturing-company-in-tripura/",
        "permanent": true
      },
      {
        "source": "/manufacturers/third-party-manufacturing-pharma-companies-in-ahmedabad/",
        "destination": "/blog/third-party-manufacturing-company-in-ahmedabad/",
        "permanent": true
      },
      {
        "source": "/manufacturers/third-party-manufacturing-pharma-companies-in-aizawl/",
        "destination": "/blog/third-party-manufacturing-company-in-aizawl/",
        "permanent": true
      },
      {
        "source": "/manufacturers/third-party-manufacturing-pharma-companies-in-bilaspur/",
        "destination": "/blog/third-party-manufacturing-company-in-bilaspur/",
        "permanent": true
      },
      {
        "source": "/manufacturers/third-party-manufacturing-pharma-companies-in-chhattisgarh/",
        "destination": "/blog/third-party-pharma-manufacturing-company-in-chhattisgarh/",
        "permanent": true
      },
      {
        "source": "/manufacturers/third-party-manufacturing-pharma-companies-in-dhanbad/",
        "destination": "/blog/third-party-manufacturing-company-in-dhanbad/",
        "permanent": true
      },
      {
        "source": "/manufacturers/third-party-manufacturing-pharma-companies-in-durgapur/",
        "destination": "/blog/third-party-manufacturing-company-in-durgapur/",
        "permanent": true
      },
      {
        "source": "/manufacturers/third-party-manufacturing-pharma-companies-in-hisar/",
        "destination": "/blog/third-party-manufacturing-company-in-hisar/",
        "permanent": true
      },
      {
        "source": "/manufacturers/third-party-manufacturing-pharma-companies-in-hoshiarpur/",
        "destination": "/blog/third-party-manufacturing-company-in-hoshiarpur/",
        "permanent": true
      },
      {
        "source": "/manufacturers/third-party-manufacturing-pharma-companies-in-jabalpur/",
        "destination": "/blog/third-party-manufacturing-company-in-jabalpur/",
        "permanent": true
      },
      {
        "source": "/manufacturers/third-party-manufacturing-pharma-companies-in-jalandhar/",
        "destination": "/blog/third-party-manufacturing-company-in-jalandhar/",
        "permanent": true
      },
      {
        "source": "/manufacturers/third-party-manufacturing-pharma-companies-in-kerala/",
        "destination": "/blog/pharma-third-party-manufacturers-in-kerala/",
        "permanent": true
      },
      {
        "source": "/manufacturers/third-party-manufacturing-pharma-companies-in-moga/",
        "destination": "/blog/third-party-manufacturing-company-in-moga/",
        "permanent": true
      },
      {
        "source": "/manufacturers/third-party-manufacturing-pharma-companies-in-mumbai/",
        "destination": "/blog/third-party-pharma-manufacturing-company-in-mumbai/",
        "permanent": true
      },
      {
        "source": "/manufacturers/third-party-manufacturing-pharma-companies-in-nagpur/",
        "destination": "/blog/third-party-manufacturing-company-in-nagpur/",
        "permanent": true
      },
      {
        "source": "/manufacturers/third-party-manufacturing-pharma-companies-in-nalagarh/",
        "destination": "/blog/third-party-manufacturing-company-in-nalagarh/",
        "permanent": true
      },
      {
        "source": "/manufacturers/third-party-manufacturing-pharma-company-in-gorakhpur/",
        "destination": "/blog/third-party-manufacturing-company-in-gorakhpur/",
        "permanent": true
      },
      {
        "source": "/manufacturers/third-party-manufacturing-pharma-company-in-roorkee/",
        "destination": "/blog/third-party-manufacturing-company-roorkee/",
        "permanent": true
      },
      {
        "source": "/manufacturers/third-party-manufacturing-pharma-in-baddi/",
        "destination": "/blog/pharma-third-party-manufacturers-in-baddi/",
        "permanent": true
      },
      {
        "source": "/manufacturers/third-party-manufacturing-services-in-ahmedabad/",
        "destination": "/blog/third-party-manufacturing-company-in-ahmedabad/",
        "permanent": true
      },
      {
        "source": "/manufacturers/third-party-manufacturing-services-in-jind/",
        "destination": "/blog/third-party-manufacturing-company-in-jind/",
        "permanent": true
      },
      {
        "source": "/manufacturers/third-party-manufacturing-services-in-manipur/",
        "destination": "/blog/third-party-pharma-manufacturing-company-in-manipur/",
        "permanent": true
      },
      {
        "source": "/manufacturers/third-party-pharma-company-in-hyderabad/",
        "destination": "/blog/third-party-pharma-manufacturing-company-in-hyderabad/",
        "permanent": true
      },
      {
        "source": "/manufacturers/third-party-pharma-company-in-jammu-kashmir/",
        "destination": "/blog/third-party-pharma-manufacturing-company-in-jammu-kashmir/",
        "permanent": true
      },
      {
        "source": "/manufacturers/third-party-pharma-manufacturer-company-in-kerala/",
        "destination": "/blog/pharma-third-party-manufacturers-in-kerala/",
        "permanent": true
      },
      {
        "source": "/manufacturers/third-party-pharma-manufacturer-company-in-mumbai/",
        "destination": "/blog/pharma-third-party-manufacturers-in-mumbai/",
        "permanent": true
      },
      {
        "source": "/manufacturers/third-party-pharma-manufacturer-in-baddi/",
        "destination": "/blog/pharma-third-party-manufacturers-in-baddi/",
        "permanent": true
      },
      {
        "source": "/manufacturers/third-party-pharma-manufacturer-in-dehradun/",
        "destination": "/blog/third-party-pharma-manufacturing-in-dehradun/",
        "permanent": true
      },
      {
        "source": "/manufacturers/third-party-pharma-manufacturer-in-surat/",
        "destination": "/blog/third-party-pharma-manufacturing-company-in-surat/",
        "permanent": true
      },
      {
        "source": "/manufacturers/third-party-pharma-manufacturers-in-bangalore/",
        "destination": "/blog/third-party-pharma-manufacturing-company-in-bangalore/",
        "permanent": true
      },
      {
        "source": "/manufacturers/third-party-pharma-manufacturers-in-bhubaneswar/",
        "destination": "/blog/third-party-manufacturing-company-in-bhubaneswar/",
        "permanent": true
      },
      {
        "source": "/manufacturers/third-party-pharma-manufacturers-in-bihar/",
        "destination": "/blog/third-party-pharma-manufacturing-company-in-bihar/",
        "permanent": true
      },
      {
        "source": "/manufacturers/third-party-pharma-manufacturers-in-bilaspur/",
        "destination": "/blog/third-party-manufacturing-company-in-bilaspur/",
        "permanent": true
      },
      {
        "source": "/manufacturers/third-party-pharma-manufacturers-in-chakan/",
        "destination": "/blog/third-party-manufacturing-company-in-chakan/",
        "permanent": true
      },
      {
        "source": "/manufacturers/third-party-pharma-manufacturers-in-cuttack/",
        "destination": "/blog/third-party-manufacturing-company-in-cuttack/",
        "permanent": true
      },
      {
        "source": "/manufacturers/third-party-pharma-manufacturers-in-dhanbad/",
        "destination": "/blog/third-party-manufacturing-company-in-dhanbad/",
        "permanent": true
      },
      {
        "source": "/manufacturers/third-party-pharma-manufacturers-in-fatehpur/",
        "destination": "/blog/third-party-manufacturing-company-in-fatehpur-sikri/",
        "permanent": true
      },
      {
        "source": "/manufacturers/third-party-pharma-manufacturers-in-gangtok/",
        "destination": "/blog/third-party-manufacturing-company-in-gangtok/",
        "permanent": true
      },
      {
        "source": "/manufacturers/third-party-pharma-manufacturers-in-himachal-pradesh/",
        "destination": "/blog/pharma-third-party-manufacturers-in-baddi/",
        "permanent": true
      },
      {
        "source": "/manufacturers/third-party-pharma-manufacturers-in-hyderabad/",
        "destination": "/blog/third-party-pharma-manufacturing-company-in-hyderabad/",
        "permanent": true
      },
      {
        "source": "/manufacturers/third-party-pharma-manufacturers-in-india/",
        "destination": "/blog/top-10-third-party-pharma-manufacturing-companies-in-india/",
        "permanent": true
      },
      {
        "source": "/manufacturers/third-party-pharma-manufacturers-in-jamshedpur/",
        "destination": "/blog/third-party-pharma-manufacturing-company-in-jamshedpur/",
        "permanent": true
      },
      {
        "source": "/manufacturers/third-party-pharma-manufacturers-in-kerala/",
        "destination": "/blog/pharma-third-party-manufacturers-in-kerala/",
        "permanent": true
      },
      {
        "source": "/manufacturers/third-party-pharma-manufacturers-in-kolhapur/",
        "destination": "/blog/third-party-manufacturing-company-in-kolhapur/",
        "permanent": true
      },
      {
        "source": "/manufacturers/third-party-pharma-manufacturers-in-kolkata/",
        "destination": "/blog/third-party-pharma-manufacturing-company-in-kolkata/",
        "permanent": true
      },
      {
        "source": "/manufacturers/third-party-pharma-manufacturers-in-lucknow/",
        "destination": "/blog/third-party-pharma-manufacturing-company-in-lucknow/",
        "permanent": true
      },
      {
        "source": "/manufacturers/third-party-pharma-manufacturers-in-madhya-pradesh/",
        "destination": "/blog/third-party-pharma-manufacturing-company-in-madhya-pradesh/",
        "permanent": true
      },
      {
        "source": "/manufacturers/third-party-pharma-manufacturers-in-maharashtra/",
        "destination": "/blog/pharma-third-party-manufacturers-in-maharashtra/",
        "permanent": true
      },
      {
        "source": "/manufacturers/third-party-pharma-manufacturers-in-mumbai/",
        "destination": "/blog/third-party-pharma-manufacturing-company-in-mumbai/",
        "permanent": true
      },
      {
        "source": "/manufacturers/third-party-pharma-manufacturers-in-nalagarh/",
        "destination": "/blog/third-party-manufacturing-company-in-nalagarh/",
        "permanent": true
      },
      {
        "source": "/manufacturers/third-party-pharma-manufacturers-in-odisha/",
        "destination": "/blog/third-party-pharma-manufacturing-company-in-odisha/",
        "permanent": true
      },
      {
        "source": "/manufacturers/third-party-pharma-manufacturers-in-patiala/",
        "destination": "/blog/third-party-pharma-manufacturing-company-in-patiala/",
        "permanent": true
      },
      {
        "source": "/manufacturers/third-party-pharma-manufacturers-in-telangana/",
        "destination": "/blog/third-party-manufacturing-company-in-telangana/",
        "permanent": true
      },
      {
        "source": "/manufacturers/third-party-pharma-manufacturers-in-thrissur/",
        "destination": "/blog/third-party-manufacturing-company-in-thrissur/",
        "permanent": true
      },
      {
        "source": "/manufacturers/third-party-pharma-manufacturers-in-tripura/",
        "destination": "/blog/third-party-manufacturing-company-in-tripura/",
        "permanent": true
      },
      {
        "source": "/manufacturers/third-party-pharma-manufacturers-in-ujjain/",
        "destination": "/blog/third-party-manufacturing-company-in-ujjain/",
        "permanent": true
      },
      {
        "source": "/manufacturers/third-party-pharma-manufacturers-in-vasai/",
        "destination": "/blog/third-party-manufacturing-company-in-vasai/",
        "permanent": true
      },
      {
        "source": "/manufacturers/third-party-pharma-manufacturers-in-warangal/",
        "destination": "/blog/third-party-manufacturing-company-in-warangal/",
        "permanent": true
      },
      {
        "source": "/manufacturers/third-party-pharma-manufacturing/",
        "destination": "/blog/top-10-third-party-pharma-manufacturing-companies-in-india/",
        "permanent": true
      },
      {
        "source": "/manufacturers/third-party-pharma-manufacturing-companies-in-bhubaneswar/",
        "destination": "/blog/third-party-manufacturing-company-in-bhubaneswar/",
        "permanent": true
      },
      {
        "source": "/manufacturers/third-party-pharma-manufacturing-companies-in-chennai/",
        "destination": "/blog/pharma-third-party-manufacturers-in-chennai/",
        "permanent": true
      },
      {
        "source": "/manufacturers/third-party-pharma-manufacturing-companies-in-cuttack/",
        "destination": "/blog/third-party-manufacturing-company-in-cuttack/",
        "permanent": true
      },
      {
        "source": "/manufacturers/third-party-pharma-manufacturing-companies-in-dehradun/",
        "destination": "/blog/third-party-pharma-manufacturing-in-dehradun/",
        "permanent": true
      },
      {
        "source": "/manufacturers/third-party-pharma-manufacturing-companies-in-jind/",
        "destination": "/blog/third-party-manufacturing-company-in-jind/",
        "permanent": true
      },
      {
        "source": "/manufacturers/third-party-pharma-manufacturing-companies-in-karnataka/",
        "destination": "/blog/pharma-third-party-manufacturers-in-karnataka/",
        "permanent": true
      },
      {
        "source": "/manufacturers/third-party-pharma-manufacturing-company/",
        "destination": "/blog/top-10-third-party-pharma-manufacturing-companies-in-india/",
        "permanent": true
      },
      {
        "source": "/manufacturers/third-party-pharma-manufacturing-company-in-ahmedabad/",
        "destination": "/blog/third-party-pharma-manufacturing-company-in-ahmedabad/",
        "permanent": true
      },
      {
        "source": "/manufacturers/third-party-pharma-manufacturing-company-in-aizawl/",
        "destination": "/blog/third-party-manufacturing-company-in-aizawl/",
        "permanent": true
      },
      {
        "source": "/manufacturers/third-party-pharma-manufacturing-company-in-andaman-nicobar/",
        "destination": "/blog/third-party-pharma-manufacturing-company-in-andaman-nicobar/",
        "permanent": true
      },
      {
        "source": "/manufacturers/third-party-pharma-manufacturing-company-in-arunachal-pradesh/",
        "destination": "/blog/third-party-pharma-manufacturing-company-in-arunachal-pradesh/",
        "permanent": true
      },
      {
        "source": "/manufacturers/third-party-pharma-manufacturing-company-in-assam/",
        "destination": "/blog/third-party-pharma-manufacturing-company-in-assam/",
        "permanent": true
      },
      {
        "source": "/manufacturers/third-party-pharma-manufacturing-company-in-aurangabad/",
        "destination": "/blog/third-party-pharma-manufacturing-company-in-aurangabad/",
        "permanent": true
      },
      {
        "source": "/manufacturers/third-party-pharma-manufacturing-company-in-bhubaneswar/",
        "destination": "/blog/third-party-manufacturing-company-in-bhubaneswar/",
        "permanent": true
      },
      {
        "source": "/manufacturers/third-party-pharma-manufacturing-company-in-bihar/",
        "destination": "/blog/third-party-pharma-manufacturing-company-in-bihar/",
        "permanent": true
      },
      {
        "source": "/manufacturers/third-party-pharma-manufacturing-company-in-coimbatore/",
        "destination": "/blog/third-party-pharma-manufacturing-company-in-coimbatore/",
        "permanent": true
      },
      {
        "source": "/manufacturers/third-party-pharma-manufacturing-company-in-daman-diu/",
        "destination": "/blog/third-party-pharma-manufacturing-company-in-daman-diu/",
        "permanent": true
      },
      {
        "source": "/manufacturers/third-party-pharma-manufacturing-company-in-durgapur/",
        "destination": "/blog/third-party-manufacturing-company-in-durgapur/",
        "permanent": true
      },
      {
        "source": "/manufacturers/third-party-pharma-manufacturing-company-in-firozabad/",
        "destination": "/blog/third-party-pharma-manufacturing-company-in-firozabad/",
        "permanent": true
      },
      {
        "source": "/manufacturers/third-party-pharma-manufacturing-company-in-gaya/",
        "destination": "/blog/third-party-manufacturing-company-in-gaya/",
        "permanent": true
      },
      {
        "source": "/manufacturers/third-party-pharma-manufacturing-company-in-ghaziabad/",
        "destination": "/blog/third-party-pharma-manufacturing-company-in-ghaziabad/",
        "permanent": true
      },
      {
        "source": "/manufacturers/third-party-pharma-manufacturing-company-in-haridwar/",
        "destination": "/blog/third-party-pharma-manufacturing-company-in-haridwar/",
        "permanent": true
      },
      {
        "source": "/manufacturers/third-party-pharma-manufacturing-company-in-hoshiarpur/",
        "destination": "/blog/third-party-manufacturing-company-in-hoshiarpur/",
        "permanent": true
      },
      {
        "source": "/manufacturers/third-party-pharma-manufacturing-company-in-jharkhand/",
        "destination": "/blog/third-party-pharma-manufacturing-company-in-jharkhand/",
        "permanent": true
      },
      {
        "source": "/manufacturers/third-party-pharma-manufacturing-company-in-kanpur/",
        "destination": "/blog/third-party-pharma-manufacturing-company-in-kanpur/",
        "permanent": true
      },
      {
        "source": "/manufacturers/third-party-pharma-manufacturing-company-in-karnal/",
        "destination": "/blog/third-party-pharma-manufacturing-company-in-karnal/",
        "permanent": true
      },
      {
        "source": "/manufacturers/third-party-pharma-manufacturing-company-in-leh-ladakh/",
        "destination": "/blog/third-party-pharma-manufacturing-company-in-leh-ladakh/",
        "permanent": true
      },
      {
        "source": "/manufacturers/third-party-pharma-manufacturing-company-in-lucknow/",
        "destination": "/blog/third-party-pharma-manufacturing-company-in-lucknow/",
        "permanent": true
      },
      {
        "source": "/manufacturers/third-party-pharma-manufacturing-company-in-madhya-pradesh/",
        "destination": "/blog/third-party-pharma-manufacturing-company-in-madhya-pradesh/",
        "permanent": true
      },
      {
        "source": "/manufacturers/third-party-pharma-manufacturing-company-in-noida/",
        "destination": "/blog/third-party-pharma-manufacturing-company-in-noida/",
        "permanent": true
      },
      {
        "source": "/manufacturers/third-party-pharma-manufacturing-company-in-panipat/",
        "destination": "/blog/third-party-pharma-manufacturing-company-in-panipat/",
        "permanent": true
      },
      {
        "source": "/manufacturers/third-party-pharma-manufacturing-company-in-patiala/",
        "destination": "/blog/third-party-pharma-manufacturing-company-in-patiala/",
        "permanent": true
      },
      {
        "source": "/manufacturers/third-party-pharma-manufacturing-company-in-pondicherry/",
        "destination": "/blog/third-party-pharma-manufacturing-company-in-pondicherry/",
        "permanent": true
      },
      {
        "source": "/manufacturers/third-party-pharma-manufacturing-company-in-rajasthan/",
        "destination": "/blog/third-party-pharma-manufacturing-company-in-rajasthan/",
        "permanent": true
      },
      {
        "source": "/manufacturers/third-party-pharma-manufacturing-company-in-saharanpur/",
        "destination": "/blog/third-party-pharma-manufacturing-company-in-saharanpur/",
        "permanent": true
      },
      {
        "source": "/manufacturers/third-party-pharma-manufacturing-company-in-telangana/",
        "destination": "/blog/third-party-manufacturing-company-in-telangana/",
        "permanent": true
      },
      {
        "source": "/manufacturers/third-party-pharma-manufacturing-company-in-trivandrum/",
        "destination": "/blog/third-party-pharma-manufacturing-company-in-trivandrum/",
        "permanent": true
      },
      {
        "source": "/manufacturers/third-party-pharma-manufacturing-company-in-west-bengal/",
        "destination": "/blog/third-party-pharma-manufacturing-company-in-west-bengal/",
        "permanent": true
      },
      {
        "source": "/manufacturers/third-party-pharma-manufacturing-company-in-yamuna-nagar/",
        "destination": "/blog/third-party-pharma-manufacturing-company-in-yamuna-nagar/",
        "permanent": true
      },
      {
        "source": "/manufacturers/third-party-pharma-manufacturing-in-baddi/",
        "destination": "/blog/pharma-third-party-manufacturers-in-baddi/",
        "permanent": true
      },
      {
        "source": "/manufacturers/third-party-pharma-manufacturing-in-chennai/",
        "destination": "/blog/pharma-third-party-manufacturers-in-chennai/",
        "permanent": true
      },
      {
        "source": "/manufacturers/third-party-pharma-manufacturing-in-gujarat/",
        "destination": "/blog/pharma-third-party-manufacturers-in-gujarat/",
        "permanent": true
      },
      {
        "source": "/manufacturers/third-party-pharma-manufacturing-in-hoshiarpur/",
        "destination": "/blog/third-party-manufacturing-company-in-hoshiarpur/",
        "permanent": true
      },
      {
        "source": "/manufacturers/third-party-pharma-manufacturing-in-kollam/",
        "destination": "/blog/third-party-pharma-manufacturing-company-in-kollam/",
        "permanent": true
      },
      {
        "source": "/manufacturers/third-party-pharma-manufacturing-in-rajkot/",
        "destination": "/blog/third-party-pharma-manufacturing-company-in-rajkot/",
        "permanent": true
      },
      {
        "source": "/manufacturers/third-party-pharma-manufacturing-in-thane/",
        "destination": "/blog/third-party-manufacturing-company-in-thane/",
        "permanent": true
      },
      {
        "source": "/manufacturers/third-party-pharma-manufacturing-services-in-karnataka/",
        "destination": "/blog/pharma-third-party-manufacturers-in-karnataka/",
        "permanent": true
      },
      {
        "source": "/manufacturers/third-party-pharma-manufacturing-services-in-kollam/",
        "destination": "/blog/third-party-pharma-manufacturing-company-in-kollam/",
        "permanent": true
      },
      {
        "source": "/manufacturers/third-party-pharma-medicine-manufacturers-in-haridwar/",
        "destination": "/blog/third-party-pharma-manufacturing-company-in-haridwar/",
        "permanent": true
      },
      {
        "source": "/manufacturers/third-party-pharma-medicines-in-delhi/",
        "destination": "/blog/pharma-third-party-manufacturers-in-delhi/",
        "permanent": true
      },
      {
        "source": "/manufacturers/third-party-pharma-products-in-delhi/",
        "destination": "/blog/pharma-third-party-manufacturers-in-delhi/",
        "permanent": true
      },
      {
        "source": "/manufacturers/third-party-pharma-products-manufacturers-in-chennai/",
        "destination": "/blog/pharma-third-party-manufacturers-in-chennai/",
        "permanent": true
      },
      {
        "source": "/manufacturers/third-party-pharmaceutical-manufacturers/",
        "destination": "/blog/top-10-third-party-pharma-manufacturing-companies-in-india/",
        "permanent": true
      },
      {
        "source": "/manufacturers/third-party-manufacturing-company-in-allahabad/",
        "destination": "/blog/third-party-pharma-manufacturing-company-in-allahabad/",
        "permanent": true
      },
      {
        "source": "/manufacturers/third-party-pharma-manufacturers-in-andhra-pradesh/",
        "destination": "/blog/third-party-pharma-manufacturing-company-in-andhra-pradesh/",
        "permanent": true
      },
      {
        "source": "/manufacturers/top-1-progesterone-tablet-manufacturers-in-india/",
        "destination": "/blog/progesterone-tablet-manufacturers-in-india/",
        "permanent": true
      },
      {
        "source": "/manufacturers/top-10-cardiac-diabetic-companies-in-india/",
        "destination": "/blog/top-cardiac-diabetic-manufacturers-in-india/",
        "permanent": true
      },
      {
        "source": "/manufacturers/top-10-dermatology-companies-in-india/",
        "destination": "/blog/top-derma-products-manufacturers-in-india/",
        "permanent": true
      },
      {
        "source": "/manufacturers/top-10-injection-manufacturing-companies-in-india/",
        "destination": "/blog/top-injection-manufacturers-in-india/",
        "permanent": true
      },
      {
        "source": "/manufacturers/top-10-manufacturing-companies-in-hoshiarpur/",
        "destination": "/blog/third-party-manufacturing-company-in-hoshiarpur/",
        "permanent": true
      },
      {
        "source": "/manufacturers/top-10-manufacturing-companies-in-jabalpur/",
        "destination": "/blog/third-party-manufacturing-company-in-jabalpur/",
        "permanent": true
      },
      {
        "source": "/manufacturers/top-10-medicine-manufacturers-in-india/",
        "destination": "/blog/top-10-medicine-manufacturers-in-india/",
        "permanent": true
      },
      {
        "source": "/manufacturers/top-10-neuropsychiatry-companies-in-india/",
        "destination": "/blog/top-neurology-medicine-manufacturers-in-india/",
        "permanent": true
      },
      {
        "source": "/manufacturers/top-10-pediatric-companies-in-india/",
        "destination": "/blog/top-pediatric-medicine-manufacturers-in-india/",
        "permanent": true
      },
      {
        "source": "/manufacturers/top-10-pharma-companies-in-india-2020/",
        "destination": "/blog/top-pharma-manufacturing-companies-in-india/",
        "permanent": true
      },
      {
        "source": "/manufacturers/top-10-pharma-companies-in-kerala/",
        "destination": "/blog/pharma-third-party-manufacturers-in-kerala/",
        "permanent": true
      },
      {
        "source": "/manufacturers/top-10-pharma-contract-manufacturers/",
        "destination": "/blog/top-10-pharma-contract-manufacturing-companies-in-india/",
        "permanent": true
      },
      {
        "source": "/manufacturers/top-10-pharma-injectable-manufacturers-in-india/",
        "destination": "/blog/top-injection-manufacturers-in-india/",
        "permanent": true
      },
      {
        "source": "/manufacturers/top-10-pharma-injection-manufacturers-in-india/",
        "destination": "/blog/top-injection-manufacturers-in-india/",
        "permanent": true
      },
      {
        "source": "/manufacturers/top-10-third-party-manufacturing-pharma-company-in-aizawl/",
        "destination": "/blog/third-party-manufacturing-company-in-aizawl/",
        "permanent": true
      },
      {
        "source": "/manufacturers/top-100-pharmaceutical-manufacturers-in-nalagarh/",
        "destination": "/blog/third-party-manufacturing-company-in-nalagarh/",
        "permanent": true
      },
      {
        "source": "/manufacturers/top-5-third-party-manufacturing-pharma-company-in-jalandhar/",
        "destination": "/blog/third-party-manufacturing-company-in-jalandhar/",
        "permanent": true
      },
      {
        "source": "/manufacturers/top-50-derma-product-manufacturer-in-india/",
        "destination": "/blog/top-derma-products-manufacturers-in-india/",
        "permanent": true
      },
      {
        "source": "/manufacturers/top-50-derma-third-party-manufacturers-in-baddi/",
        "destination": "/blog/top-derma-product-manufacturers-in-baddi/",
        "permanent": true
      },
      {
        "source": "/manufacturers/top-50-pharmaceutical-injectable-manufacturers-in-baddi/",
        "destination": "/blog/injection-manufacturers-in-baddi/",
        "permanent": true
      },
      {
        "source": "/manufacturers/top-cardiac-diabetic-companies-in-india/",
        "destination": "/blog/cardiac-diabetic-products-manufacturers-in-india/",
        "permanent": true
      },
      {
        "source": "/manufacturers/top-cardiac-diabetic-franchise-companies-in-india/",
        "destination": "/blog/cardiac-diabetic-products-manufacturers-in-india/",
        "permanent": true
      },
      {
        "source": "/manufacturers/top-cardiac-medicines-pcd-manufacturer-in-india/",
        "destination": "/blog/top-cardiology-medicine-manufacturers-in-india/",
        "permanent": true
      },
      {
        "source": "/manufacturers/top-diabetic-product-manufacturer-in-india/",
        "destination": "/blog/cardiac-diabetic-products-manufacturers-in-india/",
        "permanent": true
      },
      {
        "source": "/manufacturers/top-gummies-manufacturers-in-hyderabad/",
        "destination": "/blog/top-gummies-manufacturers-in-hyderabad/",
        "permanent": true
      },
      {
        "source": "/manufacturers/top-gummy-manufacturers-in-india/",
        "destination": "/blog/gummies-manufacturers-in-india/",
        "permanent": true
      },
      {
        "source": "/manufacturers/top-gummy-vitamin-manufacturer/",
        "destination": "/blog/gummy-vitamin-contract-manufacturers/",
        "permanent": true
      },
      {
        "source": "/manufacturers/top-gynae-tablets-in-india/",
        "destination": "/blog/gynae-tablet-manufacturers-in-india/",
        "permanent": true
      },
      {
        "source": "/manufacturers/top-gynaecology-tablet-manufacturer-in-india/",
        "destination": "/blog/gynae-tablet-manufacturers-in-india/",
        "permanent": true
      },
      {
        "source": "/manufacturers/top-health-gummies-manufacturers-in-india/",
        "destination": "/blog/gummies-manufacturers-in-india/",
        "permanent": true
      },
      {
        "source": "/manufacturers/top-injectable-companies-in-india/",
        "destination": "/blog/top-injection-manufacturers-in-india/",
        "permanent": true
      },
      {
        "source": "/manufacturers/top-injection-manufacturer-in-baddi/",
        "destination": "/blog/injection-manufacturer-in-baddi/",
        "permanent": true
      },
      {
        "source": "/manufacturers/top-injection-manufacturer-in-chandigarh/",
        "destination": "/blog/injection-manufacturer-in-chandigarh/",
        "permanent": true
      },
      {
        "source": "/manufacturers/top-injection-manufacturer-in-gujarat/",
        "destination": "/blog/injection-manufacturer-in-gujarat/",
        "permanent": true
      },
      {
        "source": "/manufacturers/top-manufacturer-of-molnupiravir-in-india/",
        "destination": "/blog/molnupiravir-capsules-manufacturers-in-india/",
        "permanent": true
      },
      {
        "source": "/manufacturers/top-multivitamin-manufacturers-in-india/",
        "destination": "/blog/multivitamin-manufacturers-in-india/",
        "permanent": true
      },
      {
        "source": "/manufacturers/top-neuropsychiatry-companies-in-india/",
        "destination": "/blog/top-neurology-medicine-manufacturers-in-india/",
        "permanent": true
      },
      {
        "source": "/manufacturers/top-nutraceutical-companies-in-mumbai/",
        "destination": "/blog/nutraceutical-companies-in-mumbai/",
        "permanent": true
      },
      {
        "source": "/manufacturers/top-ortho-products-companies-in-india/",
        "destination": "/blog/top-ortho-product-manufacturers-in-india/",
        "permanent": true
      },
      {
        "source": "/manufacturers/top-orthopedic-companies-in-india/",
        "destination": "/blog/top-ortho-product-manufacturers-in-india/",
        "permanent": true
      },
      {
        "source": "/manufacturers/top-orthopedic-products-companies-in-india/",
        "destination": "/blog/top-ortho-product-manufacturers-in-india/",
        "permanent": true
      },
      {
        "source": "/manufacturers/top-pediatric-companies-in-india/",
        "destination": "/blog/top-pediatric-medicine-manufacturers-in-india/",
        "permanent": true
      },
      {
        "source": "/manufacturers/top-pharma-company-in-delhi/",
        "destination": "/blog/pharma-third-party-manufacturers-in-delhi/",
        "permanent": true
      },
      {
        "source": "/manufacturers/top-pharma-manufacturers-in-chhattisgarh/",
        "destination": "/blog/third-party-pharma-manufacturing-company-in-chhattisgarh/",
        "permanent": true
      },
      {
        "source": "/manufacturers/top-pharma-manufacturing-companies-in-india/",
        "destination": "/blog/top-pharma-manufacturing-companies-in-india/",
        "permanent": true
      },
      {
        "source": "/manufacturers/top-pharma-manufacturing-company-in-gujarat/",
        "destination": "/blog/pharma-third-party-manufacturers-in-gujarat/",
        "permanent": true
      },
      {
        "source": "/manufacturers/top-pharma-third-party-company-in-noida/",
        "destination": "/blog/third-party-pharma-manufacturing-company-in-noida/",
        "permanent": true
      },
      {
        "source": "/manufacturers/top-pharma-third-party-manufacturers-in-ahmedabad/",
        "destination": "/blog/third-party-pharma-manufacturing-company-in-ahmedabad/",
        "permanent": true
      },
      {
        "source": "/manufacturers/top-pharmaceutical-companies-in-india/",
        "destination": "/blog/top-otc-product-manufacturers-in-india/",
        "permanent": true
      },
      {
        "source": "/manufacturers/top-pharmaceutical-company-in-karnataka/",
        "destination": "/blog/pharma-third-party-manufacturers-in-karnataka/",
        "permanent": true
      },
      {
        "source": "/manufacturers/top-pharmaceutical-company-in-tripura/",
        "destination": "/blog/third-party-manufacturing-company-in-tripura/",
        "permanent": true
      },
      {
        "source": "/manufacturers/top-pharmaceutical-third-party-manufacturer-in-guntur/",
        "destination": "/blog/third-party-manufacturing-company-in-guntur/",
        "permanent": true
      },
      {
        "source": "/manufacturers/top-pharmaceutical-third-party-manufacturing-in-jalandhar/",
        "destination": "/blog/third-party-manufacturing-company-in-jalandhar/",
        "permanent": true
      },
      {
        "source": "/manufacturers/top-private-label-medicine-manufacturer-in-india/",
        "destination": "/blog/private-label-medicine-manufacturer-in-india/",
        "permanent": true
      },
      {
        "source": "/manufacturers/top-private-label-medicine-manufacturers-in-india/",
        "destination": "/blog/private-label-medicine-manufacturers-in-india/",
        "permanent": true
      },
      {
        "source": "/manufacturers/top-softgel-manufacturers-in-india/",
        "destination": "/blog/top-softgel-capsules-manufacturers-in-india/",
        "permanent": true
      },
      {
        "source": "/manufacturers/top-third-party-manufacturers-in-kozhikode/",
        "destination": "/blog/third-party-pharma-manufacturing-company-in-kozhikode/",
        "permanent": true
      },
      {
        "source": "/manufacturers/top-third-party-manufacturers-in-odisha/",
        "destination": "/blog/third-party-pharma-manufacturing-company-in-odisha/",
        "permanent": true
      },
      {
        "source": "/manufacturers/top-third-party-manufacturers-in-thiruvananthapuram/",
        "destination": "/blog/third-party-pharma-manufacturing-company-in-thiruvananthapuram/",
        "permanent": true
      },
      {
        "source": "/manufacturers/top-third-party-manufacturing-company-in-ahmedabad/",
        "destination": "/blog/third-party-manufacturing-company-in-ahmedabad/",
        "permanent": true
      },
      {
        "source": "/manufacturers/top-third-party-manufacturing-company-in-dhanbad/",
        "destination": "/blog/third-party-manufacturing-company-in-dhanbad/",
        "permanent": true
      },
      {
        "source": "/manufacturers/top-third-party-manufacturing-company-in-gurgaon/",
        "destination": "/blog/third-party-manufacturing-company-in-gurgaon/",
        "permanent": true
      },
      {
        "source": "/manufacturers/top-third-party-manufacturing-company-in-guwahati/",
        "destination": "/blog/third-party-manufacturing-company-in-guwahati/",
        "permanent": true
      },
      {
        "source": "/manufacturers/top-third-party-manufacturing-company-in-hisar/",
        "destination": "/blog/third-party-manufacturing-company-in-hisar/",
        "permanent": true
      },
      {
        "source": "/manufacturers/top-third-party-manufacturing-company-in-kozhikode/",
        "destination": "/blog/third-party-pharma-manufacturing-company-in-kozhikode/",
        "permanent": true
      },
      {
        "source": "/manufacturers/top-third-party-manufacturing-company-in-madurai/",
        "destination": "/blog/third-party-manufacturing-company-in-madurai/",
        "permanent": true
      },
      {
        "source": "/manufacturers/top-third-party-manufacturing-company-in-moga/",
        "destination": "/blog/third-party-manufacturing-company-in-moga/",
        "permanent": true
      },
      {
        "source": "/manufacturers/top-third-party-manufacturing-company-in-nagpur/",
        "destination": "/blog/third-party-manufacturing-company-in-nagpur/",
        "permanent": true
      },
      {
        "source": "/manufacturers/top-third-party-manufacturing-company-in-nizamabad/",
        "destination": "/blog/third-party-manufacturing-company-in-nizamabad/",
        "permanent": true
      },
      {
        "source": "/manufacturers/top-third-party-manufacturing-company-in-srinagar/",
        "destination": "/blog/third-party-manufacturing-company-in-srinagar/",
        "permanent": true
      },
      {
        "source": "/manufacturers/top-third-party-manufacturing-company-in-tarn-taran/",
        "destination": "/blog/third-party-manufacturing-company-in-tarn-taran/",
        "permanent": true
      },
      {
        "source": "/manufacturers/top-third-party-manufacturing-company-in-telangana/",
        "destination": "/blog/third-party-manufacturing-company-in-telangana/",
        "permanent": true
      },
      {
        "source": "/manufacturers/top-third-party-manufacturing-company-in-varanasi/",
        "destination": "/blog/third-party-manufacturing-company-in-varanasi/",
        "permanent": true
      },
      {
        "source": "/manufacturers/top-third-party-manufacturing-in-siliguri/",
        "destination": "/blog/third-party-manufacturing-company-in-siliguri/",
        "permanent": true
      },
      {
        "source": "/manufacturers/top-third-party-manufacturing-pharma-company-in-burhanpur/",
        "destination": "/blog/third-party-manufacturing-company-in-burhanpur/",
        "permanent": true
      },
      {
        "source": "/manufacturers/top-third-party-pharma-manufacturer-in-bangalore/",
        "destination": "/blog/third-party-pharma-manufacturing-company-in-bangalore/",
        "permanent": true
      },
      {
        "source": "/manufacturers/top-third-party-pharma-manufacturer-in-surat/",
        "destination": "/blog/third-party-pharma-manufacturing-company-in-surat/",
        "permanent": true
      },
      {
        "source": "/manufacturers/top-third-party-pharma-manufacturers-in-cuttack/",
        "destination": "/blog/third-party-manufacturing-company-in-cuttack/",
        "permanent": true
      },
      {
        "source": "/manufacturers/top-third-party-pharma-manufacturers-in-gorakhpur/",
        "destination": "/blog/third-party-manufacturing-company-in-gorakhpur/",
        "permanent": true
      },
      {
        "source": "/manufacturers/top-third-party-pharma-manufacturers-in-jabalpur/",
        "destination": "/blog/third-party-manufacturing-company-in-jabalpur/",
        "permanent": true
      },
      {
        "source": "/manufacturers/top-third-party-pharma-manufacturers-in-karnal/",
        "destination": "/blog/third-party-pharma-manufacturing-company-in-karnal/",
        "permanent": true
      },
      {
        "source": "/manufacturers/top-third-party-pharma-manufacturers-in-kolkata/",
        "destination": "/blog/third-party-pharma-manufacturing-company-in-kolkata/",
        "permanent": true
      },
      {
        "source": "/manufacturers/top-third-party-pharma-manufacturers-in-kota/",
        "destination": "/blog/third-party-pharma-manufacturing-company-in-kota/",
        "permanent": true
      },
      {
        "source": "/manufacturers/top-third-party-pharma-manufacturing-company-in-ajmer/",
        "destination": "/blog/third-party-pharma-manufacturing-company-in-ajmer/",
        "permanent": true
      },
      {
        "source": "/manufacturers/top-third-party-pharma-manufacturing-company-in-aligarh/",
        "destination": "/blog/third-party-pharma-manufacturing-company-in-aligarh/",
        "permanent": true
      },
      {
        "source": "/manufacturers/top-third-party-pharma-manufacturing-company-in-assam/",
        "destination": "/blog/third-party-pharma-manufacturing-company-in-assam/",
        "permanent": true
      },
      {
        "source": "/manufacturers/top-third-party-pharma-manufacturing-company-in-goa/",
        "destination": "/blog/third-party-pharma-manufacturing-company-in-goa/",
        "permanent": true
      },
      {
        "source": "/manufacturers/top-third-party-pharma-manufacturing-company-in-hyderabad/",
        "destination": "/blog/third-party-pharma-manufacturing-company-in-hyderabad/",
        "permanent": true
      },
      {
        "source": "/manufacturers/top-third-party-pharma-manufacturing-company-in-indore/",
        "destination": "/blog/third-party-pharma-manufacturing-company-in-indore/",
        "permanent": true
      },
      {
        "source": "/manufacturers/top-third-party-pharma-manufacturing-company-in-jhansi/",
        "destination": "/blog/third-party-pharma-manufacturing-company-in-jhansi/",
        "permanent": true
      },
      {
        "source": "/manufacturers/top-third-party-pharma-manufacturing-company-in-kolkata/",
        "destination": "/blog/third-party-pharma-manufacturing-company-in-kolkata/",
        "permanent": true
      },
      {
        "source": "/manufacturers/top-third-party-pharma-manufacturing-company-in-kota/",
        "destination": "/blog/third-party-pharma-manufacturing-company-in-kota/",
        "permanent": true
      },
      {
        "source": "/manufacturers/top-third-party-pharma-manufacturing-company-in-kurukshetra/",
        "destination": "/blog/third-party-pharma-manufacturing-company-in-kurukshetra/",
        "permanent": true
      },
      {
        "source": "/manufacturers/top-third-party-pharma-manufacturing-company-in-mangalore/",
        "destination": "/blog/third-party-pharma-manufacturing-company-in-mangalore/",
        "permanent": true
      },
      {
        "source": "/manufacturers/top-third-party-pharma-manufacturing-company-in-surat/",
        "destination": "/blog/third-party-pharma-manufacturing-company-in-surat/",
        "permanent": true
      },
      {
        "source": "/manufacturers/top-third-party-pharma-manufacturing-company-in-trivandrum/",
        "destination": "/blog/third-party-pharma-manufacturing-company-in-trivandrum/",
        "permanent": true
      },
      {
        "source": "/manufacturers/top-third-party-pharma-manufacturing-company-in-vijayawada/",
        "destination": "/blog/third-party-pharma-manufacturing-company-in-vijayawada/",
        "permanent": true
      },
      {
        "source": "/manufacturers/top-third-party-pharma-manufacturing-company-in-vishakhapatnam/",
        "destination": "/blog/third-party-pharma-manufacturing-company-in-vishakhapatnam/",
        "permanent": true
      },
      {
        "source": "/manufacturers/top-third-party-pharma-manufacturing-in-nagpur/",
        "destination": "/blog/third-party-manufacturing-company-in-nagpur/",
        "permanent": true
      },
      {
        "source": "/manufacturers/top-third-party-pharmaceutical-company-in-goa/",
        "destination": "/blog/third-party-pharma-manufacturing-company-in-goa/",
        "permanent": true
      },
      {
        "source": "/manufacturers/top-third-party-manufacturing-company-in-allahabad/",
        "destination": "/blog/third-party-pharma-manufacturing-company-in-allahabad/",
        "permanent": true
      },
      {
        "source": "/manufacturers/top-third-party-pharma-manufacturing-company-in-andhra-pradesh/",
        "destination": "/blog/third-party-pharma-manufacturing-company-in-andhra-pradesh/",
        "permanent": true
      },
      {
        "source": "/manufacturers/top-third-party-pharma-manufacturing-company-in-himachal-pradesh/",
        "destination": "/blog/third-party-pharma-manufacturing-company-in-himachal-pradesh/",
        "permanent": true
      },
      {
        "source": "/manufacturers/top-third-party-pharma-manufacturing-company-in-moradabad/",
        "destination": "/blog/third-party-pharma-manufacturing-company-in-moradabad/",
        "permanent": true
      },
      {
        "source": "/manufacturers/top-third-party-pharma-manufacturing-company-in-nashik/",
        "destination": "/blog/third-party-pharma-manufacturing-company-in-nashik/",
        "permanent": true
      },
      {
        "source": "/manufacturers/top-third-party-pharma-manufacturing-company-in-sikkim/",
        "destination": "/blog/third-party-pharma-manufacturing-company-in-sikkim/",
        "permanent": true
      },
      {
        "source": "/manufacturers/top-vitamin-c-tablets-manufacturers-in-india/",
        "destination": "/blog/vitamin-c-tablets-manufacturers-in-india/",
        "permanent": true
      },
      {
        "source": "/manufacturers/top-zinc-tablet-dealers-in-in-india/",
        "destination": "/blog/zinc-tablet-manufacturers-in-india/",
        "permanent": true
      },
      {
        "source": "/manufacturers/topmost-cosmetic-manufacturers-in-india/",
        "destination": "/blog/top-cosmetic-manufacturers-in-india/",
        "permanent": true
      },
      {
        "source": "/manufacturers/topmost-nutraceutical-companies-in-gujarat/",
        "destination": "/blog/vitamin-c-tablets-manufacturers-in-india/",
        "permanent": true
      },
      {
        "source": "/manufacturers/topmost-third-party-manufacturers-in-jaipur/",
        "destination": "/blog/third-party-pharma-manufacturing-company-in-jaipur/",
        "permanent": true
      },
      {
        "source": "/manufacturers/trivandrum-based-third-party-pharma-manufacturing-company-in-trivandrum/",
        "destination": "/blog/third-party-pharma-manufacturing-company-in-trivandrum/",
        "permanent": true
      },
      {
        "source": "/manufacturers/vasai-based-third-party-manufacturers/",
        "destination": "/blog/third-party-manufacturing-company-in-vasai/",
        "permanent": true
      },
      {
        "source": "/manufacturers/vitamin-multivitamin-gummies/",
        "destination": "/blog/gummy-vitamin-contract-manufacturers/",
        "permanent": true
      },
      {
        "source": "/manufacturers/vitamin-c-chewable-tablets-manufacturer/",
        "destination": "/blog/vitamin-c-tablets-manufacturers-in-india/",
        "permanent": true
      },
      {
        "source": "/manufacturers/vitamin-c-manufacturers/",
        "destination": "/blog/vitamin-c-tablets-manufacturers-in-india/",
        "permanent": true
      },
      {
        "source": "/manufacturers/who-gmp-certified-third-party-pharma-manufacturer-in-india/",
        "destination": "/blog/who-gmp-certified-third-party-pharma-manufacturer/",
        "permanent": true
      },
      {
        "source": "/manufacturers/zinc-tablet-dealers-in-india/",
        "destination": "/blog/zinc-tablet-manufacturers-in-india/",
        "permanent": true
      },
      {
        "source": "/manufacturers/zoic-biotech-in-gwalior/",
        "destination": "/blog/third-party-pharma-manufacturing-company-in-gwalior/",
        "permanent": true
      },
      {
        "source": "/product-tag/best-glucosamine-capsule-manufacturers/",
        "destination": "/products",
        "permanent": true
      },
      {
        "source": "/product-tag/best-indomethacin-capsules-manufacturers/",
        "destination": "/products",
        "permanent": true
      },
      {
        "source": "/product-tag/best-itraconazole-capsules-manufacturers/",
        "destination": "/products",
        "permanent": true
      },
      {
        "source": "/product-tag/best-quality-glucosamine-capsule/",
        "destination": "/products",
        "permanent": true
      },
      {
        "source": "/product-tag/glucosamine-capsule-manufacturer-supplier-india/",
        "destination": "/products",
        "permanent": true
      },
      {
        "source": "/product-tag/high-quality-indomethacin-capsules/",
        "destination": "/products",
        "permanent": true
      },
      {
        "source": "/product-tag/high-quality-itraconazole-capsules/",
        "destination": "/products",
        "permanent": true
      },
      {
        "source": "/product-tag/indomethacin-capsules-manufacturers-and-suppliers-in-india/",
        "destination": "/products",
        "permanent": true
      },
      {
        "source": "/product-tag/itraconazole-capsules-manufacturers-and-suppliers-in-india/",
        "destination": "/products",
        "permanent": true
      },
      {
        "source": "/product-tag/top-glucosamine-capsule-manufacturers/",
        "destination": "/products",
        "permanent": true
      },
      {
        "source": "/product-tag/top-indomethacin-capsules-manufacturers/",
        "destination": "/products",
        "permanent": true
      },
      {
        "source": "/product-tag/top-itraconazole-capsules-manufacturers/",
        "destination": "/products",
        "permanent": true
      },
      {
        "source": "/product/vitamin-k2\u20137-22-5-mcg-calcitriol-0-25-mcg-calcium-carbonate-625-mg-boron-500-mcg-zinc-7-5-mg-cap-tablets",
        "destination": "/product/vitamin-k2%c2%967-22-5-mcg-calcitriol-0-25-mcg-calcium-carbonate-625-mg-boron-500-mcg-zinc-7-5-mg-cap-tablets/",
        "permanent": true
      },
      {
        "source": "/product/vitamin-k2\u20137-50-mcg-calcitriol-0-25-mg-calciumcitrate-750-mg-methylcobalamin-1500-mcg-cholecalciferol-2-5-mcg-tablet",
        "destination": "/product/vitamin-k2%c2%967-50-mcg-calcitriol-0-25-mg-calciumcitrate-750-mg-methylcobalamin-1500-mcg-cholecalciferol-2-5-mcg-tablet/",
        "permanent": true
      },
      {
        "source": "/product/vitamin-k2\u20137-50-mcg-calcitriol-0-25-mcg-calcium-carbonate-225-mg-magnesium-50-mg-zinc-7-5-mg-tablet",
        "destination": "/product/vitamin-k2%c2%967-22-5-mcg-calcitriol-0-25-mcg-calcium-carbonate-625-mg-boron-500-mcg-zinc-7-5-mg-cap-tablets/",
        "permanent": true
      },
      {
        "source": "/product-category/ointments",
        "destination": "/products",
        "permanent": true
      }
    ]
  }
};

export default nextConfig;