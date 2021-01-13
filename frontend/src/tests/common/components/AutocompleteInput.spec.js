import React from 'react';

import AutocompleteInput from 'common/components/AutocompleteInput';

const props = {
  name: 'test name',
};

const setUp = (props) => shallow(<AutocompleteInput {...props} />);

describe('AutocompleteInput', () => {
  let component;
  beforeEach(() => {
    component = setUp(props);
  });

  it('renders AutocompleteInput component correctly', () => {
    expect(component).toMatchSnapshot();
  });

  // it('declares AutocompleteInput with the correct name', () => {
  //   console.log(component.debug());

  //   expect(component.name()).toEqual('Test');
  // });
});
