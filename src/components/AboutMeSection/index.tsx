import React from "react";
import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";
import useWindowDimensions from "../../utils/useWindowDimensions";
import "./styles.css";

const AboutMeSection = ({ aboutMeSection }) => {
  const { width } = useWindowDimensions();

  const renderDesktop = () => {
    return aboutMeSection.info.map((info) => {
      if (info.index % 2 === 0) {
        return (
          <div className="about-me-item">
            <div className="about-me-img-container">
              <Zoom left delay={1500}>
                <img
                  src={require(`../../assets/img/${info.img}`)}
                  alt="cardimg"
                />
              </Zoom>
            </div>
            <div
              style={{
                flex: 2,
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
      } else {
        return (
          <div className="about-me-item">
            <div
              style={{
                flex: 2,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Fade right delay={1000}>
                <p style={{ color: "white", fontWeight: "bold" }}>
                  {info.text}
                </p>
              </Fade>
            </div>
            <div className="about-me-img-container">
              <Zoom right delay={1500}>
                <img
                  src={require(`../../assets/img/${info.img}`)}
                  alt="cardimg"
                />
              </Zoom>
            </div>
          </div>
        );
      }
    });
  };

  const renderMobile = () => {
    return aboutMeSection.info.map((info) => {
      return (
        <div className="about-me-item">
          <div className="about-me-img-container">
            <Zoom left delay={1500}>
              <img
                src={require(`../../assets/img/${info.img}`)}
                alt="cardimg"
              />
            </Zoom>
          </div>
          <div
            style={{
              flex: 2,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Fade left delay={1000}>
              <p style={{ color: "white", fontWeight: "bold" }}>{info.text}</p>
            </Fade>
          </div>
        </div>
      );
    });
  };

  return (
    <>
      <div className="about-me-header">
        <Zoom top delay={0}>
          <p className="about-me-title">About me, and my carreer</p>
        </Zoom>
      </div>
      <div className="fade-text-container">
        {width > 700 ? renderDesktop() : renderMobile()}
      </div>
    </>
  );
};

export default AboutMeSection;
