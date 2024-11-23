import { ClerkProvider } from "@clerk/clerk-react";

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  throw new Error(
    "Missing VITE_CLERK_PUBLISHABLE_KEY - Please add it to your .env file. You can get your key at https://dashboard.clerk.com/last-active?path=api-keys"
  );
}

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
      {children}
    </ClerkProvider>
  );
};