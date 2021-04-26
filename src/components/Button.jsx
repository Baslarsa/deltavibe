import React from "react";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { COLORS } from "../constants/constants";

const styles = {
    text: css`
        position: relative;
        z-index: 5;
        margin: 0;
        padding: 0;
    `,
    default: css`
        padding: 0.5rem 1rem;
        background-color: ${COLORS.WHITE};
        color: ${COLORS.BLACK};
        text-decoration: none;
        position: relative;
        z-index: 2;
        display: inline-block;
        cursor: pointer;
        transition: all 0.3s ease;
        &:before {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            width: 0%;
            height: 100%;
            background-color: ${COLORS.PRIM_BUTTON};
            z-index: 1;
            transition: all 0.3s ease;
        }
        &:hover {
            color: ${COLORS.WHITE};

            &:before {
                width: 100%;
            }
        }
    `,
    secondary: css`
        padding: 0.5rem 1rem;
        background-color: ${COLORS.PRIM_BUTTON};
        color: ${COLORS.BLACK};
        text-decoration: none;
        position: relative;
        z-index: 2;
        display: inline-block;
        cursor: pointer;
        transition: all 0.3s ease;
        color: ${COLORS.WHITE};
        &:before {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            width: 0%;
            height: 100%;
            background-color: ${COLORS.WHITE};
            z-index: 1;
            transition: all 0.3s ease;
        }
        &:hover {
            color: ${COLORS.BLACK};

            &:before {
                width: 100%;
            }
        }
    `,
};
function Default({ children, link }) {
    return (
        <a href={link}>
            <div css={styles.default}>
                <p css={styles.text}>{children}</p>
            </div>
        </a>
    );
}
function Secondary({ children, link }) {
    return (
        <a href={link}>
            <div css={styles.secondary} href={link}>
                <p css={styles.text}>{children}</p>
            </div>
        </a>
    );
}

export default { Default, Secondary };
