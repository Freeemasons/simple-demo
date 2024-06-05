import React, { useEffect, useRef } from 'react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import FullCalendar from '@fullcalendar/react';
import { observer } from "mobx-react-lite"
import { useInstance } from "react-ioc"
import TableViewStore from "../stores/table.view-store"
import StoreTableModal from "../stores/storeTableModal"
import styled from "@emotion/styled";
import { Box, Typography } from "@mui/material"
import moment from "moment"
import TodoStore from "../../../stores/todo.store"



const CalendarLayout = styled(Box)(({theme}) => ({


  "& a": {
    border: "unset",
  },

  "& .fc .fc-event-selected .fc-event:focus": {
    boxShadow: "unset",
  },

  "& .fc .fc-daygrid-day-bg .fc-highligh": {
    background: "red"
  },

  "& .fc-highlight": {
    background: "red"
  },

  "& .fc .fc-daygrid-day.fc-day-today": {
    background: "rgba(188, 232, 241, 0.3)",
  },

  "& .fc .fc-col-header-cell-cushion": {
    padding: "0px"
  },

  "& .fc .fc-daygrid-body-natural .fc-daygrid-day-events": {
    marginBottom: "0px",
  },

  "& .fc-daygrid-day-top": {
    maxWidth: "92%",
    height: "20px",
    fontSize: "13px",
    padding: "0"
  },

  "& .fc .fc-day-disabled": {
    background: `${theme.palette.primary.light2}`,
  },

  ".fc-day-other": {
    background: `${theme.palette.primary.light3}`,
    opacity: 0.8
  },

  ".fc-daygrid-day-top": {
    height: "auto",
  },

  [theme.breakpoints.up(1601)]: {
    maxWidth: "1550px"
  },

  [theme.breakpoints.down(1600)]: {
    maxWidth: "1100px"
  },
}));



const TableCalendar = (observer((props) => {

  const {handleClick} = props
  const storeTableModal = useInstance(StoreTableModal)
  const tableStore = useInstance(TableViewStore);
  const todoStore = useInstance(TodoStore);

  const calendarRef = useRef();

  useEffect(() => {
    tableStore.setCalendarRef(calendarRef);
    tableStore.setCalendarToday();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  const dateRender = (e) => {
    const isDateSame = moment(storeTableModal.dateGet).format("YYYY-MM-DD") === moment(e.date).format("YYYY-MM-DD")
    return (
      <Box sx={{
        p: {xs: 0, sm: 0.6},
        borderRadius: 10,
        width: {xs: 20, sm: isDateSame ? 30 : 20},
        height: {xs: 20, sm: isDateSame ? 30 : 20},
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        bgcolor: isDateSame ? "primary.light" : "none",
        color: isDateSame ? "primary.white" : "primary.main",
      }}>
        <Typography variant="subtitle1" sx={{fontSize: {xs: 12, sm: 16}}}>
          {moment(e.date).format("DD")}
        </Typography>
      </Box>
    )
  }

  function renderEventContent(eventInfo) {

    const {title} = eventInfo.event
    const {time, completed} = eventInfo.event.extendedProps

    return (

      <Box
        sx={{
          backgroundColor: completed === false ? "rgb(55, 136, 216)" : "green",
          borderRadius: "2px"
        }}
      >
        <Box
        >
          <Typography sx={{fontSize: "14px", pl: 1}}>
            {title}
          </Typography>
          <Typography sx={{fontSize: "14px", pr: "10px", pl: 1}}>
            {time}
          </Typography>
        </Box>
      </Box>
    );
  }

  const openModal = (date) => {

    if (storeTableModal.openModal) {
      storeTableModal.setOpenConfirmModal(true)
    } else {
      storeTableModal.setDate(date)
      storeTableModal.setOpenTableModal(true)

      handleClick(date)
    }
  }


  return (
    <CalendarLayout>
      <FullCalendar
        ref={calendarRef}
        plugins={[dayGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        // height="auto"
        // width="auto"
        events={todoStore && todoStore.todos}
        dateClick={(e) => {
          openModal(e.date)
        }}
        eventClick={(e) => {
          openModal(e.event._instance.range.start)
        }}
        dayCellContent={dateRender}
        eventContent={renderEventContent}
      />
    </CalendarLayout>
  )

}));

export default TableCalendar;