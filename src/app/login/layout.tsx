import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login",
};

const LoginLayout = async ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>;
};

export default LoginLayout;
