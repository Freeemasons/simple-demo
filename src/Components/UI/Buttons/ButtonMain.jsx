import React from 'react';
import {
    Button,
    Typography
} from "@mui/material";

const ButtonMain = ({
    id = null,
    title,
    icon,
    fullWidth = false,
    mobileOnlyText,
    mobileOnlyIcon,
    variant = "outlined",
    textVariant = "button",
    disabled,
    onClick,
    sx = {},
    color = "primary"
}) => {

    let buttonSx = sx
    buttonSx.alignItems = "center"
    buttonSx.gap = 1

    function handleClick(e) {
        onClick && onClick(e)
    }

    return (
        <Button
            id={id}
            variant={variant}
            size="small"
            fullWidth={fullWidth}
            sx={buttonSx}
            disabled={disabled}
            onClick={handleClick}
            color={color}
        >
            {title &&
                <Typography
                    variant={textVariant}
                    sx={{
                        display: mobileOnlyIcon ? { xs: "none", md: "inline" } : "inline"
                    }}
                >
                    {title}
                </Typography>
            }
            {icon &&
                <Typography
                    variant={textVariant}
                    sx={{
                        display: mobileOnlyText ? { xs: "none", md: "flex" } : "flex",
                        alignItems: "center"
                    }}
                >
                    {icon}
                </Typography>
            }
        </Button>
    );
};

export default ButtonMain;