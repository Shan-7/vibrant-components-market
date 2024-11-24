import { UserProfile, useUser } from "@clerk/clerk-react";
import Header from '../components/Header';
import { Card } from "../components/ui/card";
import { NewsletterSignup } from "../components/marketing/NewsletterSignup";
import { useEffect, useState } from "react";

const Profile = () => {
  const [isDevelopment, setIsDevelopment] = useState(false);
  
  useEffect(() => {
    // Check if we're in development mode without Clerk
    setIsDevelopment(!import.meta.env.VITE_CLERK_PUBLISHABLE_KEY && import.meta.env.DEV);
  }, []);

  // If in development, show mock profile
  if (isDevelopment) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="container mx-auto px-4 pt-24">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2">
              <Card className="p-6 bg-white/5">
                <h2 className="text-2xl font-bold mb-6">Profile Settings</h2>
                <p className="text-muted">Development Mode: Authentication disabled</p>
              </Card>
            </div>
            <div className="space-y-6">
              <Card className="p-6 bg-white/5">
                <h3 className="text-xl font-semibold mb-4">Account Summary</h3>
                <div className="space-y-2">
                  <p className="text-muted">Email: dev@example.com</p>
                  <p className="text-muted">Member since: {new Date().toLocaleDateString()}</p>
                </div>
              </Card>
              <NewsletterSignup />
            </div>
          </div>
        </main>
      </div>
    );
  }

  // For production, use actual Clerk authentication
  const { user } = useUser();

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 pt-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2">
            <Card className="p-6 bg-white/5">
              <h2 className="text-2xl font-bold mb-6">Profile Settings</h2>
              <UserProfile />
            </Card>
          </div>
          <div className="space-y-6">
            <Card className="p-6 bg-white/5">
              <h3 className="text-xl font-semibold mb-4">Account Summary</h3>
              <div className="space-y-2">
                <p className="text-muted">Email: {user?.primaryEmailAddress?.emailAddress}</p>
                <p className="text-muted">Member since: {user?.createdAt ? new Date(user.createdAt).toLocaleDateString() : 'N/A'}</p>
              </div>
            </Card>
            <NewsletterSignup />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Profile;