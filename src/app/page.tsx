import { PopularDestinations } from '@/components/PopularDestinations';
import { SearchForm } from '@/components/SearchForm';
import { WhyChooseUs } from '@/components/WhyChooseUs';
import { CallToAction } from '@/components/CallToAction';

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <main>
        <SearchForm />
        <PopularDestinations />
        <WhyChooseUs />
        <CallToAction />
      </main>
    </div>
  );
}