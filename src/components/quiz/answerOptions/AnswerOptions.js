import React from 'react';
import PropTypes from 'prop-types';

function AnswerOptions(props) {
    return (
        <li>
            <input
            type="radio"
            className="radioCustomButton"
            checked={props.answerType === props.answers}
            id={props.answerType}
            value={props.answerType}
            disabled={props.answer}
            onChange={props.onAnswerSelected}
            />
            <label className ="radioCustomLabel" htmlFor={props.answerType}>
                {props.answerContent}
            </label>
        </li>
    );
}

AnswerOptions.propType = {
    answerType: PropTypes.string.isRequired,
    answerContent: PropTypes.string.isRequired,
    answer: PropTypes.string.isRequired,
    onAnswerSelected: PropTypes.func.isRequired,
};
export default AnswerOptions;