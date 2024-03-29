"use client";
import Image from "next/image";
import logo from "../../public/logo.png";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setSignin } from "@/redux/slices/signInModalSilce";
import { setSignup } from "@/redux/slices/signupModalSilce";
import { signInAuth } from "@/redux/slices/userSlice";

const Signup = () => {

    const dispatch = useDispatch()
    const [isLoading, setIsloading] = useState(false)
    const [error, setError] = useState("")

    const hanldeToggle = () => {
        if (isLoading) {
            return
        }
        dispatch(setSignin(true))
        dispatch(setSignup(false))
    }


    const hanldeSubmit = async (e) => {
        e.preventDefault()

        if (isLoading) {
            return
        }
        const form = e.target
        const email = form.email.value
        const password = form.pass.value
        const confirmPass = form.confirm.value
        const obj = {
            email,
            password
        }

        if (password !== confirmPass) {
            setIsloading(false)
            return setError("Password didn't mathced, Please confrim your password")
        }

        try {
            setIsloading(true)
            const res = await fetch("/api/register", {
                method: "POST",
                headers: {
                    "Content-type": "Application/json"
                },
                body: JSON.stringify(obj)
            })

            if (res.ok) {
                const message = await res.json()

                if (message.isExists) {
                    setIsloading(false)
                    return setError("User already exist")
                }

                else {
                    setError("")
                    setIsloading(false)
                    dispatch(signInAuth({ email, password }))
                    console.log(resVall);
                }

            }

            if (res.error) {
                setIsloading(false)
                return setError("New error occ, Please try agin with different email")
            }

            else {
                setIsloading(false)
                setError("Unexpected error, please try again")
            }

        }

        catch {
            setIsloading(false)
            setError("Something went wrong")
        }
    }

    return (
        <div className="z-[99] fixed top-0 left-0 w-screen h-screen bg-[#0000007a] flex justify-center items-center">


            <form onSubmit={hanldeSubmit} className=" bg-[#3B3B3B] w-[567px] h-[718px] flex flex-col justify-center items-center gap-[30px] text-white rounded-md">
                <Image alt="logo" src={logo} width={150} height={100} />
                <h2 className="text-[38px] font-[600]">Sign up</h2>



                <div className="flex flex-col justify-center items-start gap-[25px]">

                    <div className="flex flex-col justify-center items-start gap-[10px]">

                        <p className="text-[#FFFFFF99] text-[18px] font-[600]">Email:</p>

                        <div className="w-[427px] h-[57px] bg-[#0C0C0C] rounded-lg flex justify-start items-center px-[20px]">
                            <input name="email" type="email" placeholder="example@mail.com"
                                className="w-full bg-transparent outline-none text-[#FFFFFF99]"
                            />
                        </div>
                    </div>

                    <div className="flex flex-col justify-center items-start gap-[10px]">

                        <p className="text-[#FFFFFF99] text-[18px] font-[600]">Password:</p>

                        <div className="w-[427px] h-[57px] bg-[#0C0C0C] rounded-lg flex justify-start items-center px-[20px]">
                            <input name="pass" type="password" placeholder="Your password"
                                className="w-full bg-transparent outline-none text-[#FFFFFF99]"
                            />
                        </div>
                    </div>

                    <div className="flex flex-col justify-center items-start gap-[10px]">

                        <p className="text-[#FFFFFF99] text-[18px] font-[600]">Confirm Password:</p>

                        <div className="w-[427px] h-[57px] bg-[#0C0C0C] rounded-lg flex justify-start items-center px-[20px]">
                            <input name="confirm" type="password" placeholder="Confirm your password"
                                className="w-full bg-transparent outline-none text-[#FFFFFF99]"
                            />
                        </div>
                    </div>

                    <p className="text-red-600 text-[13px]">
                        {error ? "*" + error : ""}

                    </p>

                    <button type="submit" className="w-[210px] h-[50px] flex justify-center items-center bg-[#060606] rounded-full">
                        {
                            isLoading ? "Please wait..." : "Create account"
                        }
                    </button>

                </div>


                <p className="w-[427px] text-[#FFFFFF99] text-start font-[600] text-[18px]" >Have account? Sign in  account <span className="text-[#040404] underline cursor-pointer" onClick={hanldeToggle}>
                    sign up
                </span></p>
            </form>
        </div>
    );
};

export default Signup;