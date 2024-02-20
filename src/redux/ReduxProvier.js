"use client";
import ChildLayoutManager from "@/ChildLayoutManager";
import store from "./store";

const { Provider } = require("react-redux")


const ReduxProvier = ({ children }) => {

    return (
        <Provider store={store}>
            <ChildLayoutManager>
                {children}
            </ChildLayoutManager>
        </Provider>
    );
};

export default ReduxProvier;