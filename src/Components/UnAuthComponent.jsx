const UnAuthComponent = () => {
    return (
        <div className="flex flex-col justify-start items-start  gap-[20px] w-full">
            <div className="w-full flex justify-between items-center ">
                <h1 className="text-white text-[30px]">Welcome to fauget music services</h1>

                <div className="flex justify-center items-center gap-[20px]">
                    <button className="w-[210px] h-[50px] bg-[#060606] text-white rounded-full">Signin</button>
                    <button className="w-[210px] h-[50px] bg-[#202020] text-white rounded-full border border-black">Sign up</button>
                </div>
            </div>


            <div className="banner bannerImg text-white flex flex-col justify-center items-start gap-[20px] w-full">
                <p className="font-[600] text-[18px]">Top play music station</p>
                <h1 className="font-[400] text-[35px]">The Dark Side of Music: Unveiling Its Negative Effects</h1>
                <p className="font-[600] text-[18px] w-[882px] leading-[21.78px] text-justify">Music, often regarded as a universal language, possesses a profound impact on individuals and societies alike. While it has long been celebrated for its ability to evoke emotions, foster connections, and uplift spirits, the flip side of the melody reveals a spectrum of adverse effects that are often overlooked</p>
                <button className="w-[180px] h-[50px] rounded-full bg-[#09090999]">For you</button>
            </div>



        </div>
    );
};

export default UnAuthComponent;