import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('<App />', () => {
  it('renders brand name and navigation links', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('[data-testid="brandName"]')).toHaveLength(1);
    expect(wrapper.find('[data-testid="main_nav"]')).toHaveLength(1);
  });
  it('renders error for unknown routes', () => {
    const wrapper = shallow(<App />);
    const unknownRoute = wrapper.find('Route[path="*"]');
    expect(unknownRoute.props().element).toEqual(<h4 className="error">Route Not Found</h4>);
  });

  it('renders error for unknown routes', () => {
    const wrapper = shallow(<App />);
    const unknownRoute = wrapper.find('Route[path="*"]');
    expect(unknownRoute.props().element).toEqual(<h4 className="error">Route Not Found</h4>);
  });
});
