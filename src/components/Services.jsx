import React, { useEffect, useState } from "react";
import axios from "axios";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { COLORS } from "../constants/constants";
import Blurb from "./Blurb";

const styles = {
    wrapper: css`
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        color: ${COLORS.BLACK};
    `,
};

const endpoint = "http://localhost:1337";

const Services = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        async function getData() {
            await axios(endpoint + "/services").then((result) => {
                setData(result.data);
            });
        }
        getData();
    }, []);
    console.log(data);
    return (
        <div css={styles.wrapper} id="about">
            {data.map((service) => (
                <Blurb
                    image={endpoint + service.Image.url}
                    title={service.Title}
                    text={service.Text}
                    descr={service.Description}
                    key={service.id}
                    link="/services"
                />
            ))}
        </div>
    );
};

export default Services;
