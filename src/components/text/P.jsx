import React from "react";
import { FONTS } from "../../constants/constants";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const styles = {
    text: css`
        font-family: ${FONTS.MAIN};
        font-size: 16px;
    `,
};

function P({ children, color }) {
    return (
        <p css={styles.text} style={{ color: `${color}` }}>
            {children}
        </p>
    );
}

export default P;
