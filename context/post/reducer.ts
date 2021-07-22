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
    // case "increment":
    //   return { ...state, page: state.page + 1 };
    // case "decrement":
    //   return { ...state, page: state.page - 1 };
    // case "reset":
    //   return { ...state, page: 0 };
    // case FETCH_POST_BY_ID_REQUEST:
    //   return {
    //     ...state,
    //     keys: {
    //       ...state.keys,
    //       [action.key]: {
    //         ...state.keys?.[action.key],
    //         isFetching: false,
    //         loading: true,
    //         error: false,
    //       },
    //     },
    //   };
    // case FETCH_POST_BY_ID_SUCCESS:
    //   return {
    //     ...state,
    //     keys: {
    //       ...state.keys,
    //       [action.key]: {
    //         ...state.keys?.[action.key],
    //         isFetching: true,
    //         loading: false,
    //         data: action.data,
    //         error: false,
    //       },
    //     },
    //   };
    // case FETCH_POST_BY_ID_FAILURE:
    //   return {
    //     ...state,
    //     keys: {
    //       ...state.keys,
    //       [action.key]: {
    //         ...state.keys?.[action.key],
    //         isFetching: false,
    //         loading: false,
    //         error: action?.error?.message,
    //       },
    //     },
    //   };

    case "increment":
      state.page += 1;
      return;
    case "decrement":
      state.page -= 1;
      return;
    case "reset":
      state.page = 0;
      return;
    case FETCH_POST_BY_ID_REQUEST:
      if (!state.keys[action.key]) {
        state.keys[action.key] = {
          isFetching: false,
          loading: true,
          error: false,
        };
      } else {
        state.keys[action.key].isFetching = false;
        state.keys[action.key].loading = true;
        state.keys[action.key].error = false;
      }
      return;
    case FETCH_POST_BY_ID_SUCCESS:
      state.keys[action.key].isFetching = true;
      state.keys[action.key].loading = false;
      state.keys[action.key].error = false;
      state.keys[action.key].data = action.data;
      return;

    case FETCH_POST_BY_ID_FAILURE:
      state.keys[action.key].isFetching = false;
      state.keys[action.key].loading = false;
      state.keys[action.key].error = action?.error?.message;
      return;
  }
};
