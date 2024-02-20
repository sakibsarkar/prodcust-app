import PrivateRoute from "@/Components/PrivateRoute";
import ProdCustCard from "@/cards/ProdCustCard";
import React from "react";

const page = async () => {
    const res = await fetch("https://api.lyrics.ovh/suggest/e")
    let { data = [] } = await res.json()

    const group = []
    for (let indx = 0; indx < data.length; indx += 5) {
        group.push(data.slice(indx, indx + 5))

    }


    return (
        <PrivateRoute>
            <div className="flex flex-col justify-center items-start gap-[60px]">


                <div className="flex flex-col justify-center items-start gap-[25px] w-full">
                    <button className="myBtn">For You</button>
                    <div className="prodGrid">
                        {
                            group[0]?.map(prod => <ProdCustCard key={prod.id} data={prod} />)
                        }
                    </div>
                </div>

                <div className="flex flex-col justify-center items-start gap-[25px] w-full">
                    <button className="myBtn">For You</button>
                    <div className="prodGrid">
                        {
                            group[1]?.map(prod => <ProdCustCard key={prod.id} data={prod} />)
                        }
                    </div>
                </div>

                <div className="flex flex-col justify-center items-start gap-[25px] w-full">
                    <button className="myBtn">For You</button>
                    <div className="prodGrid">
                        {
                            group[2]?.map(prod => <ProdCustCard key={prod.id} data={prod} />)
                        }
                    </div>
                </div>

            </div>
        </PrivateRoute>
    );
};

export default page;