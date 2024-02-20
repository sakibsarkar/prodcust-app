import Image from "next/image";
import user from "./../../../public/user.jpg";
import { FaMicrophone } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";

const AuthNav = () => {
    return (
        <div className="flex justify-between items-center mb-[35px]">
            <h1 className="text-[30px] font-[600] text-white">Welcome,claudia Alvies</h1>
            <div className="flex gap-[20px] items-center justify-center">
                <div className="w-[332px] h-[50px] px-[20px] flex items-center justify-between rounded-full bg-[#3B3B3B] text-[#FFFFFF99]">
                    <IoSearch />
                    <input placeholder="Artist, Music, Album, Etc" type="text" className="searchBar w-[85%] bg-transparent w-ful outline-none" />

                    <FaMicrophone />
                </div>

                <div className="overflow-hidden rounded-[50%] w-[50px] h-[50px]">
                    <Image src={user} width={50} height={50} alt="userPhoto" className="object-cover w-[100%] h-full" />
                </div>
            </div>
        </div>
    );
};

export default AuthNav;