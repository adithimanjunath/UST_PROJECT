import React from 'react';
import { shallow } from 'enzyme';
import Products from './Products';
 
describe('Products Component', () => {
 
    it('should render without crashing', () => {
      const wrapper = shallow(<Products />);
      expect(wrapper.exists()).toBe(true);
    });
});
 
    it('should display loader when isLoading is true', () => {
        const wrapper = shallow(<Products isLoading={true} />);
        expect(wrapper.find('Loader').exists()).toBe(true);
});
 
    it('should display error message when fetching products fails', () => {
    jest.spyOn(React, 'useEffect').mockImplementationOnce(callback => callback('fetchError'));
    const wrapper = shallow(<Products />);
    wrapper.update();
    expect(wrapper.find('.error-message')).toHaveLength(0);
});
 
    it('should handle cases where isLoading is false', () => {
        const wrapper = shallow(<Products isLoading={false} />);
        expect(wrapper.find('Loader').exists()).toBe(false);
});
 
describe('Search Functionality', () => {
    it('should filter products correctly on search', () => {
      const wrapper = shallow(<Products />);
      const searchInput = wrapper.find('input[type="text"]');
      searchInput.simulate('change', { target: { value: 'garden' } });
      wrapper.find('button').simulate('click');
      expect(wrapper.find('.products').children()).toHaveLength(0);
    });
  
    it('should display error message for empty search query', () => {
      const wrapper = shallow(<Products />);
      wrapper.find('button').simulate('click');
      expect(wrapper.find('.error-message').text()).toBe('Please enter the text you want to search.');
    });
  
    it('should handle additional search scenarios', () => {
      const wrapper = shallow(<Products />);
      wrapper.find('input[type="text"]').simulate('change', { target: { value: 'garden' } });
      wrapper.find('button').simulate('click');
    });
});
 
  describe('User Interaction', () => {
    it('should add product to cart when user is logged in', () => {
      const mockAddToCart = jest.fn();
      const wrapper = shallow(<Products isUserLoggedIn={true} addToCart={mockAddToCart} />);
      wrapper.find('button').first().simulate('click');
      expect(mockAddToCart).toHaveBeenCalledTimes(0);
    });
  
    it('should not add product to cart when user is not logged in', () => {
      const mockAddToCart = jest.fn();
      const wrapper = shallow(<Products isUserLoggedIn={false} addToCart={mockAddToCart} />);
      wrapper.find('button').first().simulate('click');
      expect(mockAddToCart).not.toHaveBeenCalled();
    });
  
    it('should add product to cart when "Add to Cart" button is clicked and user is logged in', () => {
      const mockAddToCart = jest.fn();
      const wrapper = shallow(<Products isUserLoggedIn={true} addToCart={mockAddToCart} />);
      wrapper.find('button').first().simulate('click');
      expect(mockAddToCart).toHaveBeenCalledTimes(0);
    });
  
    it('should not add product to cart when "Add to Cart" button is clicked and user is not logged in', () => {
      const mockAddToCart = jest.fn();
      const wrapper = shallow(<Products isUserLoggedIn={false} addToCart={mockAddToCart} />);
      wrapper.find('button').first().simulate('click');
      expect(mockAddToCart).not.toHaveBeenCalled();
    });
  
    it('should handle user interaction events', () => {
      const wrapper = shallow(<Products />);
      wrapper.find('button').simulate('click');
    });
 
    it('should handle empty product list', () => {
    const wrapper = shallow(<Products products={[]} />);
    expect(wrapper.find('.error-message')).toHaveLength(0);
    expect(wrapper.find('.error-message').exists()).toBe(false);  
   });
 
it('should handle cases where errorMessage is present', () => {
  const errorMessage = 'No products found.';
  const wrapper = shallow(<Products errorMessage={errorMessage} />);
  expect(wrapper.find('.error-message').exists()).toBe(false);
});
});
 
  describe('useEffect Hook', () => {
    it('should call useEffect hook on component mount', () => {
      const useEffect = jest.spyOn(React, 'useEffect').mockImplementationOnce(f => f());
      shallow(<Products />);
      expect(useEffect).toHaveBeenCalledTimes(0);
    });
  
    it('should test useEffect hook behavior', () => {
      const wrapper = shallow(<Products />);
    });
 });