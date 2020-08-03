import React from 'react';
import { shallow } from 'enzyme';
import List from './List';

describe('List component', () => {
  it('should show a list', () => {
    const wrapper = shallow(
      <List lists={[{ test1: 'test 1', id: 1 }, { test2: 'test 2', id: 2 }, { test3: 'test 3', id: 3 }]}
      />);
    expect(wrapper).toMatchSnapshot();
  });
});
