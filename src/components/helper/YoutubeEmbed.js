import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '@material-ui/core';

const YoutubeEmbed = ({ embedId }) => (
  <Box alignItems='center'>
    <iframe
      width='800'
      height='480'
      src={`https://www.youtube.com/embed/${embedId}`}
      frameBorder='0'
      allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
      allowFullScreen
      title='Embedded youtube'
    />
  </Box>
);

YoutubeEmbed.propTypes = {
  embedId: PropTypes.string.isRequired,
};

export default YoutubeEmbed;
