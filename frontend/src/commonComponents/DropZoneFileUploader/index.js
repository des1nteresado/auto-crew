import React, { useCallback, useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import { useDropzone } from 'react-dropzone';
import { withStyles, Divider, Typography } from '@material-ui/core';
import WarningIcon from '@material-ui/icons/Warning';

import palette from 'theme/palette';
import { formatGetter } from '../../modules/AdminPage/utils/formatGetter';
import Snack from '../SnackBar';
import { dropZoneErrorsGenerator } from '../../helpers/dropZoneErrorsGenerator';

import styles from './styles';

const DropZoneFileUploader = ({ uploadedMedia, uploadHandler, classes, config }) => {
  const { accept, maxSize, filesQuantity } = config;

  const [rejections, setRejections] = useState([]);

  const dragDropText = useMemo(() => {
    const title =
      filesQuantity > 1 ? 'Drag and drop up to five images' : 'Drag and drop company video';
    const rules =
      filesQuantity > 1
        ? `Please upload only horizontal images. Images must be a minimum of 1280 x 720. Formats can be ${formatGetter(
            accept
          )} | ${filesQuantity - uploadedMedia.length} remaining`
        : `Formats can be ${formatGetter(accept)} | ${
            filesQuantity - uploadedMedia.length
          } remaining`;

    const alertMessage =
      filesQuantity > 1
        ? 'You have reached the maximum number of images'
        : 'You have reached the maximum number of videos';

    return { title, rules, alertMessage };
  }, [filesQuantity, accept, uploadedMedia]);

  const isDropZoneUnavailable = useMemo(() => uploadedMedia.length >= filesQuantity, [
    uploadedMedia,
    filesQuantity,
  ]);

  const onDrop = useCallback(
    (acceptedFiles) => {
      if (uploadHandler) {
        if (uploadedMedia.length + acceptedFiles.length > config.filesQuantity) {
          return setRejections([
            ...rejections,
            { message: `You are trying to drop more than ${config.filesQuantity} files.` },
          ]);
        }
        const filesToUpload = [];

        acceptedFiles.map((file) => {
          const test = file;
          const blob = URL.createObjectURL(file);

          const reader = new FileReader();

          reader.onload = () => {
            const item = {
              original: blob,
              file: test,
            };

            filesToUpload.push(item);
            uploadHandler([...uploadedMedia, ...filesToUpload]);
          };

          reader.readAsBinaryString(file);

          return file;
        });
      }
    },
    [uploadedMedia, uploadHandler,  rejections]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept,
    maxSize,
    disabled: isDropZoneUnavailable,
    noClick: isDropZoneUnavailable,
    preventDropOnDocument: true,
    onDropRejected(fileRejections) {
      setRejections(fileRejections[0].errors);
    },
  });

  return (
    <div
      {...getRootProps()}
      className={classes.dropZone}
      style={{ borderColor: isDropZoneUnavailable && palette.text.primary }}
    >
      <input {...getInputProps()} />

      {isDropZoneUnavailable ? (
        <div>
          <WarningIcon className={classes.warningIcon} />
          <Typography variant="h2" color="primary">
            {dragDropText.alertMessage}
          </Typography>
        </div>
      ) : (
        <Typography variant="h2" color="primary">
          {isDragActive ? 'Drop the files here ...' : dragDropText.title}
        </Typography>
      )}
      <Divider className={classes.divider} />
      <Typography variant="body1" color="primary" className={classes.subtitle}>
        {dragDropText.rules}
      </Typography>
      <Snack
        isSuccess={false}
        message={dropZoneErrorsGenerator(rejections)}
        onHandleClose={() => setRejections([])}
      />
    </div>
  );
};

DropZoneFileUploader.defaultProps = {
  config: {},
};

DropZoneFileUploader.propTypes = {
  uploadHandler: PropTypes.func.isRequired,
  classes: PropTypes.oneOfType([PropTypes.object]).isRequired,
  uploadedMedia: PropTypes.arrayOf(PropTypes.object).isRequired,
  config: PropTypes.shape({
    accept: PropTypes.string.isRequired,
    maxSize: PropTypes.number.isRequired,
    filesQuantity: PropTypes.number.isRequired,
  }),
};

export default React.memo(withStyles(styles)(DropZoneFileUploader));
