import UnAuthNav from "./Components/UnAuth/UnAuthNav";
import { useSelector } from "react-redux";

const ChildLayoutManager = ({ children }) => {

    const user = useSelector(state => state.user.user);


    return (
        <div>
            {
                user?.email ?
                    ""
                    :
                    <UnAuthNav />
            }
            {
                children
            }
        </div>
    );
};

export default ChildLayoutManager;