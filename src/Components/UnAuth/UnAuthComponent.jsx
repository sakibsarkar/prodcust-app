"use client";
import Signin from "../Signin";
import Signup from "../Signup";
import { useSelector } from "react-redux";

const UnAuthComponent = () => {



    const { signUpModal, signInModal } = useSelector(state => state);


    return (
        <div className="flex flex-col justify-start items-start  gap-[20px] w-full">

            <div className="w-full h-[298px] bannerImg px-[40px] py-[20px] text-white flex flex-col justify-center items-start gap-[20px] ">
                <p className="font-[600] text-[18px]">Top play music station</p>
                <h1 className="font-[400] text-[35px]">The Dark Side of Music: Unveiling Its Negative Effects</h1>
                <p className="font-[600] text-[18px] w-[882px] leading-[21.78px] text-justify">Music, often regarded as a universal language, possesses a profound impact on individuals and societies alike. While it has long been celebrated for its ability to evoke emotions, foster connections, and uplift spirits, the flip side of the melody reveals a spectrum of adverse effects that are often overlooked</p>
                <button className="w-[180px] h-[50px] rounded-full bg-[#09090999]">For you</button>
            </div>


            {
                signUpModal.show ? <Signup /> : ""
            }


            {
                signInModal.show ? <Signin /> : ""
            }



        </div>
    );
};

export default UnAuthComponent;