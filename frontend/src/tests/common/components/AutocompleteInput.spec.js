import React from 'react';

import AutocompleteInput from 'common/components/AutocompleteInput';
import { useNakedComponent } from 'helpers/hooks/useNakedComponent';

const props = {
  name: 'test name',
};

const setUp = (props) => shallow(<AutocompleteInput {...props} />);

describe('AutocompleteInput', () => {
  const setState = jest.fn();
  const useStateSpy = jest.spyOn(React, 'useState');
  useStateSpy.mockImplementation((init) => [init, setState]);

  let component;

  beforeEach(() => {
    component = setUp(props);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders AutocompleteInput component correctly', () => {
    expect(component).toMatchSnapshot();
  });

  // @TODO: figure out why it isn't working
  it('updates state correctly when input blur callback is calling', () => {
    const component = mount(<AutocompleteInput {...props} />);
    const input = component.find('input');

    expect(input.props().name).toBe('test name');
    input.simulate('blur');
    expect(setState).toHaveBeenCalledWith(true);
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
