import React from 'react';
import { animated } from 'react-spring';
import useWindowDimensions from '../../utils/useWindowDimensions';
import AboutMeSection from '../AboutMeSection';
import WaveAlert from '../WaveAlert';
import { contactMeSection } from '../../utils/sectionInformation';
import './styles.css';

const Body = ({ reference }) => {
  const AnimatedWaveAlert = animated(WaveAlert);

  const { width } = useWindowDimensions();

  return (
    <div>
      {width > 1000 ? (
        <div className="wave-alert-container" ref={reference}>
          {contactMeSection.properties.map((property) => {
            return <AnimatedWaveAlert property={property} />;
          })}
        </div>
      ) : null}
      <AboutMeSection />
    </div>
  );
};

export default Body;
