import axios from "axios";
import types from "./actionTypes";

export const login = () => async (dispatch) => {
  dispatch({ type: types.MAKE_REQUEST_START });

  const url = "https://61aecea833653500172f9fbf.mockapi.io/login";

  const response = await axios.get(url).catch((err) => {
    return 
  });

  console.log('response', response.data)
  dispatch({ type: types.GET_DATA_SUCCESS, payload: response.data });
};

const createArtifact = (payload) => async (dispatch) => {
  dispatch({ type: types.MAKE_REQUEST_START });

  dispatch({ type: types.CREATE_ARTIFACT_SUCCESS, payload: payload });
};

const createPost = (payload) => async (dispatch) => {
  dispatch({ type: types.MAKE_REQUEST_START });

  dispatch({ type: types.CREATE_POST_SUCCESS, payload: payload });
};
