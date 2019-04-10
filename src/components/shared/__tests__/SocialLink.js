import React from 'react';
import ReactDOM from 'react-dom';
import SocialLink from '../SocialLink';

test('social link renders', () => {
  const container = document.createElement('div');
  ReactDOM.render(<SocialLink />, container);
});

test('social link displays svg', () => {});

test('social link opens new window', () => {});
