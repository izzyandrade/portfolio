import React from "react";
import { animated } from "react-spring";
import useWindowDimensions from "../../utils/useWindowDimensions";
import AboutMeSection from "../AboutMeSection";
import WaveAlert from "../WaveAlert";
import data, { aboutMeSection } from "./data";
import "./styles.css";

const Body = ({ reference }) => {
  const AnimatedWaveAlert = animated(WaveAlert);

  const { width } = useWindowDimensions();

  return (
    <div>
      {width > 1000 ? (
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
