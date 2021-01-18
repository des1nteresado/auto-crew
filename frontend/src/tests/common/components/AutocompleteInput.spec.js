import React from 'react';
import { shallow, mount } from 'enzyme';
import { act } from 'react-dom/test-utils';

import AutocompleteInput from 'common/components/AutocompleteInput';
import { useNakedComponent } from 'helpers/hooks/useNakedComponent';

const testProps = {
  name: 'test name',
};

const setUp = (props) => shallow(<AutocompleteInput {...props} />);

describe('AutocompleteInput', () => {
  const mockSetState = jest.fn();

  jest.mock('react', () => ({
    useState: (initial) => [initial, mockSetState],
  }));

  // const useStateSpy = jest.spyOn(React, 'useState');
  // useStateSpy.mockImplementation((init) => [init, setState]);

  let component;

  beforeEach(() => {
    component = setUp(testProps);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders AutocompleteInput component correctly', () => {
    expect(component).toMatchSnapshot();
  });

  // @TODO: figure out why it isn't working
  it('updates state correctly when input blur callback is calling', async () => {
    const autocompleteInput = mount(<AutocompleteInput {...testProps} />);
    const input = autocompleteInput.find('input');

    expect(input.props().name).toBe('test name');
    // input.simulate('blur');

    act(() => input.simulate('blur'));

    // autocompleteInput.update();

    expect(mockSetState).toHaveBeenCalledWith(true);

    // console.log(input.debug());
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
