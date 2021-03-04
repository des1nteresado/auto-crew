import React from 'react';
import { mount, shallow } from 'enzyme';

import CommonInput from 'common/components/CommonInput';
import { useNakedComponent } from 'helpers/hooks/useNakedComponent';

const defaultProps = {
  isTouchedByDefault: false,
  error: true,
  multiline: false,
  helperText: 'error text',
  style: 'styleClass',
};

jest.mock('uuid', () => ({
  v1: () => 'test-id',
}));

const setUp = (props) => shallow(<CommonInput {...props} {...defaultProps} />);

describe('CommonInput', () => {
  let component;

  beforeEach(() => {
    component = setUp();
  });

  afterAll(() => {
    jest.clearAllMocks();
  });

  it('renders CommonInput component correctly', () => {
    expect(component).toMatchSnapshot();
  });

  it('shows error helperText when error prop is passed and input is touched', () => {
    const commonInput = mount(<CommonInput {...defaultProps} />);
    const input = commonInput.find('input');

    input.simulate('blur');
    const p = commonInput.find('p');
    expect(p.text()).toBe(defaultProps.helperText);
  });

  it('shows helperText when multiline prop is true', () => {
    const commonInput = mount(<CommonInput {...defaultProps} multiline />);
    const p = commonInput.find('p');

    expect(p.text()).toBe(defaultProps.helperText);
  });

  describe('default props', () => {
    const nakedComponent = useNakedComponent(CommonInput);

    it('should use default prop onChange', () => {
      const result = nakedComponent.defaultProps.onChange();
      expect(result).toBe(undefined);
    });
  });
});
