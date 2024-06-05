import React from 'react';
import { Container, Modal } from "@mui/material";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
    border: 'none',
    borderRadius: 1,
    boxShadow: 24,
    p: 0,
    pl: 0,
    maxHeight: '100%',
    overflowY: 'scroll',
    zIndex: 9999
};

const SimpleModal = ({
    children,
    open,
    onClose,
    maxWidth = 'xs',
}) => {
    return (
        <Modal
            open={open}
            onClose={onClose}
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
        >
            <Container maxWidth={maxWidth} sx={style}>
                {children}
            </Container>
        </Modal>
    );
};

export default SimpleModal;