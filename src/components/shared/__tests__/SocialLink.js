import React from 'react';
import { render, cleanup } from 'react-testing-library';
import SocialLink from '../SocialLink';

afterEach(cleanup);

test('social link contains <a />', () => {
  const { container } = render(<SocialLink />);
  expect(container.innerHTML).toContain('a');
});

test('social link renders children', () => {
  const { container } = render(<SocialLink children={<svg />} />);
  expect(container.innerHTML).toContain('svg');
});

test('social link contains url', () => {
  const fakeUrl = 'https://fakeurl.com';
  const { container } = render(<SocialLink url={fakeUrl} />);
  const link = container.querySelector('a');
  expect(link.href).toContain(fakeUrl);
});
