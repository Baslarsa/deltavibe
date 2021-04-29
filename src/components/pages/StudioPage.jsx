import React, { useEffect, useState } from "react";
import axios from "axios";
import Hero from "../Hero";
import Banner from "../Banner";
import Footer from "../Footer";
import { ENDPOINT } from "../../constants/constants";
import Gallery from "../Gallery";
const endpoint = ENDPOINT;

const StudioPage = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        async function getData() {
            let data = await axios(endpoint + "/studio-page").then(
                (response) => {
                    setData(response.data);
                }
            );
        }
        getData();
    }, []);
    return (
        <div>
            <Hero />
            <Banner text={data.Description} title={data.Title} />
            <Gallery />
            <Footer />
        </div>
    );
};

export default StudioPage;
