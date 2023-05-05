/**
 * @jest-environment jsdom
 */

import { render } from '@testing-library/react';
import { GifItem } from '../../src/components/GifItem';

describe('Tests in <GifItem />', () => {
  const title = 'Naruto';
  const url = 'https://naruto.com/naruto.jpg';

  test('Must match with snapshot', () => {
    const { container } = render(<GifItem title={title} url={url} />);
    expect(container).toMatchSnapshot();
  });
});
