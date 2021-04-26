import "./App.css";
import { Switch, Route, BrowserRouter } from "react-router-dom";

import Header from "./components/Header";
import HomePage from "./components/Homepage";
import AboutPage from "./components/AboutPage";
import ServicesPage from "./components/ServicesPage";
import ContactPage from "./components/ContactPage";
import StudioPage from "./components/StudioPage";

function App() {
    return (
        <div className="App">
            <Header />
            <Switch>
                <Route path="/about">
                    <AboutPage />
                </Route>
                <Route path="/services">
                    <ServicesPage />
                </Route>
                <Route path="/studio">
                    <StudioPage />
                </Route>
                <Route path="/contact">
                    <ContactPage />
                </Route>
                <Route exact path="/">
                    <HomePage />
                </Route>
            </Switch>
        </div>
    );
}

export default App;
