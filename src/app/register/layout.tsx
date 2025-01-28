import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Register",
};

const RegisterLayout = async ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>;
};

export default RegisterLayout;
