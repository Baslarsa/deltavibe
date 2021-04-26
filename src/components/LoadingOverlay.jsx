import React from "react";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { COLORS } from "../constants/constants";

const styles = {
    wrapper: css`
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        color: ${COLORS.WHITE};

        z-index: 5;
    `,
};

const LoadingOverlay = () => {
    return (
        <div css={styles.wrapper} id="about">
            Loading...
        </div>
    );
};

export default LoadingOverlay;
