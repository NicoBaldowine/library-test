import React from 'react';

import PropTypes from 'prop-types';

import './button.css';

/** Primary UI component for user interaction */
export const Button = ({ primary, backgroundColor, size, label, variant, company, ...props }) => {
  const mode = primary 
    ? company === 'ria'
      ? 'storybook-button--primary-ria'
      : company === 'xe'
        ? 'storybook-button--primary-xe'
        : 'storybook-button--primary'
    : variant === 'success' 
      ? 'storybook-button--success'
      : 'storybook-button--secondary';
  return (
    <button
      type="button"
      className={['storybook-button', `storybook-button--${size}`, mode].join(' ')}
      style={backgroundColor && { backgroundColor }}
      {...props}
    >
      {label}
    </button>
  );
};

Button.propTypes = {
  /** Is this the principal call to action on the page? */
  primary: PropTypes.bool,
  /** What background color to use */
  backgroundColor: PropTypes.string,
  /** How large should the button be? */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  /** Button contents */
  label: PropTypes.string.isRequired,
  /** Optional click handler */
  onClick: PropTypes.func,
  company: PropTypes.oneOf(['ria', 'xe']),
};

Button.defaultProps = {
  backgroundColor: null,
  primary: false,
  size: 'medium',
  onClick: undefined,
  company: undefined,
};
