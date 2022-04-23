import React, { useState, useEffect } from "react";
import { FaAngleUp } from "react-icons/fa";
import {useDispatch} from "react-redux"
import {scrollToTop} from "../../redux/actions/index"
import {useSelector} from "react-redux"

import "./ScrollToTop.css";

const ScrollToTop = () => {
    const dispatch = useDispatch()
    const  flag = useSelector((state) => state.scroll.flag)


    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 800) {
                dispatch(scrollToTop(true))
            } else {
                dispatch(scrollToTop(false))
            }
        });
    }, []);
    const goToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };
    return (
        <div className="top-to-btm">
            {" "}
            {flag && (
                <FaAngleUp
                    className="icon-position icon-style"
                    onClick={goToTop}
                />
            )}{" "}
        </div>
    );
};
export default ScrollToTop;