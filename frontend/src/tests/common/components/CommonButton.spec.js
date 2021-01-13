import React from 'react';

import CommonButton from 'common/components/CommonButton';

describe('CommonButton', () => {
  it('renders CommonButton component correctly', () => {
    const component = render(<CommonButton />);
    expect(component).toMatchSnapshot();
  });
});
