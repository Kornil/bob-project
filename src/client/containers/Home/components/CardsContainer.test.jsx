import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { shallow } from 'enzyme';

import CardsContainer from './CardsContainer';

describe('<CardsContainer />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    render(<CardsContainer status="" users={[]} />, div);
    unmountComponentAtNode(div);
  });

  it('renders cards correctly', async () => {
    const wrapper = shallow(<CardsContainer status="success" users={[{ _id: 'asd', user: { name: 'asd', bags: 4 } }]} />);
    expect(wrapper.find('Card')).toHaveLength(1);
  });
});
