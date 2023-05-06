/**
 * @jest-environment jsdom
 */

import { render, screen } from '@testing-library/react';
import { GifGrid } from '../../src/components/GifGrid';
import { useFetchGifs } from '../../src/hooks/useFetchGifs';

jest.mock('../../src/hooks/useFetchGifs');

describe('Tests in <GifGrid />', () => {
  const category = 'Naruto';
  test('It must show the loading initially', () => {
    useFetchGifs.mockReturnValue({
      images: [],
      isLoading: true,
    });
    render(<GifGrid category={category} />);
    expect(screen.getByText('Loading...'));
    expect(screen.getByText(category));
  });
  test('It must show items when useFetchGifs images load', () => {
    const gifs = [
      {
        id: 'ABC',
        title: 'Naruto',
        url: 'https://localhost/naruto.jpg',
      },
      {
        id: '123',
        title: 'Vegeta',
        url: 'https://localhost/vegeta.jpg',
      },
    ];
    useFetchGifs.mockReturnValue({
      images: gifs,
      isLoading: true,
    });
    render(<GifGrid category={category} />);
    expect(screen.getAllByRole('img').length).toBe(2);
  });
});
