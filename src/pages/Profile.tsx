import { UserProfile, useUser } from "@clerk/clerk-react";
import Header from '../components/Header';
import { Card } from "../components/ui/card";
import { NewsletterSignup } from "../components/marketing/NewsletterSignup";

const Profile = () => {
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