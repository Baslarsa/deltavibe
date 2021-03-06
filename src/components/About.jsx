import React, { useEffect, useState } from "react";
import axios from "axios";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { COLORS, ENDPOINT } from "../constants/constants";
import H3 from "../components/text/H3.jsx";
import Text from "../components/text/Text.jsx";
import ScrollAnimation from "react-animate-on-scroll";

const styles = {
    wrapper: css`
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        background-color: ${COLORS.BLACK};
        color: ${COLORS.WHITE};
    `,
    halfSection: css`
        width: 50%;
        min-height: 700px;
        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }

        @media screen and (max-width: 1024px) {
            width: 100%;
            min-height: 500px;
        }
    `,
    innerContainer: css`
        box-sizing: border-box;
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 2rem 5rem 5rem 10rem;
        text-align: left;
        @media screen and (max-width: 1024px) {
            text-align: center;
            padding: 2rem;
        }
    `,
};

const endpoint = ENDPOINT;

const About = () => {
    const [imgUrl, setImgUrl] = useState("");
    const [text, setText] = useState("");
    const [title, setTitle] = useState("");

    useEffect(() => {
        async function getImgUrl() {
            let data = await axios(endpoint + "/homepage").then((result) => {
                setTitle(result.data.About.title);
                setText(result.data.About.text);
                setImgUrl(result.data.About.image[0].url);
                // setText(result.data.About);
                // setImgUrl(endpoint + result.data.Aboutimage[0].url);
            });
        }
        getImgUrl();
    }, []);

    return (
        <div css={styles.wrapper} id="about">
            <div css={styles.halfSection}>
                <div css={styles.innerContainer}>
                    <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
                        <H3>{title}</H3>
                        <Text>{text}</Text>
                    </ScrollAnimation>
                </div>
            </div>
            <div css={styles.halfSection}>
                <img src={imgUrl} alt="about-image"></img>
            </div>
        </div>
    );
};

export default About;
