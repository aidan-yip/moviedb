import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

//pages
import Home from "../pages/Home";
import About from "../pages/About";
import Movie from "../pages/Movie";
import Favorites from "../pages/Favorites";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { GlobalProvider } from "../context/GlobalContext";
import SearchResult from "../pages/SearchResult";

const AppRouter = () => (
  <BrowserRouter>
    <GlobalProvider>
      <Header />
      <main id="maincontent">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Movie/:id" element={<Movie />} />
          <Route path="/Favorites" element={<Favorites />} />
          <Route path="/searchedResults/:query" element={<SearchResult />} />
        </Routes>
      </main>
      <Footer />
    </GlobalProvider>
  </BrowserRouter>
);

export default AppRouter;
