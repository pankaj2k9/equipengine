import React from 'react';
import PropTypes from 'prop-types';
import Media from 'react-media';

const ModalInner = ({ children }) => (
  <div>
    <Media query="(max-width: 767px)">
      {matches =>
        matches ? (
          <div
            style={{
              backgroundColor: '#fff',
              margin: 10
            }}
          >
            {children}
          </div>
        ) : (
          <div
            style={{
              backgroundColor: '#fff',
              margin: '30px auto',
              maxWidth: 1100
            }}
          >
            {children}
          </div>
        )}
    </Media>
  </div>
);

ModalInner.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired
};

export default ModalInner;
