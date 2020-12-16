import React, { useState } from "react";
import "./styles.css";
import WaveAlert from "../WaveAlert";
import data from "./data";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import styled from "styled-components";

class Body extends React.Component {
  state = {
    property: data.properties[0],
    inProp: false,
  };

  nextProperty = () => {
    const { property } = this.state;
    const newIndex = property.index + 1;
    this.setState({ property: data.properties[newIndex], inProp: true });
  };

  prevProperty = () => {
    const { property } = this.state;
    const newIndex = property.index - 1;
    this.setState({ property: data.properties[newIndex], inProp: true });
  };

  render() {
    const { property, inProp } = this.state;

    const StyledGrid = styled.div`
      .transition-enter {
        opacity: 0;
      }

      .transition-enter-active {
        opacity: 1;
        transition: all 1000ms ease-in 100ms;
      }

      .transition-exit {
        opacity: 1;
      }

      .transition-exit-active {
        opacity: 0;
        transition: all 1000ms ease-in;
      }
    `;

    return (
      <div>
        <button onClick={() => this.prevProperty()}>prev</button>
        <div className="wave-alert-container">
          <TransitionGroup component={StyledGrid}>
            <CSSTransition
              key={property.index}
              timeout={1000}
              classNames="transition"
              unmountOnExit
            >
              <WaveAlert
                title={property.title}
                description={property.description}
                img={property.img}
                index={property.index}
              />
            </CSSTransition>
          </TransitionGroup>
        </div>
        <button onClick={() => this.nextProperty()}>next</button>
      </div>
    );
  }
}

export default Body;
