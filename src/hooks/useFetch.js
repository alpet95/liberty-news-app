import { useReducer, useCallback } from "react";

const fetchInitialState = {
  data: [],
  error: null,
  status: null,
};

const fetchReducer = (state, action) => {
  if (action.type === "SEND") {
    return {
      data: [],
      error: null,
      status: "pending",
    };
  }
  if (action.type === "SUCCESS") {
    return {
      data: action.responseData,
      error: null,
      status: "completed",
    };
  }
  if (action.type === "ERROR") {
    return {
      data: [],
      error: action.errorMessage,
      status: "completed",
    };
  }
  return state;
};

// ========== custom hook: fetch ==========
const useFetch = (fetchDataFunc) => {
  const [fetchState, dispatchFetch] = useReducer(
    fetchReducer,
    fetchInitialState
  );

  const sendRequest = useCallback(
    async (requestData) => {
      dispatchFetch({
        type: "SEND",
      });

      try {
        const responseData = await fetchDataFunc(requestData);
        dispatchFetch({
          type: "SUCCESS",
          responseData,
        });
      } catch (error) {
        console.error(error.message);
        dispatchFetch({
          type: "ERROR",
          errorMessage: error.message || "Something went wrong!",
        });
      }
    },
    [fetchDataFunc]
  );

  return {
    sendRequest,
    ...fetchState,
  };
};

export default useFetch;
