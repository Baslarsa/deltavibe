import React from "react";
import { FONTS } from "../../constants/constants";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const styles = {
    text: css`
        font-family: ${FONTS.TITLES};
        font-size: 42px;
        margin: 1rem 0;
    `,
};

function H2({ children, color }) {
    return (
        <h2 css={styles.text} style={{ color: `${color}` }}>
            {children}
        </h2>
    );
}

export default H2;
