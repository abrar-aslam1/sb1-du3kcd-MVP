import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Script from 'next/script';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { vendors } from '@/data/vendors';
import { destinations } from '@/data/destinations';
import { MapPin } from 'lucide-react';
import { generateSEOMetadata, generateVendorSchema } from '@/lib/seo';

export async function generateMetadata({
  params,
}: {
  params: { vendor: string };
}): Promise<Metadata> {
  const vendor = vendors.find((v) => v.slug === params.vendor);

  if (!vendor) {
    return {};
  }

  return generateSEOMetadata({
    title: `${vendor.type} for Destination Weddings`,
    description: `Find professional ${vendor.type.toLowerCase()} for your destination wedding. Browse our curated selection of ${vendor.type.toLowerCase()} across beautiful wedding destinations.`,
    path: `/${vendor.slug}`,
  });
}

export async function generateStaticParams() {
  return vendors.map((vendor) => ({
    vendor: vendor.slug,
  }));
}

export default function VendorPage({
  params,
}: {
  params: { vendor: string };
}) {
  const vendor = vendors.find((v) => v.slug === params.vendor);

  if (!vendor) {
    notFound();
  }

  const jsonLd = generateVendorSchema(vendor);

  return (
    <>
      <Script
        id="vendor-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="flex flex-col min-h-screen">
        <Header />

        {/* Rest of the component remains the same */}

        <Footer />
      </div>
    </>
  );
}