"use client";

import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import { toast } from "@/hooks/use-toast";
import { signIn } from "next-auth/react";
import ROUTES from "@/constants/routes";

const SocialAuthForm = () => {
  const buttonClass =
    "background-dark400_light900 body-medium text-dark200_light800 min-h-12 flex-1 rounded-2 px-4 py-3.5";

  const handleSignIn = async (provider: "github" | "google") => {
    try {
      await signIn(provider, {
        callbackUrl: ROUTES.HOME,
        redirect: false,
      });
    } catch (error) {
      console.log(error);
      toast({
        title: "Sign-in Failed",
        description:
          error instanceof Error
            ? error.message
            : "An error occurred during sign-in",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="mt-10 flex flex-wrap gap-2.5">
      <Button className={buttonClass} onClick={() => handleSignIn("github")}>
        <Image
          src={"/icons/github.svg"}
          alt="Github Logo"
          width={20}
          height={20}
          className="invert-colors mr-2.6 object-contain"
        />

        <span>Log in with Github</span>
      </Button>
      <Button className={buttonClass} onClick={() => handleSignIn("google")}>
        <Image
          src={"/icons/google.svg"}
          alt="Google Logo"
          width={20}
          height={20}
          className="mr-2.6 object-contain"
        />

        <span>Log in with Google</span>
      </Button>
    </div>
  );
};

export default SocialAuthForm;