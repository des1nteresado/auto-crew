import React from 'react';
import { mount } from 'enzyme';

import MobileBreadcrumbs from 'common/components/MobileBreadcrumbs';
import { useNakedComponent } from 'helpers/hooks/useNakedComponent';

const defaultProps = {
  currentPage: 'pageNumber',
};

jest.mock('react-router-dom', () => ({
  useHistory: () => ({
    goBack: jest.fn(),
  }),
}));

const setUp = (props) => mount(<MobileBreadcrumbs {...defaultProps} {...props} />);

describe('MobileBreadcrumbs', () => {
  let component;
  beforeEach(() => {
    component = setUp();
  });

  it('renders MobileBreadcrumbs component correctly', () => {
    expect(component).toMatchSnapshot();
  });

  it('rendrers MobileBreadcrumbs children prop correclty', () => {
    const p = component.find('p');

    expect(p.text()).toEqual(defaultProps.currentPage);
  });

  it('rendrers filter button when prop withFilterButton passed correctly', () => {
    component = setUp({ withFilterButton: true });

    const button = component.find('CommonButton').last();

    expect(button.props().label).toBe('Filter');
  });

  describe('default props', () => {
    const nakedComponent = useNakedComponent(MobileBreadcrumbs);

    it('should use default prop onClickHandler', () => {
      const result = nakedComponent.defaultProps.onClickHandler();
      expect(result).toBe(undefined);
    });
  });
});
