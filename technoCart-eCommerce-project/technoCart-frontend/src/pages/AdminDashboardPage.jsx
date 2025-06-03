import AdminManagement from "@/components/standalone/AdminManagement";
import { useUser } from "@clerk/clerk-react";

function AdminDashboardPage() {
  const { user } = useUser();

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-8 xl:px-16 mt-32">
      <div className="mx-auto max-w-7xl">
        <h1 className="mb-8 text-4xl font-bold text-gray-900">
          Admin Dashboard - Welcome, {user.firstName} !
        </h1>
        <AdminManagement />
      </div>
    </div>
  );
}

export default AdminDashboardPage;
