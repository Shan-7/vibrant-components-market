import { ClerkProvider } from "@clerk/clerk-react";

// Use a development key if no key is provided
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

// Development fallback component when no key is available
const DevFallback = ({ children }: { children: React.ReactNode }) => {
  console.warn(
    "⚠️ Running in development mode without Clerk authentication.\n" +
    "Add VITE_CLERK_PUBLISHABLE_KEY to your .env file to enable authentication.\n" +
    "Get your key at: https://dashboard.clerk.com/"
  );
  return <>{children}</>;
};

export function AuthProvider({ children }: { children: React.ReactNode }) {
  // In development, render without Clerk if no key is available
  if (import.meta.env.DEV && !PUBLISHABLE_KEY) {
    return <DevFallback>{children}</DevFallback>;
  }

  // In production, ensure key exists
  if (!PUBLISHABLE_KEY) {
    throw new Error(
      "Missing VITE_CLERK_PUBLISHABLE_KEY. " +
      "Please add it to your .env file."
    );
  }

  return (
    <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
      {children}
    </ClerkProvider>
  );
}