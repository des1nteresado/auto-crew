import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core';
import styles from './styles';

const VideoPlayer = ({ filePath, formats, classes, style, ...otherProps }) => {
  return (
    <video className={clsx(classes.video, style && style)} {...otherProps}>
      {formats.map((format, index) => (
        <source key={`${format}${index}`} src={filePath} type={`video/${format}`} />
      ))}
    </video>
  );
};

VideoPlayer.defaultProps = {
  style: '',
};

VideoPlayer.propTypes = {
  filePath: PropTypes.string.isRequired,
  formats: PropTypes.arrayOf(PropTypes.string).isRequired,
  style: PropTypes.string,
  classes: PropTypes.oneOfType([PropTypes.object]).isRequired,
};

export default React.memo(withStyles(styles)(VideoPlayer));
