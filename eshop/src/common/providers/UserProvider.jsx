import { createContext, useEffect } from "react";
import useApi from "../hooks/useAPI";
import { getUser } from "../requests";

export const UserContext = createContext({});

function UserProvider({ children }) {
  const { data, isLoading, call } = useApi();

  useEffect(() => {
    call(getUser);
  }, []); //eslint-disable-line

  return (
    <UserContext.Provider value={{ user: data, isLoading }}>
      {children}
    </UserContext.Provider>
  );
}

export default UserProvider;
