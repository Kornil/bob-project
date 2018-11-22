import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { mount } from 'enzyme';
import fetchMock from 'fetch-mock';

import NewUserForm from './NewUserForm';

fetchMock.post('/new', 200);

describe('<NewUserForm />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    render(<NewUserForm fetchData={() => null} />, div);
    unmountComponentAtNode(div);
  });

  it('fetches data again after successful post', () => {
    const fakeFetch = jest.fn();
    const wrapper = mount(<NewUserForm fetchData={fakeFetch} />);

    wrapper.find('form').simulate('submit');

    expect(fakeFetch.mock.calls.length).toEqual(1);
  });
});
