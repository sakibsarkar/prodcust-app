"use client";
import AuthComponent from "@/Components/Auth/AuthComponent";
import ProdCustCard from "@/cards/ProdCustCard";
import UnAuthComponent from "@/Components/UnAuth/UnAuthComponent";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setData } from "@/redux/slices/dataSlice";

const Home = () => {
    const user = useSelector(state => state.user.user);

    const { data } = useSelector(state => state.data)

    const disPatch = useDispatch()

    useEffect(() => {
        fetch("https://api.lyrics.ovh/suggest/e")
            .then(res => res.json())
            .then(({ data }) => disPatch(setData(data)))
    }, [disPatch])




    return (
        <div className="flex flex-col justify-start items-start gap-[50px]">

            {
                user?.email ?
                    <AuthComponent />
                    :
                    <UnAuthComponent />
            }


            <div className="w-full flex justify-between items-center flex-wrap gap-[20px]">
                <button className="w-fit bg-[#3B3B3B] px-[40px] py-[10px] rounded-full text-white">For you</button>
                <button className="w-fit bg-[#3B3B3B] px-[40px] py-[10px] rounded-full text-white">Popular</button>
                <button className="w-fit bg-[#3B3B3B] px-[40px] py-[10px] rounded-full text-white">Trend</button>
                <button className="w-fit bg-[#3B3B3B] px-[40px] py-[10px] rounded-full text-white">Pop</button>
                <button className="w-fit bg-[#3B3B3B] px-[40px] py-[10px] rounded-full text-white">Edm</button>
                <button className="w-fit bg-[#3B3B3B] px-[40px] py-[10px] rounded-full text-white">Rock</button>
                <button className="w-fit bg-[#3B3B3B] px-[40px] py-[10px] rounded-full text-white">More</button>
            </div>

            <div className="prodGrid">
                {
                    [...data].slice(0, 5)?.map(prod => <ProdCustCard key={prod.id} data={prod} />)
                }
            </div>
        </div>
    );
};

export default Home;