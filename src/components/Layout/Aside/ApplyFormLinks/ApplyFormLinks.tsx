import { Button } from "@/components/Basic/Button";
import { Variant } from "@/components/Basic/Button/constants";
import DotsIcon from "@/assets/icons/dots.svg";
import Link from "next/link";
import useMe from "@/shared/hooks/useMe";

const ApplyFormLinks = () => {
  const { me: user } = useMe();

  return (
    <div className=" w-full flex flex-col lg:flex-row justify-start items-center lg:items-start gap-x-6 gap-y-4 pb-10 border-b-2 border-grey-100 dark:border-grey-300 flex-wrap">
      {user ? (
        <>
          <Button
            variant={Variant.Secondary}
            endIcon={<DotsIcon className="w-4 stroke-white" />}
            className="rounded-3xl"
          >
            <Link href="/nominate/community">Community Nomination</Link>
          </Button>
          <Button
            variant={Variant.Secondary}
            endIcon={<DotsIcon className="w-4 stroke-white" />}
            className="rounded-3xl"
          >
            <Link href="/nominate/audit">Project Audit Nomination</Link>
          </Button>
        </>
      ) : (
        <div className="text-lg">
          You must be{" "}
          <Link href="/login" className="text-blue underline">
            logged in{" "}
          </Link>
          to create a nomination.
        </div>
      )}
    </div>
  );
};

export default ApplyFormLinks;
