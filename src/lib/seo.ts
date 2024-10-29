import { type Destination } from '@/data/destinations';
import { type Vendor } from '@/data/vendors';

export function generateSEOMetadata({
  title,
  description,
  path,
  imageUrl,
}: {
  title: string;
  description: string;
  path: string;
  imageUrl?: string;
}) {
  const baseUrl = process.env.SITE_URL || 'https://destinationwed.com';
  const url = `${baseUrl}${path}`;
  const defaultImage = `${baseUrl}/og-image.jpg`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url,
      images: [
        {
          url: imageUrl || defaultImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      siteName: 'DestinationWed',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [imageUrl || defaultImage],
    },
  };
}

export function generateDestinationSchema(destination: Destination) {
  return {
    '@context': 'https://schema.org',
    '@type': 'TouristDestination',
    name: `${destination.name}, ${destination.country}`,
    description: destination.description,
    image: destination.imageUrl,
    address: {
      '@type': 'PostalAddress',
      addressCountry: destination.country,
      addressLocality: destination.name,
    },
  };
}

export function generateVendorSchema(vendor: Vendor, destination?: Destination) {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: destination
      ? `${vendor.type} in ${destination.name}`
      : vendor.type,
    description: vendor.description,
    areaServed: destination
      ? {
          '@type': 'City',
          name: destination.name,
          containedInPlace: {
            '@type': 'Country',
            name: destination.country,
          },
        }
      : undefined,
    service: vendor.services.map((service) => ({
      '@type': 'Service',
      name: service,
    })),
  };
}