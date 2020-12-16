import React, { useState, useEffect } from "react";
import particlesOptions from "../../particles.json";
import { RecursivePartial } from "tsparticles/dist/Types/RecursivePartial";
import { IOptions } from "tsparticles/dist/Options/Interfaces/IOptions";
import Particles from "react-tsparticles";
import "./styles.css";

const Header = () => {
  const size = useWindowSize();
  return (
    <>
      {size.width > 650 ? (
        <Particles
          options={particlesOptions as RecursivePartial<IOptions>}
          height={"800px"}
        />
      ) : (
        <Particles
          options={particlesOptions as RecursivePartial<IOptions>}
          height={"600px"}
        />
      )}
      <div
        style={
          size.width > 650
            ? containerStyle.bigScreen
            : containerStyle.smallScreen
        }
      >
        <div className="header-content-container">
          <div className="header-image-container">
            <img
              src={require("../../assets/img/izzy1.jpg")}
              alt="Israel Andrade"
              className="header-image"
            />
          </div>
          <div className="header-text-container">
            <h1 style={{ color: "white" }}>ISRAEL ANDRADE</h1>
            <p style={{ color: "white" }}>
              React JS | React Native | Golang | PostgreSQL | Node JS
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

const containerStyle = {
  bigScreen: {
    position: "absolute" as "absolute",
    top: 100,
    width: "100%",
    height: "100%",
  },
  smallScreen: {
    position: "absolute" as "absolute",
    top: 180,
    width: "100%",
    height: "100%",
  },
};

function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: 0,
    height: 0,
  });
  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return windowSize;
}

export default Header;
