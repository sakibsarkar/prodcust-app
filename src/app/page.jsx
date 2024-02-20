"use client";
import UnAuthComponent from "@/Components/UnAuthComponent";

const Home = () => {

    const test = async () => {
        try {
            await fetch("/api/register", {
                method: "POST",
                headers: {
                    "Content-type": "Application/json"
                },
                body: JSON.stringify({})
            })
        }

        catch {
            ""
        }
    }



    return (
        <div className="flex flex-col justify-start items-start gap-[50px]">
            <UnAuthComponent />
            <div className="w-full flex justify-between items-center">
                <button className="w-fit bg-[#3B3B3B] px-[40px] py-[10px] rounded-full text-white" onClick={test}>For you</button>
                <button className="w-fit bg-[#3B3B3B] px-[40px] py-[10px] rounded-full text-white">Popular</button>
                <button className="w-fit bg-[#3B3B3B] px-[40px] py-[10px] rounded-full text-white">Trend</button>
                <button className="w-fit bg-[#3B3B3B] px-[40px] py-[10px] rounded-full text-white">Pop</button>
                <button className="w-fit bg-[#3B3B3B] px-[40px] py-[10px] rounded-full text-white">Edm</button>
                <button className="w-fit bg-[#3B3B3B] px-[40px] py-[10px] rounded-full text-white">Rock</button>
                <button className="w-fit bg-[#3B3B3B] px-[40px] py-[10px] rounded-full text-white">More</button>
            </div>
        </div>
    );
};

export default Home;