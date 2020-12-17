import React from "react";
import WaveAlert from "../WaveAlert";
import data from "./data";
import "./styles.css";
import { useSpring, animated, config } from "react-spring";

const Body = () => {
  const AnimatedWaveAlert = animated(WaveAlert);

  const animatedProps = useSpring({ config: config.default });

  return (
    <div className="wave-alert-container">
      {data.properties.map((property) => {
        return (
          <AnimatedWaveAlert
            title={data.properties[0].title}
            description={data.properties[0].description}
            img={data.properties[0].img}
            index={data.properties[0].index}
          />
        );
      })}
    </div>
  );
};

export default Body;
