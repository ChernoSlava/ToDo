/* eslint-disable import/no-extraneous-dependencies */
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
      <Portal domNode={node}>test</Portal>
    </ThemeProvider>
  );
};

describe('Portal tests', () => {
  afterEach(() => {
    document.body.innerHTML = '';
  });

  it('should render by body', () => {
    const customNode = document.createElement('div');
    customNode.setAttribute('id', 'customNode');
    document.body.appendChild(customNode);

    const { baseElement, unmount } = render(getUi());

    expect(baseElement).toMatchSnapshot();

    unmount();
  });

  it('should render in root', () => {
    const root = document.createElement('div');
    root.setAttribute('id', 'root');
    document.body.appendChild(root);

    const customNode = document.createElement('div');
    customNode.setAttribute('id', 'customNode');
    document.body.appendChild(customNode);

    const { baseElement, unmount } = render(getUi());

    expect(baseElement).toMatchSnapshot();

    unmount();
  });

  it('should render in custom node', () => {
    const root = document.createElement('div');
    root.setAttribute('id', 'root');
    document.body.appendChild(root);

    const customNode = document.createElement('div');
    customNode.setAttribute('id', 'customNode');
    document.body.appendChild(customNode);

    const { baseElement, unmount } = render(
      getUi(document.getElementById('customNode')),
    );

    expect(baseElement).toMatchSnapshot();

    unmount();
  });
});
