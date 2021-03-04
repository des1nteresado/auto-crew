import React from 'react';
import { shallow, mount } from 'enzyme';

import AutocompleteInput from 'common/components/AutocompleteInput';
import { useNakedComponent } from 'helpers/hooks/useNakedComponent';

const defaultProps = {
  name: 'name',
  error: true,
  helperText: 'error text',
  onAutocompleteChange: jest.fn(),
};

const setUp = (props) => shallow(<AutocompleteInput {...defaultProps} {...props} />);

describe('AutocompleteInput', () => {
  let component;

  beforeEach(() => {
    component = setUp();
  });

  it('renders AutocompleteInput component correctly', () => {
    expect(component).toMatchSnapshot();
  });

  it('shows error helperText when error prop is passed and input is touched', () => {
    const autocompleteInput = mount(<AutocompleteInput {...defaultProps} />);
    const input = autocompleteInput.find('input');

    expect(input.props().name).toBe(defaultProps.name);

    input.simulate('blur');

    const p = autocompleteInput.find('p');

    expect(p.text()).toBe(defaultProps.helperText);
  });

  // @TODO: improve test
  it('calls onAutocompleteChange when onChange event is triggered', () => {
    const testValue = 'value';
    const autocompleteInput = component.find('AutocompleteInput');
    autocompleteInput.props().onAutocompleteChange(testValue);

    expect(defaultProps.onAutocompleteChange).toHaveBeenCalledWith(testValue);
  });

  describe('default props', () => {
    const nakedComponent = useNakedComponent(AutocompleteInput);

    it('should use default onAutocompleteChange', () => {
      const result = nakedComponent.defaultProps.onAutocompleteChange();
      expect(result).toBe(undefined);
    });

    it('should use default onInputChange', () => {
      const result = nakedComponent.defaultProps.onInputChange();
      expect(result).toBe(undefined);
    });

    it('should use default getOptionLabel', () => {
      const result = nakedComponent.defaultProps.getOptionLabel();
      expect(result).toBe('');
    });
  });
});
