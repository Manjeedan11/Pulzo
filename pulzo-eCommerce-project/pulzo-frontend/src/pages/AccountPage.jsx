import { useUser } from "@clerk/clerk-react";
import { Navigate } from "react-router";

function AccountPage() {
  const { isLoaded, isSignedIn, user } = useUser();

  if (!isLoaded) {
    return (
      <main className="px-8">
        <h2 className="text-4xl font-bold">Your Account</h2>
        <div>
          <p>Loading...</p>
        </div>
      </main>
    );
  }

  if (!isSignedIn) {
    return <Navigate to="/sign-in" />;
  }

  return (
    <main>
      <h2 className="text-4xl font-bold">Your Account</h2>
      <div className="mt-4">
        <p>{user.fullName}</p>
        <p>{user.emailAddresses[0].emailAddress}</p>
      </div>
    </main>
  );
}

export default AccountPage;
