import React from 'react';
import DialogTitle from "@mui/material/DialogTitle"
import { Dialog, DialogActions } from "@mui/material"
import Button from "@mui/material/Button"
import { observer } from "mobx-react-lite"
import moment from "moment"
import { useInstance } from "react-ioc"
import StoreTableModal from '../../stores/storeTableModal';
// import StoreTableModalDayList from '../../stores/storeTableModalDayList';
import ButtonMain from "../../../../Components/UI/Buttons/ButtonMain"


const ChangeConfirmModal = observer(({ handleClosePopoverFromChild }) => {
    const storeTableModal = useInstance(StoreTableModal)
    // const storeTableModalDayList = useInstance(StoreTableModalDayList)

    const date = moment(storeTableModal.dateGet).format("YYYY-MM-DD")

    const handleClose = () => {
        storeTableModal.setOpenConfirmModal(false)
    }

    const handleSave = () => {
        // eslint-disable-next-line @typescript-eslint/no-empty-function
    }

    return (
        <Dialog
            open={storeTableModal.getOpenConfirmModal()}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle id="alert-dialog-title">
                {`Do you want to save your to do changes on ${moment(date).format("DD.MM.YYYY")}?`}
            </DialogTitle>
            <DialogActions>

                <ButtonMain
                    onClick={handleClose}
                    variant="text"
                    title="Cancel"
                />
                <ButtonMain
                    onClick={handleSave}
                    variant="text"
                    title="Save"
                />

            </DialogActions>
        </Dialog>
    );
});

export default ChangeConfirmModal;