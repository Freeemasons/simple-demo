import * as React from "react";
import Popover from "@mui/material/Popover";
import { Button, Typography, Box } from "@mui/material";
import BubbleChartIcon from "@mui/icons-material/BubbleChart";

export default function MouseOverPopover() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  const centerList = [
    { id: "1", centerColor: "primary.blue", centerName: "Сокол" },
    { id: "2", centerColor: "primary.light", centerName: "Покровка" },
  ];

  return (
    <div>
      <Typography
        sx={{ mr: 1 }}
        aria-owns={open ? "mouse-over-popover" : undefined}
        aria-haspopup="true"
        onMouseEnter={handlePopoverOpen}
        onMouseLeave={handlePopoverClose}
      >
        <Button size="small" variant="outlined">
          Подсказка
        </Button>
      </Typography>
      <Popover
        id="mouse-over-popover"
        sx={{
          pointerEvents: "none",
        }}
        open={open}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        onClose={handlePopoverClose}
        disableRestoreFocus
      >
        <Box>
          {centerList.map((center) => (
            <Box
              key={center.id}
              sx={{ display: "flex", p: 1, color: center.centerColor }}
            >
              <BubbleChartIcon />
              <Typography>{center.centerName}</Typography>
            </Box>
          ))}
        </Box>
      </Popover>
    </div>
  );
}
