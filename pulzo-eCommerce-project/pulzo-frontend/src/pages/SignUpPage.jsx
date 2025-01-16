import { SignIn } from "@clerk/clerk-react";

function SignUpPage() {
  return (
    <main className="flex items-center justify-center px-4 min-h-screen">
      <SignIn />
    </main>
  );
}

export default SignUpPage;
