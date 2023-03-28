// CODE FROM COURSE

// import { verifyPassword } from "@/lib/auth";
// import { connectToDatabase } from "@/lib/db";
// import NextAuth from "next-auth/next"; // USUNALEM /NEXT
// import Providers from "next-auth/providers"; // usunalem /providers
// // in case read docs 'bout [...nextauth]

// export default NextAuth({
//   session: {
//     jwt: true,
//   },
//   providers: [
//     Providers.Credentials({
//       // credentials czyli nasza forma, moze byc google, github auth itp

//       async authorize(credentials) {
//         // runs if receives incoming login req
//         // czyli logika do Autha nasza własna!

//         const client = await connectToDatabase();

//         const userCollection = client.db().collection("users");

//         const user = await userCollection.findOne({
//           email: credentials.email,
//         });

//         if (!user) {
//           client.close();
//           console.log("no user found");
//           throw new Error("No user found!");
//         }

//         const isValid = await verifyPassword(
//           credentials.password,
//           user.password
//         );

//         if (!isValid) {
//           client.close();
//           console.log("could not log you in");
//           throw new Error("Could not log you in!");
//         }

//         client.close();

//         return { email: user.email };
//       },
//     }),
//   ],
// });
// ==== idk co to
// import NextAuth from "next-auth";
// import GithubProvider from "next-auth/providers/github";
// export const authOptions = {
//   // Configure one or more authentication providers
//   providers: [
//     GithubProvider({
//       clientId: process.env.GITHUB_ID,
//       clientSecret: process.env.GITHUB_SECRET,
//     }),
//     // ...add more providers here
//   ],
// };
// export default NextAuth(authOptions);

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
});
