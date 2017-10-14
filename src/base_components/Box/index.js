import React from 'react';
import PropTypes from 'prop-types';

import './styles.css';

const Box = ({ style, children, className }) => {
    return (
        <section style={style} className={`Box ${className}`}>
            {children}
        </section>
    );
};

Box.defaultProps = {
    className: ''
};

Box.propTypes = {
    className: PropTypes.string,
    children: PropTypes.oneOfType([
        PropTypes.element,
        PropTypes.arrayOf(PropTypes.element)
    ]),
    style: PropTypes.object
};

export default Box;
