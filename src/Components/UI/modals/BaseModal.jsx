import React from 'react';
import { Container, Grid, Modal, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
  border: 'none',
  borderRadius: 1,
  boxShadow: 24,
  p: 3, pt: 2,
  maxHeight: '100%',
  overflowY: 'scroll',
  zIndex: 9999
};

const BaseModal = ({
  children,
  title,
  open,
  onClose,
  saveClick,
  saveTitle = 'Save',
  closeTitle = 'Cancel',
  maxWidth = 'sm',
  hideSave = false,
  hideClose = false,
  castomTitle,
  customBtn,
}) => {
  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Container maxWidth={maxWidth} sx={style}>
        <Grid container spacing={2}>
          {castomTitle ?
            <Grid item xs={12}>
              {castomTitle}
            </Grid>
            :
            <Grid item xs={12} id="modal-modal-title">
              <Typography sx={{
                textAlign: 'center',
                borderBottom: 1,
                borderColor: 'primary.light',
                pb: 1, mb: 2
              }} variant={'h6'}>{title}</Typography>
            </Grid>
          }

          <Box sx={{ ml: 2, width: "100%" }}>
            {children}
          </Box>
          <Grid item xs={12}>
            <Box sx={{
              display: 'flex',
              justifyContent: 'space-between',
              borderTop: 1,
              borderColor: 'primary.light',
              pt: 2,
              mt: 2
            }}>

              {!hideClose && (
                <Button sx={{ textTransform: 'uppercase' }} variant="outlined" size="small" onClick={onClose}>
                  <Typography>{closeTitle}</Typography>
                </Button>
              )}

              {!hideSave ? (customBtn || (
                <Button sx={{ textTransform: 'uppercase' }} variant="outlined" size="small" onClick={saveClick}>
                  <Typography>{saveTitle}</Typography>
                </Button>
              )) : null}

            </Box>
          </Grid>
        </Grid>
      </Container>
    </Modal>
  );
};

export default BaseModal;