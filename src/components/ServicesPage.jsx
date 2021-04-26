import React, { useEffect, useState } from "react";
import axios from "axios";
import Hero from "./Hero";
import Banner from "./Banner";
import Footer from "./Footer";
import ServiceCard from "./ServiceCard";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import * as react from "@emotion/react";
import ContactSection from "./ContactSection";

const endpoint = "http://localhost:1337";

const styles = {
    container: css`
        padding: 2rem 10rem;
        @media screen and (max-width: 768px) {
            padding: 1rem;
        }
    `,
};
const ServicesPage = () => {
    const [data, setData] = useState([]);
    const [serviceData, setServiceData] = useState([]);

    useEffect(() => {
        async function getData() {
            await axios(endpoint + "/services-page").then((response) => {
                setData(response.data);
            });
        }
        async function getServiceData() {
            await axios(endpoint + "/services").then((response) => {
                setServiceData(response.data);
            });
        }
        getData();
        getServiceData();
    }, []);
    return (
        <div>
            <Hero />
            <Banner text={data.Description} title={data.PageTitle} />
            <div css={styles.container}>
                {serviceData.map((service) => (
                    <ServiceCard
                        title={service.Title}
                        price={service.Price}
                        text={service.Text}
                    />
                ))}
            </div>
            <ContactSection />
            <Footer />
        </div>
    );
};

export default ServicesPage;
