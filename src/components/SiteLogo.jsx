import React, { useEffect, useState } from "react";
import axios from "axios";
/** @jsxImportSource @emotion/react */
import { jsx, css } from "@emotion/react";
import { ENDPOINT } from "../constants/constants";

const styles = {
    container: css`
        display: inline-block;
    `,
    image: css`
        height: 100%;
        width: 100%;
    `,
};
const endpoint = ENDPOINT;
const SiteLogo = ({ size }) => {
    const [siteLogoUrl, setSiteLogoUrl] = useState("");
    const [imageSize, setImageSize] = useState("");

    useEffect(() => {
        async function getSiteLogoUrl() {
            await axios(`${endpoint}/sitelogo`).then((response) => {
                setSiteLogoUrl(response.data.Image.url);
            });
        }
        getSiteLogoUrl();

        switch (size) {
            case "big":
                setImageSize("400px");
                break;
            case "medium":
                setImageSize("300px");
                break;
            case "small":
                setImageSize("200px");
            default:
                break;
        }
    }, []);

    return (
        <a href="/">
            <div
                css={styles.container}
                style={{ width: imageSize, height: imageSize }}
            >
                <img css={styles.image} src={siteLogoUrl} alt="Site Logotype" />
            </div>
        </a>
    );
};

export default SiteLogo;
