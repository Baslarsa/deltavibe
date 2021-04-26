import React from "react";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Text from "./text/Text";
import { COLORS, FONTS, SIZE } from "../constants/constants";
import Button from "./Button";
import { Formik, Form, Field } from "formik";

const styles = {
    outer: css`
        width: 100%;
        div {
            display: flex;
            flex-direction: column;
        }
        input {
            outline: none;
            border: none;
            border-bottom: 1px solid ${COLORS.BLACK};
            margin: 1rem 0 0.5rem 0;
            padding: 0.5rem;
            font-family: ${FONTS.MAIN};
        }
        textarea {
            outline: none;
            border: none;
            border-bottom: 1px solid ${COLORS.BLACK};
            margin: 1rem 0 0.5rem 0;
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
    fieldWrapper: css`
        position: relative;
    `,
    field: css``,
    error: css`
        position: absolute;
        right: 0;
        top: 0;
        height: 100%;
        color: red;
        align-items: center;
        justify-content: center;
        font-size: ${SIZE.SMALL};
    `,
};

function validateEmail(value) {
    let error;
    if (!value) {
        error = "Email is required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
        error = "Email is invalid";
    }
    return error;
}
function validateName(value) {
    let error;
    if (!value) {
        error = "Name is required";
    } else if (value.length < 3) {
        error = "Name is too short";
    }
    return error;
}

function validateMessage(value) {
    let error;
    if (!value) {
        error = "Enter a message";
    } else if (value.length < 5) {
        error = "Message is too short";
    }
    return error;
}

const ContactForm = () => {
    return (
        <div css={styles.outer}>
            <div>
                <Formik
                    initialValues={{
                        name: "",
                        email: "",
                        subject: "",
                        message: "",
                    }}
                    onSubmit={async (values) => {
                        await new Promise((r) => setTimeout(r, 500));
                        alert(JSON.stringify(values, null, 2));
                    }}
                    validateOnBlur
                >
                    {({ errors, touched, isValidating }) => (
                        <Form css={styles.form}>
                            <label htmlFor="name" value="Name"></label>
                            <div css={styles.fieldWrapper}>
                                <Field
                                    id="name"
                                    name="name"
                                    placeholder="Name"
                                    validate={validateName}
                                    css={styles.field}
                                />
                                {errors.name && touched.name && (
                                    <div css={styles.error}>{errors.name}</div>
                                )}
                            </div>
                            <label htmlFor="email" value="Email"></label>
                            <div css={styles.fieldWrapper}>
                                <Field
                                    type="email"
                                    id="email"
                                    name="email"
                                    placeholder="Email"
                                    validate={validateEmail}
                                    css={styles.field}
                                />
                                {errors.email && touched.email && (
                                    <div css={styles.error}>{errors.email}</div>
                                )}
                            </div>
                            <label htmlFor="subject" value="Subject"></label>
                            <div css={styles.fieldWrapper}>
                                <Field
                                    id="subject"
                                    name="subject"
                                    placeholder="Subject"
                                    css={styles.field}
                                />
                            </div>
                            <label htmlFor="message" value="Message"></label>
                            <div css={styles.fieldWrapper}>
                                <Field
                                    id="message"
                                    name="message"
                                    placeholder="Message"
                                    as="textarea"
                                    validate={validateMessage}
                                />
                                {errors.message && touched.message && (
                                    <div css={styles.error}>
                                        {errors.message}
                                    </div>
                                )}
                            </div>
                            <button type="submit" disabled={isValidating}>
                                <Button.Default>Send</Button.Default>
                            </button>
                        </Form>
                    )}
                </Formik>
            </div>
        </div>
    );
};

export default ContactForm;
