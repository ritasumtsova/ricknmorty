import { loaderActionTypes } from '../actionTypes/loader';
import { ActionType } from '../../types/store/actionType';
import { LoaderInitState } from '../../types/store/initState';

const initState: LoaderInitState = {
  loading: false,
  errorMessage: ''
};

const loaderReducer = (state: LoaderInitState = initState, action: ActionType) => {
  switch(action.type) {
    case loaderActionTypes.FETCH_START:
      return {
        ...state,
        loading: true
      };

    case loaderActionTypes.FETCH_END:
      return {
        ...state,
        loading: false
      };

    case loaderActionTypes.FETCH_FAILURE:
      return {
        ...state,
        loading: false,
        errorMessage: action.payload
      };

    default:
      return state;
  }
};

export default loaderReducer;
