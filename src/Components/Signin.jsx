import Image from "next/image";
import logo from "../../public/logo.png";
import { signIn } from "next-auth/react";
import { useDispatch } from "react-redux";
import { setSignin } from "@/redux/slices/signInModalSilce";
import { setSignup } from "@/redux/slices/signupModalSilce";
import { signInAuth } from "@/redux/slices/userSlice";

// import { useRouter } from "next/router";

const Signin = () => {

    const dispatch = useDispatch()

    const hanldeToggle = () => {

        dispatch(setSignin(false))
        dispatch(setSignup(true))

    }
    // const router = useRouter();

    const hanldeSubmit = async (e) => {
        e.preventDefault()
        const form = e.target
        const email = form.email.value
        const password = form.pass.value

        try {
            const res = await signIn('credentials', {
                email, password, redirect: false,
            })

            dispatch(signInAuth({ email, password }))
            dispatch(setSignin(false))


        }

        catch (err) {
            console.log(err);
        }
    }

    return (
        <div className="fixed top-0 left-0 w-screen h-screen bg-[#0000007a] flex justify-center items-center">


            <form onSubmit={hanldeSubmit} className="bg-[#3B3B3B] w-[567px] h-[718px] flex flex-col justify-center items-center gap-[30px] text-white rounded-md">
                <Image alt="logo" src={logo} width={150} height={100} />
                <h2 className="text-[38px] font-[600]">Sign in</h2>



                <div className="flex flex-col justify-center items-start gap-[25px]">

                    <div className="flex flex-col justify-center items-start gap-[10px]">

                        <p className="text-[#FFFFFF99] text-[18px] font-[600]">Email:</p>

                        <div className="w-[427px] h-[57px] bg-[#0C0C0C] rounded-lg flex justify-start items-center px-[20px]">
                            <input type="email" name="email" placeholder="example@mail.com"
                                className="w-full bg-transparent outline-none text-[#FFFFFF99]"
                            />
                        </div>
                    </div>

                    <div className="flex flex-col justify-center items-start gap-[10px]">

                        <p className="text-[#FFFFFF99] text-[18px] font-[600]">Password:</p>

                        <div className="w-[427px] h-[57px] bg-[#0C0C0C] rounded-lg flex justify-start items-center px-[20px]">
                            <input type="password" name="pass" placeholder="Your password"
                                className="w-full bg-transparent outline-none text-[#FFFFFF99]"
                            />
                        </div>
                    </div>


                    <button type="submit" className="w-[210px] h-[50px] flex justify-center items-center bg-[#060606] rounded-full">Create account</button>

                </div>


                <p className="w-[427px] text-[#FFFFFF99] text-start font-[600] text-[18px]" >Don’t have account? Create an account <span className="text-[#040404] underline cursor-pointer" onClick={hanldeToggle}>sign up</span></p>
            </form>
        </div>
    );
};

export default Signin;