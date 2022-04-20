import React, { MutableRefObject, useRef } from 'react';
import { animated, useSpring } from 'react-spring';
import './style.css';

interface Props {
  property: {
    index: number;
    title: string;
    description: string;
    type: string;
    link: string;
    img: string;
  };
}

const WaveAlert: React.FC<Props> = ({ property }) => {
  const calc = (clientX: any, clientY: any) => {
    const x =
      clientX -
      (ref.current.offsetLeft -
        (window.scrollX || window.pageXOffset || document.body.scrollLeft));

    const y =
      clientY -
      (ref.current.offsetTop -
        (window.scrollY || window.pageYOffset || document.body.scrollTop));

    const dampen = 25; // Higher the number the less rotation
    const xys = [
      -(y - ref.current.clientHeight / 2) / dampen, // rotateX
      (x - ref.current.clientWidth / 2) / dampen, // rotateY
      1.15, // Scale
    ];

    // Update values to animate to
    set({ xys: xys });
  };

  const trans = (x: any, y: any, s: any) =>
    `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

  const [props, set] = useSpring(() => ({
    xys: [0, 0, 1],
    config: { mass: 1, tension: 450, friction: 26 },
  }));

  const ref = useRef() as MutableRefObject<HTMLDivElement>;

  return (
    <animated.div
      ref={ref}
      className="wave-alert-box"
      onMouseMove={({ clientX, clientY }) => {
        calc(clientX, clientY);
      }}
      onMouseLeave={() => set({ xys: [0, 0, 1] })}
      style={{
        transform: props.xys.interpolate(trans),
      }}
    >
      <a href={property.link} target="__blank" className="link-box">
        <div>
          <div className="wave-alert-title">
            <p style={{ color: 'white' }}>{property.title}</p>
            <img
              src={require(`../../assets/img/${property.img}`)}
              alt="cardimg"
            />
          </div>
          <div className="wave-alert-description">
            <p>{property.description}</p>
          </div>
        </div>
      </a>
    </animated.div>
  );
};

export default WaveAlert;
