import React, { useEffect, useState } from "react";
import axios from "axios";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import H2 from "./text/H2";
import Text from "./text/Text";
import Button from "./Button";
import { COLORS, ENDPOINT } from "../constants/constants";
import ScrollAnimation from "react-animate-on-scroll";
import SiteLogo from "./SiteLogo";
import { useWindowWidth } from "@react-hook/window-size";

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

const endpoint = ENDPOINT;

const Hero = ({ big, title, subTitle, link }) => {
    const width = useWindowWidth();
    const isMobile = width < 1024;
    const [heroUrl, setHeroUrl] = useState("");

    useEffect(() => {
        async function getHeroUrl() {
            await axios(`${endpoint}/homepage`).then((response) => {
                setHeroUrl(response.data.CoverImage.url);
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
                    height: big ? "900px" : "210px",
                }}
            >
                <div css={styles.heroText}>
                    <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
                        {isMobile && big ? <SiteLogo /> : null}
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
