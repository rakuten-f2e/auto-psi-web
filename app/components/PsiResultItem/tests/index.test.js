import PsiResultItem from '../index';

import expect from 'expect';
import { shallow } from 'enzyme';
import React from 'react';

describe('<PsiResultItem />', () => {
  it('should render 14 divs', () => {
    const renderedComponent = shallow(
      <PsiResultItem />
    );
    expect(renderedComponent.find('div').length).toEqual(14);
  });
});
