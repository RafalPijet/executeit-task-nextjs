import React, { useState } from 'react';
import Image from 'next/image';
import { Paper, Typography } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import image from '../../../images/noImage.png';
import {
  CustomImageButton,
  ImageSrc,
  CustomImage,
  ImageBackdrop,
  Props,
  useStyles,
} from './ImageButtonStyle';

const ImageButton: React.FC<Props> = (props) => {
  const { ship } = props;
  const classes = useStyles();
  const [isPreviewOpen, setIsPreviewOpen] = useState<boolean>(false);

  return (
    <Paper elevation={5} className={classes.root}>
      <CustomImageButton
        onClick={() => setIsPreviewOpen(true)}
        focusRipple
        style={{
          width: 200,
        }}
      >
        <ImageSrc
          style={{
            backgroundImage: `url(${ship.image !== null ? ship.image : image})`,
          }}
        />
        <ImageBackdrop className="MuiImageBackdrop-root" />
        <CustomImage>
          <Typography
            component="span"
            variant="subtitle1"
            color="inherit"
            sx={{
              position: 'relative',
              p: 4,
              pt: 2,
              pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
            }}
          >
            {ship.name}
          </Typography>
        </CustomImage>
      </CustomImageButton>
      <Dialog
        open={isPreviewOpen}
        onClose={() => setIsPreviewOpen(false)}
        maxWidth="lg"
      >
        <DialogContent>
          <Typography>{ship.name}</Typography>

          <img
            className={classes.image}
            src={
              ship.image !== null && ship.image !== undefined
                ? (ship.image as string)
                : image
            }
            alt={ship.name}
          />
        </DialogContent>
      </Dialog>
    </Paper>
  );
};

export default ImageButton;
