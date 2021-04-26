import React from "react";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Text from "./text/Text";
import { COLORS, FONTS } from "../constants/constants";
import Button from "./Button";

const styles = {
    outer: css`
        width: 100%;
        div {
            display: flex;
            flex-direction: column;
            align-items: center;
        }
        input {
            outline: none;
            border: none;
            border-bottom: 1px solid ${COLORS.BLACK};
            margin: 1rem 0;
            padding: 0.5rem;
            font-family: ${FONTS.MAIN};
        }
        textarea {
            outline: none;
            border: none;
            border-bottom: 1px solid ${COLORS.BLACK};
            margin: 1rem 0;
            padding: 0.5rem;
            font-family: ${FONTS.MAIN};
        }
        button {
            padding: 0;
            border: none;
            margin: 0;
            background-color: transparent;
            outline: none;
            display: inline-block;
            align-self: flex-end;
        }
    `,
    form: css`
        display: flex;
        flex-direction: column;

        width: 500px;
        @media screen and (max-width: 1024px) {
            width: 70%;
        }
        @media screen and (max-width: 768px) {
            width: 100%;
        }
    `,
};

const Form = () => {
    return (
        <div css={styles.outer}>
            <div>
                <form css={styles.form}>
                    <label htmlFor="name" value="Name"></label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Name"
                    ></input>
                    <label htmlFor="mail" value="Email"></label>
                    <input
                        type="mail"
                        id="mail"
                        name="email"
                        placeholder="Email"
                    ></input>
                    <label htmlFor="subject" value="Subject"></label>
                    <input
                        type="text"
                        id="subject"
                        name="subject"
                        placeholder="Subject"
                    ></input>
                    <label htmlFor="message" value="Message"></label>
                    <textarea
                        id="message"
                        name="message"
                        placeholder="Message"
                    ></textarea>
                    <button type="submit">
                        <Button.Default>SEND</Button.Default>
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Form;
