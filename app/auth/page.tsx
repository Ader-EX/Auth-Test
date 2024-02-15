import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Github } from "lucide-react";
import SignGithubButton from "../components/SignGithubButton";
import { getServerSession } from "next-auth";
import { authOptions } from "../utils/auth";
import { redirect } from "next/navigation";
import SignEmail from "../components/SignEmail";

export default async function page() {
  const session = await getServerSession(authOptions);
  if (session) {
    return redirect("/");
  }
  return (
    <div className="w-screen h-screen items-center justify-center flex">
      <Card>
        <CardHeader>
          <CardTitle>Please Sign in</CardTitle>
          <CardDescription>
            To Access the page you need to be authenticated
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col">
            <SignEmail />
            <SignGithubButton />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
