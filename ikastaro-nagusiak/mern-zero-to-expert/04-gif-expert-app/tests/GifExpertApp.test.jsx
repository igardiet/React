/**
 * @jest-environment jsdom
 */

import { fireEvent, render, screen } from '@testing-library/react';
import { GifExpertApp } from '../src/GifExpertApp';

const newCategory = 'Naruto';
describe('Tests in <GifExpertApp />', () => {
  test('should Add new categories', () => {
    render(<GifExpertApp />);
    const input = screen.getByRole('textbox');
    const form = screen.getByRole('form');

    fireEvent.input(input, { target: { value: newCategory } });
    fireEvent.submit(form);

    fireEvent.input(input, { target: { value: newCategory + '2' } });
    fireEvent.submit(form);

    fireEvent.input(input, { target: { value: newCategory + '3' } });
    fireEvent.submit(form);

    expect(screen.getAllByRole('heading', { level: 3 }).length).toBe(3);
  });
  test('Should not add a repeated category', () => {
    render(<GifExpertApp />);
    const input = screen.getByRole('textbox');
    const form = screen.getByRole('form');

    fireEvent.input(input, { target: { value: newCategory } });
    fireEvent.submit(form);

    fireEvent.input(input, { target: { value: newCategory } });
    fireEvent.submit(form);

    expect(screen.getAllByRole('heading', { level: 3 }).length).toBe(1);
  });
});
