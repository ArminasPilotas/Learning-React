import { useState } from "react";
import axios from "axios";

function useApi() {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState();

  async function call(request) {
    setIsLoading(true);
    const { data } = await axios(request);

    setIsLoading(false);
    setData(data);
  }

  return {
    isLoading,
    data,
    call,
  };
}

export default useApi;
