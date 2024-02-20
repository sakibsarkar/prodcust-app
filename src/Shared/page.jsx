import Image from "next/image";
import Link from "next/link";
import logo from "../../public/logo.png";
import { FaGear } from "react-icons/fa6";
import { IoMdHome } from "react-icons/io";
import { IoLogOutOutline } from "react-icons/io5";
import { MdOutlineMusicNote } from "react-icons/md";
import { MdOutlineQueueMusic } from "react-icons/md";

const Sidebar = () => {
    return (
        <div className="w-full bg-[#3B3B3B] h-full px-[25px] py-[40px] flex flex-col justify-between items-center">
            <div className="flex flex-col justify-center items-start gap-[50px] w-full">
                <Image src={logo} alt="logo" width={150} height={150} />

                <div className="w-full">
                    <h2 className="title">Menu</h2>

                    <div className="flex flex-col gap-[20px] w-full">
                        <Link href={"/"} className="w-full flex items-center justify-start gap-[15px] text-[20px] text-white"><IoMdHome />Home</Link>

                        <Link href={"/"} className="w-full flex items-center justify-start gap-[15px] text-[20px] text-white"><MdOutlineMusicNote />Prodcust</Link>

                        <Link href={"/"} className="w-full flex items-center justify-start gap-[15px] text-[20px] text-white"><FaGear />Settings</Link>

                        <Link href={"/"} className="w-full flex items-center justify-start gap-[15px] text-[20px] text-white"><IoLogOutOutline />Logout</Link>


                    </div>

                </div>
            </div>



            <div className="w-full">
                <h2 className="title2">My playlist</h2>

                <div className="flex flex-col gap-[20px] w-full">
                    <Link href={"/playlist"} className="w-full flex items-center justify-start gap-[15px] text-[20px] text-white"><MdOutlineMusicNote />Playlist #A</Link>

                    <Link href={"/playlist"} className="w-full flex items-center justify-start gap-[15px] text-[20px] text-white"><MdOutlineMusicNote />Playlist #B</Link>

                    <Link href={"/playlist"} className="w-full flex items-center justify-start gap-[15px] text-[20px] text-white"><MdOutlineMusicNote />Playlist #C</Link>

                    <Link href={"/playlist"} className="w-full flex items-center justify-start gap-[15px] text-[18px] text-white"><MdOutlineMusicNote />Add new Playlist +</Link>

                </div>

            </div>

        </div>
    );
};

export default Sidebar;