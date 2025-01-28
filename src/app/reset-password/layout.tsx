import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Reset password",
};

const ResetPasswordLayout = async ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return <>{children}</>;
};

export default ResetPasswordLayout;
