import User from "../../../models/UserModel";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";
import { connectDb } from "@/lib/mongodb";

export const POST = async (req) => {
    try {
        await connectDb()
        const { email, password } = await req.json()
        const isExists = await User.findOne({ email });

        if (isExists) {
            return NextResponse.json({ isExists }, { status: 200 });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        await User.create({ email, password: hashedPassword });
        return NextResponse.json({ message: 'User created successfully' }, { status: 200 });
    } catch (error) {
        console.error("Error:", error);
        return NextResponse.json({ message: 'Internal server error' }, { status: 500 });
    }
};
