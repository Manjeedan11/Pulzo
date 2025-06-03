import { SignIn } from "@clerk/clerk-react";

function SignInPage() {
  return (
    <main className="flex items-center justify-center px-4 min-h-screen">
      <SignIn />
    </main>
  );
}

export default SignInPage;
