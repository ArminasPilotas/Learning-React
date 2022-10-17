import { useState } from "react";
import axios from "axios";

const initialState = {
  isLoading: false,
  data: null,
};

function useApi() {
  const [state, setState] = useState(initialState);

  async function call(request) {
    setState((prev) => ({ ...prev, isLoading: true }));
    const { data } = await axios(request);

    setState({ data, isLoading: false });
  }

  return {
    ...state,
    call,
  };
}

export default useApi;
