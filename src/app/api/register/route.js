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
            return NextResponse.json({ isExists }, { status: 200 })
        }

        const hasPass = await bcrypt.hash(password, 10);

        await User.create({ email: email, password: hasPass })
        return NextResponse.json({ message: 'user created successful' }, { status: 200 })
    }
    catch {
        return NextResponse.json({ message: 'err occ' }, { status: 500 })
    }
}