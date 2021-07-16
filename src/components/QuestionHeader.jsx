import React from 'react';
import PropTypes from 'prop-types';

function decodeHtml(html) {
  let areaElement = document.createElement("textarea");
  areaElement.innerHTML = html;

  return areaElement.value;
}

class QuestionHeader extends React.Component {
  render() {
    const { question } = this.props;
    return (
      <header>
        <div data-testid="question-category">
          { question.category }
        </div>
        <div data-testid="question-text">
          { decodeHtml(question.question) }
        </div>
      </header>
    );
  }
}

QuestionHeader.propTypes = {
  question: PropTypes.shape({
    category: PropTypes.string,
    question: PropTypes.string,
  }).isRequired,
};

export default QuestionHeader;
