import {shallow} from 'enzyme';
import {expect} from 'chai';
import React from 'react';
import { loading } from '../src/common/responseStatus';

import App from '../src/app';

describe('Component <App />', () => {

  const props = {
    response: loading(),
    delay: 0,
  };

  const wrapper = shallow(<App {...props} />);

  it('should render a div?', () => {
    expect(wrapper.type()).to.equal('div');
  });

  it('should have a class name container-fluid?', () => {
    expect(wrapper.find('.container-fluid')).to.have.length(1);
  });
});
