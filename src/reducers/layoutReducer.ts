import { Action } from '../actions/actions';

export interface LayoutState {
    main: string;
    code: string;
    reverse: boolean;
}

const initialState = {
    main: 'vertical',
    code: 'horizontal',
    reverse: false,
};

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const layoutReducer = (state: LayoutState = initialState, action: Action) => {
    switch (action.type) {
        case 'SET_LAYOUT_1': {
            return { main: 'vertical', code: 'horizontal', reverse: false };
        }
        case 'SET_LAYOUT_2': {
            return { main: 'horizontal', code: 'vertical', reverse: false };
        }
        case 'SET_LAYOUT_3': {
            return { main: 'horizontal', code: 'vertical', reverse: true };
        }
        default:
            return state;
    }
};
