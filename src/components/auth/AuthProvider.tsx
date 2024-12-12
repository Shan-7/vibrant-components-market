import { ClerkProvider } from "@clerk/clerk-react";

// For development, we'll use a mock key if none is provided
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

export function AuthProvider({ children }: { children: React.ReactNode }) {
  if (!PUBLISHABLE_KEY) {
    console.warn("Missing Publishable Key. Authentication features will be limited.");
    // Return children without ClerkProvider in development
    return <>{children}</>;
  }

  return (
    <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
      {children}
    </ClerkProvider>
  );
}