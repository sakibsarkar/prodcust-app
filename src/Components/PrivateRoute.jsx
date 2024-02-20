"use client";
import { redirect } from "next/navigation";
import { useLayoutEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSignin } from "@/redux/slices/signInModalSilce";

const PrivateRoute = ({ children }) => {

    const dispatch = useDispatch();
    const { user } = useSelector(state => state.user);

    useLayoutEffect(() => {
        if (!user.email) {
            dispatch(setSignin(true));
            redirect("/")
        }
    }, [dispatch, user.email]);

    return user ? children : null;
};

export default PrivateRoute;
