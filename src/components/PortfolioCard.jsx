import React from "react";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { SIZE } from "../constants/constants";
const styles = {
    wrapper: css`
        border-bottom: 1px solid black;
        display: inline-block;
        box-sizing: border-box;
        padding: 1rem;
        margin: 0.5rem;
        text-align: left;
    `,
    tag: css`
        background-color: black;
        color: white;
        display: inline-block;
        margin: 0px 3px 0px 0;
        padding: 3px 10px;
        font-size: ${SIZE.SMALLER};
    `,
};

const PortfolioCard = ({ data }) => {
    const uri = data.SpotifyURI.replace("spotify:track:", "");
    return (
        <div css={styles.wrapper}>
            <p>{data.Title}</p>
            <p>
                {data.Contribution.map((e) => (
                    <div css={styles.tag}>{e.Type}</div>
                ))}
            </p>
            <iframe
                src={`https://open.spotify.com/embed/track/${uri}`}
                height="80"
                frameborder="0"
                allowtransparency="true"
                allow="encrypted-media"
                css={styles.spotify}
            ></iframe>
        </div>
    );
};

export default PortfolioCard;
