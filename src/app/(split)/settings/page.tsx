import { redirect } from "next/navigation";
import { SettingsForm } from "@/components/Application/User/Settings";
import usersApi from "@/api/users/server";

export async function generateMetadata() {
  const user = await usersApi.getMe();

  return {
    title: `${user?.displayName} settings`,
  };
}

const SettingsPage = async () => {
  const user = await usersApi.getMe();

  if (!user) {
    redirect("/");
  }
  return (
    <>
      <h1 className="text-4xl font-semibold pt-12">Settings</h1>
      <SettingsForm user={user} />
      <span></span>
    </>
  );
};

export default SettingsPage;
