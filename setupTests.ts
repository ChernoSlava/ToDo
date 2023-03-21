/* eslint-disable import/no-extraneous-dependencies */
import 'jest-styled-components';

import fetchMock, { enableFetchMocks } from 'jest-fetch-mock';

enableFetchMocks();

fetchMock.dontMock();
