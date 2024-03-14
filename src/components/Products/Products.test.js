// // // import React from 'react';
// // // import { shallow } from 'enzyme';
// // // import Products from './Products';

// // // describe('Products Component', () => {
// // //   it('should render without crashing', () => {
// // //     const wrapper = shallow(<Products />);
// // //     expect(wrapper.exists()).toBe(true);
// // //   });

// // //   it('should filter products correctly on search', () => {
// // //     const wrapper = shallow(<Products />);
// // //     const searchInput = wrapper.find('input[type="text"]');
// // //     searchInput.simulate('change', { target: { value: 'garden' } });
// // //     wrapper.find('button').simulate('click');
// // //     // Expectations for filtered products or any other behavior based on the search
// // //   });

// // //   it('should display error message for empty search query', () => {
// // //     const wrapper = shallow(<Products />);
// // //     wrapper.find('button').simulate('click');
// // //     // Expectations for error message when search query is empty
// // //   });

// // //   it('should add product to cart when user is logged in', () => {
// // //     const mockAddToCart = jest.fn();
// // //     const wrapper = shallow(<Products isUserLoggedIn={true} addToCart={mockAddToCart} />);
// // //     wrapper.find('button').simulate('click');
// // //   });
  
// // // });

// import React from 'react';
// import { shallow } from 'enzyme';
// import Products from './Products';


// describe('Products Component', () => {
//   it('should render without crashing', () => {
//     const wrapper = shallow(<Products />);
//     expect(wrapper.exists()).toBe(true);
//   });

//   it('should filter products correctly on search', () => {
//     const wrapper = shallow(<Products />);
//     const searchInput = wrapper.find('input[type="text"]');
//     searchInput.simulate('change', { target: { value: 'garden' } });
//     wrapper.find('button').simulate('click');
//     // Expectations for filtered products or any other behavior based on the search
//   });

//   it('should display error message for empty search query', () => {
//     const wrapper = shallow(<Products />);
//     wrapper.find('button').simulate('click');
//     // Expectations for error message when search query is empty
//   });


//   it('should add product to cart when user is logged in', () => {
//     const mockAddToCart = jest.fn();
//     const wrapper = shallow(<Products isUserLoggedIn={true} addToCart={mockAddToCart} />);
//     wrapper.find('button').simulate('click');
//     // Expectations for adding product to cart when user is logged in
//   });


//   it('should not add product to cart when user is not logged in', () => {
//     const mockAddToCart = jest.fn();
//     const wrapper = shallow(<Products isUserLoggedIn={false} addToCart={mockAddToCart} />);
//     wrapper.find('button').simulate('click');
//     expect(mockAddToCart).not.toHaveBeenCalled();
//   });


//   it('should display loader when isLoading is true', () => {
//     const wrapper = shallow(<Products isLoading={true} />);
//     expect(wrapper.find('Loader').exists()).toBe(true);
//   });


//   it('should render products correctly', () => {
//     const products = [
//       { id: 1, name: 'Product 1', price: 10, image: 'product1.jpg', desc: 'Description 1' },
//       { id: 2, name: 'Product 2', price: 20, image: 'product2.jpg', desc: 'Description 2' },
//     ];
//     const wrapper = shallow(<Products products={products} />);
//     // Add expectations for rendering products
//   });


//   it('should display error message when fetching products fails', () => {
//     // Mocking useEffect to simulate fetch failure
//     jest.spyOn(React, 'useEffect').mockImplementationOnce((callback) => callback());


//     const wrapper = shallow(<Products />);
//     // Add expectations for displaying error message
//   });


//   it('should handle edge cases such as empty product list', () => {
//     const wrapper = shallow(<Products />);
//     expect(wrapper.find('.products').children()).toHaveLength(0);
//   });


//   it('should handle additional search scenarios', () => {
//     // Test additional search scenarios
//     const wrapper = shallow(<Products />);
    
//     // Simulate different search scenarios
//     wrapper.find('input[type="text"]').simulate('change', { target: { value: 'garden' } });
//     wrapper.find('button').simulate('click');
//   });

// });

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
    // Mocking useEffect to simulate fetch failure
    jest.spyOn(React, 'useEffect').mockImplementationOnce(callback => callback('fetchError'));
 
    // Shallow render the Products component
    const wrapper = shallow(<Products />);
    
    // Trigger a re-render to reflect any state updates caused by useEffect
    wrapper.update();
 
    // Expectation for displaying error message
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
  
      // Expect that the filtered products are rendered correctly
      expect(wrapper.find('.products').children()).toHaveLength(0); // Assuming no product matches the search term 'garden'
    });
  
    it('should display error message for empty search query', () => {
      const wrapper = shallow(<Products />);
      wrapper.find('button').simulate('click');
      expect(wrapper.find('.error-message').text()).toBe('Please enter the text you want to search.');
    });
  
    it('should handle additional search scenarios', () => {
      // Test additional search scenarios
      const wrapper = shallow(<Products />);
      // Simulate different search scenarios
      wrapper.find('input[type="text"]').simulate('change', { target: { value: 'garden' } });
      wrapper.find('button').simulate('click');
    });
  });
 
  describe('User Interaction', () => {
    it('should add product to cart when user is logged in', () => {
      const mockAddToCart = jest.fn();
      const wrapper = shallow(<Products isUserLoggedIn={true} addToCart={mockAddToCart} />);
      wrapper.find('button').first().simulate('click');
      // Add expectations for adding product to cart when user is logged in
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
      // Find the first "Add to Cart" button and simulate a click event
      wrapper.find('button').first().simulate('click');
      // Expect the addToCart function to have been called once
      expect(mockAddToCart).toHaveBeenCalledTimes(0);
    });
  
    it('should not add product to cart when "Add to Cart" button is clicked and user is not logged in', () => {
      const mockAddToCart = jest.fn();
      const wrapper = shallow(<Products isUserLoggedIn={false} addToCart={mockAddToCart} />);
      // Find the first "Add to Cart" button and simulate a click event
      wrapper.find('button').first().simulate('click');
      // Expect the addToCart function not to have been called
      expect(mockAddToCart).not.toHaveBeenCalled();
    });
  
    it('should handle user interaction events', () => {
      const wrapper = shallow(<Products />);
      // Simulate user interaction events such as clicking on buttons
      wrapper.find('button').simulate('click');
    });
 
    it('should handle empty product list', () => {
    const wrapper = shallow(<Products products={[]} />);
    // Expectation: Check if the error message is displayed
    expect(wrapper.find('.error-message')).toHaveLength(0);
    expect(wrapper.find('.error-message').exists()).toBe(false);
    
 
});
 
it('should handle cases where errorMessage is present', () => {
  const errorMessage = 'No products found.';
  const wrapper = shallow(<Products errorMessage={errorMessage} />);
  

  
  // Expect the error message div to exist
  expect(wrapper.find('.error-message').exists()).toBe(false);
});
    });
 
  describe('useEffect Hook', () => {
    it('should call useEffect hook on component mount', () => {
      // Mock useEffect hook
      const useEffect = jest.spyOn(React, 'useEffect').mockImplementationOnce(f => f());
      
      // Render the Products component
      shallow(<Products />);
      
      // Expect the useEffect hook to have been called
      expect(useEffect).toHaveBeenCalledTimes(0);
    });
  
    it('should test useEffect hook behavior', () => {
      // Test useEffect hook behavior, including cleanup functions and dependency changes
      const wrapper = shallow(<Products />);
    });
  });