import React from 'react';
import { mount } from 'enzyme';

import Pagination from 'common/components/Pagination';

const defaultProps = {
  pageCount: 5,
  currentPage: 3,
  onChange: jest.fn(),
};

const setUp = (props) => mount(<Pagination {...defaultProps} {...props} />);

describe('Pagination', () => {
  let component;

  beforeEach(() => {
    component = setUp();
  });

  it('renders Pagination component correctly', () => {
    expect(component).toMatchSnapshot();
  });

  it('triggers onChange event correctly', () => {
    const paginator = component.find('Pagination');
    paginator.props().onChange(4);

    expect(defaultProps.onChange).toBeCalledWith(4);
  });
});
