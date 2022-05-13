import React, { useEffect } from "react";
import { Suspense } from "react";
import { lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Lottie from "react-lottie";
import animationData from "./assets/lotties/ironman-loader";
const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

const App = () => {

// HOMEPAGE
  const Home = lazy(() => import("./components/Homepage"));


// CHARACTER DETAIL PAGE
  const Character = lazy(() => import("./components/CharacterDetails"));
  
  return (
    <Suspense fallback={<Lottie options={defaultOptions} width={"50%"} />}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route
              index
              path="/character/:charactedId"
              element={<Character />}
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
};

export default App;
