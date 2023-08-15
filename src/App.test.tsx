import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { App } from './App';

describe('App', () => {
  it('should render main title of the application', () => {
    render(<App />);

    // Test button styles
    expect(screen.getByTestId('phonebook-main')).toBeInTheDocument();
  });
});
