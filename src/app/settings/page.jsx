"use client";
import PrivateRoute from "@/Components/PrivateRoute";
import { useSelector } from "react-redux";

const Settings = () => {

    const { user } = useSelector(state => state.user)


    return (
        <PrivateRoute>
            <div className="w-full pl-[20px] text-white">
                <h1 className="font-[600] text-[22px]">User profile</h1>
            </div>
            <div className="pl-[30px] text-white flex flex-col justify-start items-start gap-[20px] mt-[50px]">

                <div className="flex justify-start items-center gap-[25px] ">
                    <p>User name:</p>
                    <p>Caludia Alvies</p>
                </div>
                <div className="flex justify-start items-center gap-[25px] ">
                    <p>User Email:</p>
                    <p>{user?.email}</p>
                </div>

            </div>
        </PrivateRoute>
    );
};

export default Settings;