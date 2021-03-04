import React from 'react';
import { shallow } from 'enzyme';

import RemoveConfirmationModal from 'common/components/RemoveConfirmationModal';

const defaultProps = {
  isOpen: true,
  subTitle: 'title',
  handleSubmit: jest.fn(),
  handleRemoveModalClose: jest.fn(),
};

const setUp = (props) => shallow(<RemoveConfirmationModal {...defaultProps} {...props} />).dive();

describe('RemoveConfirmationModal', () => {
  let component;

  beforeEach(() => {
    component = setUp();
  });

  it('renders RemoveConfirmationModal component correctly', () => {
    expect(component).toMatchSnapshot();
  });
});
