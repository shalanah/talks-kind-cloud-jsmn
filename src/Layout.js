import React, { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import NotBuiltForThisDevice from "./NotBuiltForThisDevice";

const fadeIn = keyframes`
  from {opacity: 0; transform: translateY(2.5vmin);}
  to {opacity: 1; transform: translateY(0);}
`;

export const Container = styled.div`
  font-family: strokeweight, sans-serif;
  font-weight: 60;
  display: grid;
  width: 100%;
  height: 100%;
  grid-template-areas: "cloud text";
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 100%;
  .cloud {
    grid-area: cloud;
    padding: 18vmin 5vmin 20vmin 20vmin;
  }
  .text {
    padding: 24vmin 18vmin 18vmin 3vmin;
    grid-area: text;
    display: flex;
    div {
      text-align: center;
      animation: ${fadeIn} 1s;
      padding-bottom: 5vh;
      margin: auto;
    }
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  strong {
    font-weight: 140;
  }
  h1 {
    line-height: 1.2;
    font-size: 5vw;
    margin-bottom: 1rem;
  }
  h2 {
    line-height: 1.2;
    font-size: 4vw;
    margin-top: 2rem;
    margin-bottom: 1rem;
  }
  h3 {
    line-height: 1.2;
    font-size: 3vw;
    margin-top: 1.5rem;
    margin-bottom: 1rem;
  }
  p,
  ul,
  li {
    line-height: 1.4;
    font-size: 2rem;
  }
  ${(props) =>
    props.tech
      ? `
    p {
      display: inline-block;
      background: var(--main-text);
      color: var(--main-bg);
      padding: .05em .5em;
      border-radius: .3em;
      margin-right: .5em; 
      font-size: 1.5rem !important;
      font-weight: 140; 
      margin-bottom: .1em;
    }
  `
      : ""}
`;

export const useIsNotSupported = () => {
  const [dim, setDim] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  useEffect(() => {
    const setWinDim = () => {
      setDim({ width: window.innerWidth, height: window.innerHeight });
    };
    window.addEventListener("resize", setWinDim);
    return () => {
      window.removeEventListener("resize", setWinDim);
    };
  });

  // Putting a presentation together is a lot of work... I don't feel like also caring about making it responsive at this time. Might have more energy on my second talk :)
  return dim.width < dim.height || dim.width < 1100;
};

const Layout = ({ children, tech, ...props }) => {
  const notSupported = useIsNotSupported();
  if (notSupported)
    return (
      <Container
        style={{
          position: "fixed",
          background: "var(--main-bg)",
          color: "var(--main-text)",
          display: "flex",
          padding: "10%",
        }}
      >
        <NotBuiltForThisDevice />
      </Container>
    );

  return (
    <Container {...props} tech={tech}>
      <div className="text">
        <div style={{ margin: "auto" }}>{children}</div>
      </div>
    </Container>
  );
};

export default Layout;
