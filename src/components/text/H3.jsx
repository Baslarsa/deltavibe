import React from "react";
import { FONTS } from "../../constants/constants";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const styles = {
    text: css`
        font-family: ${FONTS.TITLES};
        font-size: 28px;
        margin: 0.5rem 0;
    `,
};

function H3({ children, color }) {
    return (
        <h3 css={styles.text} style={{ color: `${color}` }}>
            {children}
        </h3>
    );
}

export default H3;
