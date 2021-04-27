import React, { useContext } from "react";
import { Route } from "react-router-dom";
import AppContext from "../appContext";

import About from "../About/AboutPage";
import PostPage from "../Posts/PostPage";
import styled from "styled-components";

const Main = props => {
  const StyledDark = styled.div`
    ${props => (props.darkMode ? "background-color: black" : "")}
    ${props => (props.darkMode ? "color: white" : "")}
  `;
  const value = useContext(AppContext);

  return (
    <StyledDark darkMode={value.isDark}>
      <main className="container">
        <Route path="/about" component={About} />
        <Route
          exact
          path="/"
          render={() => <PostPage isGrid={value.isGrid} />}
        />
      </main>
    </StyledDark>
  );
};

export default Main;
