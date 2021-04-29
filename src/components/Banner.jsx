import React, { useEffect, useState } from "react";
import axios from "axios";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useWindowWidth } from "@react-hook/window-size";
import { COLORS, ENDPOINT } from "../constants/constants";
import H2 from "./text/H2";
import Text from "./text/Text";
import Button from "./Button";
import ScrollAnimation from "react-animate-on-scroll";
import Gallery from "./Gallery";

const styles = {
    wrapper: css`
        width: 100%;
        display: flex;
        color: ${COLORS.BLACK};
        padding-bottom: 2rem;

        justify-content: center;
        align-items: center;
    `,
    innerWrapper: css`
        padding: 2rem 10rem;

        @media screen and (max-width: 1024px) {
            padding: 2rem 5rem;
        }
        @media screen and (max-width: 768px) {
            padding: 2rem 2rem;
        }
    `,
};

const endpoint = ENDPOINT;

const Banner = ({ title, text, link, buttonTitle }) => {
    return (
        <div css={styles.wrapper} id="about">
            <div css={styles.innerWrapper}>
                <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
                    {title && <H2>{title}</H2>}
                    {text && <Text>{text}</Text>}
                    {link && (
                        <Button.Default link={link}>
                            {buttonTitle ? buttonTitle : "Read More"}
                        </Button.Default>
                    )}
                </ScrollAnimation>
            </div>
        </div>
    );
};

export default Banner;
