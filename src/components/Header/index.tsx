import React, { useState, useEffect } from "react";
import particlesOptions from "../../particles.json";
import { RecursivePartial } from "tsparticles/dist/Types/RecursivePartial";
import { IOptions } from "tsparticles/dist/Options/Interfaces/IOptions";
import Particles from "react-tsparticles";
import Flip from "react-reveal/Flip";
import Zoom from "react-reveal/Zoom";
import Pulse from "react-reveal/Pulse";
import "./styles.css";

const Header = () => {
  const size = useWindowSize();
  return (
    <>
      {size.width > 700 ? (
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
            <Pulse delay={1000}>
              <img
                src={require("../../assets/img/izzy1.jpg")}
                alt="Israel Andrade"
                className="header-image"
              />
            </Pulse>
          </div>
          <div className="header-text-container">
            <Flip top cascade delay={300}>
              <h1 style={{ color: "white" }}>ISRAEL ANDRADE</h1>
            </Flip>
            <Zoom top cascade delay={500}>
              <p style={{ color: "white" }}>
                React JS | React Native | Golang | PostgreSQL | Node JS
              </p>
            </Zoom>
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
