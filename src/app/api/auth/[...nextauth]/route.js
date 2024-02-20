import CredentialsProvider from "next-auth/providers/credentials";
import NextAuth from "next-auth/next";
import User from "@/models/UserModel";
import bcrypt from "bcryptjs";
import { connectDb } from "@/lib/mongodb";

export const authOptions = {
    providers: [
        CredentialsProvider({
            name: 'credentials',
            credentials: {},

            async authorize(credentials) {
                const { email, password } = credentials;
                try {
                    await connectDb()
                    const user = await User.findOne({ email });

                    if (!user) {
                        return null;
                    }

                    const passwordsMatch = await bcrypt.compare(password, user.password);
                    if (!passwordsMatch) {
                        return null;
                    }
                    return user;
                } catch (error) {
                    console.log("Error: ", error);
                }
            }
        })
    ],
    callback: {
        async jwt({ token, user }) {
            if (user) {
                token.email = user?.email
            }
            console.log(user, token);
            return token
        },
        async session({ session, token }) {
            if (token) {
                session.user.email = token.email
            }
            return session
        }
    },
    session: {
        strategy: "jwt"
    },
    secret: process.env.NEXTAUTH_SECRET,
    pages: {
        signIn: '/login'
    }
}

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST }
