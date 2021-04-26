import React, { useEffect, useState } from "react";
import axios from "axios";

/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import ImageGallery from "react-image-gallery";
import { useWindowWidth } from "@react-hook/window-size";
import LoadingOverlay from "./LoadingOverlay";

const styles = {
    wrapper: css`
        width: 100%;
        padding: 2rem 10rem;
        box-sizing: border-box;
        @media screen and (max-width: 1024px) {
            padding: 2rem 2rem;
        }
    `,
};

const endpoint = "http://localhost:1337";

const Gallery = () => {
    const width = useWindowWidth();
    const [isLoading, setIsLoading] = useState(true);
    const [images, setImages] = useState([]);
    useEffect(() => {
        setIsLoading(true);
        const getStudioImagesData = async () => {
            const imageArr = [];
            let data = await axios(endpoint + "/studioimages").then(
                (response) => {
                    console.log(response.data[0]);
                    response.data[0].image.map((item) => {
                        images.push({
                            original: endpoint + item.formats.large.url,
                            thumbnail: endpoint + item.formats.thumbnail.url,
                            sizes: "small",
                        });
                    });
                }
            );
            setIsLoading(false);
            setImages(images);
        };
        getStudioImagesData();
    }, []);

    return (
        <div css={styles.wrapper} id="gallery">
            {isLoading ? (
                <LoadingOverlay />
            ) : (
                <ImageGallery
                    showPlayButton={false}
                    showFullscreenButton={false}
                    items={images}
                    infinite={true}
                    thumbnailPosition={width < 1024 ? "bottom" : "right"}
                />
            )}
        </div>
    );
};

export default Gallery;