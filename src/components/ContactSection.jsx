import React, { useEffect, useState } from "react";
import axios from "axios";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import H2 from "./text/H2";
import Text from "./text/Text";
import Button from "./Button";
import { useWindowWidth } from "@react-hook/window-size";
import { COLORS } from "../constants/constants";
import Form from "./Form";

const styles = {
    outer: css`
        padding: 4rem 10rem 6rem 10rem;
        display: flex;
        flex-direction: column;
        box-sizing: border-box;
        @media screen and (max-width: 1024px) {
            padding: 1rem;
        }
        h2 {
            text-align: left;
            @media screen and (max-width: 1024px) {
                text-align: center;
            }
        }
    `,
    inner: css`
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: flex-start;
        width: 100%;
        text-align: left;
        box-sizing: border-box;
        @media screen and (max-width: 1200px) {
            flex-direction: column;
            align-items: center;
        }
    `,
    text: css`
        padding-right: 10rem;
        @media screen and (max-width: 1024px) {
            padding: 0rem;
            text-align: center;
        }
        @media screen and (max-width: 1400px) {
            padding: 1rem;
        }
    `,
};

const ContactSection = () => {
    const [data, setData] = useState([]);
    const endpoint = "http://localhost:1337";

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
            <H2>{data.Title}</H2>
            <div css={styles.inner}>
                <div css={styles.text}>
                    <Text>{data.Text}</Text>
                </div>
                <Form />
            </div>
        </div>
    );
};

export default ContactSection;
