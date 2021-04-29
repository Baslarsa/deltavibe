import React, { useState, useEffect } from "react";
import axios from "axios";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Text from "./text/Text";
import { COLORS, ENDPOINT, FONTS } from "../constants/constants";
import Button from "./Button";
import SiteLogo from "./SiteLogo";
import H3 from "./text/H3";
import H2 from "./text/H2";
import SocialMedia from "./SocialMedia";

const styles = {
    outer: css`
        width: 100%;
        padding: 2rem 10rem;
        background-color: ${COLORS.BLACK};
        display: flex;
        justify-content: space-between;
        box-sizing: border-box;
        @media screen and (max-width: 1024px) {
            padding: 1rem 1rem;
            display: grid;
            grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
            grid-template-rows: 1fr 1fr 1fr;
            gap: 0px 0px;
            grid-template-areas:
                ". logo logo logo ."
                ". address address address ."
                ". social social social .";
        }
    `,
    middle: css`
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-end;
        a {
            text-decoration: none;
        }
        @media screen and (max-width: 1024px) {
            grid-area: social;
        }
    `,
    address: css`
        text-align: right;
        @media screen and (max-width: 1024px) {
            text-align: center;
            grid-area: address;
        }
    `,
    sitelogo: css`
        @media screen and (max-width: 1024px) {
            text-align: center;
            grid-area: logo;
        }
    `,
};

const Footer = () => {
    const [data, setData] = useState([]);
    const endpoint = ENDPOINT;

    useEffect(() => {
        async function getData() {
            let data = await axios(endpoint + "/contact").then((response) => {
                setData(response.data);
            });
        }

        getData();
    }, []);
    return (
        <div css={styles.outer}>
            <div css={styles.sitelogo}>
                <SiteLogo />
            </div>
            <div css={styles.middle}>
                <SocialMedia />
                <Text color={COLORS.WHITE} align="center">
                    All rights reserved. Created by David Larsson 2021.
                </Text>
            </div>
            <div css={styles.address}>
                <H3 color={COLORS.WHITE}>{data.Title}</H3>
                <Text color={COLORS.WHITE}>
                    <p>{data.address}</p>
                    <p>{data.zip + " " + data.city}</p>
                    <p>{data.phone}</p>
                </Text>
            </div>
        </div>
    );
};

export default Footer;
