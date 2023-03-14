// eslint-disable import/no-extraneous-dependencies /
// eslint-disable no-undef /

import React from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';

import { theme } from '../../../theme';
import { Button, ButtonType } from '../Button';

const getUi = (type: ButtonType, onClick?: () => void): JSX.Element => {
  return (
    <ThemeProvider theme={theme}>
      <Button title="I am button" onClick={onClick} type={type} />
    </ThemeProvider>
  );
};

describe('Button tests', () => {
  it('should render correct add button', () => {
    const { container } = render(getUi('add'));

    expect(container).toMatchSnapshot();
  });
});