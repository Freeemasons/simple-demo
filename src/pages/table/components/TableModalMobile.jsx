import React from 'react';
import { Box } from "@mui/material";
import { provider, useInstance } from 'react-ioc';
import StoreTableModal from '../stores/storeTableModal';
import BaseModal from "../../../Components/UI/modals/BaseModal";
import moment from "moment";
import Todo from "./Todo"

const TableModalMobile = provider()(() => {

  const storeTableModal = useInstance(StoreTableModal)
  const date = moment(storeTableModal.dateGet).format("YYYY-MM-DD")


  // eslint-disable-next-line @typescript-eslint/no-empty-function
  const SaveClick = () => {
    storeTableModal.setOpenTableModal(false)
  }

  const handleClose = (event, reason) => {
    if (reason && reason === "backdropClick") {
      SaveClick()
    } else {
      storeTableModal.setOpenTableModal(false)
    }
  }


  return (

    <BaseModal
      open={storeTableModal.openModal}
      title={`${moment(date).format("DD.MM.YYYY")} Todo List`}
      onClose={(event, reason) => handleClose(event, reason)}
      saveClick={() => SaveClick()}
    >
      <Box sx={{width: "100%"}}>
        <Box sx={{display: "flex", alignItems: "center", justifyContent: "space-between", pl: 2, pr: 2}}>
        </Box>

        <Box sx={{p: 2, height: "100%", maxHeight: "90%"}}>
          <Box sx={{
            display: "flex",
            justifyContent: "space-between",
            flexWrap: {xs: "wrap", sm: "nowrap"},
            alignItems: "center",
            gap: 1
          }}>

            <Todo date={moment(date).format("YYYY-MM-DD")} />

          </Box>
        </Box>
      </Box>
    </BaseModal>
  );
});

export default TableModalMobile;