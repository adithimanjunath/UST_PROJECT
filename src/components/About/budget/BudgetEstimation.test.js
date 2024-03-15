import React from 'react';
import { shallow } from 'enzyme';
import BudgetEstimation from './BudgetEstimation';

describe('BudgetEstimation Component should', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<BudgetEstimation />);
  });

  afterEach(() => {
    wrapper.unmount();
  });

  //Living Room
  it('calculate budget correctly for livingroom renovation with flooring', () => {
    wrapper.find('select').simulate('change', { target: { value: 'livingRoom' } });
    wrapper.find('input[type="number"]').simulate('change', { target: { value: '100' } });
    wrapper.find('input[name="flooring"]').simulate('change', { target: { checked: true, name:"flooring" } });
    wrapper.find('button').simulate('click');
    expect(wrapper.find('.budget-estimation-total').text()).toEqual('Total Budget: €7000');
  });
  
  it('calculate budget correctly for livingroom renovation with Window Treatment', () => {
    wrapper.find('select').simulate('change', { target: { value: 'livingRoom' } });
    wrapper.find('input[type="number"]').simulate('change', { target: { value: '100' } });
    wrapper.find('input[name="windowTreatments"]').simulate('change', { target: { checked: true, name:"windowTreatments" } });
    wrapper.find('button').simulate('click');
    expect(wrapper.find('.budget-estimation-total').text()).toEqual('Total Budget: €5500');
  });

  it('calculate budget correctly for livingroom renovation with Lighting', () => {
    wrapper.find('select').simulate('change', { target: { value: 'livingRoom' } });
    wrapper.find('input[type="number"]').simulate('change', { target: { value: '100' } });
    wrapper.find('input[name="lighting"]').simulate('change', { target: { checked: true, name:"lighting" } });
    wrapper.find('button').simulate('click');
    expect(wrapper.find('.budget-estimation-total').text()).toEqual('Total Budget: €5120');
  });

  it('calculate budget correctly for livingroom renovation with flooring and Window Treatment', () => {
    wrapper.find('select').simulate('change', { target: { value: 'livingRoom' } });
    wrapper.find('input[type="number"]').simulate('change', { target: { value: '100' } });
    wrapper.find('input[name="flooring"]').simulate('change', { target: { checked: true, name:"flooring" } });
    wrapper.find('input[name="windowTreatments"]').simulate('change', { target: { checked: true, name:"windowTreatments" } });
    wrapper.find('button').simulate('click');
    expect(wrapper.find('.budget-estimation-total').text()).toEqual('Total Budget: €7500');
  });

  it('calculate budget correctly for livingroom renovation with Lighting and flooring', () => {
    wrapper.find('select').simulate('change', { target: { value: 'livingRoom' } });
    wrapper.find('input[type="number"]').simulate('change', { target: { value: '100' } });
    wrapper.find('input[name="lighting"]').simulate('change', { target: { checked: true, name:"lighting" } });
    wrapper.find('input[name="flooring"]').simulate('change', { target: { checked: true, name:"flooring" } });
    wrapper.find('button').simulate('click');
    expect(wrapper.find('.budget-estimation-total').text()).toEqual('Total Budget: €7120');
  });

  it('calculate budget correctly for livingroom renovation with all 3 checkboxes selected', () => {
    wrapper.find('select').simulate('change', { target: { value: 'livingRoom' } });
    wrapper.find('input[type="number"]').simulate('change', { target: { value: '100' } });
    wrapper.find('input[name="lighting"]').simulate('change', { target: { checked: true, name:"lighting" } });
    wrapper.find('input[name="flooring"]').simulate('change', { target: { checked: true, name:"flooring" } });
    wrapper.find('input[name="windowTreatments"]').simulate('change', { target: { checked: true, name:"windowTreatments" } });
    wrapper.find('button').simulate('click');
    expect(wrapper.find('.budget-estimation-total').text()).toEqual('Total Budget: €7620');
  });

  //Garden
  it('calculate budget correctly for garden renovation with paving', () => {
    wrapper.find('select').simulate('change', { target: { value: 'garden' } });
    wrapper.find('input[type="number"]').simulate('change', { target: { value: '1' } });
    wrapper.find('input[name="paving"]').simulate('change', { target: { checked: true, name:"paving" } });;
    wrapper.find('button').simulate('click');
    expect(wrapper.find('.budget-estimation-total').text()).toEqual('Total Budget: €45');
  });

  it('calculate budget correctly for garden renovation with irrigation', () => {
    wrapper.find('select').simulate('change', { target: { value: 'garden' } });
    wrapper.find('input[type="number"]').simulate('change', { target: { value: '1' } });
    wrapper.find('input[name="irrigation"]').simulate('change', { target: { checked: true ,name:"irrigation" } });
    wrapper.find('button').simulate('click');
    expect(wrapper.find('.budget-estimation-total').text()).toEqual('Total Budget: €830');
  });

  it('calculate budget correctly for garden renovation with paving and irrigation', () => {
    wrapper.find('select').simulate('change', { target: { value: 'garden' } });
    wrapper.find('input[type="number"]').simulate('change', { target: { value: '1' } });
    wrapper.find('input[name="paving"]').simulate('change', { target: { checked: true, name:"paving" } });
    wrapper.find('input[name="irrigation"]').simulate('change', { target: { checked: true ,name:"irrigation" } });
    wrapper.find('button').simulate('click');
    expect(wrapper.find('.budget-estimation-total').text()).toEqual('Total Budget: €845');
  });
  
  it('should calculate budget correctly for garden renovation with paving and landscaping', () => {
    wrapper.find('select').simulate('change', { target: { value: 'garden' } });
    wrapper.find('input[type="number"]').simulate('change', { target: { value: '1' } });
    wrapper.find('input[name="paving"]').simulate('change', { target: { checked: true, name:"paving" } });
    wrapper.find('input[name="landscaping"]').simulate('change', { target: { checked: true ,name:"landscaping" } });
    wrapper.find('button').simulate('click');
    expect(wrapper.find('.budget-estimation-total').text()).toEqual('Total Budget: €55');
  });

  it('calculate budget correctly for garden renovation with all 3 checkboxes selected', () => {
    wrapper.find('select').simulate('change', { target: { value: 'garden' } });
    wrapper.find('input[type="number"]').simulate('change', { target: { value: '1' } });
    wrapper.find('input[name="paving"]').simulate('change', { target: { checked: true, name:"paving" } });
    wrapper.find('input[name="irrigation"]').simulate('change', { target: { checked: true ,name:"irrigation" } });
    wrapper.find('input[name="landscaping"]').simulate('change', { target: { checked: true ,name:"landscaping" } });
    wrapper.find('button').simulate('click');
    expect(wrapper.find('.budget-estimation-total').text()).toEqual('Total Budget: €855');
  });

  //kitchen
  it('calculate budget correctly for kitchen renovation with all 3 checkboxes selected', () => {
    wrapper.find('select').simulate('change', { target: { value: 'kitchen' } });
    wrapper.find('input[type="number"]').simulate('change', { target: { value: '100' } });
    wrapper.find('input[name="flooring"]').simulate('change', { target: { checked: true, name:"flooring" } });
    wrapper.find('input[name="cabinets"]').simulate('change', { target: { checked: true ,name:"cabinets" } });
    wrapper.find('input[name="countertop"]').simulate('change', { target: { checked: true ,name:"countertop" } });
    wrapper.find('button').simulate('click');
    expect(wrapper.find('.budget-estimation-total').text()).toEqual('Total Budget: €11500');
  });

  it('should calculate budget correctly for kitchen renovation with appliances', () => {
    wrapper.find('select').simulate('change', { target: { value: 'kitchen' } });
    wrapper.find('input[type="number"]').simulate('change', { target: { value: '100' } });
    wrapper.find('input[name="flooring"]').simulate('change', { target: { checked: true, name:"flooring" } });
    wrapper.find('button').simulate('click');
    expect(wrapper.find('.budget-estimation-total').text()).toEqual('Total Budget: €9000');
  });

  it('should calculate budget correctly for kitchen renovation with  cabinets', () => {
    wrapper.find('select').simulate('change', { target: { value: 'kitchen' } });
    wrapper.find('input[type="number"]').simulate('change', { target: { value: '100' } });
    wrapper.find('input[name="cabinets"]').simulate('change', { target: { checked: true ,name:"cabinets" } });
    wrapper.find('button').simulate('click');
    expect(wrapper.find('.budget-estimation-total').text()).toEqual('Total Budget: €8500');
  });

  it('should calculate budget correctly for kitchen renovation with countertop', () => {
    wrapper.find('select').simulate('change', { target: { value: 'kitchen' } });
    wrapper.find('input[type="number"]').simulate('change', { target: { value: '100' } });
    wrapper.find('input[name="countertop"]').simulate('change', { target: { checked: true ,name:"countertop" } });
    wrapper.find('button').simulate('click');
    expect(wrapper.find('.budget-estimation-total').text()).toEqual('Total Budget: €8000');
  });

  it('should calculate budget correctly for kitchen renovation with appliances, cabinets', () => {
    wrapper.find('select').simulate('change', { target: { value: 'kitchen' } });
    wrapper.find('input[type="number"]').simulate('change', { target: { value: '100' } });
    wrapper.find('input[name="flooring"]').simulate('change', { target: { checked: true, name:"flooring" } });
    wrapper.find('input[name="cabinets"]').simulate('change', { target: { checked: true ,name:"cabinets" } });
    wrapper.find('button').simulate('click');
    expect(wrapper.find('.budget-estimation-total').text()).toEqual('Total Budget: €10500');
  });

  it('should calculate budget correctly for kitchen renovation with appliances and countertop', () => {
    wrapper.find('select').simulate('change', { target: { value: 'kitchen' } });
    wrapper.find('input[type="number"]').simulate('change', { target: { value: '100' } });
    wrapper.find('input[name="flooring"]').simulate('change', { target: { checked: true, name:"flooring" } });
    wrapper.find('input[name="countertop"]').simulate('change', { target: { checked: true ,name:"countertop" } });
    wrapper.find('button').simulate('click');
    expect(wrapper.find('.budget-estimation-total').text()).toEqual('Total Budget: €10000');
  });

  it('should calculate budget correctly for kitchen renovation with cabinets and countertop', () => {
    wrapper.find('select').simulate('change', { target: { value: 'kitchen' } });
    wrapper.find('input[type="number"]').simulate('change', { target: { value: '100' } });
    wrapper.find('input[name="cabinets"]').simulate('change', { target: { checked: true ,name:"cabinets" } });
    wrapper.find('input[name="countertop"]').simulate('change', { target: { checked: true ,name:"countertop" } });
    wrapper.find('button').simulate('click');
    expect(wrapper.find('.budget-estimation-total').text()).toEqual('Total Budget: €9500');
  });


  it('should render without crashing', () => {
    expect(wrapper.exists()).toBe(true);
  });

  it('should update renovation type state on select change', () => {
    wrapper.find('select').simulate('change', { target: { value: 'kitchen' } });
    expect(wrapper.find('select').prop('value')).toEqual('kitchen');
  });

  it('should update area state on input change', () => {
    wrapper.find('input[type="number"]').simulate('change', { target: { value: '100' } });
    expect(wrapper.find('input[type="number"]').prop('value')).toEqual('100');
  });

  it('displays 3 checkboxes when kitchen is selected', () => {
    wrapper.find('.budget-estimation-select').simulate('change', { target: { value: 'kitchen' } });
    const checkboxes = wrapper.find('.budget-estimation-option input[type="checkbox"]');
    expect(checkboxes.length).toEqual(3);
  });

  it('displays 3 checkboxes when living room is selected', () => {
    wrapper.find('.budget-estimation-select').simulate('change', { target: { value: 'livingRoom' } });
    const checkboxes = wrapper.find('.budget-estimation-option input[type="checkbox"]');
    expect(checkboxes.length).toEqual(3);
  });

  it('displays 3 checkboxes when garden is selected', () => {
    wrapper.find('.budget-estimation-select').simulate('change', { target: { value: 'garden' } });
    const checkboxes = wrapper.find('.budget-estimation-option input[type="checkbox"]');
    expect(checkboxes.length).toEqual(3);
  });

  it('should display error for missing renovation type', () => {
    wrapper.find('button').simulate('click');
    expect(wrapper.find('p').text()).toEqual('Please select renovation type and area.');
  });

  it('should display error when renovtion type is Living room and area is not enetered ', () => {
    wrapper.find('select').simulate('change', { target: { value: 'livingRoom' } });
    wrapper.find('input[type="number"]').simulate('change', { target: { value: '' } });
    wrapper.find('button').simulate('click');
    expect(wrapper.find('p').text()).toEqual('Please select renovation type and area.');
  });

  it('should display error for missing options in living room renovation', () => {
    wrapper.find('select').simulate('change', { target: { value: 'livingRoom' } });
    wrapper.find('input[type="number"]').simulate('change', { target: { value: '50' } });
    wrapper.find('button').simulate('click');
    expect(wrapper.find('p').text()).toEqual('Please select at least one option.');
  });

  it('should display total budget after calculation', () => {
    wrapper.find('select').simulate('change', { target: { value: 'garden' } });
    wrapper.find('input[type="number"]').simulate('change', { target: { value: '1' } });
    wrapper.find('input[name="paving"]').simulate('change', { target: { checked: true, name:"paving" } });
    wrapper.find('input[name="irrigation"]').simulate('change', { target: { checked: true ,name:"irrigation" } });
    wrapper.find('input[name="landscaping"]').simulate('change', { target: { checked: true ,name:"landscaping" } });
    wrapper.find('button').simulate('click');
    expect(wrapper.find('.budget-estimation-total').text()).toEqual('Total Budget: €855');
  });
  
  it('should display error message when renovation type is not selected', () => {
    wrapper.find('input[type="number"]').simulate('change', { target: { value: '100' } });
    wrapper.find('button').simulate('click');
    expect(wrapper.find('p').text()).toEqual('Please select renovation type and area.');
  });
  
  it('should display error message when area is not provided', () => {
    wrapper.find('select').simulate('change', { target: { value: 'livingRoom' } });
    wrapper.find('button').simulate('click');
    expect(wrapper.find('p').text()).toEqual('Please select renovation type and area.');
  });
  
  it('should display error message when no option is selected', () => {
    wrapper.find('select').simulate('change', { target: { value: 'livingRoom' } });
    wrapper.find('input[type="number"]').simulate('change', { target: { value: '100' } });
    wrapper.find('button').simulate('click');
    expect(wrapper.find('p').text()).toEqual('Please select at least one option.');
  });

});
