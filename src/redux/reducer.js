import types from "./actionTypes";
export const initialState = {
  posts: [],
  inventory: [],
  isAdmin: false,
  loading: false,
};

const defaultReducer = (state = initialState, action) => {
  let newState = { ...state };

  switch (action.type) {
    case types.MAKE_REQUEST_START:
      newState.loading = true;
      return newState;

    case types.GET_DATA_SUCCESS:  
console.log('asdfsdg', action.payload)
      newState.inventory = action.payload[0].inventory;
      newState.posts = action.payload[0].data;
      newState.isAdmin = action.payload[0].isAdmin
      newState.loading = false;
      return newState;

    default:
      return newState;
  }
};

const exportObj = { initialState, reducer: defaultReducer };

export default exportObj;
