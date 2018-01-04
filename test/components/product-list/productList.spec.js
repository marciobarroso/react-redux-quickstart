import {shallow} from 'enzyme';
import React from 'react';
import chai, { expect } from 'chai';

import ProductList from '../../../src/components/product-list/productList';

describe('Component <ProductList />', () => {
  const wrapper = shallow(<ProductList />);

  it('should render without crash', () => {
    expect(wrapper.type()).to.equal('div');
  });

  it('should have a div element with class product-list', () => {
    expect(wrapper.hasClass('product-list')).to.equal(true);
  });

  it('should render a list with one product', () => {
    const products = [{}, {}];
    const wrapper = shallow(<ProductList list={products} />);
    expect(wrapper.find('li')).to.have.length(2);
  });
});
