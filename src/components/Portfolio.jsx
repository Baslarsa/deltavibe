import React, { useEffect, useState } from "react";
import axios from "axios";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { COLORS, ENDPOINT } from "../constants/constants";
import H2 from "../components/text/H2.jsx";
import Text from "../components/text/Text.jsx";
import ScrollAnimation from "react-animate-on-scroll";
import PortfolioCard from "./PortfolioCard";

const styles = {
    wrapper: css`
        padding: 0 10rem;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        @media screen and (max-width: 1024px) {
            padding: 0;
        }
    `,
    innerWrap: css`
        flex-wrap: wrap;
        display: flex;
        justify-content: space-between;
        @media screen and (max-width: 1024px) {
            justify-content: center;
        }
    `,
};

const Portfolio = () => {
    const [data, setData] = useState("");

    useEffect(() => {
        async function getData() {
            let fetchData = await axios(ENDPOINT + "/recent-works").then(
                (result) => {
                    setData(result.data);
                }
            );
        }
        getData();
    }, []);
    console.log(data);
    return (
        <div css={styles.wrapper} id="portfolio">
            <H2>Recent Work</H2>
            <div css={styles.innerWrap}>
                {data && data.map((d) => <PortfolioCard data={d} />)}
            </div>
        </div>
    );
};

export default Portfolio;
