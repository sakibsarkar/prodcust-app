import AuthNav from "./Components/Auth/AuthNav";
import Sidebar from "./Shared/page";
import UnAuthNav from "./Components/UnAuth/UnAuthNav";
import { useSelector } from "react-redux";

const ChildLayoutManager = ({ children }) => {

    const user = useSelector(state => state.user.user);


    return (

        <div className="flex justify-between items-center">

            <div className="w-[253px] h-[100vh]">
                <Sidebar />
            </div>

            <div className="children bg-[#191919] p-[50px]">

                {
                    user?.email ?
                        <AuthNav />
                        :
                        <UnAuthNav />
                }
                
                {
                    children
                }
            </div>

        </div>


    );
};

export default ChildLayoutManager;