import { createStore, combineReducers } from 'redux';

import { codeReducer, CodeState } from '../reducers/codeReducer';
import { layoutReducer, LayoutState } from '../reducers/layoutReducer';

export interface ApplicationState {
    code: CodeState;
    layout: LayoutState;
}

export const store = createStore(
    combineReducers<ApplicationState>({ code: codeReducer, layout: layoutReducer }),
);
