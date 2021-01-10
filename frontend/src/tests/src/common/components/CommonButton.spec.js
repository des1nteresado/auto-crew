import React from 'react';
import * as renderer from 'react-test-renderer';

import CommonButton from 'common/components/CommonButton';

const defaultProps = {
  label: 'Button',
  isDisabled: false,
};

const TestCommonButton = (props) => <CommonButton {...defaultProps} {...props} />;

describe('Render CommonButton', () => {
  it('renders CommonButton component correctly', () => {
    const component = renderer.create(<TestCommonButton />).toJSON();

    expect(component).toMatchSnapshot();
  });
});
