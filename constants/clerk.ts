export const clerkKey = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY as string;

if (!clerkKey) {
  throw new Error("Missing Clerk Publishable Key");
}
