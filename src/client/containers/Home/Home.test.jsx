import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import fetchMock from 'fetch-mock';
import { shallow } from 'enzyme';

import Home from '.';

fetchMock.get('*', JSON.stringify({ users: [{ _id: 123, user: { name: 'asd', bags: 4 } }] }));

describe('<Home />', () => {
  it('renders correctly', () => {
    const div = document.createElement('div');
    render(<Home />, div);
    unmountComponentAtNode(div);
  });
  it('renders cards correctly', async () => {
    const wrapper = shallow(<Home />);

    const instance = wrapper.instance();

    await instance.fetchData();

    expect(wrapper.find('Card')).toHaveLength(1);
  });
});
