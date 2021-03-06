/**
 * Copyright (c) Facebook, Inc. and its affiliates. All Rights Reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// Used as type
import expect = require('expect');
import type {Circus} from '@jest/types';

export const STATE_SYM = (Symbol(
  'JEST_STATE_SYMBOL',
) as unknown) as 'STATE_SYM_SYMBOL';
export const RETRY_TIMES = (Symbol.for(
  'RETRY_TIMES',
) as unknown) as 'RETRY_TIMES_SYMBOL';
// To pass this value from Runtime object to state we need to use global[sym]
export const TEST_TIMEOUT_SYMBOL = (Symbol.for(
  'TEST_TIMEOUT_SYMBOL',
) as unknown) as 'TEST_TIMEOUT_SYMBOL';

// https://github.com/typescript-eslint/typescript-eslint/issues/2523
// eslint-disable-next-line @typescript-eslint/no-unused-vars
declare global {
  module NodeJS {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    interface Global {
      STATE_SYM_SYMBOL: Circus.State;
      RETRY_TIMES_SYMBOL: string;
      TEST_TIMEOUT_SYMBOL: number;
      expect: typeof expect;
    }
  }
}
