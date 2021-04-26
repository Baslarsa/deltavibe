import React from "react";
/** @jsxImportSource @emotion/react */
import { css, keyframes } from "@emotion/react";
import { COLORS } from "../constants/constants";
import { ReactComponent as LoadingSpinner } from "../constants/icons/loading.svg";

const rotate = keyframes`
    from {
        transform: rotate(0deg)
    }
    to {
        transform: rotate(360deg)
    }
`;

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
        z-index: 5;
        background-color: black;

        transition: all 0.2s ease;
    `,
};

const LoadingOverlay = () => {
    return (
        <div css={styles.wrapper}>
            <LoadingSpinner
                css={css`
                    animation: ${rotate} 2s infinite;
                `}
            />
        </div>
    );
};

export default LoadingOverlay;
