import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Script from 'next/script';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { destinations } from '@/data/destinations';
import { vendors } from '@/data/vendors';
import { MapPin, Users, Mail, Phone } from 'lucide-react';
import { generateSEOMetadata, generateVendorSchema } from '@/lib/seo';

export async function generateMetadata({
  params,
}: {
  params: { vendor: string; destination: string };
}): Promise<Metadata> {
  const destination = destinations.find((d) => d.slug === params.destination);
  const vendor = vendors.find((v) => v.slug === params.vendor);

  if (!destination || !vendor) {
    return {};
  }

  return generateSEOMetadata({
    title: `${vendor.type} in ${destination.name}, ${destination.country}`,
    description: `Find the perfect ${vendor.type.toLowerCase()} for your wedding in ${destination.name}. Professional ${vendor.type.toLowerCase()} services for destination weddings in ${destination.country}.`,
    path: `/${vendor.slug}/${destination.slug}`,
    imageUrl: destination.imageUrl,
  });
}

export async function generateStaticParams() {
  const paths = [];
  vendors.forEach((vendor) => {
    destinations.forEach((destination) => {
      paths.push({
        vendor: vendor.slug,
        destination: destination.slug,
      });
    });
  });
  return paths;
}

export default function VendorInDestinationPage({
  params,
}: {
  params: { vendor: string; destination: string };
}) {
  const destination = destinations.find((d) => d.slug === params.destination);
  const vendor = vendors.find((v) => v.slug === params.vendor);

  if (!destination || !vendor) {
    notFound();
  }

  const jsonLd = generateVendorSchema(vendor, destination);

  return (
    <>
      <Script
        id="vendor-destination-jsonld"
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