import React from 'react';
import { shallow } from 'enzyme';
import Cart from './Cart.js';

describe('Cart Component', () => {
  it('should render empty cart message when cartItems is empty', () => {
    const wrapper = shallow(<Cart cartItems={[]} />);
    
    expect(wrapper.find('.cart-empty-message').exists()).toBe(true);
  });

  it('should render cart items and remove buttons', () => {
    const cartItems = ['Item 1', 'Item 2', 'Item 3'];
    const wrapper = shallow(<Cart cartItems={cartItems} />);

    expect(wrapper.find('.cart-item')).toHaveLength(cartItems.length);
    expect(wrapper.find('.remove-button')).toHaveLength(cartItems.length);
  });

  it('should call removeFromCart function when remove button is clicked', () => {
    const mockRemoveFromCart = jest.fn();
    const cartItems = ['Item 1', 'Item 2', 'Item 3'];

    const wrapper = shallow(<Cart cartItems={cartItems} removeFromCart={mockRemoveFromCart} />);
    wrapper.find('.remove-button').at(0).simulate('click');
    expect(mockRemoveFromCart).toHaveBeenCalledWith('Item 1');
  });
});
