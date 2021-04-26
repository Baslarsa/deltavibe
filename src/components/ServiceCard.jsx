import React from "react";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import { ReactComponent as Note } from "../constants/icons/note.svg";
import { ReactComponent as Speaker } from "../constants/icons/loudspeaker.svg";
import { ReactComponent as Mixer } from "../constants/icons/mixer.svg";
import { ReactComponent as Record } from "../constants/icons/record.svg";
import { ReactComponent as Microphone } from "../constants/icons/microphone.svg";
import H3 from "./text/H3";
import Text from "./text/Text";
import { COLORS } from "../constants/constants";

const styles = {
    wrapper: css`
        min-height: 250px;
        border: 1px solid ${COLORS.BLACK_TRANSPARENT};
        border-radius: 5px;
        width: 100%;
        margin: 1rem 0;
        box-sizing: border-box;
        display: flex;
        text-align: left;
        padding: 2rem;
        &:nth-of-type(2n) {
            text-align: right;
            flex-direction: row-reverse;
            @media screen and (max-width: 768px) {
                flex-direction: column;
            }
        }
        @media screen and (max-width: 768px) {
            flex-direction: column;
            text-align: center;
            &:nth-of-type(2n) {
                text-align: center;
            }
        }
    `,
    details: css`
        height: 100%;
        display: flex;
        flex-direction: column;
        width: 20%;
        min-width: 200px;
        align-items: center;
        border-radius: 5px;
        box-sizing: border-box;

        @media screen and (max-width: 1024px) {
            width: 40%;
        }
        @media screen and (max-width: 768px) {
            width: 100%;
        }
    `,
    main: css`
        height: 100%;
        width: 100%;
        padding: 0 1rem;
        box-sizing: border-box;

        @media screen and (max-width: 768px) {
            width: 100%;
        }
    `,
    imageContainer: css`
        height: 150px;
        width: 150px;
        padding: 1rem;
        box-sizing: border-box;
        svg {
            height: 100%;
            width: 100%;
        }
    `,
};

const ServiceCard = ({ title, price, text }) => {
    const Img = () => {
        switch (title) {
            case "Live":
                return <Note />;
            case "Master":
                return <Record />;
            case "Mix":
                return <Mixer />;
            case "Production":
                return <Speaker />;
            case "Podcast":
                return <Microphone />;
            default:
                return null;
        }
    };

    return (
        <div css={styles.wrapper}>
            <div css={styles.details}>
                <div css={styles.imageContainer}>
                    <Img />
                </div>
                <H3>{title}</H3>
                <Text>Price: {price}</Text>
            </div>
            <div css={styles.main}>
                <Text>{text}</Text>
            </div>
        </div>
    );
};

export default ServiceCard;
