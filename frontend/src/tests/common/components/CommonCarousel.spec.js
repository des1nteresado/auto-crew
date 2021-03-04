import React from 'react';
import { mount } from 'enzyme';

import CommonCarousel from 'common/components/CommonCarousel';
import { useNakedComponent } from 'helpers/hooks/useNakedComponent';

const defaultProps = {
  title: 'title',
  withViewAllButton: true,
  viewAllClickHandler: jest.fn(),
  children: <div>children</div>,
  style: 'style',
};

const setUp = (props) => mount(<CommonCarousel {...defaultProps} {...props} />);

describe('CommonCarousel', () => {
  let component;

  beforeEach(() => {
    component = setUp();
  });

  it('renders CommonCarousel component correctly', () => {
    expect(component).toMatchSnapshot();
  });

  it('renders header title when prop is passed correctly', () => {
    const header = component.find('h3');
    expect(header.text()).toBe(defaultProps.title);
  });

  it('renders view all button when withViewAllButton passed correctly', () => {
    const button = component.find('button');
    button.simulate('click');
    expect(defaultProps.viewAllClickHandler).toHaveBeenCalled();
  });

  it('renders commonCarouselContainer elemet with provided styles correctly', () => {
    const div = component.find('div').first();
    expect(div.props().className.includes(defaultProps.style)).toBeTruthy();
  });

  describe('default props', () => {
    const nakedComponent = useNakedComponent(CommonCarousel);

    it('should use default onAutocompleteChange', () => {
      const result = nakedComponent.defaultProps.viewAllClickHandler();
      expect(result).toBe(undefined);
    });
  });
});
