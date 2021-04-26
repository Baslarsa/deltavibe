import React, { useEffect, useState } from "react";
import axios from "axios";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import LoadingOverlay from "./LoadingOverlay";
import { ReactComponent as FacebookIcon } from "../constants/icons/social/facebook.svg";
import { ReactComponent as SpotifyIcon } from "../constants/icons/social/spotify.svg";
import { ReactComponent as LinkedinIcon } from "../constants/icons/social/linkedin.svg";
import { ReactComponent as InstagramIcon } from "../constants/icons/social/instagram.svg";
import { ReactComponent as YoutubeIcon } from "../constants/icons/social/youtube.svg";

import { COLORS } from "../constants/constants";
import H2 from "./text/H2";

const styles = {
    wrapper: css`
        display: inline-block;
        color: white;
        a {
            height: 40px;
            width: 40px;
            margin: 0.5rem;
            svg {
                transition: all 0.1s ease;
                &:hover {
                    transform: translateY(1px);
                }
                fill: ${COLORS.WHITE};
                height: 40px;
                width: 40px;
            }
        }
    `,
};
const endpoint = "http://localhost:1337";
const SocialMedia = () => {
    const [data, setData] = useState("");
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(true);
        async function getData() {
            await axios(`${endpoint}/socialmedia`).then((response) => {
                setData(response.data);
            });
            setIsLoading(false);
        }
        getData();
    }, []);
    return (
        <div css={styles.wrapper}>
            {isLoading ? (
                <LoadingOverlay></LoadingOverlay>
            ) : (
                data.socialmedia.map((item) => {
                    switch (item.name) {
                        case "Spotify":
                            return (
                                <a href={item.link} key={item.link}>
                                    <SpotifyIcon />
                                </a>
                            );
                        case "Linkedin":
                            return (
                                <a href={item.link} key={item.link}>
                                    <LinkedinIcon />
                                </a>
                            );
                        case "Instagram":
                            return (
                                <a href={item.link} key={item.link}>
                                    <InstagramIcon />
                                </a>
                            );
                        case "Facebook":
                            return (
                                <a href={item.link} key={item.link}>
                                    <FacebookIcon />
                                </a>
                            );
                        case "Youtube":
                            return (
                                <a href={item.link} key={item.link}>
                                    <YoutubeIcon />
                                </a>
                            );
                    }
                })
            )}
        </div>
    );
};

export default SocialMedia;
