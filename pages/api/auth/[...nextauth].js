import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  secret: process.env.JWT_SECRET,
  callbacks: {
    async signIn({ account, profile }) {
      // access only for 1 email or more
      if (account.provider === "google") {
        return (
          profile.email_verified &&
          profile.email.endsWith(process.env.AUTH_EMAIL)
        );
      }
      return true; // Do different verification for other providers that don't have `email_verified`
    },
  },
  session: {
    jwt: true,
    maxAge: 300, // session expires in 5 minutes
  },
});
