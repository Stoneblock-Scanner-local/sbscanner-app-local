import { useQuery } from "@tanstack/react-query";
import usersApi from "@/api/users/client";

const useMe = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["me"],
    queryFn: usersApi.getMe,
  });

  return { me: data, isLoading };
};

export default useMe;
