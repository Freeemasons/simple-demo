import React, { useEffect } from "react";
import TableCalendar from "./components/TableCalendar";
import { provider, useInstance } from "react-ioc";
import { observer } from "mobx-react-lite";
import StoreTableModal from "./stores/storeTableModal";
import NavStore from "../../stores/nav.store"
import { useMediaQuery, useTheme } from "@mui/material"
import TableModalMobile from "./components/TableModalMobile"
import TableModal from "./components/TableModal"


const TablePage = provider()(observer(() => {

    const nav = useInstance(NavStore);
    const storeTableModal = useInstance(StoreTableModal);

    const [refetch, setRefetch] = React.useState(false);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [open, setOpen] = React.useState(false);

  // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => {
      document.title = "My ToDo List";
      nav?.setHeaderTitle("My ToDo List");
      nav?.setSelectedIndex(3);
  // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {

      if (refetch) {
        setRefetch(false)
      }
    }, [refetch]);


    const handleClickPopover = (data) => {

      setAnchorEl(data);
      setOpen(true)
    };

    const handleClosePopover = () => {

      setAnchorEl(null);
    };


    const mainTheme = useTheme();
    const mobileBreakpointSm = useMediaQuery(mainTheme.breakpoints.down("600"));

    const [openDialog, setOpenDialogDialog] = React.useState(false);


    const handleClickOpenDialog = () => {
      setOpenDialogDialog(true);
    };


    const handleCloseDialog = (event, reason) => {

      if (reason && reason === "backdropClick" && "escapeKeyDown") {
        return;
      }

      setOpenDialogDialog(false);
    };

    return (
      <>
        <TableCalendar
          handleClick={handleClickPopover}
          handleClosePopover={handleClosePopover}
          open={open}
          setAnchorEl={setAnchorEl}
          anchorEl={anchorEl}
          openDialog={openDialog}
          setOpenDialogDialog={setOpenDialogDialog}
          handleClickOpenDialog={handleClickOpenDialog}
          handleCloseDialog={handleCloseDialog}
        />


        {!mobileBreakpointSm && storeTableModal.openModal === true && open && <TableModal
          handleClickPopover={handleClickPopover}
          handleClosePopover={handleClosePopover}
          open={open}
          setAnchorEl={setAnchorEl}
          anchorEl={anchorEl}
          openDialog={openDialog}
          setOpenDialogDialog={setOpenDialogDialog}
          handleClickOpenDialog={handleClickOpenDialog}
          handleCloseDialog={handleCloseDialog}

          setRefetch={setRefetch}
        />}

        {mobileBreakpointSm && storeTableModal.openModal && <TableModalMobile
          setRefetch={setRefetch}
        />}
      </>
    );
  })
);

export default TablePage;
