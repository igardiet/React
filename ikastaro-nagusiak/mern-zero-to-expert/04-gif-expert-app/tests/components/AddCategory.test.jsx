/**
 * @jest-environment jsdom
 */

import { fireEvent, render, screen } from '@testing-library/react';
import { AddCategory } from '../../src/components/AddCategory';

describe('Tests in <AddCategory />', () => {
  test('It must change the text bok value', () => {
    render(<AddCategory onNewCategory={() => {}} />);
    const input = screen.getByRole('textbox');
    fireEvent.input(input, { target: { value: 'Naruto' } });

    expect(input.value).toBe('Naruto');
    // screen.debug()
  });
});
