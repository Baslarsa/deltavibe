import React, { useEffect, useState } from "react";
import axios from "axios";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Hero from "../Hero";
import About from "../About";
import Services from "../Services";
import Banner from "../Banner";
import Gallery from "../Gallery";
import Portfolio from "../Portfolio";
import ContactSection from "../ContactSection";
import Footer from "../Footer";
import LoadingOverlay from "../LoadingOverlay";
import { ENDPOINT } from "../../constants/constants";

const endpoint = ENDPOINT;

const styles = {
    wrapper: css``,
};

const HomePage = () => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(true);
        async function getServiceData() {
            let data = await axios(endpoint + "/homepage").then((response) => {
                setData(response.data);
                setIsLoading(false);
            });
        }

        getServiceData();
    }, []);

    return (
        <div>
            {isLoading ? (
                <LoadingOverlay />
            ) : (
                <>
                    <Hero
                        big
                        title={data.HeroTitle}
                        subTitle={data.HeroSubTitle}
                        link={data.heroLink}
                    />
                    <About />
                    <Banner
                        title={data.Services.Title}
                        text={data.Services.Text}
                    />
                    <Services />
                    <Banner title={data.Studio.Title} text={data.Studio.Text} />
                    <Gallery />
                    <Portfolio />
                    <ContactSection />
                    <Footer />
                </>
            )}
        </div>
    );
};

export default HomePage;
