import Image from "next/image";
import React from "react";
import crown from "../../../public/crown.png";
import man from "../../../public/man.png";

const AuthComponent = () => {
    return (
        <div className="flex flex-col justify-start items-start  gap-[20px] w-full">


            <div className="w-full h-[370px] md:h-[400px] lg:h-[330px] banner2 text-white pt-[20px] pl-[40px] flex flex-col items-start justify-between relative">

                <div className="hidden xl:flex absolute right-[20px] bottom-0">
                    <Image src={man} alt="a man" width={174} height={295} />
                </div>

                <div className="mt-[25px] h-full flex flex-col justify-center items-start gap-0">
                    <div className="relative">
                        <div className="absolute top-[-30px] left-[-9px] flex justify-center items-center gap-[15px] w-fit">
                            <span>
                                <Image alt="crown" src={crown} width={50} height={50} />
                            </span>
                            <p className="mt-[5px] font-[600] text-[17px]">No Ads & Unlock All Paid Songs</p>
                        </div>
                        <h1 className="premiumHeading leading-[65px] text-[40px] lg:text-[65px]">Premium Membership</h1>
                    </div>
                    <p className="max-w-[775px] text-[18px] font-[600]">It is a long established fact that a is that it has a more-or-less normal distribution of letters, as opposed to using &apos;Content here, content here &apos;, making it look like readable English.</p>

                    <div className="hidden lg:flex justify-start items-center gap-[30px]">
                        <button className="w-[210px] h-[50px] bg-[#060606] text-white rounded-full">Upgrade now</button>
                        <button className="w-[210px] h-[50px] bg-[#202020] text-white rounded-full border border-black">Learn more</button>
                    </div>
                </div>
            </div>




        </div>
    );
};

export default AuthComponent;