interface TestimonialCardProps {
  name: string;
  location: string;
  image: string;
  quote: string;
  rating: number;
  date: string;
}

export function TestimonialCard({ 
  name, 
  location, 
  image, 
  quote, 
  rating,
  date 
}: TestimonialCardProps) {
  return (
    <div 
      className="bg-white rounded-lg shadow-md p-6"
      role="listitem"
    >
      <div className="flex items-center mb-4">
        <div className="relative w-12 h-12 mr-4">
          <img
            src={image}
            alt={name}
            className="rounded-full object-cover w-full h-full"
            loading="lazy"
          />
        </div>
        <div>
          <h3 className="font-semibold">{name}</h3>
          <p className="text-sm text-gray-500">{location}</p>
          <time dateTime={date} className="text-xs text-gray-400">
            {new Date(date).toLocaleDateString('en-US', { 
              year: 'numeric', 
              month: 'long' 
            })}
          </time>
        </div>
      </div>
      <div className="flex mb-4" aria-label={`Rating: ${rating} out of 5 stars`}>
        {[...Array(5)].map((_, i) => (
          <svg
            key={i}
            className={`w-5 h-5 ${
              i < rating ? 'text-yellow-400' : 'text-gray-300'
            }`}
            fill="currentColor"
            viewBox="0 0 20 20"
            aria-hidden="true"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
      <blockquote className="text-gray-600 italic">
        <p>"{quote}"</p>
      </blockquote>
    </div>
  );
}