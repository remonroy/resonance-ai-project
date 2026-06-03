import { SignUp } from "@clerk/nextjs";

export default function SignUpPage() {
  return (
    <div className="flex min-h-screen justify-center bg-background">
      <SignUp
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
