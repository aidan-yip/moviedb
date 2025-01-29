import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

//pages
import Home from "../pages/Home";
import About from "../pages/About";
import Movie from "../pages/Movie";
import Favorites from "../pages/Favorites";
import Header from "../components/header";
import Footer from "../components/footer";

const AppRouter = () => (
  <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/About" element={<About />} />
      <Route path="/Movie/:id" element={<Movie />} />
      <Route path="/Favorites" element={<Favorites />} />
    </Routes>
    <Footer />
  </BrowserRouter>
);

export default AppRouter;
