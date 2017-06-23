import {shallow} from 'enzyme';
import chai, { expect } from 'chai';
import { spy, stub } from 'sinon';
import sinonChai from 'sinon-chai';
import chaiEnzyme from 'chai-enzyme';
import React from 'react';
import {loading} from '../src/common/responseStatus';

import { App } from '../src/app';

chai.use(sinonChai);
chai.use(chaiEnzyme());

describe('Component <App />', () => {
  const dispatch = spy();

  const props = {
    dispatch: dispatch,
    response: loading(),
  };

  const wrapper = shallow(<App {...props} />);

  it('should render a div?', () => {
    expect(wrapper.type()).to.equal('div');
  });

  it('should have a class name container-fluid?', () => {
    expect(wrapper.find('.container-fluid')).to.have.length(1);
  });
});
