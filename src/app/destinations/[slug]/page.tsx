import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Script from 'next/script';
import Image from 'next/image';
import { destinations } from '@/data/destinations';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { generateDestinationSchema, generateSEOMetadata } from '@/lib/seo';

export const runtime = 'edge';
export const preferredRegion = 'auto';
export const dynamic = 'force-static';

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const destination = destinations.find((d) => d.slug === params.slug);

  if (!destination) {
    return {};
  }

  return generateSEOMetadata({
    title: `${destination.name}, ${destination.country} - Destination Wedding Guide`,
    description: `Plan your dream wedding in ${destination.name}. Discover venues, vendors, and everything you need for a perfect destination wedding in ${destination.country}.`,
    path: `/destinations/${destination.slug}`,
    imageUrl: destination.imageUrl,
  });
}

export async function generateStaticParams() {
  return destinations.map((destination) => ({
    slug: destination.slug,
  }));
}

export default function DestinationPage({
  params,
}: {
  params: { slug: string };
}) {
  const destination = destinations.find((d) => d.slug === params.slug);

  if (!destination) {
    notFound();
  }

  const jsonLd = generateDestinationSchema(destination);

  return (
    <>
      <Script
        id="destination-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        strategy="afterInteractive"
      />

      <div className="flex flex-col min-h-screen">
        <Header />

        <main className="flex-grow">
          <div className="relative h-[60vh]">
            <Image
              src={`${destination.imageUrl}?auto=format&fit=crop&w=1920&q=80`}
              alt={destination.name}
              fill
              priority
              sizes="100vw"
              className="object-cover"
              placeholder="blur"
              blurDataURL={`${destination.imageUrl}?auto=format,compress&q=1&blur=500&w=10`}
            />
            <div className="absolute inset-0 bg-black/40" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center text-white">
                <h1 className="text-5xl font-bold mb-4">{destination.name}</h1>
                <p className="text-xl">{destination.country}</p>
              </div>
            </div>
          </div>

          <div className="container mx-auto px-4 py-16">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-6">About {destination.name}</h2>
              <p className="text-lg text-gray-600 mb-8">{destination.description}</p>
              
              <h3 className="text-2xl font-bold mb-4">Popular Wedding Venues</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Venue cards would go here */}
              </div>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
}