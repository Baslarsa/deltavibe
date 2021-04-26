import React from "react";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { COLORS, FONTS, SIZE } from "../constants/constants";
import {
    Link,
    BrowserRouter as Router,
    NavLink,
    BrowserRouter,
} from "react-router-dom";

const styles = {
    navContainer: css`
        display: flex;
        display: inline-flex;
        align-items: center;
        a {
            text-decoration: none;
            color: ${COLORS.WHITE};
            font-size: ${SIZE.NAV};
            font-family: ${FONTS.MAIN};
            padding: 0.5rem 1rem;
            font-weight: 500;
            margin: 0 0.5rem;
            border-bottom: 1px solid transparent;
            transition: all 0.5s ease;

            &:hover {
                border-bottom: 1px solid ${COLORS.WHITE};
            }
            &.active {
                border-bottom: 1px solid ${COLORS.WHITE};
            }
        }
    `,
};

const NavBar = () => {
    return (
        <nav css={styles.navContainer}>
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

export default NavBar;
