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
  maxHeight: '100vh',
  overflow: 'auto'
};

const BaseModal = ({
  children,
  title,
  open,
  onClose,
  saveClick,
  saveTitle = 'Сохранить',
  closeTitle = 'Отмена',
  maxWidth = 'sm',
  hideSave = false
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
          <Grid item xs={12} id="modal-modal-title">
            <Typography sx={{
              textAlign: 'center',
              borderBottom: 1,
              borderColor: 'primary.light',
              pb: 1, mb: 2
            }} variant={'h6'}>{title}</Typography>
          </Grid>
          {children}
          <Grid item xs={12}>
            <Box sx={{
              display: 'flex',
              justifyContent: {xs: 'space-between', md: 'start'},
              borderTop: 1,
              borderColor: 'primary.light',
              pt: 2,
              mt: 2
            }}>
              {!hideSave && (
                <Button sx={{textTransform: 'uppercase', mr: 2}} variant="outlined" size="small" onClick={saveClick}>
                  <Typography>{saveTitle}</Typography>
                </Button>
              )}
              <Button sx={{textTransform: 'uppercase'}} variant="outlined" size="small" onClick={onClose}>
                <Typography>{closeTitle}</Typography>
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Modal>
  );
};

export default BaseModal;