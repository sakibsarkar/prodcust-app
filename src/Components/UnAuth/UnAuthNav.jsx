import { useDispatch, useSelector } from "react-redux";
import { setSignin } from "@/redux/slices/signInModalSilce";
import { setSignup } from "@/redux/slices/signupModalSilce";

const UnAuthNav = () => {

    const dispatch = useDispatch()


    return (
        <div className="w-full flex justify-between items-center ">
            <h1 className="text-white text-[30px]">Welcome to fauget music services</h1>

            <div className="flex justify-center items-center gap-[20px]">
                <button className="w-[210px] h-[50px] bg-[#060606] text-white rounded-full" onClick={() => dispatch(setSignin(true))}>Signin</button>
                <button className="w-[210px] h-[50px] bg-[#202020] text-white rounded-full border border-black" onClick={() => dispatch(setSignup(true))}>Sign up</button>
            </div>
        </div>
    );
};

export default UnAuthNav;