import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';

import Card from './Card';

const user = {
  Name: 'Bob',
  Bags: 4,
};

it('renders without crashing', () => {
  const div = document.createElement('div');
  render(<Card user={user} />, div);
  unmountComponentAtNode(div);
});
