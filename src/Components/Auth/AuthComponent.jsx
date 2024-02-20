import Image from "next/image";
import React from "react";
import crown from "../../../public/crown.png";

const AuthComponent = () => {
    return (
        <div className="flex flex-col justify-start items-start  gap-[20px] w-full">
            <div className="w-full flex justify-between items-center ">
                <h1 className="text-white text-[30px]">Welcome to fauget music services</h1>

                <div className="flex justify-center items-center gap-[20px]">
                    <button className="w-[210px] h-[50px] bg-[#060606] text-white rounded-full" onClick={() => setShowSignIn(true)}>Signin</button>
                    <button className="w-[210px] h-[50px] bg-[#202020] text-white rounded-full border border-black" onClick={() => setShowSignUp(true)}>Sign up</button>
                </div>
            </div>

            <div className="banner banner2 text-white pt-[20px] pl-[40px] flex flex-col items-start justify-between ">

                <div className="mt-[25px] h-full flex flex-col justify-center items-start gap-0">
                    <div className="relative">
                        <div className="absolute top-[-30px] left-[-9px] flex justify-center items-center gap-[15px] w-fit">
                            <span>
                                <Image alt="crown" src={crown} width={50} height={50} />
                            </span>
                            <p className="mt-[5px] font-[600] text-[17px]">No Ads & Unlock All Paid Songs</p>
                        </div>
                        <h1 className="premiumHeading leading-[65px]">Premium Membership</h1>
                    </div>
                    <p className="w-[775px] text-[18px] font-[600]">It is a long established fact that a is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>

                    <div className="flex justify-start items-center gap-[30px]">
                        <button className="w-[210px] h-[50px] bg-[#060606] text-white rounded-full">Upgrade now</button>
                        <button className="w-[210px] h-[50px] bg-[#202020] text-white rounded-full border border-black">Learn more</button>
                    </div>
                </div>
            </div>




        </div>
    );
};

export default AuthComponent;