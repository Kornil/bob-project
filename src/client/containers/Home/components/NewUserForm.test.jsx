import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';

import NewUserForm from './NewUserForm';

it('renders without crashing', () => {
  const div = document.createElement('div');
  render(<NewUserForm fetchData={() => null} />, div);
  unmountComponentAtNode(div);
});
