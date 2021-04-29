import React from "react";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useWindowWidth } from "@react-hook/window-size";
import { COLORS } from "../constants/constants";
import H2 from "../components/text/H2.jsx";
import Text from "../components/text/Text.jsx";
import Button from "./Button";
import P from "./text/P";

const styles = {
    wrapper: css`
        width: calc(100% / 5);
        height: 600px;
        padding: 2rem;
        box-sizing: border-box;
        background-position: center;
        background-size: cover;
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        overflow: hidden;

        @media screen and (max-width: 2000px) {
            height: 400px;
        }
        @media screen and (max-width: 1500px) {
            height: 350px;
        }
        @media screen and (max-width: 1200px) {
            height: 300px;
            width: calc(100% / 3);
        }
        @media screen and (max-width: 768px) {
            width: calc(100% / 2);
        }
        @media screen and (max-width: 500px) {
            width: 100%;
        }

        &:hover {
            div {
                top: 0%;
            }
        }
    `,

    slide: css`
        background-color: rgba(0, 0, 0, 0.9);
        width: 100%;
        height: 100%;
        position: absolute;
        top: 100%;
        right: 0;
        padding: 2rem;
        box-sizing: border-box;
        transition: all 0.4s ease;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        overflow: hidden;
    `,
};

const Blurb = ({ image, title, descr, link }) => {
    const width = useWindowWidth();
    const isMobile = width < 1024;

    return (
        <div
            css={styles.wrapper}
            id="about"
            style={{ backgroundImage: `url("${image}")` }}
        >
            <H2 color={COLORS.WHITE}>{title}</H2>
            <div css={styles.slide}>
                <H2 color={COLORS.WHITE}>{title}</H2>
                {!isMobile && <P color={COLORS.WHITE}>{descr}</P>}
                <Button.Default link={link}>Read More</Button.Default>
            </div>
        </div>
    );
};

export default Blurb;
