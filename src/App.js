import "./App.css";
import { Switch, Route, BrowserRouter } from "react-router-dom";

import Header from "./components/Header";
import HomePage from "./components/pages/Homepage";
import AboutPage from "./components/pages/AboutPage";
import ServicesPage from "./components/pages/ServicesPage";
import ContactPage from "./components/pages/ContactPage";
import StudioPage from "./components/pages/StudioPage";

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
