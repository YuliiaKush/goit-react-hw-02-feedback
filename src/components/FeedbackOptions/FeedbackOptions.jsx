import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper, Button } from './FeedbackOptions.styled';
import Icons from 'components/Icons/Icons';

export const FeedbackOptions = ({ options, onLeaveFeedback, icon: Icon = null}) => {
  return (
    <Wrapper>
      {options.map(option => (
        <Button
          key={option}
              type="button"
          onClick={() => onLeaveFeedback(option)}
        >
              {option}
                {Icon && <Icon size="24" />}
        </Button>
      ))}
    </Wrapper>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired, icon: PropTypes.any
};