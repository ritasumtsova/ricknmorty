import { AxiosError } from 'axios';
import { ActionType } from '../../types/store/actionType';
import { loaderActionTypes } from '../actionTypes/loader';

export const fetchStart = (): ActionType => {
  return {
    type: loaderActionTypes.FETCH_START,
  };
};

export const fetchEnd = (): ActionType => {
  return {
    type: loaderActionTypes.FETCH_END,
  };
};

export const fetchFailure = (error: AxiosError): ActionType => {
  const errorMessage: string = error.message;
  
  return {
    type: loaderActionTypes.FETCH_FAILURE,
    payload: errorMessage
  };
};
