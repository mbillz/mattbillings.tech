import React from 'react';
import { render, cleanup } from 'react-testing-library';
import AnimatedText from '../AnimatedText';
import { BodyText } from '../../styled/Typography';

afterEach(cleanup);

test('animated text renders text input', () => {
  const { container } = render(
    <AnimatedText children={<BodyText>Kevin Morby</BodyText>} />
  );
  expect(container.innerHTML).toContain('Kevin Morby');
});
