import { ClerkProvider } from "@clerk/clerk-react";

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY || "pk_test_dummy-key-for-development";

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  // In development, warn about missing Clerk key but don't break the app
  if (import.meta.env.DEV && !import.meta.env.VITE_CLERK_PUBLISHABLE_KEY) {
    console.warn(
      "⚠️ No Clerk publishable key found. Authentication features will be limited.\n" +
      "To enable full authentication, add VITE_CLERK_PUBLISHABLE_KEY to your .env file.\n" +
      "Get your key at: https://dashboard.clerk.com/last-active?path=api-keys"
    );
  }

  return (
    <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
      {children}
    </ClerkProvider>
  );
};