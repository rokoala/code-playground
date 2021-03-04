import { Action } from '../actions/actions';

export interface CodeState {
    js: string;
    css: string;
    html: string;
}

const initialState = {
    js: '',
    css: '',
    html: '',
};

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const codeReducer = (state: CodeState = initialState, action: Action) => {
    switch (action.type) {
        case 'SET_JS': {
            return { ...state, js: action.payload };
        }
        case 'SET_CSS': {
            return { ...state, css: action.payload };
        }
        case 'SET_HTML': {
            return { ...state, html: action.payload };
        }
        default:
            return state;
    }
};
