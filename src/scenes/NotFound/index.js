import React from 'react';

import Box from 'base_components/Box';
import Media from 'react-media';

const NotFound = () => {
  return (
    <Media query="(max-width: 767px)">
      {matches =>
        matches ? (
          <Box>
            <h4>Page Not Found</h4>
            <p>
              Praesent sapien massa, convallis a pellentesque nec, egestas non
              nisi. Curabitur non nulla sit amet nisl tempus convallis quis ac
              lectus. Curabitur non nulla sit amet nisl tempus convallis quis ac
              lectus. Vestibulum ante ipsum primis in faucibus orci luctus et
              ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet
              aliquam vel, ullamcorper sit amet ligula. Vivamus magna justo,
              lacinia eget consectetur sed, convallis at tellus. Curabitur non
              nulla sit amet nisl tempus convallis quis ac lectus. Pellentesque
              in ipsum id orci porta dapibus.
            </p>
          </Box>
        ) : (
          <Box style={{ marginTop: 150 }}>
            <h4>Page Not Found</h4>
            <p>
              Praesent sapien massa, convallis a pellentesque nec, egestas non
              nisi. Curabitur non nulla sit amet nisl tempus convallis quis ac
              lectus. Curabitur non nulla sit amet nisl tempus convallis quis ac
              lectus. Vestibulum ante ipsum primis in faucibus orci luctus et
              ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet
              aliquam vel, ullamcorper sit amet ligula. Vivamus magna justo,
              lacinia eget consectetur sed, convallis at tellus. Curabitur non
              nulla sit amet nisl tempus convallis quis ac lectus. Pellentesque
              in ipsum id orci porta dapibus.
            </p>
          </Box>
        )}
    </Media>
  );
};

export default NotFound;
