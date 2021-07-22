import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Avatar from "../components/Avatar";
import "./RankingCard.css";

class RankingCard extends React.Component {
  render() {
    const { userName, gravatarImage, score, assertions } = this.props;

    return (
      <div className="ranking-card">
        <header className="ranking-card-header">
          <div className="ranking-card-user">
            <Avatar userName={userName} gravatarImage={gravatarImage} />
            <p
              className="ranking-card-user-name"
              data-testid="header-player-name"
            >
              {userName}
            </p>
          </div>
          <div className="ranking-card-total-score">
            <p>Points:</p>
            <p className="ranking-card-score" data-testid="header-score">
              {score}
            </p>
            <p data-testid="ranking-card-total-question">
              {assertions ? `Assertions: ${assertions}` : ""}
            </p>
          </div>
        </header>
      </div>
    );
  }
}

RankingCard.propTypes = {
  userName: PropTypes.string.isRequired,
  gravatarImage: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired,
  assertions: PropTypes.any,
};

export default RankingCard;
