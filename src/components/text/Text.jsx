import React from "react";
import { FONTS } from "../../constants/constants";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const styles = {
    text: css`
        font-family: ${FONTS.MAIN};
        font-size: 16px;
        line-height: 1.6;
    `,
};

function Text({ children, color, align }) {
    return (
        <p
            css={styles.text}
            style={{ color: `${color}`, textAlign: `${align}` }}
        >
            {children}
        </p>
    );
}

export default Text;
