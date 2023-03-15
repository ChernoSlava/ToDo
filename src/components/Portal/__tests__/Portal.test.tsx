// eslint-disable import/no-extraneous-dependencies /
// eslint-disable no-undef /

import React from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';

import { theme } from '@theme';
import { Portal } from '..';

const getUi = (node?: Element): JSX.Element => {
  return (
    <ThemeProvider theme={theme}>
      <Portal domNode={node}>
        test
      </Portal>
    </ThemeProvider>
  );
};

describe('Portal tests', () => {
  it('should render by default', () => {
    const { container } = render(getUi(), { container: document.body });

    expect(container).toMatchSnapshot();
  });

  it('should render in Root', () => {
    const root = document.createElement('div');
    root.setAttribute('id', 'root');
    document.body.append(root);
    const { container } = render(getUi(), { container: root });

    expect(container).toMatchSnapshot();
  });

  it('should render in Custom node', () => {
    const customNode = document.createElement('div');
    document.body.appendChild(customNode);
    
    const { container } = render(getUi(customNode), {
      container: customNode,
    });

    expect(container).toMatchSnapshot();
  });
});
