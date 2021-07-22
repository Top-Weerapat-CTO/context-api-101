import {
  FETCH_POST_BY_ID_REQUEST,
  FETCH_POST_BY_ID_SUCCESS,
  FETCH_POST_BY_ID_FAILURE,
} from "./actionTypes";

export const initialState = {
  title: "Post Context",
  page: 1,
  keys: {},
};

export const postReducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { ...state, page: state.page + 1 };
    case "decrement":
      return { ...state, page: state.page - 1 };
    case "reset":
      return { ...state, page: 0 };
    case FETCH_POST_BY_ID_REQUEST:
      return {
        ...state,
        keys: {
          ...state.keys,
          [action.key]: {
            ...state.keys?.[action.key],
            isFetching: false,
            loading: true,
            error: false,
          },
        },
      };
    case FETCH_POST_BY_ID_SUCCESS:
      return {
        ...state,
        keys: {
          ...state.keys,
          [action.key]: {
            ...state.keys?.[action.key],
            isFetching: true,
            loading: false,
            data: action.data,
            error: false,
          },
        },
      };
    case FETCH_POST_BY_ID_FAILURE:
      return {
        ...state,
        keys: {
          ...state.keys,
          [action.key]: {
            ...state.keys?.[action.key],
            isFetching: false,
            loading: false,
            error: action?.error?.message,
          },
        },
      };
    default:
      return state;
  }
};
