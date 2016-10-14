import {
  GET_PSI_RESULT_ING,
  GET_PSI_RESULT_SUCCESS,
  GET_PSI_RESULT_ERROR,
} from './constants';

// The initial state of the App
const initialState = {
  loading: false,
  error: false,
  psiResults: {},
};

function appReducer(state = initialState, action) {
  switch (action.type) {
    case GET_PSI_RESULT_ING:
      return {
        ...state,
        loading: true,
        error: false,
      };
    case GET_PSI_RESULT_SUCCESS:
      return {
        ...state,
        psiResults: action.psiResults,
        loading: false,
      };
    case GET_PSI_RESULT_ERROR:
      return {
        ...state,
        error: action.error,
        loading: false,
      };
    default:
      return state;
  }
}

export default appReducer;
