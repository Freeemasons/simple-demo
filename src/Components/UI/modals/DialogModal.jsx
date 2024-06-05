import React, { useState } from 'react';
import { Container, Grid, Modal, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Popover from '@mui/material/Popover';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const style = {
  position: 'fixed',
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

const DialogModal = ({
  children,
  title,
  open,
  onClose,
  saveClick,
  saveTitle = 'Сохранить',
  closeTitle = 'Отмена',
  maxWidth = 'sm',
  hideSave = false,
  hideClose = false,
  deleting = false,
  onDelete,
  openPopoverState,
  disabledPhotoDownload,
  downloadPhotoMod
}) => {

  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const openPopover = Boolean(anchorEl);
  const id = openPopover ? 'simple-popover' : undefined;

  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Container maxWidth={maxWidth} sx={style}>
        <Grid container spacing={2}>
          <Grid item xs={12} id="modal-modal-title" sx={{maxHeight: '8vh', minHeight: 60}}>
            {deleting ?
              <Box sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                borderBottom: 1,
                borderColor: 'primary.light',
                pb: 1, mb: 2
              }}>
                <Typography variant={'h6'}>{title}</Typography>

                <div>
                  <Button aria-describedby={id} variant="standart" onClick={handleClick}>
                    <MoreVertIcon />
                  </Button>
                  <Popover
                    id={id}
                    open={openPopover}
                    anchorEl={anchorEl}
                    onClose={handleClose}
                    anchorOrigin={{
                      vertical: 'top',
                      horizontal: 'right',
                    }}
                    keepMounted
                    transformOrigin={{
                      vertical: 'top',
                      horizontal: 'right',
                    }}
                  >
                    <Typography sx={{p: 2}} onClick={onDelete}>Удалить</Typography>
                  </Popover>
                </div>

              </Box>

              :
              <Typography sx={{
                textAlign: 'center',
                borderBottom: 1,
                borderColor: 'primary.light',
                pb: 1, mb: 2
              }} variant={'h6'}>{title}</Typography>
            }

          </Grid>
          <Box sx={{m: 0, p: 0, maxHeight: '80vh', overflow: "scroll", width: "100%"}}>
            {children}
          </Box>
          <Grid item xs={12} sx={{maxHeight: '12vh', minHeight: 60}}>
            <Box sx={{
              display: 'flex',
              justifyContent: {xs: 'space-between', md: 'start'},
              borderTop: 1,
              borderColor: 'primary.light',
              pt: 2,
              mt: 2
            }}>
              {!hideSave && !downloadPhotoMod && (
                <Button sx={{textTransform: 'uppercase', mr: 2}} variant="outlined" size="small" onClick={saveClick}>
                  <Typography>{saveTitle}</Typography>
                </Button>
              )}
              {!hideSave && downloadPhotoMod && !disabledPhotoDownload && (
                <Button sx={{textTransform: 'uppercase', mr: 2}} variant="outlined" size="small" onClick={saveClick}>
                  <Typography>{saveTitle}</Typography>
                </Button>
              )}
              {!hideClose && (
                <Button sx={{textTransform: 'uppercase'}} variant="outlined" size="small" onClick={onClose}>
                  <Typography>{closeTitle}</Typography>
                </Button>
              )}
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Modal>
  );
};

export default DialogModal;