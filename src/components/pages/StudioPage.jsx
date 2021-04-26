import React, { useEffect, useState } from "react";
import axios from "axios";
import Hero from "../Hero";
import Banner from "../Banner";
import Footer from "../Footer";
const endpoint = "http://localhost:1337";

const StudioPage = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        async function getData() {
            let data = await axios(endpoint + "/services-page").then(
                (response) => {
                    setData(response.data);
                    console.log(response.data);
                }
            );
        }
        getData();
    }, []);
    return (
        <div>
            <Hero title="Studio" />
            <Banner text={data.Description} />
            <Footer />
        </div>
    );
};

export default StudioPage;
