import React from 'react';
import { Box, ClickAwayListener, Grid, Popper, Typography } from "@mui/material";
import { useInstance } from 'react-ioc';
import StoreTableModal from '../stores/storeTableModal';
import moment from "moment";

import Paper from "@mui/material/Paper"
import Button from "@mui/material/Button"
import ChangeConfirmModal from "./ChangesConfirmModal/ChangeConfirmModal"
import Todo from "./Todo"
import { observer } from "mobx-react"


const TableModal = observer((props) => {

  const storeTableModal = useInstance(StoreTableModal)
  const date = moment(storeTableModal.dateGet).format("YYYY-MM-DD")
  const dateToOutput = moment(storeTableModal.dateGet).format("DD.MM.YYYY")


  const {
    open, anchorEl, handleClosePopover} = props


  const SaveClick = () => {
    handleClosePopover()
    storeTableModal.setOpenTableModal(false)
    storeTableModal.setDate(null)
  }

  const handleClose = (event, reason) => {
    if (reason && reason === "backdropClick") {
      SaveClick()
    } else {
      handleClosePopover()
      storeTableModal.setOpenTableModal(false)
      storeTableModal.setDate(null)
    }
  }


  const handleOpenConfirm = () => {
    storeTableModal.setOpenConfirmModal(true)
  }


  return (

    <ClickAwayListener onClickAway={handleOpenConfirm}>
      <Box sx={{width: 500, overflow: "scroll"}}>
        <Popper
          id='account-menu'
          open={open}
          anchorEl={anchorEl}
          onClose={handleClosePopover}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
          transformOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
          }}
          sx={{zIndex: 1200}}
          transition
          placement="bottom-start"
        >
          <Paper sx={{height: "100vh", display: "flex", flexDirection: "column", justifyContent: "space-between"}}>
            <Box sx={{width: 500, overflow: "scroll"}}>
              <Grid item xs={12} id="modal-modal-title">
                <Typography sx={{
                  textAlign: 'center',
                  borderBottom: 1,
                  borderColor: 'primary.light',
                  pb: 2, mb: 2, pt: 2
                }} variant={'h6'}>To do List on {moment(date).format("DD.MM.YYYY")}</Typography>
              </Grid>

              <Box sx={{p: 2,}}>
                <Box>
                  <Todo date={moment(date).format("YYYY-MM-DD")} dateToOutput={dateToOutput} />

                </Box>
              </Box>
            </Box>
            <Box sx={{
              display: 'flex',
              justifyContent: 'space-between',
              borderTop: 1,
              borderColor: 'primary.light',
              pt: 2,
              pb: 1,
              pl: 1,
              pr: 1,
            }}>
              <Button sx={{textTransform: 'uppercase'}}
                      variant="outlined"
                      size="small"
                      onClick={(event, reason) => {
                        handleClosePopover()
                        handleClose(event, reason)
                      }}>
                <Typography>Cancel</Typography>
              </Button>
              <Button sx={{textTransform: 'uppercase', mr: 2}} variant="outlined" size="small"
                      onClick={() => SaveClick()}>
                <Typography>Save</Typography>
              </Button>
            </Box>
          </Paper>
        </Popper>
        <ChangeConfirmModal handleClosePopoverFromChild={handleClosePopover} />
      </Box>
    </ClickAwayListener>
  );
});

export default TableModal;