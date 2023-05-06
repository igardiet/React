/**
 * @jest-environment jsdom
 */

import { renderHook } from '@testing-library/react';
import { useFetchGifs } from '../../src/hooks/useFetchGifs';

describe('Tests in hook useFetchGifs', () => {
  test('It must return the initial state', () => {
    const { result } = renderHook(() => useFetchGifs('Naruto'));
    const { images, isLoading } = result.current;

    expect(images.length).toBe(0);
    expect(isLoading).toBeTruthy();
  });
});
