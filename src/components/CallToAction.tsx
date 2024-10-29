import { Link } from 'react-router-dom';

export function CallToAction() {
  return (
    <section className="py-16 bg-white" aria-labelledby="cta-title">
      <div className="container mx-auto px-4 text-center">
        <h2 
          id="cta-title"
          className="text-3xl font-bold mb-8"
        >
          Ready to Start Planning?
        </h2>
        <p className="text-xl text-gray-600 mb-8">
          Let us help you create the destination wedding of your dreams.
        </p>
        <Link
          to="/contact"
          className="inline-block bg-primary text-white py-3 px-8 rounded-md hover:bg-primary/90 transition duration-300"
          role="button"
          aria-label="Contact our wedding planning team"
        >
          Contact Us
        </Link>
      </div>
    </section>
  );
}