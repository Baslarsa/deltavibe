import React, { useEffect, useState } from "react";
/** @jsxImportSource @emotion/react */
import { css, keyframes } from "@emotion/react";
import { ReactComponent as CloseIcon } from "../constants/icons/cancel.svg";
import { ReactComponent as MenuIcon } from "../constants/icons/menu.svg";
import NavBar from "./NavBar";
import MobileNavBar from "./MobileNavBar";
import SiteLogo from "./SiteLogo";
import { useWindowWidth } from "@react-hook/window-size";
import { COLORS } from "../constants/constants";

const rotate = keyframes`
    from {
        transform: rotate(90deg);
    }
    to {
        transform: rotate(0deg);
    }
`;

const styles = {
    navButton: css`
        position: absolute;
        right: 0.5rem;
        top: 0.5rem;
        color: white;
        height: 30px;
        width: 30px;
        z-index: 6;
        padding: 0.5rem;
    `,
    headerContainer: css`
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        z-index: 10;
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        padding: 1rem 10rem;
    `,
    rotate: css`
        animation: ${rotate} 0.3s ease;
    `,
};

const Header = () => {
    const width = useWindowWidth();
    const [isOpen, setIsOpen] = useState(false);

    const isMobile = width < 1024;

    function handleNavToggle() {
        setIsOpen(!isOpen);
    }
    return (
        <div css={styles.headerContainer}>
            {!isMobile && <SiteLogo />}
            {isMobile && (
                <div
                    onClick={handleNavToggle}
                    css={[styles.navButton, isOpen && styles.rotate]}
                >
                    {isOpen ? (
                        <CloseIcon fill={COLORS.WHITE} />
                    ) : (
                        <MenuIcon fill={COLORS.WHITE} />
                    )}
                </div>
            )}
            {isMobile ? <MobileNavBar toggleState={isOpen} /> : <NavBar />}
        </div>
    );
};

export default Header;
