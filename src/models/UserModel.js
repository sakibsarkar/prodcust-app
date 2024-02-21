import mongoose from "mongoose";

let User;

try {
    User = mongoose.model("users");
} catch (error) {
    const userSchema = new mongoose.Schema({
        email: {
            type: String,
            required: [true, "Email is required"],
            unique: [true, "User email must be unique"]
        },
        password: {
            type: String,
            required: [true, "Password is required"]
        }
    }, { timestamps: true });

    User = mongoose.model("users", userSchema);
}

export default User;
