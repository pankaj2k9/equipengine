import React from 'react';

import './Styles.css';

const Breadcrumbs = () => {
  return (
    <div className="Breadcrumbs">
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
