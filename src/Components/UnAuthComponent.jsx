"use client";
import Signin from "./Signin";
import Signup from "./Signup";
import { useState } from "react";

const UnAuthComponent = () => {


    const [showSignup, setShowSignUp] = useState(false)

    const [showSignIn, setShowSignIn] = useState(false)

    return (
        <div className="flex flex-col justify-start items-start  gap-[20px] w-full">
            <div className="w-full flex justify-between items-center ">
                <h1 className="text-white text-[30px]">Welcome to fauget music services</h1>

                <div className="flex justify-center items-center gap-[20px]">
                    <button className="w-[210px] h-[50px] bg-[#060606] text-white rounded-full" onClick={() => setShowSignIn(true)}>Signin</button>
                    <button className="w-[210px] h-[50px] bg-[#202020] text-white rounded-full border border-black" onClick={() => setShowSignUp(true)}>Sign up</button>
                </div>
            </div>

            <div className="banner bannerImg text-white flex flex-col justify-center items-start gap-[20px] w-full">
                <p className="font-[600] text-[18px]">Top play music station</p>
                <h1 className="font-[400] text-[35px]">The Dark Side of Music: Unveiling Its Negative Effects</h1>
                <p className="font-[600] text-[18px] w-[882px] leading-[21.78px] text-justify">Music, often regarded as a universal language, possesses a profound impact on individuals and societies alike. While it has long been celebrated for its ability to evoke emotions, foster connections, and uplift spirits, the flip side of the melody reveals a spectrum of adverse effects that are often overlooked</p>
                <button className="w-[180px] h-[50px] rounded-full bg-[#09090999]">For you</button>
            </div>


            {
                showSignup ? <Signup setShowSignUp={setShowSignUp} setShowSignIn={setShowSignIn} /> : ""
            }


            {
                showSignIn ? <Signin setShowSignIn={setShowSignIn} setShowSignUp={setShowSignUp} /> : ""
            }



        </div>
    );
};

export default UnAuthComponent;