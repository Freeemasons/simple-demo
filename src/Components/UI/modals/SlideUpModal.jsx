import React from 'react';
import { AppBar, Button, Dialog, IconButton, Slide, Toolbar, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import ButtonMainTimered from "../Buttons/ButtonMainTimered"

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const SlideUpModal = ({
  children,
  open = false,
  title = 'Заголовок',
  closeClick,
  saveClick,
  saveTitle = 'Сохранить',
  isBtnSave = true,
  disabled,
  customBtn,
}) => {

  return (
    <Dialog
      fullScreen
      open={open}
      onClose={closeClick}
      TransitionComponent={Transition}
    >
      <AppBar sx={{position: 'sticky', top: 0, left: 0}}>
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            onClick={closeClick}
            aria-label="close"
          >
            <CloseIcon />
          </IconButton>
          <Typography sx={{ml: 2, flex: 1}} variant="h6" component="div">
            {title}
          </Typography>

          {customBtn || <Button autoFocus color="inherit" variant="outlined" size="small" onClick={saveClick} disabled={disabled}
                    sx={{display: isBtnSave ? 'inline-flex' : 'none'}}>
              {saveTitle}
            </Button>
          }
        </Toolbar>
      </AppBar>
      {children}
    </Dialog>
  );
};

export default SlideUpModal;