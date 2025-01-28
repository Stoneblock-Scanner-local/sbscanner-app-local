import { cookies } from "next/headers";
import { publicConfig } from "@/shared/config/constants";

export const getSessionCoookie = () => {
  const nextCookies = cookies();
  const tokenCookie = nextCookies.get(publicConfig.session_cookie_name!);
  return tokenCookie?.value;
};
