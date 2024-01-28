import { render, screen } from '@testing-library/react';
import { BaseLayout } from './base-layout';
import { it, vi, expect, describe, beforeEach } from 'vitest';

vi.mock('react-router-dom', () => ({
  Outlet: vi.fn(() => <div data-testid="mockOutlet" />),
  useLocation: vi.fn(() => ({ hash: 'testHash' }))
}));

vi.mock('./components/Navbar', () => ({
  Navbar: vi.fn(() => <div data-testid="mockNavbar" />)
}));

vi.mock('./components/Partnered', () => ({
  Partnered: vi.fn(() => <div data-testid="mockPartnered" />)
}));

vi.mock('./components/Footer', () => ({
  Footer: vi.fn(() => <div data-testid="mockFooter" />)
}));

describe('BaseLayout', () => {
  beforeEach(() => {
    render(<BaseLayout />);
  });

  it('renders Navbar component', () => {
    expect(screen.getByTestId('mockNavbar')).toBeInTheDocument();
  });

  it('renders Outlet component', () => {
    expect(screen.getByTestId('mockOutlet')).toBeInTheDocument();
  });

  it('renders Partnered component', () => {
    expect(screen.getByTestId('mockPartnered')).toBeInTheDocument();
  });

  it('renders Footer component', () => {
    expect(screen.getByTestId('mockFooter')).toBeInTheDocument();
  });
});