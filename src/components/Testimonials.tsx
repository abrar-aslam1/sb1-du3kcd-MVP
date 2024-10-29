import { TestimonialCard } from './TestimonialCard';

const testimonials = [
  {
    name: 'Sarah & James',
    location: 'Wedding in Bali',
    image: 'https://images.unsplash.com/photo-1623091410901-00e2d268901f?w=100&h=100&fit=crop',
    quote: 'Our destination wedding in Bali was absolutely perfect. The team helped us plan everything down to the smallest detail.',
    rating: 5,
    date: '2024-01-15',
  },
  {
    name: 'Maria & Alex',
    location: 'Wedding in Santorini',
    image: 'https://images.unsplash.com/photo-1623091411395-09e79fdbfcf3?w=100&h=100&fit=crop',
    quote: 'The venues in Santorini were breathtaking. We couldn\'t have asked for a more beautiful setting for our special day.',
    rating: 5,
    date: '2024-02-01',
  },
  {
    name: 'Emma & David',
    location: 'Wedding in Tuscany',
    image: 'https://images.unsplash.com/photo-1623091411419-85d84fb3d2d9?w=100&h=100&fit=crop',
    quote: 'From the vineyard ceremony to the villa reception, everything was exactly as we dreamed it would be.',
    rating: 5,
    date: '2024-02-15',
  },
];

export function Testimonials() {
  return (
    <section className="py-16 bg-gray-50" aria-labelledby="testimonials-title">
      <div className="container mx-auto px-4">
        <h2 
          id="testimonials-title" 
          className="text-3xl font-bold mb-8 text-center"
        >
          What Our Couples Say
        </h2>
        <div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          role="list"
          aria-label="Wedding couple testimonials"
        >
          {testimonials.map((testimonial) => (
            <TestimonialCard
              key={testimonial.name}
              {...testimonial}
            />
          ))}
        </div>
      </div>
    </section>
  );
}