import {shallow} from 'enzyme';
import React from 'react';
import chai, { expect } from 'chai';

import Product from '../../../src/components/Product/index';

describe('Component <Product />', () => {
  const wrapper = shallow(<Product name="" />);

  it('should render without crash', () => {
    expect(wrapper.type()).to.equal('div');
  });

  it('should have a div element with class product-list', () => {
    expect(wrapper.hasClass('product')).to.equal(true);
  });

  it('should render a list with one product', () => {
    const data = {name: 'test', price: 9.99};
    const wrapper = shallow(<Product data={data} />);
    expect(wrapper.text()).to.equal('test - 9.99');
  });
});
