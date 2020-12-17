import React from "react";
import "./style.css";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { useSpring, animated, config } from "react-spring";

interface Props {
  title: string;
  description: string;
  img: string;
  index: number;
}

const WaveAlert: React.FC<Props> = ({ title, description, img, index }) => {
  const calc = (x: any, y: any) => [
    -(y - window.innerHeight / 2) / 20,
    (x - window.innerWidth / 2) / 20,
    1.2,
  ];
  const trans = (x: any, y: any, s: any) =>
    `perspective(500px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

  const [props, set] = useSpring(() => ({
    xys: [0, 0, 1],
    config: { mass: 1, tension: 450, friction: 26 },
  }));

  return (
    <animated.div
      className="wave-alert-box"
      onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
      onMouseLeave={() => set({ xys: [0, 0, 1] })}
      style={{ transform: props.xys.interpolate(trans) }}
    >
      <div>
        <div className="wave-alert-title">
          <p>{title}</p>
          <img src={require(`../../assets/img/${img}`)} alt="cardimg" />
        </div>
        <div className="wave-alert-description">{description}</div>
      </div>
    </animated.div>
  );
};

export default WaveAlert;
