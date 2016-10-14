import Input from '../index';

import expect from 'expect';
import { shallow } from 'enzyme';
import React from 'react';

describe('<Input />', () => {
  it('should render 14 divs', () => {
    const renderedComponent = shallow(
      <Input />
    );
    expect(renderedComponent.find('div').length).toEqual(14);
  });
});
