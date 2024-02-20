import React from "react";
import UnAuthComponent from "@/Components/UnAuthComponent";

const Home = () => {
    return (
        <div className="flex flex-col justify-start items-start gap-[50px]">
            <UnAuthComponent />
        </div>
    );
};

export default Home;