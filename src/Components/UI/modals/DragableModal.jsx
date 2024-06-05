import React, { useRef, useState, useEffect } from 'react';
import { Container, Box, IconButton, Typography, Button } from "@mui/material"
import Draggable from 'react-draggable';
import CloseIcon from '@mui/icons-material/Close';
import { makeAutoObservable } from "mobx";
import { observer } from "mobx-react-lite";

class CloseAlertStore {
    soonClose = false

    get soonCloseGet() {
        return this.soonClose
    }

    setSoonClose(value) {
        this.soonClose = value
    }

    constructor() {
        makeAutoObservable(this)
    }
}

const closeAlertStore = new CloseAlertStore()

const DragableModal = observer(({
    draggableId = "draggable-dialog-title",
    openModal,
    maxWidth = "sm",
    //you must use handle close as if modal will go out view space it will call the function
    handleClose,
    //castom header must have id, what will be connected with Draggable as only with it modal will be dragged
    //use castomHeader or headerTitle not both
    castomHeader,
    headerTitle = "",
    children,
    hideSave,
    saveTitle = "Сохранить",
    handleSave
}) => {
    const modalRef = useRef(null)

    //set that modal wont be close soon
    useEffect(()=>{
        closeAlertStore.setSoonClose(false)
    },[])

    //needed for closing modal if it goes down from view
    const handleOnDrag = () => {
        if (modalRef?.current) {
            const rect = modalRef.current.getBoundingClientRect();
            if ((rect?.y + 40) >= document.documentElement.clientHeight) {
                closeAlertStore.setSoonClose(false)
                handleClose && handleClose()
            } else if ((rect?.y + 100) > document.documentElement.clientHeight) {
                closeAlertStore.setSoonClose(true)
            } else {
                closeAlertStore.setSoonClose(false)
            }
        }
    }

    const handleCloseClick = () => {
        handleClose && handleClose()
        closeAlertStore.setSoonClose(false)
    }

    const handleSaveClick = () => {
        handleSave && handleSave()
        closeAlertStore.setSoonClose(false)
    }

    return (
        <>
            {openModal &&
                <Draggable
                    // draggable is used for dragging modal throw page
                    // handle is used for allowing drag only by part with id what is inside handle after #
                    // bounds allows drag only inside body of page
                    handle={"#"+draggableId}
                    bounds="body"
                    onDrag={handleOnDrag}
                >
                    <Box
                        ref={modalRef}
                        sx={{
                            position: "fixed",
                            //top and left counts as Draggable use transform: translate and they conflict
                            top: 100,
                            left: 100,
                            zIndex: 9999,
                            bgcolor: 'background.paper',
                            border: 'none',
                            borderRadius: 1,
                            boxShadow: 24,
                            overflow: "hidden",
                            opacity: closeAlertStore.soonCloseGet && 0.8
                        }}
                    >
                        <Container maxWidth={maxWidth} style={{ paddingLeft: 0, paddingRight: 0 }}>
                            {headerTitle &&
                                <Box
                                    //id needed to connect space where from what component can be draggable
                                    id={draggableId}
                                    sx={{
                                        cursor: "grab",
                                        pl: 8, pr: 8, pt: 2, pb: 2,
                                        bgcolor: !closeAlertStore.soonCloseGet ? "primary.light3" : "primary.yellow",
                                        textAlign: "center",
                                        position: "relative"
                                    }}
                                >
                                    <Typography variant="h6">
                                        {headerTitle}
                                    </Typography>
                                    <IconButton onClick={handleCloseClick} sx={{ position: "absolute", right: 10, top: "50%", transform: "translateY(-50%)" }}>
                                        <CloseIcon />
                                    </IconButton>
                                </Box>
                            }
                            {castomHeader && castomHeader}
                            <Box sx={{ width: '100%' }}>
                                {children}
                            </Box>
                            {!hideSave &&
                                <Box sx={{ borderTop: "1px solid", borderColor: "primary.light3" }}>
                                    <Button onClick={handleSaveClick} sx={{ width: "100%" }}>
                                        {saveTitle}
                                    </Button>
                                </Box>
                            }
                        </Container>
                    </Box>
                </Draggable>
            }
        </>
    );
})

export default DragableModal