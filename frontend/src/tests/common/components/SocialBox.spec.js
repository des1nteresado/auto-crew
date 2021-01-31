import React from 'react';
import { shallow } from 'enzyme';

import SocialBox from 'common/components/SocialBox';
import { useNakedComponent } from 'helpers/hooks/useNakedComponent';

const defaultProps = {
  socialNetworks: [
    {
      name: 'name1',
      link: 'link1',
    },
    {
      name: 'name2',
      link: 'link2',
    },
  ],
  style: 'style',
};

const setUp = (props) => shallow(<SocialBox {...defaultProps} {...props} />).dive();

describe('SocialBox', () => {
  let component;

  beforeEach(() => {
    component = setUp();
  });

  it('renders SocialBox component correctly', () => {
    expect(component).toMatchSnapshot();
  });

  it('renders correct number of social links', () => {
    const socialNetworks = component.find('WithStyles(ForwardRef(Link))');

    expect(socialNetworks).toHaveLength(defaultProps.socialNetworks.length);
  });

  it('renders SocialBox component with provided styles correctly', () => {
    const box = component.find('Styled(MuiBox)').first();
    expect(box.props().className.includes(defaultProps.style)).toBeTruthy();
  });

  describe('default props', () => {
    it('should use default onInputChange', () => {
      const nakedComponent = useNakedComponent(SocialBox);

      const result = nakedComponent.defaultProps.onClick();
      expect(result).toBe(undefined);
    });
  });
});
