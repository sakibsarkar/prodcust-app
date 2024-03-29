import PrivateRoute from "@/Components/PrivateRoute";
import ProdCustCard from "@/cards/ProdCustCard";
import ProdCustDisplay from "@/Components/ProdCustDisplay";
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
                <ProdCustDisplay title="For you" data={group[0]} />
                <ProdCustDisplay title="Populer" data={group[1]} />
                <ProdCustDisplay title="Trend" data={group[2]} />
            </div>
        </PrivateRoute>
    );
};

export default page;