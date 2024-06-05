import React from 'react';
import {AppBar, Button, Dialog, IconButton, Slide, Toolbar, Typography} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

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
                        isBtnSave = true
                      }) => {
  return (
    <Dialog
      fullScreen
      open={open}
      onClose={closeClick}
      TransitionComponent={Transition}
    >
      <AppBar sx={{position: 'relative'}}>
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            onClick={closeClick}
            aria-label="close"
          >
            <CloseIcon/>
          </IconButton>
          <Typography sx={{ml: 2, flex: 1}} variant="h6" component="div">
            {title}
          </Typography>
          <Button autoFocus color="inherit" variant="outlined" size="small" onClick={saveClick}
                  sx={{display: isBtnSave ? 'inline-flex' : 'none'}}>
            {saveTitle}
          </Button>
        </Toolbar>
      </AppBar>
      {children}
    </Dialog>
  );
};

export default SlideUpModal;