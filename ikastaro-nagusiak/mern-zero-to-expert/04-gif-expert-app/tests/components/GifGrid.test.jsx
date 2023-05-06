/**
 * @jest-environment jsdom
 */

const { render, screen } = require('@testing-library/react');
import { GifGrid } from '../../src/components/GifGrid';

describe('Tests in <GifGrid />', () => {
  const category = 'Naruto';
  test('It must show the loading initially', () => {
    render(<GifGrid category={category} />);
    expect(screen.getByText('Loading...'));
    expect(screen.getByText(category));
  });
});
