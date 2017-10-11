import React from 'react';
import PropTypes from 'prop-types';

import LinkButton from 'base_components/LinkButton';
import './Styles.css';

const Breadcrumbs = () => {
  return (
    <div className="Breadcrumbs">
      <LinkButton text="view" url="/sample" />
      <a
        href=""
        style={{
          color: '#616161',
          fontSize: 14,
          fontWeight: '400',
          textTransform: 'capitalize'
        }}
      >
        Courses
      </a>
    </div>
  );
};

export default Breadcrumbs;
