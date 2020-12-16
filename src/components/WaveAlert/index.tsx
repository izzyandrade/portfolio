import React from "react";
import "./style.css";
import { CSSTransition, TransitionGroup } from "react-transition-group";

interface SendProps {
  title: String;
  description: any;
  img: String;
  index: number;
}

interface SendState {}

export default class WaveAlert extends React.Component<SendProps, SendState> {
  render() {
    const { title, description, img, index } = this.props;
    return (
      <div className="wave-alert-box">
        <div>
          <div className="wave-alert-title">
            <p>{title}</p>
            <img src={require(`../../assets/img/${img}`)} alt="cardimg" />
          </div>
          <div className="wave-alert-description">{description}</div>
        </div>
      </div>
    );
  }
}

// Retorne na data e hora marcadas para
// visualizar o link da vídeo conferência.
