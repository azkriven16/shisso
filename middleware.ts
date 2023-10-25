import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
  // Ensure that locale specific sign-in pages are public
});

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
