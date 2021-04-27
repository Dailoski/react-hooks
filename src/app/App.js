import React, { useState } from "react";
import AppContext from "./appContext";

import "./App.css";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";
import styled from "styled-components";

const App = () => {
  const [isGrid, setGrid] = useState(true);
  const [isDark, setDark] = useState(false);

  const onChangeView = () => {
    setGrid(!isGrid);
  };

  const onDarkChange = () => {
    setDark(!isDark);
  };

  return (
    <>
      <AppContext.Provider
        value={{
          isGrid: isGrid,
          isDark: isDark,
          setDark: onDarkChange,
          onSwitchView: onChangeView
        }}
      >
        <Header />
        <Main />
        <Footer />
      </AppContext.Provider>
    </>
  );
};

export default App;
