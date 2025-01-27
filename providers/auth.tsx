import { ClerkProvider, useAuth } from "@clerk/clerk-expo";
import { tokenCache } from "@/lib/clerk";
import { clerkKey } from "@/constants/clerk";
import { useRouter, useSegments } from "expo-router";
import { useEffect } from "react";

function useProtectedRoute() {
  const { isLoaded, isSignedIn } = useAuth();
  const segments = useSegments();
  const router = useRouter();

  useEffect(() => {
    if (!isLoaded) return;

    const inTabsGroup = segments[0] === "(tabs)";

    if (!isSignedIn && inTabsGroup) {
      router.replace("/login");
    } else if (isSignedIn && !inTabsGroup) {
      router.replace("/(tabs)");
    }
  }, [isSignedIn, isLoaded]);
}

export function AuthProvider({ children }: { children: React.ReactNode }) {
  return (
    <ClerkProvider publishableKey={clerkKey} tokenCache={tokenCache}>
      <AuthConsumer>{children}</AuthConsumer>
    </ClerkProvider>
  );
}

function AuthConsumer({ children }: { children: React.ReactNode }) {
  useProtectedRoute();
  return <>{children}</>;
}
