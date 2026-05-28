"use client";

import { Button } from "@/components/ui/button";
import { UserCircleIcon } from "lucide-react";
import { UserButton, SignInButton, useClerk } from "@clerk/nextjs";

export default function AuthButton() {
  // TODO: Add different auth states
  const { isSignedIn } = useClerk();

  return (
    <>
      {!isSignedIn && (
        <SignInButton mode="modal">
          <Button
            variant="outline"
            className="px-4 py-2 text-sm font-medium text-blue-600 hover:text-blue-500 border-blue-500/20 rounded-full shadow-none [&_svg]:size-5"
          >
            <UserCircleIcon />
            Sign in
          </Button>
        </SignInButton>
      )}

      {isSignedIn && (
        <>
          <UserButton />

          {/* TODO: Add menu items for Studio and user profile */}
        </>
      )}
    </>
  );
}
