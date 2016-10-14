import PsiResultRow from '../index';

import expect from 'expect';
import { shallow } from 'enzyme';
import React from 'react';

describe('<PsiResultRow />', () => {
  it('should render 14 divs', () => {
    const renderedComponent = shallow(
      <PsiResultRow />
    );
    expect(renderedComponent.find('div').length).toEqual(14);
  });
});
