import { UserProfile } from "@clerk/clerk-react";
import Header from '../components/Header';

const Profile = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 pt-24">
        <UserProfile />
      </main>
    </div>
  );
};

export default Profile;