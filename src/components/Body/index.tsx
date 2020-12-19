import React from "react";
import WaveAlert from "../WaveAlert";
import data from "./data";
import "./styles.css";
import { useSpring, animated, config } from "react-spring";

const Body = ({ reference }) => {
  const AnimatedWaveAlert = animated(WaveAlert);

  const animatedProps = useSpring({ config: config.default });

  return (
    <div className="wave-alert-container" ref={reference}>
      {data.properties.map((property) => {
        return <AnimatedWaveAlert property={property} />;
      })}
    </div>
  );
};

export default Body;
