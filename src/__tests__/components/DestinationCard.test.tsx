import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { DestinationCard } from '@/components/DestinationCard';

const mockDestination = {
  id: 'bali-indonesia',
  name: 'Bali',
  country: 'Indonesia',
  slug: 'bali',
  description: 'A tropical paradise with stunning beaches.',
  imageUrl: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4',
  features: ['Beach Ceremonies', 'Traditional Venues', 'Luxury Resorts'],
  popularVenues: 150,
  startingPrice: 5000,
  rating: 4.8,
  reviews: 524,
};

describe('DestinationCard', () => {
  it('renders destination information correctly', () => {
    render(<DestinationCard destination={mockDestination} />);

    expect(screen.getByText('Bali, Indonesia')).toBeInTheDocument();
    expect(screen.getByText('A tropical paradise with stunning beaches.')).toBeInTheDocument();
    expect(screen.getByText('150 Popular Venues')).toBeInTheDocument();
    expect(screen.getByText('Professional Photographers')).toBeInTheDocument();
    expect(screen.getByText('Expert Wedding Planners')).toBeInTheDocument();
  });

  it('has correct accessibility attributes', () => {
    render(<DestinationCard destination={mockDestination} />);

    expect(screen.getByRole('listitem')).toBeInTheDocument();
    expect(screen.getByRole('img')).toHaveAttribute('alt', 'Bali, Indonesia - Wedding Destination');
    expect(screen.getByLabelText(/Explore wedding venues and services in Bali/i)).toBeInTheDocument();
  });

  it('renders related destinations', () => {
    render(<DestinationCard destination={mockDestination} />);
    
    const relatedSection = screen.getByText('Similar Destinations');
    expect(relatedSection).toBeInTheDocument();
  });
});