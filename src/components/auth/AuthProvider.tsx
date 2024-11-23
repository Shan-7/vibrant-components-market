import { ClerkProvider } from "@clerk/clerk-react";

const PUBLISHABLE_KEY = process.env.VITE_CLERK_PUBLISHABLE_KEY || "";

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
      {children}
    </ClerkProvider>
  );
};