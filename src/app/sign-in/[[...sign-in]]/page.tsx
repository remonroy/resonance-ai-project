import { SignIn } from "@clerk/nextjs";

export default function SignInPage() {
  return (
    <div className="flex min-h-screen justify-center bg-background">
      <SignIn
        appearance={{
          elements: {
            rootBox: "max-auto",
            card: "shadow-lg",
          },
        }}
      />
    </div>
  );
}
