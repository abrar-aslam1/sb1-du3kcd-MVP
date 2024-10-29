import { MapPin, Heart, Calendar } from 'lucide-react';

const features = [
  {
    icon: MapPin,
    title: 'Handpicked Venues',
    description: 'We curate the best wedding venues from around the world.',
  },
  {
    icon: Heart,
    title: 'Expert Planners',
    description: 'Connect with experienced destination wedding planners.',
  },
  {
    icon: Calendar,
    title: 'Stress-Free Planning',
    description: 'We handle the details so you can enjoy your special day.',
  },
];

export function WhyChooseUs() {
  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Why Choose DestinationWed?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map(({ icon: Icon, title, description }) => (
            <div key={title} className="bg-white rounded-lg shadow-md p-6 text-center">
              <Icon className="w-12 h-12 mx-auto mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-2">{title}</h3>
              <p className="text-gray-600">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}