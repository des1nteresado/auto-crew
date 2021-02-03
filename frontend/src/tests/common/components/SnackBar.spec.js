import React from 'react';
import { mount } from 'enzyme';

import SnackBar from 'common/components/SnackBar';
import { useNakedComponent } from 'helpers/hooks/useNakedComponent';

const defaultProps = {
  message: 'status message',
};

const setUp = (props) => mount(<SnackBar {...defaultProps} {...props} />);

describe('SnackBar', () => {
  let component;
  let useEffectSpy;
  let useCallbackSpy;

  beforeEach(() => {
    useEffectSpy = jest.spyOn(React, 'useEffect');
    useCallbackSpy = jest.spyOn(React, 'useCallback');
    component = setUp();
  });

  afterEach(() => {
    useEffectSpy.mockReset();
  });

  it('renders SnackBar component correctly', () => {
    expect(component).toMatchSnapshot();
  });

  it('renders snackBar if message is not empty', () => {
    expect(useEffectSpy).toHaveBeenCalled();
  });

  it('renders snackBar if message is not empty 22', async () => {
    const snackBar = component.find('WithStyles(ForwardRef(Snackbar))');

    expect(snackBar.props().open).toBeTruthy();

    // snackBar.props().onClose();

    // expect(component.props().onHandleClose).toHaveBeenCalled();

    setTimeout(() => {
      expect(useCallbackSpy).toHaveBeenCalled();
      expect(snackBar.props().open).toBeFalsy();
    }, 7000);
  });

  describe('default props', () => {
    const nakedComponent = useNakedComponent(SnackBar);

    it('should use default onAutocompleteChange', () => {
      const result = nakedComponent.defaultProps.onHandleClose();
      expect(result).toBe(undefined);
    });
  });
});
