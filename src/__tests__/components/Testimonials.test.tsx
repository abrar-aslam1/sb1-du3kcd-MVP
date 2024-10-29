import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Testimonials } from '@/components/Testimonials';

describe('Testimonials', () => {
  it('renders testimonials section with correct heading', () => {
    render(<Testimonials />);
    expect(screen.getByText('What Our Couples Say')).toBeInTheDocument();
  });

  it('displays all testimonial cards', () => {
    render(<Testimonials />);
    expect(screen.getAllByRole('listitem')).toHaveLength(3);
  });

  it('shows correct testimonial information', () => {
    render(<Testimonials />);
    
    expect(screen.getByText('Sarah & James')).toBeInTheDocument();
    expect(screen.getByText('Wedding in Bali')).toBeInTheDocument();
    expect(screen.getByText(/Our destination wedding in Bali/)).toBeInTheDocument();
  });

  it('has proper accessibility attributes', () => {
    render(<Testimonials />);
    
    expect(screen.getByRole('list')).toHaveAttribute('aria-label', 'Wedding couple testimonials');
    expect(screen.getByLabelText(/Rating: 5 out of 5 stars/)).toBeInTheDocument();
  });
});