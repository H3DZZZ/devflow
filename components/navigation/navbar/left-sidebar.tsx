import Image from "next/image";
import Link from "next/link";
import React from "react";

import { auth, signOut } from "@/auth";
import { Button } from "@/components/ui/button";
import ROUTES from "@/constants/routes";

import NavLinks from "./nav-links";

const LeftSidebar = async () => {
  const session = await auth();

  const handleSignOut = async () => {
    "use server";
    await signOut();
  };

  return (
    <section className="custom-scrollbar background-light900_dark200 light-border sticky left-0 top-0 flex h-screen flex-col justify-between overflow-y-auto border-r p-6 pt-36 shadow-light-300 dark:shadow-none max-sm:hidden lg:max-w-[266px] ">
      <div className="flex h-full flex-1 flex-col gap-6">
        <NavLinks />
      </div>
      <div className="flex flex-col gap-3">
        {session ? (
          <div>
            <Button
              className="small-medium flex min-h-[41px] w-full items-center justify-start gap-4 rounded-lg p-4 shadow-none"
              onClick={handleSignOut}
              variant={"ghost"}
            >
              <Image
                src={"/icons/close.svg"}
                alt={"sign-up"}
                width={20}
                height={20}
              />
              <span className="text-dark300_light900 base-medium hidden lg:block">
                Logout
              </span>
            </Button>
          </div>
        ) : (
          <>
            <div>
              <Button
                asChild
                className="small-medium btn-secondary min-h-[41px] w-full rounded-lg px-4 py-3 shadow-none"
              >
                <Image
                  src={"/icons/sign-up.svg"}
                  alt={"sign-up"}
                  width={20}
                  height={20}
                  className="invert-colors lg:hidden"
                />
                <Link href={ROUTES.SIGN_IN}>
                  <span className="primary-text-gradient max-lg:hidden">
                    Sign Up
                  </span>
                </Link>
              </Button>
            </div>
            <div>
              <Button
                asChild
                className="small-medium light-border-2 btn-tertiary text-dark400_light900 min-h-[41px] w-full rounded-lg border px-4 py-3 shadow-none"
              >
                <Link href={ROUTES.SIGN_UP}>
                  <Image
                    src={"/icons/sign-up.svg"}
                    alt={"sign-up"}
                    width={20}
                    height={20}
                    className="invert-colors lg:hidden"
                  />
                  <span className="max-lg:hidden">Sign Up</span>
                </Link>
              </Button>
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default LeftSidebar;
