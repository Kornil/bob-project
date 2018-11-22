import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import fetchMock from 'fetch-mock';
import { shallow } from 'enzyme';

import Home from '.';

fetchMock.get('*', JSON.stringify({ users: [{ _id: 'asd', user: { name: 'asd', bags: 4 } }] }));

describe('<Home />', () => {
  it('renders correctly', () => {
    const div = document.createElement('div');
    render(<Home />, div);
    unmountComponentAtNode(div);
  });

  it('loads users correctly', async () => {
    const wrapper = shallow(<Home />);

    const instance = wrapper.instance();

    await instance.fetchData();

    expect(wrapper.state('status')).toEqual('success');
  });
});
