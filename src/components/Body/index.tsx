import React from "react";
import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";
import { animated } from "react-spring";
import WaveAlert from "../WaveAlert";
import data, { aboutMeSection } from "./data";
import "./styles.css";

const Body = ({ reference }) => {
  const AnimatedWaveAlert = animated(WaveAlert);

  return (
    <div>
      <div className="wave-alert-container" ref={reference}>
        {data.properties.map((property) => {
          return <AnimatedWaveAlert property={property} />;
        })}
      </div>
      <div className="fade-text-container">
        <div className="about-me-header">
          <Zoom top delay={0}>
            <h1 style={{ color: "white" }}>About me, and my carreer</h1>
          </Zoom>
        </div>
        {aboutMeSection.info.map((info) => {
          return (
            <div className="about-me-item">
              <div
                style={{
                  width: 500,
                  display: "table-cell",
                  verticalAlign: "middle",
                  textAlign: "center",
                }}
              >
                <Zoom left delay={1500}>
                  <img
                    src={require(`../../assets/img/${info.img}`)}
                    alt="cardimg"
                  />
                </Zoom>
              </div>
              <div
                style={{
                  flex: 1,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Fade left delay={1000}>
                  <p style={{ color: "white", fontWeight: "bold" }}>
                    {info.text}
                  </p>
                </Fade>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Body;
