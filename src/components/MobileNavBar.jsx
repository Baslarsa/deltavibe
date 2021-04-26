import React from "react";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { COLORS, FONTS, SIZE } from "../constants/constants";
import { BrowserRouter as Router, NavLink } from "react-router-dom";

const styles = {
    navContainer: css`
        background-color: ${COLORS.BLACK_TRANSPARENT};
        overflow: hidden;
        height: 100vh;
        position: absolute;
        right: 0;
        top: 0;
        z-index: 5;
        display: flex;
        flex-direction: column;
        transition: width 0.3s ease-out;
        padding-top: 4rem;
        a {
            text-decoration: none;
            color: ${COLORS.WHITE};
            font-size: ${SIZE.NAV};
            font-family: ${FONTS.MAIN};
            padding: 0.5rem 2rem 0.5rem;
            margin-top: 3rem;
            font-weight: 500;
            text-align: right;
            &.active {
                border-bottom: 1px solid ${COLORS.WHITE};
            }
        }
    `,
};

const MobileNavBar = ({ toggleState }) => {
    return (
        <nav
            css={styles.navContainer}
            style={{ width: toggleState ? "80%" : "0" }}
        >
            <NavLink exact to="/">
                Home
            </NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/services">Services</NavLink>
            <NavLink to="/studio">Studio</NavLink>
            <NavLink to="/contact">Contact</NavLink>
        </nav>
    );
};

export default MobileNavBar;
