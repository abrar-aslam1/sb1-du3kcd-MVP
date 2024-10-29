import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { SearchForm } from '@/components/SearchForm';

describe('SearchForm', () => {
  it('renders all form fields', () => {
    render(<SearchForm />);

    expect(screen.getByLabelText(/destination/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/date/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/guests/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /search/i })).toBeInTheDocument();
  });

  it('handles form submission', async () => {
    const user = userEvent.setup();
    render(<SearchForm />);

    const destinationInput = screen.getByLabelText(/destination/i);
    const dateInput = screen.getByLabelText(/date/i);
    const guestsInput = screen.getByLabelText(/guests/i);
    const submitButton = screen.getByRole('button', { name: /search/i });

    await user.type(destinationInput, 'Bali');
    await user.type(dateInput, '2024-12-25');
    await user.type(guestsInput, '100');
    await user.click(submitButton);

    expect(destinationInput).toHaveValue('Bali');
    expect(dateInput).toHaveValue('2024-12-25');
    expect(guestsInput).toHaveValue(100);
  });

  it('validates required fields', async () => {
    const user = userEvent.setup();
    render(<SearchForm />);

    const submitButton = screen.getByRole('button', { name: /search/i });
    await user.click(submitButton);

    expect(screen.getByLabelText(/destination/i)).toBeRequired();
    expect(screen.getByLabelText(/date/i)).toBeRequired();
    expect(screen.getByLabelText(/guests/i)).toBeRequired();
  });
});