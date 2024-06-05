import React from "react";
import { Container, Grid, Modal, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  border: "none",
  borderRadius: 1,
  boxShadow: 24,
  p: 3,
  pb: 0,
  pt: 2,
  maxHeight: "100vh",
  overflow: "auto",
};

const ChatModal = ({
  children,
  title,
  open,
  onClose,
  closeTitle = "Закрыть",
  maxWidth = "sm",
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
          <Grid
            item
            xs={12}
            id="modal-modal-title"
            sx={{
              borderBottom: 1,
              borderColor: "primary.light",
              pb: 1,
              mb: 2,
              display: "flex",
              justifyContent: 'space-between'
            }}
          >
            <Typography
              variant={"h6"}
            >
              {title}
            </Typography>
            <Button
              sx={{ textTransform: "uppercase" }}
              variant="outlined"
              size="small"
              onClick={onClose}
            >
              <Typography>{closeTitle}</Typography>
            </Button>
          </Grid>
          {children}
        </Grid>
      </Container>
    </Modal>
  );
};

export default ChatModal;
