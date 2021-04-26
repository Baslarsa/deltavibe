import React, { useEffect, useState } from "react";
import axios from "axios";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import H2 from "./text/H2";
import Text from "./text/Text";
import Button from "./Button";
import { COLORS } from "../constants/constants";
import ScrollAnimation from "react-animate-on-scroll";

const styles = {
    outer: css`
        position: relative;
        background-color: black;
    `,
    heroText: css`
        padding: 2rem;
        z-index: 2;
    `,
    wrapper: css`
        width: 100%;
        background-position: center;
        background-size: cover;
        display: flex;
        justify-content: center;
        align-items: center;
    `,
    shade: css`
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: black;
        opacity: 0.5;
    `,
};

const endpoint = "http://localhost:1337";

const Hero = ({ big, title, subTitle, link }) => {
    const [heroUrl, setHeroUrl] = useState("");
    useEffect(() => {
        async function getHeroUrl() {
            await axios(`${endpoint}/homepage`).then((response) => {
                setHeroUrl(endpoint + response.data.CoverImage.url);
            });
        }
        getHeroUrl();
    }, []);
    return (
        <div css={styles.outer}>
            <div
                css={styles.wrapper}
                style={{
                    backgroundImage: `url("${heroUrl}")`,
                    height: big ? "900px" : "200px",
                }}
            >
                <div css={styles.heroText}>
                    <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
                        <H2 color={COLORS.WHITE}>{title}</H2>
                        {subTitle && (
                            <Text color={COLORS.WHITE}>{subTitle}</Text>
                        )}
                        {link && (
                            <Button.Secondary link={link}>
                                CONTACT NOW
                            </Button.Secondary>
                        )}
                    </ScrollAnimation>
                </div>
            </div>
            <div css={styles.shade}></div>
        </div>
    );
};

export default Hero;
