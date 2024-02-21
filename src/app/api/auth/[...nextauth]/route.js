import CredentialsProvider from "next-auth/providers/credentials";
import NextAuth from "next-auth/next";
import User from "@/models/UserModel";
import bcrypt from "bcryptjs";
import { connectDb } from "@/lib/mongodb";

export const authOptions = {
    providers: [
        CredentialsProvider({
            name: 'credentials',
            credentials: {
                email: { label: "Username", type: "text" },
                password: { label: "Password", type: "text" }
            },

            authorize: async (credentials) => {
                const { email, password } = credentials;

                try {
                    await connectDb();
                    const user = await User.findOne({ email });

                    if (!user) {
                        throw new Error("Invalid email");
                    }

                    const passwordsMatch = await bcrypt.compare(password, user.password);
                    if (!passwordsMatch) {
                        throw new Error("Invalid password");
                    }

                    return user;
                } catch (error) {
                    throw new Error("Authentication failed");
                }
            }
        })
    ],

}

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST }
