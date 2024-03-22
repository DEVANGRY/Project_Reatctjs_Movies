import { useEffect } from "react";
import { fetchDataFromApi } from "./utils/api";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getApiConfiguration, getGenres } from "./store/homeSlice";
import PageNotFount from "./pages/404/PageNotFount";
import Details from "./pages/detail/Details";
import Explore from "./pages/explore/Explore";
import Home from "./pages/home/Home";
import SearchResult from "./pages/searchResult/SearchResult";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";

function App() {
    const dispatch = useDispatch();
    const { url } = useSelector((state) => state.home);
    useEffect(() => {
        fetchApiConfig();
        genresCall();
    }, []);
    const fetchApiConfig = () => {
        fetchDataFromApi(`/configuration`).then((res) => {
            const url = {
                backdrop: res.images.secure_base_url + "original",
                poster: res.images.secure_base_url + "original",
                profile: res.images.secure_base_url + "original",
            };
            dispatch(getApiConfiguration(url));
        });
    };
    const genresCall = async () => {
        let promises = [];
        let endPoints = ["movie", "tv"];
        let allGenres = {};
        endPoints.forEach((url) => {
            promises.push(fetchDataFromApi(`/genre/${url}/list`));
        });
        const data = await Promise.all(promises);
        data.map(({ genres }) => {
            return genres.map((item) => (allGenres[item.id] = item));
        });
        dispatch(getGenres(allGenres));
    };
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/search/:query" element={<SearchResult />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    );
}

export default App;
