import React from 'react';
import { mount } from 'enzyme';
import { act } from 'react-dom/test-utils';

import SnackBar from 'common/components/SnackBar';
import { useNakedComponent } from 'helpers/hooks/useNakedComponent';

const defaultProps = {
  message: 'status message',
  onHandleClose: jest.fn(),
  isSuccess: true,
};

const setUp = (props) => mount(<SnackBar {...defaultProps} {...props} />);

describe('SnackBar', () => {
  let component;
  let useEffectSpy;

  beforeEach(() => {
    useEffectSpy = jest.spyOn(React, 'useEffect');
    component = setUp();
  });

  afterEach(() => {
    useEffectSpy.mockReset();
  });

  it('renders SnackBar component correctly', () => {
    expect(component).toMatchSnapshot();
  });

  it('displays snackBar if message is not empty', () => {
    const snackBar = component.find('WithStyles(ForwardRef(Snackbar))');

    expect(useEffectSpy).toHaveBeenCalled();
    expect(snackBar.props().open).toBeTruthy();
  });

  it('hides snackBar after a short delay', async () => {
    const snackBar = component.find('WithStyles(ForwardRef(Snackbar))');

    expect(snackBar.props().open).toBeTruthy();

    setTimeout(() => {
      expect(defaultProps.onHandleClose).toHaveBeenCalled();
      expect(snackBar.props().open).toBeFalsy();
    }, 7000);
  });

  it('hides snackBar after close button was clicked', () => {
    const snackBar = component.find('WithStyles(ForwardRef(Snackbar))');

    act(() => {
      snackBar.props().onClose();
    });

    expect(defaultProps.onHandleClose).toHaveBeenCalled();
  });

  it('applies error state for snackBar if isSuccess prop is true', () => {
    const snackBar = component.find('WithStyles(ForwardRef(Alert))');

    expect(snackBar.props().severity).toBe('success');
  });

  it('applies error state for snackBar if isSuccess prop is false', () => {
    component = setUp({ isSuccess: false });
    const snackBar = component.find('WithStyles(ForwardRef(Alert))');

    expect(snackBar.props().severity).toBe('error');
  });

  describe('default props', () => {
    const nakedComponent = useNakedComponent(SnackBar);

    it('should use default onAutocompleteChange', () => {
      const result = nakedComponent.defaultProps.onHandleClose();
      expect(result).toBe(undefined);
    });
  });
});
