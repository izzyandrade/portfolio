import React from "react";
import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";
import { animated } from "react-spring";
import WaveAlert from "../WaveAlert";
import AboutMeSection from "../AboutMeSection";
import data, { aboutMeSection } from "./data";
import useWindowDimensions from "../../utils/useWindowDimensions";
import "./styles.css";

const Body = ({ reference }) => {
  const AnimatedWaveAlert = animated(WaveAlert);

  const { height, width } = useWindowDimensions();

  return (
    <div>
      {width > 500 ? (
        <div className="wave-alert-container" ref={reference}>
          {data.properties.map((property) => {
            return <AnimatedWaveAlert property={property} />;
          })}
        </div>
      ) : null}
      <AboutMeSection aboutMeSection={aboutMeSection} />
    </div>
  );
};

export default Body;
