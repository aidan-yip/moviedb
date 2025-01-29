import React from "react";
import { BrowserRouter, Routes, Route, } from "react-router-dom";

const AppRouter = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<PageHome />} />
      <Route path="/" element={<PageHome />} />
    </Routes>
  </BrowserRouter>
);

export default AppRouter;
