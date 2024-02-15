"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { signIn } from "next-auth/react";
import { toast } from "@/components/ui/use-toast";

export default function SignEmail() {
  const [email, setEmail] = useState<string | null>(null);
  async function signEmail() {
    const signResult = await signIn("email", {
      email: email,
      callbackUrl: `${window.location.origin}`,
      redirect: false,
    });
    if (!signResult?.ok) {
      return toast({
        title: "Sign In Failed",
        description: "Something went wrong, please try again later",
        variant: "destructive",
      });
    }
    return toast({
      title: "Check your email",
      description: "We've sent you a link to sign in",
    });
  }
  return (
    <form action={signEmail}>
      {" "}
      <div className="flex flex-col gap-y-2">
        <Label>Email</Label>
        <Input
          name="Email"
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          placeholder="name@example.com"
        />
      </div>
      <Button className="mt-4 w-full" type="submit">
        Sign In with Email
      </Button>
    </form>
  );
}
