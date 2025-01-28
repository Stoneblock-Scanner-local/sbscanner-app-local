import { useRouter } from "next/navigation";
import useMe from "./useMe";

const useAuthenticatedAction = (action: any) => {
  const { me: user } = useMe();

  const router = useRouter();

  return async (...args: any) => {
    if (!user) {
      return router.push("/login");
    }

    return action(...args);
  };
};

export default useAuthenticatedAction;
