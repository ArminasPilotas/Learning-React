import { useContext } from "react";
import Spinner from "../common/components/Spinner";
import { UserContext } from "../common/providers/UserProvider";

function Home() {
  const { user, isLoading } = useContext(UserContext);

  if (isLoading || !user) {
    return <Spinner text="Loading user Info" />;
  }

  return <div>Welcome back {user.username}</div>;
}

export default Home;
