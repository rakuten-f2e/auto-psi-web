import {
  GET_PSI_RESULT_ING,
  GET_PSI_RESULT_SUCCESS,
  GET_PSI_RESULT_ERROR,
} from './constants';

import axios from 'axios';

/**
 * Get psi result, this action starts the request saga
 *
 * @return {object} An action object with a type of GET_PSI_RESULT
 */
export function getPsiResultIng() {
  return {
    type: GET_PSI_RESULT_ING,
  };
}

/**
 * Dispatched after getting the psi result by the request saga
 *
 * @param  {array} psiResults The psi results
 *
 * @return {object}      An action object with a type of GET_PSI_RESULT_SUCCESS passing the repos
 */
export function getPsiResultSuccess(psiResults) {
  return {
    type: GET_PSI_RESULT_SUCCESS,
    psiResults,
  };
}

/**
 * Dispatched when getting the psi results fails
 *
 * @param  {object} error The error
 *
 * @return {object}       An action object with a type of GET_PSI_RESULT_ERROR passing the error
 */
export function getPsiResultFailed(error) {
  return {
    type: GET_PSI_RESULT_ERROR,
    error,
  };
}

export function loadResult({ url, device }) {
  return (dispatch) => {
    dispatch(getPsiResultIng());

    const strategy = device || 'desktop';

    return axios.post(`/psi?url=${url}&device=${strategy}`)
      .then((result) => dispatch(getPsiResultSuccess(result.data)))
      .catch((error) => dispatch(getPsiResultFailed(error)));
  };
}
