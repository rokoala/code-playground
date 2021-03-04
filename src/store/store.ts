import { createStore } from 'redux';

import { codeReducer } from '../reducers/codeReducer';

export const store = createStore(codeReducer);
