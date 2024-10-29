import { SearchForm } from '@/components/SearchForm';
import { PopularDestinations } from '@/components/PopularDestinations';
import { WhyChooseUs } from '@/components/WhyChooseUs';
import { Testimonials } from '@/components/Testimonials';
import { CallToAction } from '@/components/CallToAction';

export function HomePage() {
  return (
    <main>
      <SearchForm />
      <PopularDestinations />
      <WhyChooseUs />
      <Testimonials />
      <CallToAction />
    </main>
  );
}