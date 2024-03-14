// // import React from 'react';
// // import { shallow } from 'enzyme';
// // import Products from './Products';

// // describe('Products Component', () => {
// //   it('should render without crashing', () => {
// //     const wrapper = shallow(<Products />);
// //     expect(wrapper.exists()).toBe(true);
// //   });

// //   it('should filter products correctly on search', () => {
// //     const wrapper = shallow(<Products />);
// //     const searchInput = wrapper.find('input[type="text"]');
// //     searchInput.simulate('change', { target: { value: 'garden' } });
// //     wrapper.find('button').simulate('click');
// //     // Expectations for filtered products or any other behavior based on the search
// //   });

// //   it('should display error message for empty search query', () => {
// //     const wrapper = shallow(<Products />);
// //     wrapper.find('button').simulate('click');
// //     // Expectations for error message when search query is empty
// //   });

// //   it('should add product to cart when user is logged in', () => {
// //     const mockAddToCart = jest.fn();
// //     const wrapper = shallow(<Products isUserLoggedIn={true} addToCart={mockAddToCart} />);
// //     wrapper.find('button').simulate('click');
// //   });
  
// // });

import React from 'react';
import { shallow } from 'enzyme';
import Products from './Products';


describe('Products Component', () => {
  it('should render without crashing', () => {
    const wrapper = shallow(<Products />);
    expect(wrapper.exists()).toBe(true);
  });

  it('should filter products correctly on search', () => {
    const wrapper = shallow(<Products />);
    const searchInput = wrapper.find('input[type="text"]');
    searchInput.simulate('change', { target: { value: 'garden' } });
    wrapper.find('button').simulate('click');
    // Expectations for filtered products or any other behavior based on the search
  });

  it('should display error message for empty search query', () => {
    const wrapper = shallow(<Products />);
    wrapper.find('button').simulate('click');
    // Expectations for error message when search query is empty
  });


  it('should add product to cart when user is logged in', () => {
    const mockAddToCart = jest.fn();
    const wrapper = shallow(<Products isUserLoggedIn={true} addToCart={mockAddToCart} />);
    wrapper.find('button').simulate('click');
    // Expectations for adding product to cart when user is logged in
  });


  it('should not add product to cart when user is not logged in', () => {
    const mockAddToCart = jest.fn();
    const wrapper = shallow(<Products isUserLoggedIn={false} addToCart={mockAddToCart} />);
    wrapper.find('button').simulate('click');
    expect(mockAddToCart).not.toHaveBeenCalled();
  });


  it('should display loader when isLoading is true', () => {
    const wrapper = shallow(<Products isLoading={true} />);
    expect(wrapper.find('Loader').exists()).toBe(true);
  });


  it('should render products correctly', () => {
    const products = [
      { id: 1, name: 'Product 1', price: 10, image: 'product1.jpg', desc: 'Description 1' },
      { id: 2, name: 'Product 2', price: 20, image: 'product2.jpg', desc: 'Description 2' },
    ];
    const wrapper = shallow(<Products products={products} />);
    // Add expectations for rendering products
  });


  it('should display error message when fetching products fails', () => {
    // Mocking useEffect to simulate fetch failure
    jest.spyOn(React, 'useEffect').mockImplementationOnce((callback) => callback());


    const wrapper = shallow(<Products />);
    // Add expectations for displaying error message
  });


  it('should handle edge cases such as empty product list', () => {
    const wrapper = shallow(<Products />);
    expect(wrapper.find('.products').children()).toHaveLength(0);
  });


  it('should handle additional search scenarios', () => {
    // Test additional search scenarios
    const wrapper = shallow(<Products />);
    
    // Simulate different search scenarios
    wrapper.find('input[type="text"]').simulate('change', { target: { value: 'garden' } });
    wrapper.find('button').simulate('click');
  });

});

